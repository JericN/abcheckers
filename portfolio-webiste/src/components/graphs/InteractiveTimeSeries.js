import React, { useState, useEffect, useRef } from 'react';
import { motion, motionValue, useAnimationControls, useMotionValue, useTransform } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function groupDates(DatePosted, interval) {
	Date.prototype.addDays = function (days) {
		var date = new Date(this.valueOf());
		date.setDate(date.getDate() + days);
		return date;
	};

	const newDate = DatePosted.map((date) => {
		return new Date(date);
	});

	var min = newDate.reduce(function (a, b) {
		return a < b ? a : b;
	});
	var max = newDate.reduce(function (a, b) {
		return a > b ? a : b;
	});
	max = max.addDays(interval);

	const output = {};
	var itr = min;
	while (itr <= max) {
		newDate.forEach((date, i) => {
			if (date <= itr) {
				if (!output[itr]) {
					output[itr] = [date];
				} else {
					output[itr].push(date);
				}
				delete newDate[i];
			}
		});
		itr = itr.addDays(interval);
	}
	const frequencyData = Object.keys(output).map((key) => {
		const name = new Date(key).toLocaleString('default', { month: 'short', day: 'numeric' });
		return { name: name, value: output[key].length };
	});
	return frequencyData;
}

export default function InteractiveTimeSeries({ title, caption, xLabel }) {
	const [data, setData] = useState(null);
	const [interval, setInterval] = useState(3);
	const sliderRef = useRef(null);
	useEffect(() => {
		setData(groupDates(DatePosted, interval));
	}, [interval]);

	const controls = useAnimationControls();
	const x = useMotionValue(0);
	const offset = useTransform(x, [0, 380], [1, 30]);
	offset.onChange((latest) => {
		setInterval(Math.floor(latest));
	});

	return (
		<div className='responsive-widebox aspect-[2/1] border-4 border-xblack-3 p-5 rounded-3xl flex flex-col items-center'>
			<div className='font-B color-B text-xl font-bold'>{title}</div>
			<div className='w-full h-[300px] mr-10 mt-5'>
				<ResponsiveContainer width='100%' height='100%'>
					<LineChart
						width={500}
						height={300}
						data={data}
						margin={{
							top: 0,
							right: 0,
							left: 0,
							bottom: 10,
						}}
					>
						<CartesianGrid strokeDasharray='3 3' />
						<XAxis dataKey='name' label={{ value: xLabel, position: 'insideBottom', offset: -10 }} />
						<YAxis label={{ value: 'Frequency', angle: -90, position: 'insideLeft', offset: 20 }} />
						<Tooltip />
						<Line type='monotone' dataKey='value' stroke='#8884d8' activeDot={{ r: 8 }} />
					</LineChart>
				</ResponsiveContainer>
			</div>
			<div className='mt-10 font-B text-justify color-B mb-3'>{caption}</div>
			<motion.div ref={sliderRef} className='border-4 border-[#121212] rounded-2xl w-80 h-11'>
				<motion.div
					className='w-10 h-10 -mt-[0.9px] bg-slate-900 rounded-2xl'
					style={{ x }}
					drag='x'
					dragConstraints={sliderRef}
					dragElastic={0}
					dragMomentum={false}
				></motion.div>
			</motion.div>
		</div>
	);
}

const DatePosted = [
	'12/29/22 17:46',
	'12/24/22 21:57',
	'12/12/22 13:03',
	'12/7/22 22:34',
	'12/6/22 21:09',
	'12/3/22 19:08',
	'12/2/22 17:58',
	'11/28/22 23:55',
	'11/12/22 23:42',
	'11/9/22 13:26',
	'11/5/22 23:06',
	'11/5/22 2:16',
	'11/3/22 16:57',
	'11/3/22 16:00',
	'11/3/22 15:35',
	'11/3/22 15:08',
	'11/1/22 21:44',
	'10/31/22 21:49',
	'10/31/22 18:03',
	'10/30/22 17:40',
	'10/30/22 12:34',
	'10/30/22 11:32',
	'10/27/22 15:52',
	'10/27/22 5:08',
	'10/25/22 0:04',
	'10/24/22 11:44',
	'10/24/22 10:10',
	'10/22/22 23:29',
	'10/22/22 22:12',
	'10/22/22 13:53',
	'10/21/22 8:36',
	'10/20/22 22:30',
	'10/20/22 21:16',
	'10/20/22 15:55',
	'10/20/22 15:00',
	'10/20/22 12:43',
	'10/20/22 1:04',
	'10/19/22 23:04',
	'10/19/22 13:53',
	'10/19/22 11:05',
	'10/18/22 21:59',
	'10/18/22 19:03',
	'10/18/22 8:30',
	'10/17/22 20:51',
	'10/17/22 20:23',
	'10/17/22 19:13',
	'10/17/22 10:31',
	'10/16/22 22:03',
	'10/16/22 15:01',
	'10/16/22 12:41',
	'10/16/22 12:09',
	'10/16/22 7:43',
	'10/15/22 22:29',
	'10/15/22 19:49',
	'10/15/22 19:24',
	'10/15/22 11:37',
	'10/15/22 1:01',
	'10/15/22 1:00',
	'10/15/22 0:28',
	'10/14/22 23:52',
	'10/14/22 22:27',
	'10/14/22 20:43',
	'10/14/22 19:25',
	'10/14/22 19:03',
	'10/14/22 18:59',
	'10/14/22 14:08',
	'10/14/22 13:41',
	'10/14/22 7:03',
	'10/13/22 22:11',
	'10/13/22 21:09',
	'10/13/22 20:50',
	'10/13/22 19:26',
	'10/13/22 18:08',
	'10/13/22 18:04',
	'10/13/22 17:32',
	'10/13/22 17:21',
	'10/13/22 17:09',
	'10/13/22 16:29',
	'10/13/22 9:29',
	'10/13/22 7:28',
	'10/13/22 4:57',
	'10/13/22 2:09',
	'10/13/22 0:35',
	'10/13/22 0:07',
	'10/12/22 21:58',
	'10/12/22 20:36',
	'10/12/22 14:57',
	'10/12/22 12:50',
	'10/11/22 17:36',
	'10/12/22 19:17',
	'10/12/22 17:43',
	'10/12/22 16:36',
	'10/12/22 12:54',
	'10/12/22 11:42',
	'10/12/22 11:13',
	'10/12/22 10:25',
	'10/12/22 10:16',
	'10/12/22 10:01',
	'10/12/22 9:49',
	'10/12/22 7:09',
	'10/12/22 21:57',
	'10/12/22 21:56',
	'10/12/22 12:25',
	'10/12/22 10:28',
	'10/12/22 9:57',
	'10/12/22 9:54',
	'10/12/22 9:17',
	'10/12/22 9:13',
	'10/12/22 9:10',
	'10/12/22 8:32',
	'10/12/22 8:18',
	'10/12/22 8:07',
	'10/12/22 7:44',
	'10/12/22 6:57',
	'10/12/22 6:04',
	'10/12/22 4:28',
	'10/12/22 4:13',
	'10/12/22 2:55',
	'10/12/22 2:25',
	'10/12/22 2:04',
	'10/12/22 1:47',
	'10/12/22 1:33',
	'10/12/22 1:04',
	'10/12/22 1:00',
	'10/12/22 0:53',
	'10/12/22 0:21',
	'10/12/22 0:06',
	'10/11/22 23:59',
	'10/11/22 23:46',
	'10/11/22 23:18',
	'10/11/22 23:06',
	'10/11/22 22:38',
	'10/11/22 22:33',
	'10/11/22 22:26',
	'10/11/22 22:14',
	'10/11/22 21:40',
	'10/11/22 21:17',
	'10/11/22 20:46',
	'10/11/22 20:36',
	'10/11/22 20:36',
	'10/11/22 20:03',
	'10/11/22 19:31',
	'10/11/22 19:16',
	'10/11/22 18:57',
	'10/11/22 17:29',
	'10/11/22 16:52',
	'10/16/22 7:43',
	'10/15/22 11:56',
	'10/14/22 15:57',
	'10/12/22 10:56',
];

import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function BarChartGraph({ addClass, height, scale, data, title, caption, xLabel, yLabel }) {
	return (
		<div className={'responsive-widebox border-4 border-xblack-3 p-5 rounded-3xl flex flex-col items-center ' + addClass}>
			<div className='font-B color-B text-xl font-bold'>{title}</div>
			<div className={'w-full mr-10 mt-5 ' + height}>
				<ResponsiveContainer>
					<BarChart
						data={data}
						margin={{
							top: 0,
							right: 0,
							left: 0,
							bottom: 10,
						}}
					>
						<CartesianGrid />
						<XAxis dataKey='name' scale={scale} label={{ value: xLabel, position: 'bottom', offset: -5 }} />
						<YAxis label={{ value: yLabel, angle: -90, position: 'left', offset: -20 }} />
						<Tooltip />
						<Bar dataKey='value' fill='#121212' barSize={50} />
					</BarChart>
				</ResponsiveContainer>
			</div>
			<div className='mt-5 font-B text-justify color-B mx-3'>{caption}</div>
		</div>
	);
}

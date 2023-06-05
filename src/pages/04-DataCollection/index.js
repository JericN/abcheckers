import React, { useState, useEffect, useRef } from 'react';

import { motion, useAnimate, AnimatePresence, useAnimationControls, useInView, delay } from 'framer-motion';

import Template from './Template';
import Button from '../../components/Button';

export default function DataCollection() {
	const [datacolRef, animateDatacol] = useAnimate();

	const titleInView = useInView(datacolRef, { margin: '-30% 0px -40% 0px' });

	useEffect(() => {
		const header = datacolRef.current.childNodes[0];
		const cards = datacolRef.current.childNodes[1].childNodes;
		const data = datacolRef.current.childNodes[2].childNodes;

		if (titleInView) {
			animateDatacol(header, { opacity: 1, x: 0 });
			cards.forEach(async (card, index) => {
				animateDatacol(card, { opacity: 1, x: 0 }, { delay: 0.3 + index * 0.1 });
			});
			animateDatacol(data[0], { opacity: 1, y: 0 }, { delay: 1.3 });
			animateDatacol(data[1], { opacity: 1, y: 0 }, { delay: 1.8 });
		} else {
			animateDatacol(header, { opacity: 0, x: -200 });
			cards.forEach((card) => {
				animateDatacol(card, { opacity: 0, x: -200 });
			});
			animateDatacol(data[0], { opacity: 0, y: -200 });
			animateDatacol(data[1], { opacity: 0, y: -200 });
		}
	}, [titleInView]);

	const [cardFlipped, setCardFlipped] = useState([false, false, false, false]);

	return (
		<section ref={datacolRef} className='responsive-section flex flex-col items-center text-xblack gap-10'>
			{/* HEADER */}
			<div id='header' className='center-column border-8 border-xblack-3 rounded-2xl p-6 px-10 gap-4'>
				<motion.div className='responsive-text-lg font-A font-bold select-none'>{header.title}</motion.div>
				<motion.div className='responsive-text-sm font-B text-justify max-w-6xl select-none'>{header.desc}</motion.div>
			</div>

			{/* CARDS */}
			<div className='w-[24rem] sm:w-[40rem] lg:w-[48rem] 2k:w-[60rem] flex flex-col gap-4 mb-20'>
				{content.map((content, i) => {
					return <Template index={i} content={content} cardFlipped={cardFlipped} setCardFlipped={setCardFlipped} animateDatacol={animateDatacol} />;
				})}
			</div>

			<motion.div className='center-column font-B gap-10 max-w-5xl select-none'>
				<motion.div className='responsive-text-md font-medium'>We collected 150 data points to be used for exploration.</motion.div>
				<Button
					label={data.title}
					onClick={() => {
						window.open(data.link, '_blank');
					}}
				/>
			</motion.div>
		</section>
	);
}

const header = {
	title: 'How did we collect our data?',
	desc: "Our target are tweets that responded to Sandro Marcos' statement regarding his reasoning why the Philippines is experiencing hurdles in its economic stability. The search scope is from the day of his statement on October 11 until the last day of the year 2022.",
};

const content = [
	{
		title: 'Scrapping the Twitter',
		desc: 'First, we used the snscrapper python library to collect tweets using the keywords "peso", "weak", "dollar", "strong", and "sandro".',
	},
	{
		title: 'Tweet Curation',
		desc: "Next, we've sorted out tweets that are relevant to our topic and correctly formatted each column to our desired schema, such as date format.",
	},
	{
		title: 'Manual Labeling',
		desc: 'Then, we manually labeled the columns Account Type, Tweet Type, Content Type and Rating.',
	},
	{
		title: 'Data Review',
		desc: "Finally, the data we've collected were peer-reviewed by our classmates to ensure the quality of our data",
	},
];

const data = {
	title: 'Check our data',
	link: 'https://raw.githubusercontent.com/JericNarte/cs132-data/master/public_dataset.csv',
};

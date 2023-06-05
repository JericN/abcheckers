import React, { useState, useEffect, useRef } from 'react';

import { motion, useAnimate, AnimatePresence, useAnimationControls, useInView, delay } from 'framer-motion';

import Template from './Template';

const waitFor = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function DataCollection() {
	const [titleRef, animateTitle] = useAnimate();
	const [dataRef, animateData] = useAnimate();

	const titleInView = useInView(titleRef, { margin: '-30% 0px -40% 0px' });
	const dataInView = useInView(dataRef, { margin: '-30% 0px 0% 0px' });

	async function startAnimation() {
		animateTitle('.class-container', { opacity: 1, y: 0 });
		animateTitle('.class-title', { opacity: 1, y: 0 });
		animateTitle('.class-desc', { opacity: 1, y: 0 }, { delay: 0.3 });
		const cards = titleRef.current.querySelector('.class-cards').childNodes;
		cards.forEach(async (card, index) => {
			animateTitle(card, { opacity: 1, x: 0 }, { delay: 0.5 + index * 0.1 });
		});
		animateData('div', { opacity: 1, y: 0 }, { delay: 1 });
	}

	async function endAnimation() {
		animateTitle('.class-container', { opacity: 0, y: 200 });
		animateTitle('.class-title', { opacity: 0, y: 200 });
		animateTitle('.class-desc', { opacity: 0, y: 200 });
		const cards = titleRef.current.querySelector('.class-cards').childNodes;
		cards.forEach((card, index) => {
			animateTitle(card, { opacity: 0, x: -200 });
		});
		animateData('div', { opacity: 0, y: -200 });
	}

	useEffect(() => {
		if (titleInView) {
			startAnimation();
		} else {
			endAnimation();
		}
	}, [titleInView]);

	const [cardFlipped, setCardFlipped] = useState([false, false, false, false]);
	const [cardsRef, animateCards] = useAnimate();

	async function openCard(el) {
		animateCards(el.target, { background: '#F0F0F0', scale: 1.01 }, { type: 'tween', duration: 0.2, ease: 'easeIn' });
		setCardFlipped((cardFlipped) => ((cardFlipped[el.target.id[4]] = true), [...cardFlipped]));
	}

	async function closeCard(el) {
		const obj = el.target;
		const id = el.target.id[4];
		await waitFor(100);

		animateCards(obj, { background: '#2F2F2F', scale: 1 }, { type: 'tween', duration: 0.2, ease: 'easeIn' });
		setCardFlipped((cardFlipped) => ((cardFlipped[id] = false), [...cardFlipped]));
	}

	return (
		<section ref={titleRef} className='responsive-section center-column text-xblack gap-80'>
			<div className='center-column border-8 border-xblack-3 rounded-2xl p-6 px-10 gap-4'>
				<motion.div className='responsive-text-lg font-A font-bold select-none'>{header.title}</motion.div>
				<motion.div className='responsive-text-sm font-B text-justify max-w-6xl select-none'>{header.desc}</motion.div>
			</div>

			<div ref={cardsRef} className='class-cards flex flex-col gap-5'>
				{content.map((content, i) => {
					return <Template index={i} content={content} cardFlipped={cardFlipped} openCard={openCard} closeCard={closeCard} />;
				})}
			</div>

			<motion.div ref={dataRef} className='font-B mt-20 flex flex-col items-center gap-10 max-w-5xl select-none'>
				<motion.div className='font-medium text-3xl'>We collected 150 data points to be used for exploration.</motion.div>
				<motion.div
					className='flex justify-center font-bold text-lg border-4 rounded-2xl border-xblack-3 p-2 px-10'
					initial={{ background: '#F0F0F0' }}
					whileHover={{
						scale: 1.07,
						background: '#2F2F2F',
						color: '#F0F0F0',
					}}
					whileTap={{ scale: 0.9 }}
					onClick={() => {
						window.open('https://raw.githubusercontent.com/JericNarte/cs132-data/master/public_dataset.csv', '_blank');
					}}
				>
					See our Data
				</motion.div>
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

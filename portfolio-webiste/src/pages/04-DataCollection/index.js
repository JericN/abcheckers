import React, { useState, useEffect, useRef } from 'react';

import { motion, useAnimate, AnimatePresence, useAnimationControls, useInView, delay } from 'framer-motion';

import BoxBlack from './BoxBlack';
import BoxWhite from './BoxWhite';
import StructTable from './StructTable';
import Button from '../../components/Button';

export default function DataCollection() {
	const [datacolRef, animateDatacol] = useAnimate();
	const [datastructRef, animateDatastruct] = useAnimate();

	const titleInView = useInView(datacolRef, { margin: '-30% 0px -40% 0px' });
	const structInView = useInView(datastructRef, { margin: '-30% 0px -40% 0px' });

	useEffect(() => {
		const title = datacolRef.current.childNodes[0];
		const cards = datacolRef.current.childNodes[1].childNodes;

		if (titleInView) {
			animateDatacol(title, { opacity: 1, x: 0 });
			cards.forEach(async (card, index) => {
				animateDatacol(card, { opacity: 1, x: 0 }, { delay: 0.3 + index * 0.1 });
			});
		} else {
			animateDatacol(title, { opacity: 0, x: -200 });
			cards.forEach((card) => {
				animateDatacol(card, { opacity: 0, x: -200 });
			});
		}
	}, [titleInView]);

	useEffect(() => {
		const struct = datastructRef.current.childNodes;

		if (structInView) {
			for (let i = 0; i < struct.length; i++) {
				animateDatastruct(struct[i], { opacity: 1, x: 0 }, { delay: i * 0.2 });
			}
		} else {
			for (let i = 0; i < struct.length; i++) {
				animateDatastruct(struct[i], { opacity: 0, x: -200 });
			}
		}
	}, [structInView]);

	const [cardFlipped, setCardFlipped] = useState([false, false, false, false]);

	return (
		<section className='responsive-section flex flex-col items-center text-xblack gap-32'>
			{/* HOW DATA COLLECTED */}
			<div ref={datacolRef} className='center-column gap-10'>
				<BoxWhite content={title} />
				<div className='center-column gap-4'>
					{content.map((content, i) => {
						return (
							<BoxBlack
								key={i}
								index={i}
								content={content}
								cardFlipped={cardFlipped}
								setCardFlipped={setCardFlipped}
								animateDatacol={animateDatacol}
							/>
						);
					})}
				</div>
			</div>

			{/* STRUCTURE OF DATA */}
			<div ref={datastructRef} className='font-B center-column gap-10'>
				<BoxWhite content={struct} />
				<StructTable />
				<motion.div className='responsive-text-md font-medium mt-10'>{data.desc}</motion.div>
				<Button
					label={data.title}
					onClick={() => {
						window.open(data.link, '_blank');
					}}
				/>
			</div>
		</section>
	);
}

const title = {
	title: 'How did we collect our data?',
	desc: "Our target are tweets that responded to Sandro Marcos' statement regarding his reasoning why the Philippines is experiencing hurdles in its economic stability. The search scope is from the day of his statement on October 11 until the last day of the year 2022.",
};

const struct = {
	title: 'The Structure of Data',
	desc: 'The dataset we collected contains structured data of multiple rows and columns. Each row represents a single tweet and each column represents a characteristic of a tweet. A sample data is shown below: ',
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
	desc: 'We collected 150 data points to be used for exploration.',
	title: 'Check our data',
	link: 'https://raw.githubusercontent.com/JericN/abcheckers/main/datasets/public_dataset.csv',
};

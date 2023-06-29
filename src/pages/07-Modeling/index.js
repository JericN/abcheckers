import React, { useState, useEffect, useRef } from 'react';

import { motion, useAnimate, AnimatePresence, useAnimationControls, useInView, delay } from 'framer-motion';

import BoxWhite from './BoxWhite';
import Button from '../../components/Button';
import modelTable from '../../images/model_table.png';
export default function Modeling() {
	const css_title = 'text-2xl font-bold text-center font-A sm:text-5xl mt-10';
	const css_title_sub = 'text-md text-justify font-A sm:text-xl px-16';

	return (
		<section className='responsive-section flex flex-col items-center text-xblack gap-8'>
			<div className='responsive-text-3xl center-column text-center w-full py-10 font-bold font-B border-8 border-xblack-3 rounded-2xl'>
				DATA MODELING
			</div>
			<BoxWhite content={structA} />
			<BoxWhite content={structB} />
			<h2 className={css_title}>Here's our result</h2>
			<img className='px-16' src={modelTable} alt='' />
			<Button
				label={modelCode.title}
				onClick={() => {
					window.open(modelCode.link, '_blank');
				}}
			/>
			<BoxWhite content={title} />
		</section>
	);
}

const modelCode = {
	title: 'Check our Code',
	link: 'https://colab.research.google.com/drive/1oon27jd7hgl2NebDX36J3Ay-p-qKaQ3N?usp=sharing',
};

const title = {
	title: '',
	desc: "The results of the model show that it demonstrates good accuracy in classifying the tweets as either supportive, impartial, or opposing towards Marcos' statement. However, it is important to note that the model is not flawless and can still benefit from additional training in the future.",
};

const structA = {
	title: '',
	desc: "To determine the sentiments of the misinformation tweets, we modeled the data with sentiment classification using Support Vector classifier with parameters kernel='poly', degree=2, and gamma=2.",
};
const structB = {
	title: '',
	desc: 'We trained and tested our model using a dataset comprising more than 200 tweets. Each tweet was assigned a categorical value of "support" (1),"neutral" (0), or "oppose" (-1) to indicate the sentiment classification. We also split this dataset using the stratify split method with 15% of the dataset used for testing.',
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
	link: 'https://raw.githubusercontent.com/JericNarte/cs132-data/master/public_dataset.csv',
};

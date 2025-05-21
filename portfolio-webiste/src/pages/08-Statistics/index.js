import React, { useState, useEffect, useRef } from 'react';

import { motion, useAnimate, AnimatePresence, useAnimationControls, useInView, delay } from 'framer-motion';

import BoxWhite from './BoxWhite';
import Button from '../../components/Button';
import userSentiment from '../../images/user_sentiment.png';
import BarChartGraph from '../../components/graphs/BarChartGraph';

export default function Statistics() {
	const tweetTypeData = [
		{ name: 'Oppose', value: 33 },
		{ name: 'Neutral', value: 49 },
		{ name: 'Support', value: 68 },
	];

	const css_title_sub = 'text-xl font-bold text-center font-A sm:text-3xl mb-20';
	const css_title = 'text-2xl font-bold text-center font-A sm:text-5xl mt-10';
	return (
		<section className='responsive-section flex flex-col items-center text-xblack gap-10'>
			<div className='responsive-text-3xl center-column text-center w-full py-10 font-bold font-B border-8 border-xblack-3 rounded-2xl'>
				STATISTICAL ANALYSIS
			</div>
			<BoxWhite content={introduction} />
			<BoxWhite content={introductionB} />
			<h2 className={css_title}>How did people react?</h2>
			<BarChartGraph
				addClass={'max-w-xl aspect-[3/2]'}
				height={'h-[300px]'}
				scale={'auto'}
				data={tweetTypeData}
				title={'Tweet Type Distribution'}
				caption={''}
				xLabel={'Sentiment'}
				yLabel={'Frequency'}
			/>
			<BoxWhite content={conclusion} />
		</section>
	);
}

const introduction = {
	title: '',
	desc: 'In our statistical hypothesis test, the null hypothesis aimed to see if the mis/disinformation tweets regarding Sandro Marcos’ statement do not significantly differ on whether the individuals support or oppose his statement. Both the predictor variable, tweet content, and the outcome variable, tweet classification (positive, neutral, or negative), were categorical in this study. Therefore, we employed a non-parametric test, specifically the chi-squared goodness of fit test, to determine whether we could reject or accept our null hypothesis.',
};

const introductionB = {
	title: '',
	desc: 'We decided to use this test because the nature of our data and hypothesis adhere to the assumptions of the test, namely: (1) the observations must be independent of each other, (2) there must be enough sample size for each category (column), (3) random sampling must be employed, and (4) the data must be categorical.',
};
const conclusion = {
	title: 'A p-value of 0.00215',
	desc: 'For the test, we utilized two degrees of freedom since we had three rows and two columns. The resulting chi-square statistic, χ^2, was calculated as 12.280 with a corresponding p-value of 0.00215. To establish a confidence level of 99%, we set an alpha value of 0.01. As our p-value was less than 0.01, we rejected the null hypothesis, indicating a significant difference in the distribution of supportive, impartial, and opposing tweets. Based on the findings from the user sentiment distribution, it is evident that the majority of tweets supported the statement.',
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
	link: 'https://raw.githubusercontent.com/JericNarte/cs132-data/master/public_dataset.csv',
};

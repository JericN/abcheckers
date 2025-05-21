import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation, useAnimationControls, useTransform, useMotionValue, useInView, useScroll, useAnimate } from 'framer-motion';

import Title from './Title';
import CLNWhiteCards from './CLNWhiteCard';
import CLNWhiteCard2 from './CLNWhiteCard2';
import NLPWhiteCards from './NLPWhiteCard';
import Button from '../../components/Button';

export default function Data() {
	const [titleRef, titleAnimation] = useAnimate();
	const [clnRef, clnAnimation] = useAnimate();
	const [nlpRef, nlpAnimation] = useAnimate();

	const inViewTitle = useInView(titleRef, {
		margin: '-20% 0px -20% 0px',
	});
	const inViewCLN = useInView(clnRef, {
		margin: '-20% 0px -20% 0px',
	});
	const inViewNLP = useInView(nlpRef, { margin: '-20% 0px -20% 0px' });

	useEffect(() => {
		if (inViewTitle) {
			titleAnimation(titleRef.current, { opacity: 1, x: 0 });
		} else {
			titleAnimation(titleRef.current, { opacity: 0, x: -200 });
		}
	}, [inViewTitle]);

	useEffect(() => {
		const nodes = clnRef.current.childNodes;
		if (inViewCLN) {
			for (let i = 0; i < nodes.length; i++) {
				clnAnimation(nodes[i], { opacity: 1, x: 0 }, { delay: i * 0.1 });
			}
		} else {
			for (let i = 0; i < nodes.length; i++) {
				clnAnimation(nodes[i], { opacity: 0, x: -200 });
			}
		}
	}, [inViewCLN]);

	useEffect(() => {
		const nodes = nlpRef.current.childNodes;
		if (inViewNLP) {
			for (let i = 0; i < nodes.length; i++) {
				nlpAnimation(nodes[i], { opacity: 1, x: 0 }, { delay: i * 0.1 });
			}
		} else {
			for (let i = 0; i < nodes.length; i++) {
				nlpAnimation(nodes[i], { opacity: 0, x: -200 });
			}
		}
	}, [inViewNLP]);

	return (
		<section className='responsive-section center-column gap-10 font-B'>
			<div
				ref={titleRef}
				className='responsive-text-8xl center-column text-center w-full py-10 mb-36 font-bold font-B border-8 border-xblack-3 rounded-2xl'
			>
				DATA EXPLORATION
			</div>

			{/* DATA CLEANING */}
			<div ref={clnRef} className='center-column gap-4 w-full'>
				<div className='responsive-text-3xl font-bold text-center px-4 pb-2 border-b-[6px] border-xblack'>HOW WE PREPROCESED OUR DATA</div>
				<Title content={CLNTitle} />
				{CLNContent.map((item, index) => {
					return <CLNWhiteCards key={index} content={item} />;
				})}
				<CLNWhiteCard2 content={CLNContent2} />
			</div>

			{/* NLP PROCESSING */}
			<div ref={nlpRef} className='center-column gap-4 w-full mt-40'>
				<Title content={NLPTitle} />
				{NLPContent.map((content, index) => {
					return <NLPWhiteCards key={index} content={content} />;
				})}
				<Button
					label={code.label}
					onClick={() => {
						window.open(code.link, '_blank');
					}}
				/>
			</div>
		</section>
	);
}

const CLNTitle = {
	title: 'Cleaning our dataset',
	desc: 'Data preprocessing is essential in data science modeling as it improves data quality by addressing missing values, outliers, and errors. It enables feature engineering and transformation, making the data suitable for modeling. By normalizing, scaling, and handling categorical variables, preprocessing enhances the performance and reliability of machine learning models.',
};

const CLNContent = [
	{
		title: 'Handling missing values',
		desc: 'Only two columns contained missing values:',
		list: ['For the Account Bio column, we replaced them with empty strings.', 'For the Location column, we replaced them with “Unidentified”'],
	},
	{
		title: 'Handling outliers',
		desc: 'We decided to find the outliers using both Z-score and Tukey’s Fences. We used the latter for heavily skewed dataset since a potential problem of using Z-score is that the outliers may increase the standard deviation of the sample size. However, we’re not going to remove these outliers as it may provide rich context to our study.',
		list: [],
	},
	{
		title: 'Ensuring formatting consistency',
		desc: 'For the following categories, we decided to format the data:',
		list: [
			'Joined and Date Posted are parsed to ISO8601 format string.',
			'Location is categorized into three types: "Local", "International", and "Unidentified"',
			'Tweet is translated to English.',
		],
	},
];
const CLNContent2 = {
	title: 'Categorical data encoding',
	desc: 'To make data processing easier, we decided to encode the following categorical data:',
	desc2: 'Another change we implemented is transforming Tweet Type and Content Type into numerical data. For example, a tweet that has text and image and labeled as rational and transactional is presented as 110000 and 101.',
};

const NLPTitle = {
	title: 'Natural Language Processing',
	desc: 'Natural Language Processing (NLP) is a branch of artificial intelligence that enables computers to understand, interpret, and manipulate human language. It is a field of study that combines computer science, linguistics, and artificial intelligence to enable computers to understand human language and derive meaning from it. NLP is used in a variety of applications, including machine translation, speech recognition, and sentiment analysis.',
};
const NLPContent = [
	{
		title: 'Preprocessing',
		desc: 'Before tokenizing, we decided to convert the tweets to lower case to ensure uniformity and avoid duplication of words due to capitalization. Also, we desire the context provided by emoji so instead of removing, we opted to transform them to their descriptive word. Finally, punctuation marks, and URLs were also removed to streamline the data and prepare it for further analysis.',
	},
	{
		title: 'Stop Words Removal',
		desc: 'Next we remove the stop words first (e.g. is, are, the) to eliminate noise and focus on the more relevant content. For this, we imported the English stop words from the Natural Language Toolkit (NLTK) library and removed the stop words from each processed tweet in the dataset.',
	},
	{
		title: 'Tokenization',
		desc: 'In order to tokenize the tweets, we opted to utilize the TweetTokenizer module provided by the NLTK library. By employing this tool on our preprocessed tweets, we were able to effectively break them down into individual tokens, facilitating further analysis and processing.',
	},
	{
		title: 'Stemming and Lemmatization',
		desc: 'The SnowballStemmer from the NLTK library was used for stemming the tweets, and WordNetLemmatizer from the same library was used for lemmatization. Please note that stemming may cause the word to be incorrect (e.g., studies may turn into studi). Lemmatization, on the other hand, reduces the word to its base form correctly (e.g., programming becomes program), but it may not work on all the words (e.g., programmer may stay as programmer rather than transform into program).',
	},
];

const code = {
	label: 'Check our code!',
	link: 'https://colab.research.google.com/drive/19dMbffOElGYK9K-7W2CJzRtiOjbXZ02S?usp=sharing',
};

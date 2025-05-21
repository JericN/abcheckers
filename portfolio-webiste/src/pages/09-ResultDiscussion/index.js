import React, { useState, useEffect, useRef } from 'react';

import { motion, useAnimate, AnimatePresence, useAnimationControls, useInView, delay } from 'framer-motion';

import BoxWhite from './BoxWhite';
import Button from '../../components/Button';

export default function ResultDiscussion() {
	const css_title = 'text-2xl font-bold text-center font-A sm:text-5xl mb-10';
	const css_title_sub = 'text-xl font-bold text-center font-A sm:text-3xl mb-20';

	return (
		<section className='responsive-section flex flex-col items-center text-xblack gap-10'>
			<div className='responsive-text-3xl center-column text-center w-full py-10 font-bold font-B border-8 border-xblack-3 rounded-2xl'>
				RESULTS AND DISCUSSION
			</div>
			<BoxWhite content={title} />
			<BoxWhite content={titleB} />
			<BoxWhite content={conclusion} />
		</section>
	);
}

const modelCode = {
	title: 'Check our Code',
	link: '',
};

const title = {
	title: 'What did we find out?',
	desc: 'The data strongly indicates a prevailing sentiment on Twitter that supports Sandro Marcos and his statement regarding the weakened peso in light of the strong dollar. This finding aligns with his statement and suggests that a significant portion of the online community shares his perspective. This sentiment may be attributed to various factors, such as the credibility or influence of Sandro Marcos, the clarity of his statement, or the economic context surrounding the issue.',
};

const titleB = {
	title: '',
	desc: 'Furthermore, an interesting insight from our data analysis reveals that a significant proportion of the Twitter accounts expressing support for Sandro Marcos were created between 2020 and 2022. It is important to note that this is prior to the 2022 national elections, where more and more misinformation tweets about the Marcoses from Marcos supporters were being spread around. Thus, we can consider that there is some sort of relationship between these accounts and being a Marcos supporter.',
};

const conclusion = {
	title: 'We must be vigilant ',
	desc: "In today's digital age, the responsible use of social media necessitates careful consideration of our statements. As individuals engaging in online discourse, our duty extends beyond mere fact-checking; we must also strive to provide accurate and comprehensive information. It is crucial to avoid the pitfalls of cherry-picking and oversimplification, which can perpetuate the dissemination of misinformation. By adhering to these principles, we can actively contribute to fostering a climate of truth and well-informed discussions in the realm of social media.",
};

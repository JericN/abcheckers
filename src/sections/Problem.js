import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { motion, useAnimationControls, useInView } from 'framer-motion';

export default function Problem({ problemRef, animateProblem }) {
	const css_block = 'w-80 aspect-square flex flex-col items-center gap-6 p-10 pb-0';
	const css_label = 'font-A font-bold text-xl sm:text-2xl border-b-4';
	const css_desc = 'font-B text-sm sm:text-md text-center';

	const endDragHandler = (event, info) => {
		const nodes = problemRef.current.childNodes[1].childNodes;
		animateProblem(nodes[0], { opacity: 1, x: 0, y: 0 });
		animateProblem(nodes[1], { opacity: 1, y: 0, x: 0 });
		animateProblem(nodes[2], { opacity: 1, y: 0, x: 0 });
		animateProblem(nodes[3], { opacity: 1, x: 0, y: 0 });
	};

	// Enter and Exit Animation
	const isInView = useInView(problemRef, {
		margin: '-50% 0px -40% 0px',
	});

	useEffect(() => {
		const title = problemRef.current.childNodes[0];
		const nodes = problemRef.current.childNodes[1].childNodes;
		if (isInView) {
			animateProblem(title, { opacity: 1, y: 0 });
			animateProblem(nodes[0], { opacity: 1, x: 0, y: 0 }, { delay: 0.3 });
			animateProblem(nodes[1], { opacity: 1, y: 0, x: 0 }, { delay: 0.4 });
			animateProblem(nodes[2], { opacity: 1, y: 0, x: 0 }, { delay: 0.5 });
			animateProblem(nodes[3], { opacity: 1, x: 0, y: 0 }, { delay: 0.6 });
		} else {
			animateProblem(title, { opacity: 0, y: -100 });
			animateProblem(nodes[0], { opacity: 0, x: -100, y: 0 });
			animateProblem(nodes[1], { opacity: 0, x: 0, y: -100 });
			animateProblem(nodes[2], { opacity: 0, x: 0, y: 100 });
			animateProblem(nodes[3], { opacity: 0, x: 100, y: 0 });
		}
	}, [isInView]);

	return (
		<section ref={problemRef} className='responsive-section center-column text-xwhite'>
			<motion.h2
				className='font-A font-bold text-5xl sm:text-7xl text-center mb-16 border-b-4'
				drag
				dragSnapToOrigin='true'
				dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
				onDragEnd={endDragHandler}
			>
				WHAT ARE WE LOOKING FOR?
			</motion.h2>

			<div className='grid lg:grid-cols-2'>
				{content.map((item) => {
					return (
						<motion.div
							className={css_block + item.blockCSS}
							whileHover={{
								scale: 0.95,
								transition: {
									duration: 0.2,
								},
							}}
							drag
						>
							<h3 className={css_label + item.labelCSS}>{item.label}</h3>
							<p className={css_desc + item.descCSS}>{item.description}</p>
						</motion.div>
					);
				})}
			</div>
		</section>
	);
}

const content = [
	{
		label: 'RESEARCH QUESTION',
		description:
			'Do mis/disinformation tweets that attribute inflation and the weakening peso solely to foreign factors, which lack context, gain more engagement than those that state that it is only ONE of the factors.',
		blockCSS: ' bg-xwhite text-xblack',
		labelCSS: ' border-b-xblack-1',
		descCSS: ' font-bold',
	},
	{
		label: 'HYPOTHESIS',
		description:
			'Tweets that contain the mis/disinformation (which lack context) stated in the research question have significantly more engagement than those that do not contain mis/disinformation or has the proper context.',
		blockCSS: ' bg-xblack-1 text-xwhite',
		labelCSS: ' border-b-xwhite',
		descCSS: '',
	},
	{
		label: '∅ HYPOTHESIS',
		description:
			'There is no signifiant difference between the engagement of the tweets with the mis/disinformation that lacks context and the tweets that do not contain mis/disinformation or also has the proper context.',
		blockCSS: ' bg-xwhite text-xblack lg:bg-xblack-1 lg:text-xwhite',
		labelCSS: ' border-b-xblack-1 lg:border-b-xwhite',
		descCSS: ' font-bold',
	},
	{
		label: 'ACTION PLAN',
		description:
			'Analyze the frequency of likes and retweets of tweets regarding the Philippines’ inflation and peso (both mis/disinformation and non-mis/disinformation).',
		blockCSS: ' bg-xblack-1 text-xwhite lg:bg-xwhite lg:text-xblack',
		labelCSS: ' border-b-xwhite lg:border-b-xblack-1',
		descCSS: ' font-bold',
	},
];

import { useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

import Template from './Template';

export default function Problem({ problemRef, animateProblem }) {
	const endDragHandler = () => {
		const nodes = problemRef.current.childNodes[1].childNodes;

		for (let i = 0; i < nodes.length; i++) {
			animateProblem(nodes[i], { opacity: 1, x: 0, y: 0 }, { delay: i * 0.1 });
		}
	};

	// Enter and Exit Animation
	const isInView = useInView(problemRef, {
		margin: '-50% 0px -40% 0px',
	});

	useEffect(() => {
		const title = problemRef.current.childNodes[0];
		const nodes = problemRef.current.childNodes[1].childNodes;
		if (isInView) {
			animateProblem(title, { opacity: 1, x: 0 });
			for (let i = 0; i < nodes.length; i++) {
				animateProblem(nodes[i], { opacity: 1, x: 0, y: 0 }, { delay: 0.3 + i * 0.1 });
			}
		} else {
			animateProblem(title, { opacity: 0, x: -100 });
			animateProblem(nodes[0], { opacity: 0, x: -100, y: 0 });
			animateProblem(nodes[1], { opacity: 0, x: 0, y: -100 });
			animateProblem(nodes[2], { opacity: 0, x: 0, y: 100 });
			animateProblem(nodes[3], { opacity: 0, x: 100, y: 0 });
		}
	}, [isInView]);

	return (
		<section ref={problemRef} className='responsive-section center-column text-xwhite'>
			<motion.h2
				className='responsive-text-2xl font-A font-bold text-center mb-16 border-b-4'
				drag
				dragSnapToOrigin='true'
				dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
				onDragEnd={endDragHandler}
			>
				WHAT ARE WE LOOKING?
			</motion.h2>

			<div className='grid lg:grid-cols-2'>
				{content.map((item, i) => {
					return <Template key={i} item={item} />;
				})}
			</div>
		</section>
	);
}

const content = [
	{
		label: 'RESEARCH QUESTION',
		description:
			'Were the mis/disinformation tweets about Sandro Marcos, attributing the weakening peso solely to foreign factors, mostly from those who support or oppose his statement?',
		blockCSS: ' bg-xwhite text-xblack',
		labelCSS: ' border-b-xblack-1',
		descCSS: ' font-bold',
	},
	{
		label: 'HYPOTHESIS',
		description:
			'The mis/disinformation tweets about Sandro Marcos, attributing the weakening peso solely to foreign factors, are mostly from those who support his statement.',
		blockCSS: ' bg-xblack-1 text-xwhite',
		labelCSS: ' border-b-xwhite',
		descCSS: '',
	},
	{
		label: '∅ HYPOTHESIS',
		description:
			'The mis/disinformation tweets about Sandro Marcos, attributing the weakening peso solely to foreign factors, do not significantly differ whether the individuals support or oppose his statement.',
		blockCSS: ' bg-xwhite text-xblack lg:bg-xblack-1 lg:text-xwhite',
		labelCSS: ' border-b-xblack-1 lg:border-b-xwhite',
		descCSS: ' font-bold',
	},
	{
		label: 'ACTION PLAN',
		description: 'Analyze the sentiment of tweets by categorizing them into positive, negative, or neutral categories',
		blockCSS: ' bg-xblack-1 text-xwhite lg:bg-xwhite lg:text-xblack',
		labelCSS: ' border-b-xwhite lg:border-b-xblack-1',
		descCSS: ' font-bold',
	},
];

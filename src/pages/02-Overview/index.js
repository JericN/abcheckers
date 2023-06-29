import { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

import Template from './Template';

export default function Overview({ overviewRef, animateOverview }) {
	const isInView = useInView(overviewRef, {
		margin: '-40% 0px -40% 0px',
	});

	useEffect(() => {
		const title = overviewRef.current.childNodes[0];
		const nodes = overviewRef.current.childNodes[1].childNodes;

		if (isInView) {
			animateOverview(title, { x: 0, borderColor: '#FFFFFFFF' });
			for (let i = 0; i < nodes.length; i++) {
				if (i % 2 === 0) animateOverview(nodes[i], { x: 0, opacity: 1 }, { delay: 0.3 + i * 0.1 });
				else animateOverview(nodes[i], { y: 0, opacity: 1 }, { delay: 0.23 + i * 0.1 });
			}
		} else {
			animateOverview(title, { x: -300, borderColor: '#FFFFFF00' });
			for (let i = 0; i < nodes.length; i++) {
				if (i % 2 === 0) animateOverview(nodes[i], { x: -100, opacity: 0 });
				else animateOverview(nodes[i], { y: 100, opacity: 0 });
			}
			setHiddeEgg([true, true, true]);
		}
	}, [isInView]);

	// Easter Egg
	const [hiddenEgg, setHiddeEgg] = useState([true, true, true]);
	const [dragging, setDragging] = useState();

	function dragStart(event) {
		setDragging(event.target.innerHTML);
	}

	function dragEnd(_, info) {
		if (info.offset.x < 800) return;
		switch (dragging) {
			case 'MOTIVATION':
				setHiddeEgg((prev) => [!prev[0], prev[1], prev[2]]);
				break;
			case 'SOLUTION':
				setHiddeEgg((prev) => [prev[0], !prev[1], prev[2]]);
				break;
			case 'PROBLEM':
				setHiddeEgg((prev) => [prev[0], prev[1], !prev[2]]);
				break;
		}
	}

	function dragReset() {
		setHiddeEgg([true, true, true]);
	}

	return (
		<section ref={overviewRef} className='responsive-section center-column text-xwhite'>
			<motion.h2
				className='responsive-text-2xl font-bold mb-10 border-b-4 border-b-[#FFFFFF00] select-none'
				drag
				dragSnapToOrigin='true'
				dragTransition={{
					bounceStiffness: 200,
					bounceDamping: 10,
				}}
				onDragEnd={dragReset}
			>
				ABOUT OUR STUDY
			</motion.h2>
			<motion.div className='grid lg:grid-cols-2t justify-items-center'>
				{content.map((item, i) => {
					return <Template key={i} item={content[i]} hiddenEgg={hiddenEgg[i]} dragStart={dragStart} dragEnd={dragEnd} />;
				})}
			</motion.div>
		</section>
	);
}

const content = [
	{
		title: 'MOTIVATION',
		description:
			'In recent years, inflation has emerged as one of the primary challenges faced by the Filipino population. The impact of rising prices and reduced purchasing power has significantly affected the daily lives and financial well-being of many Filipinos. However, the situation is exacerbated by the perception that those in positions of power have not taken sufficient action to address this issue.',
		hidden: 'Money',
	},

	{
		title: 'PROBLEM',
		description:
			"Sandro Marcos' statement that \"the peso is weak not because the peso is weak, the peso is weak because the dollar is strong\" oversimplifies the complex issue of inflation and economic struggle in the country. By focusing solely on the strength of the dollar as the primary cause, Marcos neglects the multifaceted nature of inflation and fails to acknowledge the various internal factors contributing to the weakening of the peso. This oversimplification has led to the spread of misinformation on Twitter, with tweets supporting Marcos' statement disregarding the broader economic context and perpetuating a skewed understanding of the country's economic challenges.",
		hidden: 'BBM',
	},
	{
		title: 'SOLUTION',
		description:
			'Our project seeks to delve into the sentiments expressed within these misinformation tweets, aiming to shed light on the consequences of presenting a one-sided perspective without considering the broader context. By analyzing these sentiments, we endeavor to raise awareness regarding the potential implications of selectively showcasing one side of the coin while disregarding the other. This research aims to foster a more nuanced understanding among individuals and encourage critical thinking when confronted with oversimplified narratives.',
		hidden: 'Migration',
	},
];

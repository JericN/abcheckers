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
			animateOverview(title, { x: 0, borderColor: 'white' });
			for (let i = 0; i < nodes.length; i++) {
				if (i % 2 === 0) animateOverview(nodes[i], { x: 0, opacity: 1 }, { delay: 0.3 + i * 0.1 });
				else animateOverview(nodes[i], { y: 0, opacity: 1 }, { delay: 0.23 + i * 0.1 });
			}
		} else {
			animateOverview(title, { x: -300, borderColor: 'transparent' });
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
				className='responsive-text-xl font-bold mb-10 border-b-4 border-b-transparent select-none'
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
					return <Template item={content[i]} hiddenEgg={hiddenEgg[i]} dragStart={dragStart} dragEnd={dragEnd} />;
				})}
			</motion.div>
		</section>
	);
}

const content = [
	{
		title: 'MOTIVATION',
		description:
			"The tweets that contain mis/disinformation have no effect regarding the people's views on the government when it comes to our weakening peso and rising inflation. The tweets that contain mis/disinformation have no effect regarding the people's views on the government when it comes to our weakening peso and rising inflation.",
		hidden: 'Money',
	},
	{
		title: 'SOLUTION',
		description:
			"The tweets that contain mis/disinformation have no effect regarding the people's views on the government when it comes to our weakening peso and rising inflation. The tweets that contain mis/disinformation have no effect regarding the people's views on the government when it comes to our weakening peso and rising inflation.",
		hidden: 'Migration',
	},
	{
		title: 'PROBLEM',
		description:
			"The tweets that contain mis/disinformation have no effect regarding the people's views on the government when it comes to our weakening peso and rising inflation. The tweets that contain mis/disinformation have no effect regarding the people's views on the government when it comes to our weakening peso and rising inflation.",
		hidden: 'BBM',
	},
];

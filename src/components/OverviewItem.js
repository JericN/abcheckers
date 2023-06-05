import React from 'react';
import { motion } from 'framer-motion';

const css_label = 'font-A font-bold text-3xl text-center lg:text-right w-44 mt-4 select-none';
const css_desc = 'font-B text-md text-justify p-4 mb-10 border-2 border-transparent rounded-lg select-none';

export default function OverviewItem({ item, hiddenEgg, dragStart, dragEnd }) {
	return (
		<>
			<motion.h3
				className={css_label}
				drag
				dragSnapToOrigin='true'
				dragTransition={{
					bounceStiffness: 200,
					bounceDamping: 10,
				}}
				onDragStart={dragStart}
				onDragEnd={dragEnd}
			>
				{item.title}
			</motion.h3>
			<motion.p
				className={css_desc}
				layout
				whileHover={{
					scale: 1.01,
					borderColor: 'white',
					transition: {
						duration: 0.2,
					},
				}}
			>
				{hiddenEgg ? item.description : item.hidden}
			</motion.p>
		</>
	);
}

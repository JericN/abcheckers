import { motion } from 'framer-motion';

export default function Item({ item, hiddenEgg, dragStart, dragEnd }) {
	return (
		<>
			<motion.h3
				className='responsive-text-md font-A font-bold text-center lg:text-right w-44 2k:w-72 pt-4 mr-4 select-none'
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
				className='responsive-text-sm font-B text-justify p-4 mb-4 border-2 border-transparent rounded-lg select-none'
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

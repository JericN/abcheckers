import { motion } from 'framer-motion';

export default function Template({ index, content, cardFlipped, openCard, closeCard }) {
	return (
		<motion.div
			id={'card' + index}
			className={
				'flex justify-center items-center text-justify border-4 rounded-2xl border-xblack-3 max-w-3xl w-[1000px] h-[120px] px-10 select-none' +
				(cardFlipped[index] ? ' bg-xwhite' : ' bg-xblack-2')
			}
			layout
			onHoverStart={openCard}
			onHoverEnd={closeCard}
		>
			{cardFlipped[index] ? (
				<div className={'font-B text-lg pointer-events-none text-xblack'}>{content.desc}</div>
			) : (
				<div className={'font-A font-bold text-3xl pointer-events-none text-xwhite'}>{content.title}</div>
			)}
		</motion.div>
	);
}

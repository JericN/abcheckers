import { motion } from 'framer-motion';

const waitFor = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function BoxBlack({ index, content, cardFlipped, setCardFlipped, animateDatacol }) {
	async function openCard(el) {
		animateDatacol(el.target, { background: '#F0F0F0', scale: 1.01 });
		setCardFlipped((cardFlipped) => ((cardFlipped[index] = true), [...cardFlipped]));
	}

	async function closeCard(el) {
		await waitFor(50);
		animateDatacol(el.target, { background: '#2F2F2F', scale: 1 });
		setCardFlipped((cardFlipped) => ((cardFlipped[index] = false), [...cardFlipped]));
	}
	return (
		<motion.div
			className={
				'responsive-box center-column text-justify h-36 sm:h-32 px-4 sm:px-8 border-4 rounded-2xl border-xblack-3 select-none' +
				(cardFlipped[index] ? ' bg-xwhite' : ' bg-xblack-2')
			}
			layout
			onHoverStart={openCard}
			onHoverEnd={closeCard}
		>
			{cardFlipped[index] ? (
				<div className={'responsive-text-sm font-B pointer-events-none text-xblack'}>{content.desc}</div>
			) : (
				<div className={'responsive-text-md font-A font-bold pointer-events-none text-xwhite'}>{content.title}</div>
			)}
		</motion.div>
	);
}

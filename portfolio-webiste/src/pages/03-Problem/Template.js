import { motion } from 'framer-motion';

export default function Template({ item }) {
	return (
		<motion.div
			className={'w-72 sm:w-[22rem] lg:w-[22rem] 2k:w-[28rem] aspect-square flex flex-col items-center gap-6 p-10' + item.blockCSS}
			whileHover={{
				scale: 0.95,
				transition: {
					duration: 0.2,
				},
			}}
			drag
		>
			<h3 className={'responsive-text-md font-A font-bold border-b-4 px-2' + item.labelCSS}>{item.label}</h3>
			<p className={'responsive-text-xs font-B text-center' + item.descCSS}>{item.description}</p>
		</motion.div>
	);
}

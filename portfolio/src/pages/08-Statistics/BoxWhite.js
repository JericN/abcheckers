import { motion } from 'framer-motion';

export default function BoxWhite({ content }) {
	return (
		<div id='header' className='center-column border-4 border-xblack-3 rounded-2xl p-4 px-8 mx-20 gap-4 '>
			<motion.div className='responsive-text-2xl font-A font-bold text-center select-none'>{content.title}</motion.div>
			<motion.div className='responsive-text-sm font-B text-justify max-w-6xl select-none'>{content.desc}</motion.div>
		</div>
	);
}

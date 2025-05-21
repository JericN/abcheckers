import { motion } from 'framer-motion';

export default function Title({ content }) {
	return (
		<div className='center-column w-full bg-xblack-2 border-4 rounded-2xl border-xblack-3 py-5 px-10 gap-4 mb-5'>
			<div className='responsive-text-2xl text-center font-bold font-A text-xwhite'>{content.title}</div>
			<div className='responsive-text-sm text-justify font-B text-xwhite'>{content.desc}</div>
		</div>
	);
}

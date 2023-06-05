import { motion } from 'framer-motion';

export default function Button({ label, onClick }) {
	return (
		<motion.div
			className='flex justify-center font-bold text-lg border-4 rounded-2xl border-xblack-3 p-2 px-10'
			initial={{ background: '#F0F0F0' }}
			whileHover={{
				scale: 1.07,
				background: '#2F2F2F',
				color: '#F0F0F0',
			}}
			whileTap={{ scale: 0.9 }}
			onClick={onClick}
		>
			{label}
		</motion.div>
	);
}

import React from 'react';
import { useRef } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

import Logo from '../images/logo.png';
import Chip_white from '../images/chip_white.png';
import Chip_black from '../images/chip_black.png';

// Spin only if moving

export default function Landing() {
	const style_width_a = 'max-w-xl sm:max-w-2xl lg:max-w-6xl';

	const style_text_size_a = 'text-5xl sm:text-6xl lg:text-7xl';
	const style_text_size_b = 'text-4xl sm:text-5xl lg:text-6xl';
	const style_text_size_c = 'text-3xl sm:text-5xl lg:text-5xl';
	const style_text_size_d = 'text-md sm:text-2xl lg:text-2xl';

	const css_member = 'flex items-center justify-center text-2xl lg:text-3xl ';
	const css_chip = 'w-10 sm:w-20 lg:w-20 aspect-square z-10';
	const css_name = 'font-bold font-A w-14 z-0';

	const iconVariants = {
		hidden: { opacity: 0, x: '250%', scale: 0.3 },
		visible: {
			opacity: 1,
			x: 0,
			scale: 1,
			transition: { type: 'spring', stiffness: 250, damping: 15, mass: 1, delay: 1 },
		},
		tapping: {
			rotate: 720,
			scale: 0.7,
			transition: { duration: 1.2, ease: 'easeInOut' },
		},
		dragging: {
			rotate: [0, 360],
			transition: { duration: 0.4, repeat: Infinity, ease: 'linear' },
		},
	};

	const headerVariant = {
		hidden: { y: 100 },
		visible: {
			y: 0,
			transition: { delay: 6.5 },
		},
	};

	const descriptionVariant = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				when: 'beforeChildren',
				delay: 6.8,
			},
		},
	};

	const highlightVariant = {
		hidden: {},
		visible: (i) => ({
			color: ['rgba(0,0,0)', 'rgb(230, 0, 0)', 'rgba(0,0,0)'],
			transition: {
				duration: 3,
				repeat: Infinity,
				repeatType: 'reverse',
				delay: i * 2 + 6,
				repeatDelay: 7,
				ease: 'easeOut',
			},
		}),
	};

	const lineVariant = {
		hidden: { width: 0 },
		visible: {
			width: '100%',
			transition: {
				delay: 7.5,
				duration: 1,
			},
		},
	};

	const chipVariant = {
		hidden: {
			opacity: 0,
			rotateY: 0,
			y: 10,
		},
		visible: (i) => ({
			opacity: 1,
			rotateY: 360,
			y: 0,
			transition: {
				delay: i + 8.5,
			},
		}),
		active: (i) => ({
			rotateY: [0, 180, 0],
			transition: {
				delay: i + 8.5,
				repeatDelay: 10,
				repeat: Infinity,
				duration: 0.5,
				ease: 'easeOut',
			},
		}),
	};

	const nameVariant = {
		hidden: { opacity: 0, x: -50 },
		visible: (i) => ({
			opacity: 1,
			x: 0,
			transition: {
				delay: i + 8.8,
			},
		}),
	};

	return (
		<section className='responsive-section center-column select-none'>
			<div className={`${style_width_a} flex flex-col lg:flex-row gap-5 px-10 w-screen`}>
				{/* ICON */}
				<motion.img
					className='self-center w-52 sm:w-72 aspect-square z-20 lg:translate-x-[250%]'
					src={Logo}
					alt='[Logo]'
					variants={iconVariants}
					layout
					transition={{
						type: 'spring',
						stiffness: 190,
						damping: 9,
						mass: 2,
					}}
					initial='hidden'
					animate='visible'
					whileTap='tapping'
					whileDrag={'dragging'}
					drag
					dragSnapToOrigin='true'
					dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
				/>

				{/* TEXT */}
				<div className='flex flex-col justify-center gap-5 lg:-mt-10'>
					{/* HEADER */}
					<motion.div
						className={`${style_text_size_c} font-bold font-A color-A text-center lg:text-left`}
						variants={headerVariant}
						initial='hidden'
						animate='visible'
					>
						<TypeAnimation
							sequence={[2000, 'Hi!', 1000, 'Hi! We are not a game!', 1000, 'Hi! We are ']}
							wrapper='span'
							speed={80}
							deletionSpeed={90}
							cursor={false}
						/>
						<TypeAnimation className={`${style_text_size_a} text-red-900 text-border`} sequence={[5000, 'A']} wrapper='span' cursor={false} />
						<TypeAnimation className={`${style_text_size_a} text-violet-900 text-border`} sequence={[5200, 'B']} wrapper='span' cursor={false} />
						<TypeAnimation className={`${style_text_size_a} text-cyan-900 text-border`} sequence={[5400, 'C']} wrapper='span' cursor={false} />
						<TypeAnimation className={`${style_text_size_b}`} sequence={[5700, 'heckers!']} wrapper='span' cursor={false} speed={80} />
					</motion.div>

					{/* DESCRIPTION */}
					<motion.div
						className={style_text_size_d + ' pr-0 text-justify font-B lg:pr-12'}
						initial='hidden'
						animate='visible'
						variants={descriptionVariant}
					>
						<motion.span>This is our project, </motion.span>
						<motion.span custom={0} variants={highlightVariant}>
							{' '}
							Misinformation
						</motion.span>
						<motion.span> Regarding the </motion.span>
						<motion.span custom={1} variants={highlightVariant}>
							Country's Inflation
						</motion.span>
						<motion.span> and </motion.span>
						<motion.span custom={2} variants={highlightVariant}>
							Weakening Peso
						</motion.span>
						<motion.span>. Our aim is to use data analysis techniques to look into </motion.span>
						<motion.span>relevant Twitter data and provide context to the current state of the </motion.span>
						<motion.span custom={3} variants={highlightVariant}>
							Philippines.
						</motion.span>
					</motion.div>
				</div>
			</div>

			{/* LINE */}
			<motion.div
				className='my-10 border-t-[6px] border-t-[#121212] md:max-w-3xl lg:max-w-6xl'
				variants={lineVariant}
				initial='hidden'
				animate='visible'
			></motion.div>

			{/* MEMBERS */}
			<motion.div className='flex gap-5 lg:gap-10' initial='hidden' animate={['visible', 'active']}>
				<div className={css_member}>
					<motion.img className={css_chip} src={Chip_white} alt='' custom={0} variants={chipVariant} />
					<motion.p className={css_name} custom={0} variants={nameVariant}>
						Ann
					</motion.p>
				</div>
				<div className={css_member}>
					<motion.img className={css_chip} src={Chip_white} alt='' custom={1} variants={chipVariant} />
					<motion.p className={css_name} custom={1} variants={nameVariant}>
						Bea
					</motion.p>
				</div>
				<div className={css_member}>
					<motion.img className={css_chip} src={Chip_black} alt='' custom={2} variants={chipVariant} />
					<motion.p className={css_name} custom={2} variants={nameVariant}>
						riC
					</motion.p>
				</div>
			</motion.div>
		</section>
	);
}

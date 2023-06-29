import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimate, useAnimationControls, useTransform, useMotionValue, useInView } from 'framer-motion';

import Chip_white from '../images/chip_white.png';
import Chip_black from '../images/chip_black.png';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function Team() {
	const css_box = 'max-w-lg lg:max-w-3xl xl:max-w-6xl flex items-center border-4 border-xblack-3 rounded-2xl p-2 xl:p-5 gap-10';
	const css_icon = 'w-40 z-30 select-none pointer-events-none';
	const css_desc = 'text-xwhite translate-x-[-150px] z-10 pr-10 text-justify border-r-4 border-xwhite select-none pointer-events-none ';
	const css_name = 'absolute translate-x-[180px] font-bold text-xblack text-4xl z-20 select-none pointer-events-none';

	const [mainRef, mainAnimate] = useAnimate();
	const oneRef = useRef();
	const twoRef = useRef();
	const threeRef = useRef();

	const inViewMain = useInView(mainRef, { margin: '0% 0px -40% 0px' });

	// const panOneHandler = (event, info) => {
	//     var threshold = (boxOne.current.offsetWidth / 2) - iconOne.current.offsetWidth / 2 - 20;
	//     if (offsetOne.get() < threshold / 2) {
	//         iconOneControl.start({ x: 0 });
	//     } else if (offsetOne.get() > threshold * 1.5) {
	//         iconOneControl.start({ x: threshold * 2 });
	//     } else {
	//         if (info.offset.x > 0) {
	//             iconOneControl.start({ x: threshold * 2 });
	//         } else {
	//             iconOneControl.start({ x: 0 });
	//         }
	//     }
	// };

	function slide(el) {
		const box = el.target;
		const nodes = el.target.childNodes;

		const offset = box.offsetWidth - nodes[0].offsetWidth - 30;

		if (!nodes[0].style['transform'] || nodes[0].style['transform'] == 'none') {
			mainAnimate(box, { background: '#2F2F2F' }, { duration: 0.2 });
			mainAnimate(nodes[0], { x: offset }, { duration: 0.2, ease: 'easeOut' });
			mainAnimate(nodes[1], { opacity: 1 }, { duration: 0.2, ease: 'easeOut' });
			mainAnimate(nodes[2], { opacity: 0 }, { duration: 0.2, ease: 'easeOut' });
		} else {
			mainAnimate(box, { background: '#F0F0F0' }, { duration: 0.2 });
			mainAnimate(nodes[0], { x: 0 }, { duration: 0.2, ease: 'easeOut' });
			mainAnimate(nodes[1], { opacity: 0 }, { duration: 0.2, ease: 'easeOut' });
			mainAnimate(nodes[2], { opacity: 1 }, { duration: 0.2, ease: 'easeOut' });
		}
	}

	useEffect(() => {
		function resetAnimation(box) {
			const nodes = box.childNodes;
			mainAnimate(box, { background: '#F0F0F0' }, { duration: 0.2 });
			mainAnimate(nodes[0], { x: 0 }, { duration: 0.2, ease: 'easeOut' });
			mainAnimate(nodes[1], { opacity: 0 }, { duration: 0.2, ease: 'easeOut' });
			mainAnimate(nodes[2], { opacity: 1 }, { duration: 0.2, ease: 'easeOut' });
		}
		if (inViewMain) {
			const obj = mainRef.current.childNodes;
			mainAnimate(obj[0], { opacity: 1, x: 0 });
			mainAnimate(obj[1], { opacity: 1, x: 0 }, { delay: 0.2 });
			mainAnimate(obj[2], { opacity: 1, x: 0 }, { delay: 0.4 });
			mainAnimate(obj[3], { opacity: 1, x: 0 }, { delay: 0.6 });
		} else {
			const obj = mainRef.current.childNodes;
			mainAnimate(obj[0], { opacity: 0, x: -200 });
			mainAnimate(obj[1], { opacity: 0, x: -200 });
			mainAnimate(obj[2], { opacity: 0, x: -200 });
			mainAnimate(obj[3], { opacity: 0, x: -200 });
			resetAnimation(oneRef.current);
			resetAnimation(twoRef.current);
			resetAnimation(threeRef.current);
		}
	}, [inViewMain]);

	return (
		<section className='mt-80 pb-40'>
			<div ref={mainRef} className='flex flex-col items-center gap-10 font-B'>
				<motion.div className='text-5xl font-bold text-center font-A sm:text-7xl'>Meet our Team</motion.div>

				<motion.div className={css_box} ref={oneRef} onClick={slide}>
					<motion.img src={Chip_white} className={css_icon + ' one'} custom={1} />
					<motion.div className={css_desc}>
						Hello, call me Ann! I'm currently a 3rd year Computer Science student at the University of the Philippines Diliman. I took this course
						because I thought that it was both fun and fascinating to see what people could do when applying Computer Science to our daily lives.
						The field I'm most interested in is data science, which is why I am excited to see where our class for it (CS 132) takes us.
					</motion.div>
					<motion.div className={css_name}>
						Katrina Ann Mislang
						<div className='text-xl ml-2'>krmislang@up.edu.ph</div>
					</motion.div>
				</motion.div>

				<motion.div className={css_box} ref={twoRef} onClick={slide}>
					<motion.img src={Chip_white} className={css_icon + ' two'} />
					<div className={css_desc}>
						I am a 3rd year Computer Science Student from University of the Philippines Diliman. My interests include web development, software
						engineering, and cybersecurity, although I currently still don't have any experience in the latter two. I entered Computer Science ~~for
						the money~~ as I believe this is where my passion lies. I look forward to working in the technology industry in the future, contribute
						more knowledge and innovations to the field, collaborate with my fellow tech people, and make people's lives a lot easier.
					</div>
					<motion.div className={css_name}>
						Bea Alessi Yukdawan
						<div className='text-xl ml-2'>bbyukdawan@up.edu.ph</div>
					</motion.div>
				</motion.div>

				<motion.div className={css_box} ref={threeRef} onClick={slide}>
					<motion.img src={Chip_black} className={css_icon + ' three'} />
					<div className={css_desc}>
						Hey there! I'm also a third-year Computer Science student at UP Diliman, and The reason I got into this field is because I have a
						passion for crafting things — it lets me bring my ideas to life. Currently, I'm into web development and machine learning, but one thing
						to emphasize is i'm not a designer. My real passion lies in working on projects that have a profound impact on people's lives. Can't
						wait to dive into meaningful collaborations and make a difference!
					</div>
					<motion.div className={css_name}>
						Jeric Narte
						<div className='text-xl ml-2'>jmnarte@up.edu.ph</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}

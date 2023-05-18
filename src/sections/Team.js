import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation, useAnimationControls, useTransform, useMotionValue, useInView } from 'framer-motion';

import Chip_white from '../images/chip_white.png';


const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
);

export default function Team() {
    const css_box = 'max-w-lg lg:max-w-3xl xl:max-w-6xl flex items-center border-4 border-[#363636] rounded-2xl p-2 xl:p-5 gap-10';
    const css_icon = 'w-40 z-30 drag-none';
    const css_desc = 'text-white translate-x-[-150px] z-10 pr-10 select-none text-justify border-r-4 border-[#ffffff]';
    const css_name = 'absolute translate-x-[180px] font-bold text-4xl z-20 select-none';


    const boxOne = useRef(null);
    const boxTwo = useRef(null);
    const boxThree = useRef(null);

    const iconOne = useRef(null);
    const iconTwo = useRef(null);
    const iconThree = useRef(null);

    const titleControl = useAnimationControls();
    const iconOneControl = useAnimationControls();
    const iconTwoControl = useAnimationControls();
    const iconThreeControl = useAnimationControls();
    const boxOneControl = useAnimationControls();
    const boxTwoControl = useAnimationControls();
    const boxThreeControl = useAnimationControls();

    const offsetOne = useMotionValue(0);
    const offsetTwo = useMotionValue(0);
    const offsetThree = useMotionValue(0);

    const backgroundOne = useTransform(offsetOne, [0, 450], ['#ffffff', '#151515']);
    const backgroundTwo = useTransform(offsetTwo, [0, 450], ['#ffffff', '#151515']);
    const backgroundThree = useTransform(offsetThree, [0, 450], ['#ffffff', '#151515']);

    const opacityOne = useTransform(offsetOne, [0, 300], [1, 0]);
    const opacityTwo = useTransform(offsetTwo, [0, 300], [1, 0]);
    const opacityThree = useTransform(offsetThree, [0, 300], [1, 0]);

    const panOneHandler = (event, info) => {
        var threshold = (boxOne.current.offsetWidth / 2) - iconOne.current.offsetWidth / 2 - 20;
        if (offsetOne.get() < threshold / 2) {
            iconOneControl.start({ x: 0 });
        } else if (offsetOne.get() > threshold * 1.5) {
            iconOneControl.start({ x: threshold * 2 });
        } else {
            if (info.offset.x > 0) {
                iconOneControl.start({ x: threshold * 2 });
            } else {
                iconOneControl.start({ x: 0 });
            }
        }
    };

    const panTwoHandler = (event, info) => {
        var threshold = (boxTwo.current.offsetWidth / 2) - iconTwo.current.offsetWidth / 2 - 20;
        if (offsetTwo.get() < threshold / 2) {
            iconTwoControl.start({ x: 0 });
        } else if (offsetTwo.get() > threshold * 1.5) {
            iconTwoControl.start({ x: threshold * 2 });
        } else {
            if (info.offset.x > 0) {
                iconTwoControl.start({ x: threshold * 2 });
            } else {
                iconTwoControl.start({ x: 0 });
            }
        }
    };
    const panThreeHandler = (event, info) => {
        var threshold = (boxThree.current.offsetWidth / 2) - iconThree.current.offsetWidth / 2 - 20;
        if (offsetThree.get() < threshold / 2) {
            iconThreeControl.start({ x: 0 });
        } else if (offsetThree.get() > threshold * 1.5) {
            iconThreeControl.start({ x: threshold * 2 });
        } else {
            if (info.offset.x > 0) {
                iconThreeControl.start({ x: threshold * 2 });
            } else {
                iconThreeControl.start({ x: 0 });
            }
        }
    };

    const mainRef = useRef(null);
    const isInView = useInView(mainRef, {
        margin: "0% 0px -20% 0px"
    });

    useEffect(() => {
        if (isInView) {
            titleControl.start({
                opacity: 1,
                y: 0
            });
            iconOneControl.start({ x: 0 });
            iconTwoControl.start({ x: 0 });
            iconThreeControl.start({ x: 0 });
            boxOneControl.start({
                x: 0,
                opacity: 1,
                transition: {
                    delay: 0
                }
            });
            boxTwoControl.start({
                x: 0,
                opacity: 1,
                transition: {
                    delay: 0.2
                }
            });
            boxThreeControl.start({
                x: 0,
                opacity: 1,
                transition: {
                    delay: 0.4
                }
            });

        } else {
            titleControl.start({
                opacity: 0,
                y: -100
            });
            boxOneControl.start({
                x: -200,
                opacity: 0
            });
            boxTwoControl.start({
                x: -200,
                opacity: 0
            });
            boxThreeControl.start({
                x: -200,
                opacity: 0
            });

        }
    }, [isInView]);

    return (
        <section ref={mainRef} className='flex flex-col items-center mt-80 mb-20 gap-10 font-B'>
            <motion.div className='text-5xl font-bold text-center font-A sm:text-6xl' animate={titleControl}>OUR TEAM</motion.div>
            <motion.div className={css_box} ref={boxOne} style={{ background: backgroundOne }} animate={boxOneControl}>
                <motion.img src={Chip_white} className={css_icon + ' one'} ref={iconOne} style={{ x: offsetOne }} custom={1} animate={iconOneControl} drag='x' dragMomentum={false} dragConstraints={boxOne} dragElastic={0.01} onDragEnd={panOneHandler} />
                <motion.div className={css_desc}>Hello, call me Ann! I'm currently a 3rd year Computer Science student at the University of the Philippines Diliman. I took this course because I thought that it was both fun and fascinating to see what people could do when applying Computer Science to our daily lives. The field I'm most interested in is data science, which is why I am excited to see where our class for it (CS 132) takes us.</motion.div>
                <motion.div className={css_name} style={{ opacity: opacityOne }}>Katrina Ann Mislang</motion.div>
            </motion.div>
            <motion.div className={css_box} ref={boxTwo} style={{ background: backgroundTwo }} animate={boxTwoControl}>
                <motion.img src={Chip_white} className={css_icon + ' two'} ref={iconTwo} style={{ x: offsetTwo }} custom={2} animate={iconTwoControl} drag='x' dragMomentum={false} dragConstraints={boxTwo} dragElastic={0.01} onDragEnd={panTwoHandler} />
                <div className={css_desc}>I am a 3rd year Computer Science Student from University of the Philippines Diliman. My interests include web development, software engineering, and cybersecurity, although I currently still don't have any experience in the latter two. I entered Computer Science ~~for the money~~ as I believe this is where my passion lies. I look forward to working in the technology industry in the future, contribute more knowledge and innovations to the field, collaborate with my fellow tech people, and make people's lives a lot easier.</div>
                <motion.div className={css_name} style={{ opacity: opacityTwo }}>Bea Alessi Yukdawan</motion.div>
            </motion.div>
            <motion.div className={css_box} ref={boxThree} style={{ background: backgroundThree }} animate={boxThreeControl}>
                <motion.img src={Chip_white} className={css_icon + ' three'} ref={iconThree} style={{ x: offsetThree }} custom={3} animate={iconThreeControl} drag='x' dragMomentum={false} dragConstraints={boxThree} dragElastic={0.01} onDragEnd={panThreeHandler} />
                <div className={css_desc}>I am a 3rd year Computer Science Student from University of the Philippines Diliman. My interests include web development, software engineering, and cybersecurity, although I currently still don't have any experience in the latter two. I entered Computer Science ~~for the money~~ as I believe this is where my passion lies. I look forward to working in the technology industry in the future, contribute more knowledge and innovations to the field, collaborate with my fellow tech people, and make people's lives a lot easier.</div>
                <motion.div className={css_name} style={{ opacity: opacityThree }}>Jeric Narte</motion.div>
            </motion.div>
        </section>
    );



};

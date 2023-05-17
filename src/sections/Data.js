import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation, useAnimationControls, useTransform, useMotionValue, useInView, useScroll } from 'framer-motion';




export default function Data() {

    const titleControl = useAnimationControls();
    const preprocessControl = useAnimationControls();
    const titleRef = useRef();
    const titleInView = useInView(titleRef, {
        margin: "0% 0px 0% 0px"
    });
    const titleOutView = useInView(titleRef, {
        margin: "-50% 0px 0% 0px"
    });
    useEffect(() => {
        if (!titleInView) {
            titleControl.start({
                x: 200,
                opacity: 0,
            });
            preprocessControl.start({
                x: 200,
                opacity: 0,
            });
        } else {
            titleControl.start({
                x: 0,
                opacity: 1,
            });

        }
        console.log(titleOutView);
    }, [titleInView, titleOutView]);

    return (
        <section className='flex flex-col items-center min-h-screen select-none'>
            <div className='h-[50vh]'></div>
            <motion.div ref={titleRef} className='mb-16 font-bold font-A color-B text-6xl sm:text-7xl select-none' animate={titleControl}>DATA EXPLORATION</motion.div>
            <motion.div ref={titleRef} className='mb-16 font-bold font-A color-B text-6xl sm:text-7xl select-none' animate={preprocessControl}>PREPROCESSING</motion.div>
        </section>
    );
}

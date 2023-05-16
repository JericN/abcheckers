import React from 'react';


import { useRef, useEffect, useState } from 'react';
import { motion, useAnimationControls, useInView } from "framer-motion";

const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
);


export default function Overview({ overviewRef }) {
    const css_label = 'font-A font-bold text-3xl mt-4 w-44 select-none text-center lg:text-right';
    const css_text = 'font-B text-md text-justify select-none border-2 border-transparent rounded-lg p-4';



    const isInView = useInView(overviewRef, {
        margin: "0% 0px -50% 0px"
    });

    const titleControl = useAnimationControls();
    const motivationControl = useAnimationControls();
    const motivationTextControl = useAnimationControls();
    const solutionControl = useAnimationControls();
    const solutionTextControl = useAnimationControls();
    const problemControl = useAnimationControls();
    const problemTextControl = useAnimationControls();

    useEffect(() => {
        async function global() {
            titleControl.start({
                y: isInView ? 0 : -100,
            });
            await delay(50);
            motivationControl.start({
                x: isInView ? 0 : -100,
            });
            motivationTextControl.start({
                y: isInView ? 0 : 50,
                borderColor: isInView ? '#0000000' : '#fffffff',
            });
            await delay(50);
            solutionControl.start({
                x: isInView ? 0 : -100,
            });
            solutionTextControl.start({
                y: isInView ? 0 : 50,
                borderColor: isInView ? '#0000000' : '#fffffff',
            });
            await delay(50);
            problemControl.start({
                x: isInView ? 0 : -100,
            });
            problemTextControl.start({
                y: isInView ? 0 : 50,
                borderColor: isInView ? '#0000000' : '#fffffff',
            });

        }
        global();
    }, [isInView]);

    const textVariants = {
        hover: {
            scale: 1.01,
            borderColor: '#ffffffff',
            transition: {
                duration: 0.2,
            }

        },
    };

    return (
        <section >
            <div ref={overviewRef} className='custom-bg flex flex-col items-center min-h-screen text-white py-36 lg:py-60'>
                <motion.h2 className='mb-16 font-bold font-A text-6xl sm:text-7xl select-none' animate={titleControl} drag dragSnapToOrigin='true' dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}>OVERVIEW</motion.h2>
                <motion.div className='grid pr-0 mx-10 justify-items-center lg:w-5/6 lg:pr-10 xl:w-2/3 lg:grid-cols-2t gap-y-10'>
                    <motion.h3 className={css_label} animate={motivationControl} drag dragSnapToOrigin='true' dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}>MOTIVATION</motion.h3>
                    <motion.p className={css_text} layout variants={textVariants} animate={motivationTextControl} transition={{
                        duration: 0.2,
                    }} whileHover='hover'>
                        The tweets that contain mis/disinformation have no effect regarding the people's views on the government when it comes to our weakening peso and rising inflation. The tweets that contain mis/disinformation have no effect regarding the people's views on the government when it comes to our weakening peso and rising inflation. The tweets that contain mis/disinformation have no effect regarding the people's views on the government when it comes to our weakening peso and rising inflation.</motion.p>
                    <motion.h3 className={css_label} animate={solutionControl} drag dragSnapToOrigin='true' dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}>SOLUTION</motion.h3>
                    <motion.p className={css_text} layout variants={textVariants} animate={solutionTextControl} whileHover='hover'>The tweets that contain mis/disinformation have no effect regarding the people's views on the government when it comes to our weakening peso and rising inflation. The tweets that contain mis/disinformation have no effect regarding the people's views on the government when it comes to our weakening peso and rising inflation. The tweets that contain mis/disinformation have no effect regarding the people's views on the government when it comes to our weakening peso and rising inflation.</motion.p>
                    <motion.h3 className={css_label} animate={problemControl} drag dragSnapToOrigin='true' dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}>PROBLEM</motion.h3>
                    <motion.p className={css_text} layout variants={textVariants} animate={problemTextControl} whileHover='hover'>The tweets that contain mis/disinformation have no effect regarding the people's views on the government when it comes to our weakening peso and rising inflation. The tweets that contain mis/disinformation have no effect regarding the people's views on the government when it comes to our weakening peso and rising inflation. The tweets that contain mis/disinformation have no effect regarding the people's views on the government when it comes to our weakening peso and rising inflation.</motion.p>
                </motion.div>
            </div>

        </section >
    );
}

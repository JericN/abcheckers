import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { motion, useAnimationControls, useInView } from "framer-motion";



export default function Problem({ problemRef }) {
    const css_block = 'aspect-square w-80 flex flex-col items-center gap-6 p-10 pb-0';
    const css_label = 'font-A font-bold text-xl sm:text-2xl border-b-4';
    const css_text = 'font-B text-sm sm:text-md text-center';

    const css_whiteA = ' bg-white text-black';
    const css_whiteB = ' lg:bg-white lg:text-black';
    const css_whiteC = ' bg-white text-black lg:bg-transparent lg:text-white';

    const titleControl = useAnimationControls();
    const oneControl = useAnimationControls();
    const twoControl = useAnimationControls();
    const threeControl = useAnimationControls();
    const fourControl = useAnimationControls();



    const isInView = useInView(problemRef, {
        margin: "-1% 0px -50% 0px"
    });

    async function startAnimation() {
        titleControl.start({
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : -100,
        });
        oneControl.start({
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : -200,
            y: 0,
        });
        twoControl.start({
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : -200,
            x: 0,
        });
        threeControl.start({
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 200,
            x: 0,
        });
        fourControl.start({
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : 200,
            y: 0,
        });
    }
    useEffect(() => {
        startAnimation();
    }, [isInView]);

    const blocksVariants = {
        hover: {
            scale: 0.95,
            transition: {
                duration: 0.1,
            }
        }
    };

    const endDragHandler = (event, info) => {
        startAnimation();
    };

    const tweenTrans = { type: 'tween', duration: 0.2 };
    return (
        <section ref={problemRef} className='flex flex-col items-center min-h-screen pt-20 text-white'>
            <motion.h2 className='mb-16 text-5xl font-bold text-center font-A sm:text-6xl border-b-4' animate={titleControl} drag dragSnapToOrigin='true' dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }} onDragEnd={endDragHandler}>PROBLEM FORMULATION</motion.h2>
            <div className='grid lg:grid-cols-2'>
                <motion.div className={css_block + css_whiteA} animate={oneControl} variants={blocksVariants} whileHover='hover' drag dragMomentum={false}>
                    <h3 className={css_label + ' border-b-[#121212]'}>RESEARCH QUESTION</h3>
                    <p className={css_text + ' font-bold'}>Do mis/disinformation tweets that attribute inflation and the weakening peso solely to foreign factors, which lack context, gain more engagement than those that state that it is only ONE of the factors.</p>
                </motion.div>
                <motion.div className={css_block} animate={twoControl} variants={blocksVariants} whileHover='hover' drag dragMomentum={false}>
                    <h3 className={css_label}>HYPOTHESIS</h3>
                    <p className={css_text}>Tweets that contain the mis/disinformation (which lack context) stated in the research question have significantly more engagement than those that do not contain mis/disinformation or has the proper context.</p>
                </motion.div>
                <motion.div className={css_block + css_whiteC} animate={threeControl} variants={blocksVariants} whileHover='hover' drag dragMomentum={false}>
                    <h3 className={css_label + ' border-b-[#121212] lg:border-b-white'}>∅ HYPOTHESIS</h3>
                    <p className={css_text}>There is no signifiant difference between the engagement of the tweets with the mis/disinformation that lacks context and the tweets that do not contain mis/disinformation or also has the proper context.</p>
                </motion.div>
                <motion.div className={css_block + css_whiteB} animate={fourControl} variants={blocksVariants} whileHover='hover' drag dragMomentum={false}>
                    <h3 className={css_label + ' border-b-white lg:border-b-[#121212]'}>ACTION PLAN</h3>
                    <p className={css_text + ' font-bold'}>Analyze the frequency of likes and retweets of tweets regarding the Philippines’ inflation and peso (both mis/disinformation and non-mis/disinformation).</p>
                </motion.div>
            </div>
        </section >
    );
}

import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { motion, useAnimationControls, useInView } from "framer-motion";



export default function Problem({ problemRef }) {
    const css_block = 'w-80 aspect-square flex flex-col items-center gap-6 p-10 pb-0';
    const css_label = 'font-A font-bold text-xl sm:text-2xl border-b-4';
    const css_text = 'font-B text-sm sm:text-md text-center';

    const css_block_a = ' bg-xwhite text-xblack';
    const css_block_b = ' bg-xblack-1 text-xwhite';
    const css_block_c = ' bg-xwhite text-xblack lg:bg-xblack-1 lg:text-xwhite';
    const css_block_d = ' bg-xblack-1 text-xwhite lg:bg-xwhite lg:text-xblack';

    const titleControl = useAnimationControls();
    const oneControl = useAnimationControls();
    const twoControl = useAnimationControls();
    const threeControl = useAnimationControls();
    const fourControl = useAnimationControls();




    const blockWhileHover = {
        scale: 0.95,
        transition: {
            duration: 0.1,
        }
    };
    const endDragHandler = (event, info) => {
        problemEnterAnimation();
    };




    // Enter and Exit Animation
    const isInView = useInView(problemRef, {
        margin: "-50% 0px -40% 0px"
    });

    async function problemEnterAnimation() {
        titleControl.start({ opacity: 1, y: 0, });
        oneControl.start({ opacity: 1, x: 0, y: 0, });
        twoControl.start({ opacity: 1, y: 0, x: 0, });
        threeControl.start({ opacity: 1, y: 0, x: 0, });
        fourControl.start({ opacity: 1, x: 0, y: 0, });
    }

    async function problemExitAnimation() {
        titleControl.start({ opacity: 0, y: -100, });
        oneControl.start({ opacity: 0, x: -100, y: 0, });
        twoControl.start({ opacity: 0, y: -100, x: 0, });
        threeControl.start({ opacity: 0, y: 100, x: 0, });
        fourControl.start({ opacity: 0, x: 100, y: 0, });
    }

    useEffect(() => {
        if (isInView) {
            problemEnterAnimation();
        } else {
            problemExitAnimation();
        }
    }, [isInView]);



    return (
        <section className='min-h-screen'>
            <div ref={problemRef} className='flex flex-col items-center text-xwhite'>

                <motion.h2 className='mb-16 text-5xl font-bold text-center font-A sm:text-7xl border-b-4' animate={titleControl} drag dragSnapToOrigin='true' dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }} onDragEnd={endDragHandler}>WHAT ARE WE LOOKING FOR?</motion.h2>

                <div className='grid lg:grid-cols-2'>
                    <motion.div className={css_block + css_block_a} animate={oneControl} whileHover={blockWhileHover} drag dragTransition={{ bounceStiffness: 10, bounceDamping: 10, mass: 100 }}>
                        <h3 className={css_label + ' border-b-xblack-1'}>RESEARCH QUESTION</h3>
                        <p className={css_text + ' font-bold'}>Do mis/disinformation tweets that attribute inflation and the weakening peso solely to foreign factors, which lack context, gain more engagement than those that state that it is only ONE of the factors.</p>
                    </motion.div>
                    <motion.div className={css_block + css_block_b} animate={twoControl} whileHover={blockWhileHover} drag>
                        <h3 className={css_label + ' border-b-xwhite'}>HYPOTHESIS</h3>
                        <p className={css_text}>Tweets that contain the mis/disinformation (which lack context) stated in the research question have significantly more engagement than those that do not contain mis/disinformation or has the proper context.</p>
                    </motion.div>
                    <motion.div className={css_block + css_block_c} animate={threeControl} whileHover={blockWhileHover} drag>
                        <h3 className={css_label + ' border-b-xblack-1 lg:border-b-xwhite'}>∅ HYPOTHESIS</h3>
                        <p className={css_text}>There is no signifiant difference between the engagement of the tweets with the mis/disinformation that lacks context and the tweets that do not contain mis/disinformation or also has the proper context.</p>
                    </motion.div>
                    <motion.div className={css_block + css_block_d} animate={fourControl} whileHover={blockWhileHover} drag>
                        <h3 className={css_label + ' border-b-xwhite lg:border-b-xblack-1'}>ACTION PLAN</h3>
                        <p className={css_text + ' font-bold'}>Analyze the frequency of likes and retweets of tweets regarding the Philippines’ inflation and peso (both mis/disinformation and non-mis/disinformation).</p>
                    </motion.div>
                </div>

            </div>

        </section >
    );
}

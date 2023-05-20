import React from 'react';


import { useRef, useEffect, useState } from 'react';
import { motion, useAnimationControls, useInView } from "framer-motion";



const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
);


export default function Overview({ overviewRef }) {
    const css_title = 'mb-16 font-bold text-5xl sm:text-6xl select-none border-b-4 border-b-[#ffffff00]';
    const css_label = 'font-A font-bold text-3xl mt-4 w-44 select-none text-center lg:text-right';
    const css_desc = 'font-B text-md text-justify select-none border-2 border-[#ffffff00] rounded-lg p-4';

    const titleControl = useAnimationControls();
    const motivationControl = useAnimationControls();
    const solutionControl = useAnimationControls();
    const problemControl = useAnimationControls();
    const motivationTextControl = useAnimationControls();
    const solutionTextControl = useAnimationControls();
    const problemTextControl = useAnimationControls();


    // Enter and Exit Animation
    async function overViewEnterAnimation() {
        titleControl.start({ y: 0, borderColor: '#ffffffff', });
        await delay(50);
        motivationControl.start({ x: 0, opacity: 1, });
        motivationTextControl.start({ y: 0, opacity: 1, });
        await delay(50);
        solutionControl.start({ x: 0, opacity: 1, });
        solutionTextControl.start({ y: 0, opacity: 1, });
        await delay(50);
        problemControl.start({ x: 0, opacity: 1, });
        problemTextControl.start({ y: 0, opacity: 1, });
    }

    async function overViewExitAnimation() {
        titleControl.start({ y: -100, borderColor: '#ffffff00', });
        await delay(50);
        motivationControl.start({ x: -100, opacity: 0, });
        motivationTextControl.start({ y: 50, opacity: 0, });
        await delay(50);
        solutionControl.start({ x: -100, opacity: 0, });
        solutionTextControl.start({ y: 50, opacity: 0, });
        await delay(50);
        problemControl.start({ x: -100, opacity: 0, });
        problemTextControl.start({ y: 50, opacity: 0, });

        setMotivation(false);
        setSolution(false);
        setProblem(false);
    }

    const isInView = useInView(overviewRef, {
        margin: "-40% 0px -40% 0px"
    });

    useEffect(() => {
        if (isInView) {
            overViewEnterAnimation();
        } else {
            overViewExitAnimation();
        }
    }, [isInView]);


    // Hover Animation
    const descWhileHover = {
        scale: 1.01,
        borderColor: '#ffffffff',
        transition: {
            duration: 0.2,
        }
    };


    // Easter Egg
    const [isMotivated, setMotivation] = useState(false);
    const [isSolution, setSolution] = useState(false);
    const [isProblem, setProblem] = useState(false);

    const dragMotivationHandler = (event, info) => {
        if (info.offset.x > 1000) {
            setMotivation(!isMotivated);
        }
    };
    const dragSolutionHandler = (event, info) => {
        if (info.offset.x > 1000) {
            setSolution(!isSolution);
        }
    };
    const dragProblemHandler = (event, info) => {
        if (info.offset.x > 1000) {
            setProblem(!isProblem);
        }
    };


    return (
        <section className='min-h-screen'>
            <div ref={overviewRef} className='flex flex-col items-center  text-xwhite'>
                <motion.h2 className={css_title} animate={titleControl} drag dragSnapToOrigin='true' dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}>ABOUT OUR STUDY</motion.h2>
                <motion.div className='grid lg:grid-cols-2t mx-10 justify-items-center lg:w-2/3 pr-0 lg:pr-10 gap-y-10'>

                    <motion.h3 className={css_label} animate={motivationControl} drag dragSnapToOrigin='true' dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }} onDragEnd={dragMotivationHandler}>MOTIVATION</motion.h3>
                    <motion.p className={css_desc} layout animate={motivationTextControl} whileHover={descWhileHover}>
                        {isMotivated ? "Money" : "The tweets that contain mis/disinformation have no effect regarding the people's views on the government when it comes to our weakening peso and rising inflation. The tweets that contain mis/disinformation have no effect regarding the people's views on the government when it comes to our weakening peso and rising inflation. The tweets that contain mis/disinformation have no effect regarding the people's views on the government when it comes to our weakening peso and rising inflation."}
                    </motion.p>

                    <motion.h3 className={css_label} animate={solutionControl} drag dragSnapToOrigin='true' dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }} onDragEnd={dragSolutionHandler}>SOLUTION</motion.h3>
                    <motion.p className={css_desc} layout animate={solutionTextControl} whileHover={descWhileHover}>
                        {isSolution ? "Migration" : "The tweets that contain mis/disinformation have no effect regarding the people's views on the government when it comes to our weakening peso and rising inflation. The tweets that contain mis/disinformation have no effect regarding the people's views on the government when it comes to our weakening peso and rising inflation. The tweets that contain mis/disinformation have no effect regarding the people's views on the government when it comes to our weakening peso and rising inflation."}
                    </motion.p>

                    <motion.h3 className={css_label} animate={problemControl} drag dragSnapToOrigin='true' dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }} onDragEnd={dragProblemHandler}>PROBLEM</motion.h3>
                    <motion.p className={css_desc} layout animate={problemTextControl} whileHover={descWhileHover}>{isProblem ? "BBM" : "The tweets that contain mis/disinformation have no effect regarding the people's views on the government when it comes to our weakening peso and rising inflation. The tweets that contain mis/disinformation have no effect regarding the people's views on the government when it comes to our weakening peso and rising inflation. The tweets that contain mis/disinformation have no effect regarding the people's views on the government when it comes to our weakening peso and rising inflation."}</motion.p>
                </motion.div>
            </div>
        </section >
    );

}
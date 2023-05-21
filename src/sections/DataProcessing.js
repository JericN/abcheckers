import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation, useAnimationControls, useTransform, useMotionValue, useInView, useScroll } from 'framer-motion';


import Datatable from '../components/Datatable';

export default function Data() {

    const css_title = '';

    const css_box = 'flex flex-col items-center border-4 rounded-2xl border-xblack-3 max-w-6xl w-full py-5 px-10 gap-4';
    const css_box_b = 'font-B flex flex-col items-center border-4 rounded-2xl border-[#333333] max-w-3xl w-full p-5 px-10 gap-4 mb-10';
    const css_small_title = 'font-bold font-A text-2xl';
    const titleControl = useAnimationControls();
    const preprocessControl = useAnimationControls();
    const structControl = useAnimationControls();
    const dataTableControl = useAnimationControls();
    const cleanupControl = useAnimationControls();

    const titleRef = useRef();
    const preprocessRef = useRef();
    const structRef = useRef();
    const cleanupRef = useRef();

    const groupOneInView = useInView(titleRef, {
        margin: "-30% 0px -20% 0px"
    });
    const preprocessInView = useInView(preprocessRef, {
        margin: "-20% 0px -30% 0px"
    });
    const structInView = useInView(structRef, {
        margin: "-40% 0px -20% 0px"
    });
    useEffect(() => {
        if (groupOneInView) {
            titleControl.start({ opacity: 1, x: 0 });
        } else {
            titleControl.start({ opacity: 0, x: -400 });
        }


    }, [groupOneInView, preprocessInView, structInView]);

    return (
        <section className='min-h-screen mt-96'>
            <div className='flex flex-col items-center text-justify select-none'>
                <motion.div ref={titleRef} className='font-bold font-A text-xblack text-6xl sm:text-[10vw] select-none' animate={titleControl}>DATA EXPLORATION</motion.div>

                <motion.div ref={preprocessRef} className={css_box + ' bg-xblack-1 text-white mt-32'} animate={preprocessControl}>
                    <div className='font-bold font-A text-3xl sm:text-5xl select-none ' >PREPROCESSING</div>
                    <div className='text-justify font-B'>Our dataset contains data structured into multiple rows and columns. Each row represents one tweet and each column represents a feature of a tweet. These features include Account handle	Account name, Account bio, Account type, Joined, Following, Followers, Location, Tweet, Tweet Type, Date posted, Content type, and the number of Likes, Replies, Retweets, Quote Tweets, and Views.</div>
                </motion.div>
                <motion.div className={css_box_b + ' mt-20'} animate={structControl}>
                    <div className='font-bold font-A color-B text-3xl sm:text-3xl select-none' >The Structure of Data</div>
                </motion.div>
                <motion.div ref={structRef} className='mb-20 h-auto w-auto' animate={dataTableControl}>
                    <Datatable />
                </motion.div>

                <motion.div ref={cleanupRef} className={css_box + ' bg-[#121212] text-white  mt-32'} animate={cleanupControl}>
                    <div className='font-bold font-A text-3xl sm:text-4xl select-none' >Cleaning our data</div>
                    <div className='text-justify font-B'>Here are the multiple ways we cleaned our data using preprocessing techniques.</div>
                </motion.div>
                <div className={css_box_b}>
                    <div className={css_small_title}>Handling missing values</div>
                    <div>In order to handle the missing values in the Account Bio and Location columns in our dataset, we opted to do the following:
                        <ul className='ml-10'>
                            <li className='mt-2'>For the missing values in the Account Bio column, we replaced them with empty strings ("").</li>
                            <li className='mt-2'>For the missing values in the Location column, we replaced them with the string “Unidentified”.</li>
                        </ul>
                    </div>
                </div>
                <div className={css_box_b}>
                    <div className={css_small_title}>Handling outliers</div>
                    <div>We decided to find the outliers of the Followers column. We first computed the z-scores of each value and removed any data belonging outside 3 standard deviations.</div>
                </div>
                <div className={css_box_b}>
                    <div className={css_small_title}>Ensuring formatting consistency</div>
                    <div>In order to ensure formatting consistency in the Joined and Date Posted columns, we changed them into panda-readable values. For the Account Handle column, we added “@” at the beginning of each entry.</div>
                </div>
                <div className={css_box_b}>
                    <div className={css_small_title}>Normalization/standardization/scaling</div>
                    <div>In order to normalize the data in the Location column, we decided to categorize the column into three: "local", "international", and "unidentified". These strings will replace the ones formerly in the Location column.
                    </div>
                </div>
            </div>
        </section>
    );
}

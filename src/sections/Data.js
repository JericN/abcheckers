import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation, useAnimationControls, useTransform, useMotionValue, useInView, useScroll } from 'framer-motion';


import Datatable from '../components/Datatable';

export default function Data() {

    const css_box = 'flex flex-col items-center border-4 rounded-2xl border-[#121212] max-w-6xl w-full p-5 px-10 gap-4 mb-10';


    const titleControl = useAnimationControls();
    const preprocessControl = useAnimationControls();
    const structControl = useAnimationControls();
    const cleanupControl = useAnimationControls();

    const titleRef = useRef();
    const preprocessRef = useRef();
    const structRef = useRef();
    const cleanupRef = useRef();

    const titleInView = useInView(titleRef, {
        margin: "0% 0px 0% 0px"
    });
    const preprocessInView = useInView(preprocessRef, {
        margin: "0% 0px -50% 0px"
    });
    useEffect(() => {
        if (!titleInView) {
            titleControl.start({
                x: 200,
                opacity: 0,
            });
        } else {
            titleControl.start({
                x: 0,
                opacity: 1,
            });

        }

        if (preprocessInView) {
            preprocessControl.start({
                x: 0,
                opacity: 1,
            });
        } else {
            preprocessControl.start({
                x: -200,
                opacity: 0,
            });
        }

    }, [titleInView, preprocessInView]);

    return (
        <section className='flex flex-col items-center min-h-screen select-none'>
            <div className='h-[50vh]'></div>
            <motion.div ref={titleRef} className='mb-16 font-bold font-A color-B text-6xl sm:text-7xl select-none' animate={titleControl}>DATA EXPLORATION</motion.div>
            <motion.div ref={preprocessRef} className={css_box} animate={preprocessControl}>
                <div className='font-bold font-A color-B text-3xl sm:text-5xl select-none' >PREPROCESSING</div>
                <div className='text-justify font-B color-B'>Our dataset contains data structured into multiple rows and columns. Each row represents one tweet and each column represents a feature of a tweet. These features include Account handle	Account name, Account bio, Account type, Joined, Following, Followers, Location, Tweet, Tweet Type, Date posted, Content type, and the number of Likes, Replies, Retweets, Quote Tweets, and Views.</div>
            </motion.div>
            <motion.div ref={structRef} className={css_box} animate={structControl}>
                <div className='font-bold font-A color-B text-3xl sm:text-3xl select-none' >The Structure of Data</div>
                <div className='text-justify font-B color-B'>Our dataset contains data structured into multiple rows and columns. Each row represents one tweet and each column represents a feature of a tweet. These features include Account handle	Account name, Account bio, Account type, Joined, Following, Followers, Location, Tweet, Tweet Type, Date posted, Content type, and the number of Likes, Replies, Retweets, Quote Tweets, and Views.</div>
                <Datatable />
            </motion.div>
            <motion.div ref={cleanupRef} className={css_box} animate={cleanupControl}>
                <div className='font-bold font-A color-B text-3xl sm:text-4xl select-none' >Cleaning our data</div>
                <div className='text-justify font-B color-B'>Here are the multiple ways we cleaned our data using preprocessing techniques.</div>
            </motion.div>
            <div className={css_box}>
                <div>Handling missing values/ensuring no missing values</div>
                <div>Columns account bio and location have missing values. These missing values were replaced with empty strings to avoid errors in the next preprocessing steps.</div>
            </div>
            <div className={css_box}>
                <div>Ensuring formatting consistency (date, labels, etc.)</div>
                <div>Columns joined and date posted contain date values. To standardize the dates and make them ready for time series analyses, the string-type date values are converted to Date-type values with pandas’ date conversion function.</div>
            </div>
            <div className={css_box}>
                <div>Categorical data encoding</div>
                <div>Column content type is a multicategorical feature: this means that a value under this column can contain multiple categories, which are separated by commas (e.g., “Text, Reply, Image, URL, Video”). To draw analyses from such values, each string-type value is converted into a list of categories. And then one hot encoding is applied to convert these multicategorical values into numerical data, such that “Text” is converted to (1, 0, 0, 0, 0) and “Text, Reply, URL” is (1, 1, 0, 1, 0).</div>
            </div>
        </section>
    );
}

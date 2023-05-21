import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation, useAnimationControls, useTransform, useMotionValue, useInView, useScroll } from 'framer-motion';


import Datatable from '../components/Datatable';

export default function Data() {

    const css_title = '';

    const css_box = 'flex flex-col items-center border-4 rounded-2xl border-xblack-3 max-w-6xl w-full py-5 px-10 gap-4';

    const css_box_b = 'font-B flex flex-col items-center border-4 rounded-2xl border-xblack-3 max-w-3xl w-full py-10 px-10 gap-4';
    const css_box_cln = 'font-B flex flex-col items-center border-4 rounded-2xl border-xblack-3 max-w-3xl w-full pt-5 pb-8 px-10 gap-4';
    const css_title_cln = 'font-bold font-A text-2xl';

    const css_table_a = 'text-right p-1 px-4 border-2 bg-xblack-2 text-xwhite border-xwhite';
    const css_table_b = 'border-2 px-2 border-xwhite border-b-xblack-3';
    const css_table_c = 'text-center p-1 px-4 border-2 bg-xblack-2 text-xwhite border-xwhite';
    const css_table_d = 'text-center border-2 px-2 border-xwhite border-b-xblack-3';









    return (
        <section className='min-h-screen mt-96'>
            <div className='flex flex-col justify-center items-center text-justify select-none'>

                <motion.div className='font-bold font-A text-xblack text-6xl sm:text-[8vw] select-none'>DATA EXPLORATION</motion.div>

                <motion.div className='flex flex-col items-center font-A font-bold text-xwhite text-5xl border-4 rounded-2xl border-xblack-3 max-w-6xl w-full py-5 px-10 bg-xblack-2 mt-32'>PREPROCESSING</motion.div>

                {/* STRUCTURE OF DATA */}
                <motion.div className={css_box_b + ' mt-20'}>
                    <div className='font-A font-bold text-xblack text-4xl select-none' >The Structure of Data</div>
                    <div>Our dataset contains structured data of multiple rows and columns. Each row represents a single tweet and each column represents a characteristic of a tweet</div>
                    <Datatable />
                </motion.div>


                {/* DATA CLEANING */}
                <motion.div className='flex flex-col justify-center items-center gap-4 w-full mt-56'>

                    <div className={'flex flex-col items-center border-4 rounded-2xl border-xblack-3 max-w-6xl w-full py-5 px-10 gap-4 bg-xblack-2'}>
                        <div className='font-bold font-A text-xwhite text-3xl sm:text-4xl select-none' >Cleaning our data</div>
                        <div className='text-justify font-B text-xwhite'>Here are the multiple ways we cleaned our data using preprocessing techniques.</div>
                    </div>

                    <div className={css_box_cln}>
                        <div className={css_title_cln}>Handling missing values</div>
                        <div>Only two columns contain missing values:
                            <ul className='ml-5'>
                                <li className='mt-2'>• For the Account Bio column, we replaced them with empty strings.</li>
                                <li className='mt-2'>• For the Location column, we replaced them “Unidentified”.</li>
                            </ul>
                        </div>
                    </div>
                    <div className={css_box_cln}>
                        <div className={css_title_cln}>Handling outliers</div>
                        <div>We decided to find the outliers using both Z-score and Tukey's Fences for heavily skewed dataset since a potential problem of using Z-score is that the outliers may increase the standard deviation of the sample size. However, we're not going to remove these outliers as it provides rich context in our study.</div>
                    </div>
                    <div className={css_box_cln}>
                        <div className={css_title_cln}>Ensuring formatting consistency</div>
                        <div>
                            For the following categories we decided to format the data:
                            <ul className='ml-5'>
                                <li className='mt-2'>• Dates are parsed to ISO8601 format string”.</li>
                                <li className='mt-2'>• Locations are categorize to three type: "local", "international", and "unidentified"</li>
                            </ul>
                        </div>

                    </div>
                    <div className={css_box_cln}>
                        <div className={css_title_cln}>Categorical data encoding</div>
                        <div>To make data processing easier, we decided to encode the following categorical data:</div>
                        <table>
                            <tbody>
                                <tr>
                                    <td className={css_table_a}>Account Type</td>
                                    <td className={css_table_b}>0: Identified, 1: Media, 2: Anonymous</td>
                                </tr>
                                <tr>
                                    <td className={css_table_a}>Location</td>
                                    <td className={css_table_b}>0: Local, 1: International, 2: Unidentified</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='mt-6'>Another change we implement is separating Tweet and Content Type into different columns. For example a tweet that has text and image and we labeled as rational and transactional is presented as:</div>
                        <table>
                            <tbody>
                                <tr>
                                    <td className={css_table_c}>Text</td>
                                    <td className={css_table_c}>Image</td>
                                    <td className={css_table_c}>Video</td>
                                    <td className={css_table_c}>URL</td>
                                    <td className={css_table_c}>Reply</td>
                                    <td className={css_table_c}>Qoute</td>
                                </tr>
                                <tr>
                                    <td className={css_table_d}>1</td>
                                    <td className={css_table_d}>1</td>
                                    <td className={css_table_d}>0</td>
                                    <td className={css_table_d}>0</td>
                                    <td className={css_table_d}>0</td>
                                    <td className={css_table_d}>0</td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <tbody>
                                <tr>
                                    <td className={css_table_c}>Rational</td>
                                    <td className={css_table_c}>Emotional</td>
                                    <td className={css_table_c}>Transactional</td>
                                </tr>
                                <tr>
                                    <td className={css_table_d}>1</td>
                                    <td className={css_table_d}>0</td>
                                    <td className={css_table_d}>1</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                {/* NLP PROCESSING */}
                <motion.div className='flex flex-col justify-center items-center gap-4 w-full mt-56'>
                    <div className={'flex flex-col items-center border-4 rounded-2xl border-xblack-3 max-w-6xl w-full py-5 px-10 gap-4 bg-xblack-2'}>
                        <div className='font-bold font-A text-xwhite text-3xl sm:text-4xl select-none' >Natural Language Processing</div>
                        <div className='text-justify font-B text-xwhite'>To perform a topic analysis on the tweets collected, the following preprocessing techniques were performed on the tweet column:

                            Converting tweets to string-type values
                            Replacing emojis with descriptions
                            Lower-casing of words
                            Removing URLs
                            Removing special symbols @’s and #’s
                            Removing alt-text-image descriptions
                            Removing quotation marks and punctuations
                            Removing newlines
                            Removing whitespaces
                            Removing stop words
                            Translating tweets from Filipino to English</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

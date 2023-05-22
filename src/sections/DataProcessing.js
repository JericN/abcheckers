import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation, useAnimationControls, useTransform, useMotionValue, useInView, useScroll, useAnimate } from 'framer-motion';


import Datatable from '../components/Datatable';

export default function Data() {

    const css_box_head = 'flex flex-col items-center border-4 rounded-2xl border-xblack-3 max-w-6xl w-full py-5 px-10 gap-4 bg-xblack-2 mb-10';
    const css_box_title = 'font-bold font-A text-xwhite text-3xl sm:text-6xl';
    const css_box_desc = 'text-justify font-B text-xwhite';

    const css_box_b = 'font-B flex flex-col items-center border-4 rounded-2xl border-xblack-3 max-w-3xl w-full py-10 px-10 gap-4';
    const css_box_cln = 'font-B flex flex-col items-center border-4 rounded-2xl border-xblack-3 max-w-3xl w-full pt-5 pb-8 px-7 gap-2';
    const css_title_cln = 'font-bold font-A text-2xl';

    const css_table_a = 'text-right p-1 px-4 border-2 bg-xblack-2 text-xwhite border-xwhite';
    const css_table_b = 'border-2 px-2 border-xwhite border-b-xblack-3';
    const css_table_c = 'text-center p-1 px-4 border-2 bg-xblack-2 text-xwhite border-xwhite';
    const css_table_d = 'text-center border-2 px-2 border-xwhite border-b-xblack-3';



    const [exploTitleRef, explorationAnimation] = useAnimate();
    const [preprocessingRef, preprocessingAnimation] = useAnimate();
    const [structureRef, structureAnimation] = useAnimate();
    const [cleaningRef, cleaningAnimation] = useAnimate();
    const [nlpRef, nlpAnimation] = useAnimate();


    const inViewExploration = useInView(exploTitleRef, { margin: "-20% 0px -20% 0px" });
    const inViewPreprocessing = useInView(preprocessingRef, { margin: "-20% 0px -20% 0px" });
    const inViewStructure = useInView(structureRef, { margin: "-20% 0px -20% 0px" });
    const inViewCleaning = useInView(cleaningRef, { margin: "-20% 0px -20% 0px" });
    const inViewNLP = useInView(nlpRef, { margin: "-20% 0px -20% 0px" });


    useEffect(() => {
        if (inViewExploration) { explorationAnimation(exploTitleRef.current, { opacity: 1, x: 0 }); }
        else { explorationAnimation(exploTitleRef.current, { opacity: 0, x: -200 }); }
    }, [inViewExploration]);

    useEffect(() => {
        if (inViewPreprocessing) { preprocessingAnimation(preprocessingRef.current, { opacity: 1, x: 0 }); }
        else { preprocessingAnimation(preprocessingRef.current, { opacity: 0, x: -200 }); }
    }, [inViewPreprocessing]);

    useEffect(() => {
        if (inViewStructure) { structureAnimation(structureRef.current, { opacity: 1, x: 0 }); }
        else { structureAnimation(structureRef.current, { opacity: 0, x: -200 }); }
    }, [inViewStructure]);

    useEffect(() => {
        const obj = cleaningRef.current.childNodes;
        if (inViewCleaning) {
            cleaningAnimation(obj[0], { opacity: 1, x: 0 });
            cleaningAnimation(obj[1], { opacity: 1, x: 0 }, { delay: 0.1 });
            cleaningAnimation(obj[2], { opacity: 1, x: 0 }, { delay: 0.2 });
            cleaningAnimation(obj[3], { opacity: 1, x: 0 }, { delay: 0.3 });
            cleaningAnimation(obj[4], { opacity: 1, x: 0 }, { delay: 0.4 });
        }
        else {
            cleaningAnimation(obj[0], { opacity: 0, x: -200 });
            cleaningAnimation(obj[1], { opacity: 0, x: -200 });
            cleaningAnimation(obj[2], { opacity: 0, x: -200 });
            cleaningAnimation(obj[3], { opacity: 0, x: -200 });
            cleaningAnimation(obj[4], { opacity: 0, x: -200 });
        }
    }, [inViewCleaning]);

    useEffect(() => {
        const obj = nlpRef.current.childNodes;
        if (inViewNLP) {
            nlpAnimation(obj[0], { opacity: 1, x: 0 });
            nlpAnimation(obj[1], { opacity: 1, x: 0 }, { delay: 0.1 });
            nlpAnimation(obj[2], { opacity: 1, x: 0 }, { delay: 0.2 });
            nlpAnimation(obj[3], { opacity: 1, x: 0 }, { delay: 0.3 });
            nlpAnimation(obj[4], { opacity: 1, x: 0 }, { delay: 0.4 });
        } else {
            nlpAnimation(obj[0], { opacity: 0, x: -200 });
            nlpAnimation(obj[1], { opacity: 0, x: -200 });
            nlpAnimation(obj[2], { opacity: 0, x: -200 });
            nlpAnimation(obj[3], { opacity: 0, x: -200 });
            nlpAnimation(obj[4], { opacity: 0, x: -200 });
        }
    }, [inViewNLP]);

    return (
        <section className='min-h-screen mt-96'>
            <div className='flex flex-col justify-center items-center text-justify select-none'>

                <motion.div ref={exploTitleRef} className='font-bold font-A text-xblack text-6xl sm:text-[8vw] select-none mb-20'>DATA EXPLORATION</motion.div>

                <motion.div ref={preprocessingRef} className={css_box_head}>
                    <div className={css_box_title} >PREPROCESSING</div>
                    <div className={css_box_desc}>Data preprocessing is essential in data science modeling as it improves data quality by addressing missing values, outliers, and errors. It enables feature engineering and transformation, making the data suitable for modeling. By normalizing, scaling, and handling categorical variables, preprocessing enhances the performance and reliability of machine learning models.</div>
                </motion.div>

                {/* STRUCTURE OF DATA */}
                <motion.div ref={structureRef} className={css_box_b}>
                    <div className='font-A font-bold text-xblack text-4xl' >The Structure of Data</div>
                    <div>Our dataset contains structured data of multiple rows and columns. Each row represents a single tweet and each column represents a characteristic of a tweet</div>
                    <Datatable />
                </motion.div>;


                {/* DATA CLEANING */}
                <motion.div ref={cleaningRef} className='flex flex-col justify-center items-center gap-4 w-full mt-56'>
                    <div className={css_box_head}>
                        <div className={css_box_title} >Cleaning our data</div>
                        <div className={css_box_desc}>Here are the multiple ways we cleaned our data using preprocessing techniques.</div>
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
                                <li className='mt-2'>• Tweets are translated to english</li>
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
                        <div className='mt-6'>Another change we implement is transforming Tweet and Content Type into numerical data. For example a tweet that has text and image and we labeled as rational and transactional is presented as 110000 and 101.</div>
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
                </motion.div>;

                {/* NLP PROCESSING */}
                <motion.div ref={nlpRef} className='flex flex-col justify-center items-center gap-4 w-full mt-56'>
                    <div className={css_box_head}>
                        <div className={css_box_title}>Natural Language Processing</div>
                        <div className={css_box_desc}>To perform a topic analysis on the tweets collected, the following preprocessing techniques were performed on the <b>translated tweet</b> column to ensure optimal data refinement, facilitating the extraction of meaningful insights and patterns from the tweet data.</div>
                    </div>
                    <div className={css_box_cln}>
                        <div className={css_title_cln}>Preprocessing</div>
                        <div>
                            The text underwent lower casing, where all characters were converted to lowercase to ensure uniformity and avoid duplication of words due to capitalization. Additionally, quotation marks, punctuations, and URLs were also removed to streamline the data and prepare it for further analysis.
                        </div>
                    </div>
                    <div className={css_box_cln}>
                        <div className={css_title_cln}>Stop words removal</div>
                        <div>Before tokenizing, we decided to remove the stop words first such as commonly used words to eliminate noise and focus on the more relevant content. For this, we imported the English stop words from the NLTK library and removed the stop words from each processed tweet in the data frame.
                        </div>
                    </div>
                    <div className={css_box_cln}>
                        <div className={css_title_cln}>Tokenization</div>
                        <div>In order to tokenize our dataset, we opted to utilize the TweetTokenizer module provided by the Natural Language Toolkit (NLTK) library. By employing this tool on our preprocessed tweets, we were able to effectively break them down into individual tokens, facilitating further analysis and processing.
                        </div>
                    </div>

                    <div className={css_box_cln}>
                        <div className={css_title_cln}>Stemming and lemmatization</div>
                        <div>The SnowballStemmer was from NLTK library was for stemming the tweets, and WordNetLemmatizer from the same library was used for lemmitzation. Please note that stemming may cause the word to be incorrect (e.g., studies may turn into studi). Lemmatization on the other hand reduces the word to its base form correctly (e.g., programming becomes program), but it may not work on all the words (e.g., programmer may stay as programmer rather than transform into program).
                        </div>
                    </div>
                </motion.div>
            </div >
        </section >
    );
};

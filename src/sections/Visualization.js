import React from 'react';
import { useEffect, useState } from 'react';
import { motion, useAnimate, useInView } from 'framer-motion';
import axios from 'axios';
import Papa from 'papaparse';

import followingBoxPlot from '../images/followingBoxPlot.png';
import followerBoxPlot from '../images/followerBoxPlot.png';


import PieChartGrap from '../components/graphs/PieChartGraph';
import BarChartGraph from '../components/graphs/BarChartGraph';
import InteractiveTimeSeries from '../components/graphs/InteractiveTimeSeries';
import Scatter3DGraph from '../components/graphs/Scatter3DGraph';
import AccountTypeJoinedGraph from '../components/graphs/AccountTypeJoinedGraph';
import HeatmapGraphA from '../components/graphs/HeatmapGraphA';
import BoxPlotGraph from '../components/graphs/BoxPlotGraph';

const waitFor = ms => new Promise(
    resolve => setTimeout(resolve, ms)
);


const accountTypeData = [
    { name: 'Identified', value: 28 },
    { name: 'Anonymous', value: 114 },
    { name: 'Media', value: 8 },
];
const locationData = [
    { name: 'Philippines', value: 48 },
    { name: 'International', value: 3 },
    { name: 'Unidentified', value: 99 },
];

const tweetTypeData = [
    { name: "text", value: 150 },
    { name: "image", value: 28 },
    { name: "quote", value: 37 },
    { name: "url", value: 12 },
    { name: "video", value: 1 },
];

const contentTypeData = [
    { name: "rational", value: 103 },
    { name: "emotional", value: 59 },
    { name: "transactional", value: 4 },
];
const joinedDate = [
    { name: "2004", value: 2 },
    { name: "2005", value: 2 },
    { name: "2006", value: 6 },
    { name: "2007", value: 4 },
    { name: "2008", value: 2 },
    { name: "2009", value: 8 },
    { name: "2010", value: 6 },
    { name: "2011", value: 3 },
    { name: "2012", value: 4 },
    { name: "2013", value: 7 },
    { name: "2014", value: 5 },
    { name: "2015", value: 4 },
    { name: "2016", value: 4 },
    { name: "2017", value: 5 },
    { name: "2018", value: 7 },
    { name: "2019", value: 7 },
    { name: "2020", value: 24 },
    { name: "2021", value: 27 },
    { name: "2022", value: 23 }
];

const captions = {
    accountType: 'Figure 1: We visualized the Account Type column using a pie chart. We can see that most of the accounts in our dataset are anonymous users, while there are also tweets that came from media outlets. ',
    location: 'Figure 2: Similar to the Account Type, we also used a pie chart to show the Location column of the data. We can see that most of the accounts in our dataset are from the Philippines, and a large portion is unidentified',
    joinedDate: 'Figure 3: This histogram shows the distribution of the dataset\'s Joined column over the years. The x-axis contains the years, while the y-axis contains the number of accounts made. We can see that most of the accounts were made during 2020-2022, with its peak in 2021.',
    following: 'Figure 4: To have a more meaningful diagram, we have removed 13 data which we considered as outliers using tuckey\'s fence. The original maximum value is 3,408 following count',
    follower: 'Figure 5: To have a more meaningful diagram, we have removed 23 data which we considered as outliers using tuckey\'s fence. The original maximum value is 3,731,332 follower count',
    tweetType: 'Figure 6: A bar graph is used to represent the Tweet Type column of our dataset. The x-axis contains the categories each tweet was split into, while the y-axis is the number of tweets.',
    contentType: 'Figure 7: Similarly, this bar graph shows the frequency of each Content Type category. The x-axis contains the different categories, while the y-axis is the number of tweets.',
    qouteCount: 'Figure 8:',
    engagement: 'Figure 9: A 3d graph is worth a thoasand words',
    datePosted: 'Figure 10: A dynamic graph is worth a million words',
    AccountTypeJoinedDate: 'Figure 11. We can see that most of the accounts that were made during 2020-2022 are anonymous users',
    heatMap: 'Figure 12: This heatmap displays the correlation between the number of followers to the amount of likes, replies, and retweets. Spearman\'s method was used due the fact that the data was not normally distributed.'
};

export default function Visualization() {
    const css_title_main = 'font-A font-bold text-[6vw] text-center';
    const css_title_sub = 'text-2xl font-bold text-center font-A sm:text-5xl mt-10';
    const css_box_sub = 'flex flex-col items-center font-bold font-A sm:text-6xl text-xwhite bg-xblack-2 border-4 rounded-2xl border-xblack-3 max-w-6xl w-full py-5 px-10';
    const css_subsection = 'flex flex-col items-center gap-10 mb-40';



    const [csvData, setCsvData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'https://raw.githubusercontent.com/JericNarte/cs132-data/master/econ_data.csv'
                );
                const results = Papa.parse(response.data, { header: true }).data;
                setCsvData(results);
            } catch (error) {
                console.error('Error reading CSV file:', error);
            }
        };
        fetchData();
    }, []);



    const [visualTitleRef, visualTitleAnimation] = useAnimate();
    const [demogRef, demogAnimation] = useAnimate();
    const [ffRef, ffAnimation] = useAnimate();
    const [tweetRef, tweetAnimation] = useAnimate();
    const [d3Ref, d3Animation] = useAnimate();
    const [timeSeriesRef, timeSeriesAnimation] = useAnimate();
    const [correlationRef, correlationAnimation] = useAnimate();

    const inViewVisualTitle = useInView(visualTitleRef, { margin: "-20% 0px -20% 0px" });
    const inViewDemog = useInView(demogRef, { margin: "-10% 0px -40% 0px" });
    const inViewFF = useInView(ffRef, { margin: "-20% 0px -20% 0px" });
    const inViewTweet = useInView(tweetRef, { margin: "-20% 0px -20% 0px" });
    const inViewD3 = useInView(d3Ref, { margin: "-20% 0px -20% 0px" });
    const inViewTimeSeries = useInView(timeSeriesRef, { margin: "-20% 0px -20% 0px" });
    const inViewCorrelation = useInView(correlationRef, { margin: "-20% 0px -20% 0px" });


    useEffect(() => {
        if (inViewVisualTitle) { visualTitleAnimation(visualTitleRef.current, { opacity: 1, x: 0 }); }
        else { visualTitleAnimation(visualTitleRef.current, { opacity: 0, x: -200 }); }
    }, [inViewVisualTitle]);

    useEffect(() => {
        async function run() {
            const obj = demogRef.current.childNodes;
            if (inViewDemog) {
                demogAnimation(obj[0], { opacity: 1, y: 0 });
                await waitFor(200);
                demogAnimation(obj[1].childNodes[0], { opacity: 1, x: 0 }, { duration: 0.2, ease: "easeOut", delay: 0.1 });
                demogAnimation(obj[1].childNodes[1], { opacity: 1, x: 0 }, { duration: 0.2, ease: "easeOut" });
                demogAnimation(obj[2], { opacity: 1, y: 0 });
            } else {
                demogAnimation(obj[0], { opacity: 0, y: -200 });
                demogAnimation(obj[1].childNodes[0], { opacity: 0, x: -200 }, { duration: 0.2, ease: "easeIn" });
                demogAnimation(obj[1].childNodes[1], { opacity: 0, x: -200 }, { duration: 0.2, ease: "easeIn" });
                demogAnimation(obj[2], { opacity: 0, y: 100 });
            }
        }
        run();
    }, [inViewDemog]);

    useEffect(() => {
        async function run() {
            const obj = ffRef.current.childNodes;
            if (inViewFF) {
                ffAnimation(obj[0], { opacity: 1, x: 0 });
                await waitFor(200);
                ffAnimation(obj[1].childNodes[0], { opacity: 1, x: 0 }, { duration: 0.2, ease: "easeOut", delay: 0.1 });
                ffAnimation(obj[1].childNodes[1], { opacity: 1, x: 0 }, { duration: 0.2, ease: "easeOut" });
            } else {
                ffAnimation(obj[0], { opacity: 0, x: -200 });
                ffAnimation(obj[1].childNodes[0], { opacity: 0, x: -200 }, { duration: 0.2, ease: "easeIn" });
                ffAnimation(obj[1].childNodes[1], { opacity: 0, x: -200 }, { duration: 0.2, ease: "easeIn" });
            }
        }
        run();
    }, [inViewFF]);

    useEffect(() => {
        async function run() {
            const obj = tweetRef.current.childNodes;
            if (inViewTweet) {
                tweetAnimation(obj[0], { opacity: 1, y: 0 });
                await waitFor(200);
                tweetAnimation(obj[1], { opacity: 1, x: 0 });
                tweetAnimation(obj[2].childNodes[0], { opacity: 1, x: 0 }, { duration: 0.2, ease: "easeOut", delay: 0.2 });
                tweetAnimation(obj[2].childNodes[1], { opacity: 1, x: 0 }, { duration: 0.2, ease: "easeOut", delay: 0.1 });
            } else {
                tweetAnimation(obj[0], { opacity: 0, y: -200 });
                tweetAnimation(obj[1], { opacity: 0, x: -200 });
                tweetAnimation(obj[2].childNodes[0], { opacity: 0, x: -200 }, { duration: 0.2, ease: "easeIn" });
                tweetAnimation(obj[2].childNodes[1], { opacity: 0, x: -200 }, { duration: 0.2, ease: "easeIn" });
            }
        }
        run();
    }, [inViewTweet]);

    useEffect(() => {
        async function run() {
            const obj = d3Ref.current.childNodes;
            if (inViewD3) {
                d3Animation(obj[0], { opacity: 1, y: 0 });
                await waitFor(200);
                d3Animation(obj[1], { opacity: 1, x: 0 });
            } else {
                d3Animation(obj[0], { opacity: 0, y: -200 });
                d3Animation(obj[1], { opacity: 0, x: -200 });
            }
        }
        run();
    }, [inViewD3]);

    useEffect(() => {
        async function run() {
            const obj = timeSeriesRef.current.childNodes;
            if (inViewTimeSeries) {
                timeSeriesAnimation(obj[0], { opacity: 1, y: 0 });
                timeSeriesAnimation(obj[1], { opacity: 1, x: 0 }, { delay: 0.2 });
                timeSeriesAnimation(obj[2], { opacity: 1, x: 0 }, { delay: 0.4 });
            } else {
                timeSeriesAnimation(obj[0], { opacity: 0, y: -200 });
                timeSeriesAnimation(obj[1], { opacity: 0, x: -200 });
                timeSeriesAnimation(obj[2], { opacity: 0, x: -200 });
            }
        }
        run();
    }, [inViewTimeSeries]);


    useEffect(() => {
        async function run() {
            const obj = correlationRef.current.childNodes;
            if (inViewCorrelation) {
                correlationAnimation(obj[0], { opacity: 1, y: 0 });
                correlationAnimation(obj[1], { opacity: 1, x: 0 }, { delay: 0.2 });
            } else {
                correlationAnimation(obj[0], { opacity: 0, y: -200 });
                correlationAnimation(obj[1], { opacity: 0, x: -200 });
            }
        }
        run();
    }, [inViewCorrelation]);




    return (
        <section className='min-h-screen select-none mt-96'>
            <div className='flex flex-col items-center w-full gap-10'>
                <motion.h2 ref={visualTitleRef} className={css_title_main}>DATA VISUALIZATION</motion.h2>

                {/* ACCOUNT SECTION */}
                <motion.div ref={demogRef} className={css_subsection}>
                    <motion.h2 className={css_title_sub}>Let us look at the demography of our Data</motion.h2>
                    <div className='flex gap-4'>
                        <PieChartGrap data={accountTypeData} title={'Account Type Distribution'} caption={captions.accountType} />
                        <PieChartGrap data={locationData} title={'Account Location Distribution'} caption={captions.location} />
                    </div>
                    <BarChartGraph addClass={'max-w-[73rem] aspect-[2/1]'} height={'h-5/6'} scale={'band'} data={joinedDate} title={'Account Joined Date'} caption={captions.joinedDate} xLabel={'Year'} yLabel={'Frequency'} />
                </motion.div>


                {/* FOLLOWING AND FOLLOWERS */}
                <motion.div ref={ffRef} className={css_subsection}>
                    <motion.h2 className={css_box_sub}>ACCOUNT FOLLOWERS AND FOLLOWING</motion.h2>
                    <div className='flex gap-4'>
                        <BoxPlotGraph src={followingBoxPlot} title={'User Following Count Box Plot'} caption={captions.following} />
                        <BoxPlotGraph src={followerBoxPlot} title={'User Follower Count Box Plot'} caption={captions.follower} />
                    </div>
                </motion.div>


                {/* TWEET SECTION */}
                <motion.div ref={tweetRef} className={css_subsection}>
                    <motion.h2 className={css_title_sub}>Now how about the tweets we've gathered</motion.h2>
                    <motion.h2 className={css_box_sub} >TWEET AND CONTENT TYPE</motion.h2>
                    <div className='flex gap-4'>
                        <BarChartGraph addClass={'max-w-xl aspect-[5/4]'} height={'h-2/3'} scale={'auto'} data={tweetTypeData} title={'Tweet Type Distribution'} caption={captions.tweetType} xLabel={'Tweet Type'} yLabel={'Tweet Count'} />
                        <BarChartGraph addClass={'max-w-xl aspect-[5/4]'} height={'h-2/3'} scale={'auto'} data={contentTypeData} title={'Content Type Distribution'} caption={captions.contentType} xLabel={'Content Type'} yLabel={'Tweet Count'} />
                    </div>
                </motion.div>
                <motion.div ref={d3Ref} className={css_subsection + ' -mt-40'}>
                    <motion.h2 className={css_title_sub}>How did people react?</motion.h2>
                    <Scatter3DGraph data={csvData} title={'3D Tweet Engagement Plot'} caption={captions.engagement} />
                </motion.div>


                {/* Timeseries */}
                <motion.div ref={timeSeriesRef} className={css_subsection}>
                    <motion.h2 className='text-2xl font-bold text-center font-A sm:text-5xl mt-10' >How are Data distributed over Time?</motion.h2>
                    <InteractiveTimeSeries title={'Interactive Tweet Posted Plot'} caption={captions.datePosted} xLabel={'Date'} />
                    <AccountTypeJoinedGraph data={csvData} title={'Account Type Distribution'} caption={captions.AccountTypeJoinedDate} />
                </motion.div>

                {/* Correlation */}
                <motion.div ref={correlationRef} className={css_subsection}>
                    <motion.h2 className='text-2xl font-bold text-center font-A sm:text-5xl mt-10' >Correlation</motion.h2>
                    <HeatmapGraphA title={'Correlation Heatmap'} caption={captions.heatMap} />
                </motion.div>


            </div>
        </section >


    );
}

import React from 'react';
import { motion } from 'framer-motion';

import correlation from '../images/heatmap.png';
import followingBoxPlot from '../images/followingBoxPlot.png';
import followerBoxPlot from '../images/followerBoxPlot.png';


import PieChartGrap from '../components/graphs/PieChartGraph';
import BarChartGraph from '../components/graphs/BarChartGraph';
import InteractiveTimeSeries from '../components/graphs/InteractiveTimeSeries';
import TableGraph from '../components/graphs/TableGraph';
import HeatmapGraphA from '../components/graphs/HeatmapGraphA';
import BoxPlotGraph from '../components/graphs/BoxPlotGraph';


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
    following: 'Figure 4: This box plot shows the distribution of followers count of the users in our dataset. To have a more meaningful diagram, we have removed 13 data which we considered as outliers. The original maximum value is 3408 following count',
    follower: 'Figure 5: This box plot shows the distribution of following count of the users in our dataset. To have a more meaningful diagram, we have removed 23 data which we considered as outliers. The original maximum value is 3731332 follower count',
    tweetType: 'Figure 6: A bar graph is used to represent the Tweet Type column of our dataset. The x-axis contains the categories each tweet was split into, while the y-axis is the number of tweets.',
    contentType: 'Figure 7: Similarly, this bar graph shows the frequency of each Content Type category. The x-axis contains the different categories, while the y-axis is the number of tweets.',
    qouteCount: 'Figure 8:',
    datePosted: 'Figure 9: A graph is worth a million words',
    heatMap: 'Figure 10: This heatmap displays the correlation between the number of followers to the amount of likes, replies, and retweets. Spearman\'s method was used due the fact that the data was not normally distributed.'
};

export default function Visualization() {
    return (
        <div className='flex flex-col items-center w-full min-h-screen select-none mt-20 gap-10'>
            <motion.h2 className='text-4xl font-bold text-center font-A sm:text-6xl' drag dragSnapToOrigin='true' dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }} >DATA VISUALIZATION</motion.h2>

            <motion.h2 className='text-2xl font-bold text-center font-A sm:text-5xl mt-10' drag dragSnapToOrigin='true' dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }} >Our Sample</motion.h2>
            <div className='flex gap-5'>
                <PieChartGrap data={accountTypeData} title={'Account Type Distribution'} caption={captions.accountType} />
                <PieChartGrap data={locationData} title={'Account Location Distribution'} caption={captions.location} />
            </div>
            <BarChartGraph data={joinedDate} title={'Account Joined Date'} caption={captions.joinedDate} xLabel={'Year'} yLabel={'Frequency'} />

            <motion.h2 className='text-2xl font-bold text-center font-A sm:text-5xl mt-10' >ACCOUNT FOLLOWERS AND FOLLOWING</motion.h2>
            <div className='flex gap-5'>
                <BoxPlotGraph src={followingBoxPlot} title={'User Following Count Box Plot'} caption={captions.following} />
                <BoxPlotGraph src={followerBoxPlot} title={'User Follower Count Box Plot'} caption={captions.follower} />
            </div>

            <motion.h2 className='text-2xl font-bold text-center font-A sm:text-5xl mt-10' >Tweets</motion.h2>
            <div className='flex gap-5'>
                <BarChartGraph data={tweetTypeData} title={'Tweet Type Distribution'} caption={captions.tweetType} xLabel={'Tweet Type'} yLabel={'Tweet Count'} />
                <BarChartGraph data={contentTypeData} title={'Content Type Distribution'} caption={captions.contentType} xLabel={'Content Type'} yLabel={'Tweet Count'} />
            </div>

            <motion.h2 className='text-2xl font-bold text-center font-A sm:text-5xl mt-10' >Time Series</motion.h2>
            <InteractiveTimeSeries title={'Interactive Tweet Posted Plot'} caption={captions.datePosted} xLabel={'Date'} />

            <motion.h2 className='text-2xl font-bold text-center font-A sm:text-5xl mt-10' >Correlation</motion.h2>
            <HeatmapGraphA title={'Correlation Heatmap'} caption={captions.heatMap} />
        </div>

    );
}


import React from 'react';
import Plot from 'react-plotly.js';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Papa from 'papaparse';


export default function Scatter3DGraph({ data, title, caption }) {
    const [csvData, setCsvData] = useState([]);
    const [rawData, setRawData] = useState({ likes: [], replies: [], retweets: [] });
    const [dataType, setDataType] = useState('raw');
    const [isOutliers, setOutliers] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'https://raw.githubusercontent.com/JericNarte/cs132-data/master/full_clean_data.csv'
                );
                const results = Papa.parse(response.data, { header: true }).data;
                setCsvData(results);
            } catch (error) {
                console.error('Error reading CSV file:', error);
            }

        };

        fetchData();

    }, []);

    useEffect(() => {
        if (csvData.length === 0) return;
        console.log(dataType, isOutliers);
        getData();
    }, [csvData, dataType, isOutliers]);


    function getData() {
        var data = { likes: [], replies: [], retweets: [] };
        const raw = dataType == 'raw';


        for (var i = 0; i < csvData.length; i++) {
            const like = csvData[i]['likes'];
            const rep = csvData[i]['replies'];
            const ret = csvData[i]['retweets'];
            const zlike = csvData[i]['z-likes'];
            const zrep = csvData[i]['z-replies'];
            const zret = csvData[i]['z-retweets'];
            if (isOutliers && (Math.abs(zlike) > 3 || Math.abs(zrep) > 3 || Math.abs(zret) > 3)) continue;
            data.likes.push(raw ? like : zlike);
            data.replies.push(raw ? rep : zrep);
            data.retweets.push(raw ? ret : zret);
        }
        setRawData(data);
    }

    const css_button = 'flex justify-center items-center font-B font-semibold text-sm border-[3px] rounded-xl border-xblack-3 select-none p-1 w-40';

    return (
        <div className='w-full max-w-3xl border-4 border-xblack-3 p-5 rounded-3xl flex flex-col items-center'>
            <div className='font-B color-B text-2xl font-bold mb-4'>{title}</div>
            <div className='flex gap-10'>
                <div className={css_button + (dataType == 'raw' ? ' bg-xblack text-xwhite' : ' bg-xwhite text-xblack')} onClick={() => { setDataType('raw'); }}>Raw Data</div>
                <div className={css_button + (dataType !== 'raw' ? ' bg-xblack text-xwhite' : ' bg-xwhite text-xblack')} onClick={() => { setDataType('zscore'); }}>Z-Scores</div>
                <div className={css_button + (isOutliers ? ' bg-xblack text-xwhite' : ' bg-xwhite text-xblack')} onClick={() => { setOutliers((isOutliers) => (!isOutliers)); }}>Remove Outlier</div>
            </div>
            <Plot
                data={[
                    {
                        x: rawData.likes,
                        y: rawData.replies,
                        z: rawData.retweets,
                        type: 'scatter3d',
                        mode: 'markers',
                        marker: {
                            size: 5,
                            color: 'red',
                            opacity: 0.8
                        },
                    },
                ]}
                layout={{
                    width: 500,
                    height: 500,
                    margin: {
                        l: 0,
                        r: 0,
                        b: 0,
                        t: 0
                    },
                    paper_bgcolor: "rgba(0,0,0,0)",
                    scene: {
                        aspectmode: "manual",
                        aspectratio: {
                            x: 1, y: 1, z: 1,
                        },
                        xaxis: {
                            title: 'Likes'
                        },
                        yaxis: {
                            title: 'Replies'
                        },
                        zaxis: {
                            title: 'Retweets'
                        }
                    },
                }}
                config={{ displayModeBar: false, responsive: true }}
            />
            <div className='mt-10 font-B text-justify color-B mx-4'>{caption}</div>
        </div>

    );
}

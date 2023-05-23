
import React from 'react';
import Plot from 'react-plotly.js';
import { useEffect, useState } from 'react';



export default function Scatter3DGraph({ data, title, caption }) {

    const [rawData, setRawData] = useState({ likes: [], replies: [], retweets: [] });
    const [dataType, setDataType] = useState('raw');
    const [isOutliers, setOutliers] = useState(false);


    useEffect(() => {
        if (data.length === 0) return;
        getData();
    }, [data, dataType, isOutliers]);


    function getData() {
        var retData = { likes: [], replies: [], retweets: [] };
        const raw = dataType == 'raw';


        for (var i = 0; i < data.length; i++) {
            const like = data[i]['likes'];
            const rep = data[i]['replies'];
            const ret = data[i]['retweets'];
            const zlike = data[i]['zLikes'];
            const zrep = data[i]['zReplies'];
            const zret = data[i]['zRetweets'];
            if (isOutliers && (Math.abs(zlike) > 3 || Math.abs(zrep) > 3 || Math.abs(zret) > 3)) continue;
            retData.likes.push(raw ? like : zlike);
            retData.replies.push(raw ? rep : zrep);
            retData.retweets.push(raw ? ret : zret);
        }
        setRawData(retData);
    }

    const css_button = 'flex justify-center items-center font-B font-semibold text-sm border-[3px] rounded-xl border-xblack-3 select-none p-1 w-40';

    return (
        <div className='w-[1000px] max-w-4xl border-4 border-xblack-3 p-5 rounded-3xl flex flex-col items-center'>
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
                            color: '#431313',
                            opacity: 0.8
                        },
                    },
                ]}
                layout={{
                    width: 700,
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

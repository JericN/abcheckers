import React from 'react';
import heatMap from '../../images/heatMapGraph.png';

export default function HeatmapGraphA({ title, caption }) {
    return (
        <div className='w-full max-w-3xl aspect-[4/3]  border-4 border-[#555555] p-5 rounded-3xl flex flex-col items-center'>
            <div className='font-B color-B text-xl font-bold'>{title}</div>
            <img src={heatMap} alt="" className='w-[470px] h-96' />
            <div className='mt-10 font-B text-justify color-B mb-3'>{caption}</div>
        </div>
    );
}

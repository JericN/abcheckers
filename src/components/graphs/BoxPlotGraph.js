import React from 'react';


export default function HeatmapGraphA({ src, title, caption }) {
    return (
        <div className='w-full max-w-2xl  border-4 border-[#555555] p-5 rounded-3xl flex flex-col items-center'>
            <div className='font-B color-B text-xl font-bold'>{title}</div>
            <img src={src} alt="" />
            <div className='mt-10 font-B text-justify color-B mb-3'>{caption}</div>
        </div>
    );
}

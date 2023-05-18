import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';




export default function BarChartGraph({ data, title, caption, xLabel, yLabel }) {
    return (
        <div className='w-full max-w-2xl aspect-[4/3]  border-4 border-[#555555] p-5 rounded-3xl flex flex-col items-center'>
            <div className='font-B color-B text-xl font-bold'>{title}</div>
            <div className='w-full h-5/6 mr-10 mt-5'>
                <ResponsiveContainer>
                    <BarChart
                        data={data}
                        margin={{
                            top: 0,
                            right: 0,
                            left: 0,
                            bottom: 10,
                        }}
                    >
                        <CartesianGrid />
                        <XAxis dataKey="name" label={{ value: xLabel, position: "bottom", offset: -5 }} />
                        <YAxis label={{ value: yLabel, angle: -90, position: 'left', offset: -20 }} />
                        <Tooltip />
                        <Bar dataKey="value" fill="#121212" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className='mt-10 font-B text-justify color-B'>{caption}</div>
        </div>
    );
}

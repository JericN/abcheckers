import React from 'react';
import { PieChart, Pie, Legend, Sector, Cell, ResponsiveContainer } from 'recharts';




const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};
export default function PieChartGrap({ data, title, caption }) {
    return (
        <div className='w-full max-w-xl border-4 border-xblack-3 p-5 rounded-3xl flex flex-col items-center'>
            <div className='font-B color-B text-xl font-bold'>{title}</div>
            <div className='w-3/4 aspect-square '>
                <ResponsiveContainer >
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={'90%'}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className='mt-10 font-B text-justify color-B mx-4'>{caption}</div>
        </div>
    );
}

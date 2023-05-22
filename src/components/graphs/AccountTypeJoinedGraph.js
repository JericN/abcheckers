import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
export default function AccountTypeJoinedGraph({ data, title, caption }) {

    const [barData, setBarData] = useState();
    const [finalData, setFinalData] = useState();

    function getRawData() {
        var retData = { accountType: [], joinedDate: [] };
        for (var i = 0; i < data.length; i++) {
            if (!data[i]['ID']) continue;
            retData.accountType.push(data[i]['acountType']);
            retData.joinedDate.push(data[i]['joinedDate']);
        }
        return retData;
    }

    useEffect(() => {
        if (data.length === 0) return;
        setBarData(getRawData());
    }, [data]);

    useEffect(() => {
        if (!barData) return;
        groupDates();
    }, [barData]);

    function groupDates() {

        const newDate = barData.joinedDate.map((date) => { return new Date(date); });

        var min = newDate.reduce(function (a, b) { return a < b ? a : b; });
        var max = newDate.reduce(function (a, b) { return a > b ? a : b; });
        min = min.getFullYear();
        max = max.getFullYear();
        const groupData = {};
        while (min <= max) {
            groupData[min] = { identified: [], anonymous: [] };
            min++;
        }


        for (var i = 0; i < barData.joinedDate.length; i++) {
            if (barData.accountType[i] === 'Identified') {
                groupData[newDate[i].getFullYear()].identified.push(newDate[i]);
            } else if (barData.accountType[i] === 'Anonymous') {
                groupData[newDate[i].getFullYear()].anonymous.push(newDate[i]);
            }
        }

        const finalData = [];
        for (var key in groupData) {
            finalData.push({ name: key, identified: groupData[key].identified.length, anonymous: groupData[key].anonymous.length });
        }
        setFinalData(finalData);
    }

    return (
        <div className={'max-w-6xl w-full border-4 aspect-[2/1] border-xblack-3 p-5 rounded-3xl flex flex-col items-center'}>
            <div className='font-B color-B text-xl font-bold'>{title}</div>
            <div className={'w-full h-5/6 mr-10 mt-5'}>
                <ResponsiveContainer>
                    <BarChart
                        data={finalData}
                        margin={{
                            top: 0,
                            right: 0,
                            left: 0,
                            bottom: 10,
                        }}
                    >
                        <CartesianGrid />
                        <XAxis dataKey="name" label={{ value: "Year", position: "bottom", offset: -1 }} />
                        <YAxis label={{ value: "Frequency", angle: -90, position: 'left', offset: -20 }} />
                        <Tooltip />
                        <Bar dataKey="identified" fill="#431313" barSize={50} />
                        <Bar dataKey="anonymous" fill="#002e29" barSize={50} />
                        <Legend
                            align="right"
                            iconType="square"
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className='mt-5 font-B text-justify color-B mx-3'>{caption}</div>
        </div>
    );
}

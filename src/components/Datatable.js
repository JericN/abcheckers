import React from 'react';

export default function dataTable() {

    const data = {
        "tweet URL": "https://twitter.com/cebudailynews/status/1503586",
        "account handle": "@cebudailynews",
        "account name": "CDN Digital",
        "account bio": "Cebu's only independent digital...",
        "account type": "Media",
        "joined": "6/23",
        "following": "669",
        "followers": "372036",
        "location": "NRA, Cebu City, Philippines",
        "tweet": "AFP: Ex-NPA members say Chad Booc...",
        "tweet type": "Text, URL",
        "date posted": "3/15/2022 4:17",
        "content type": "Rational",
        "likes": "0",
        "replies": "0",
        "retweets": "0",
        " quote tweets": "0",
    };
    return (
        <table className=''>
            <tbody>
                {
                    Object.keys(data).map((key, index) => {
                        return (
                            <tr key={index}>
                                <td className='text-right p-1 px-4 border-y-2 border-r-2 border-[#121212]'>{key}</td>
                                <td className='border-y-2 px-4 border-[#121212]'>{data[key]}</td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
}

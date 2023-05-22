import React from 'react';

export default function dataTable() {

    const data = {
        "tweet URL": "https://twitter.com/inquirerdotnet/15798156647",
        "account handle": "@inquirerdotnet",
        "account name": "Inquirer",
        "account bio": "Balanced News, Fearless Views. inquirer.net",
        "account type": "Media",
        "joined": "8/7",
        "following": "1810",
        "followers": "3731332",
        "location": "Makati City, Philippines",
        "tweet": "Marcos: “The peso is not weak, because the...",
        "tweet type": "Text,Image,URL",
        "date posted": "11/10/2022 20:46",
        "content type": "Rational",
        "likes": "1960",
        "replies": "538",
        "retweets": "198",
        "quote tweets": "1013",
    };
    return (
        <table>
            <tbody>
                {
                    Object.keys(data).map((key, index) => {
                        return (
                            <tr key={index}>
                                <td className='text-right p-1 px-4 border-2 bg-xblack-2 text-xwhite border-xwhite'>{key}</td>
                                <td className='border-2 px-4 border-xwhite border-b-xblack-3'>{data[key]}</td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
}

import React from 'react';

export default function TableGraph({ title, caption }) {
    const css_td = 'border-2 border-[#555555] px-4  py-2';
    return (
        <div className='w-full max-w-2xl aspect-[4/3]  border-4 border-[#555555] p-5 rounded-3xl flex flex-col items-center gap-10'>
            <div className='font-B color-B text-xl font-bold'>{title}</div>
            <table className='border-4 border-[#555555]'>
                <thead>
                    <tr>
                        <th className={css_td}>AccountType</th>
                        <th className={css_td}>QouteCount</th>
                    </tr>
                </thead >
                <tbody>
                    <tr>
                        <td className={css_td}>Media</td>
                        <td className={css_td}>1013</td>
                    </tr >
                    <tr>
                        <td className={css_td}>Media</td>
                        <td className={css_td}>344</td>
                    </tr >
                    <tr>
                        <td className={css_td}>Media</td>
                        <td className={css_td}>22</td>
                    </tr >
                    <tr>
                        <td className={css_td}>Anonymous</td>
                        <td className={css_td}>9</td>
                    </tr >
                    <tr>
                        <td className={css_td}>Media</td>
                        <td className={css_td}>7</td>
                    </tr >
                    <tr>
                        <td className={css_td}>Media</td>
                        <td className={css_td}>6</td>
                    </tr >
                </tbody >
            </table >
            <div className='mt-10 font-B text-justify color-B mb-3'>{caption}</div>
        </div>

    );
}

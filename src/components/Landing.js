import React from 'react';

import Logo from '../images/logo.png';

export default function Landing() {
    return (
        <section className='min-h-screen flex flex-col items-center bg-slate-100 py-14 lg:py-52 '>
            <div className='flex flex-col gap-5 max-w-3xl px-10 lg:max-w-6xl lg:flex-row '>
                <img className='w-60 h-60 self-center' src={Logo} alt="Logo" />
                <span>
                    <div className='lg:flex font-A font-bold color-A text-center lg:text-left my-5'>
                        <div className='flex items-end justify-center text-6xl tracking-tighter'>Hi! We are&nbsp;</div>
                        <div>
                            <span className='text-violet-900 text-7xl'>A</span>
                            <span className='text-violet-900 text-7xl'>B</span>
                            <span className='text-violet-900 text-7xl'>C</span>
                            <span className='text-6xl'>heckers</span>
                            <span className='text-6xl'>🏁</span>
                        </div>
                    </div>
                    <div className='font-B text-justify text-xl pr-0 lg:pr-12'>
                        This is our project, Misinformation Regarding the Country's Inflation and Weakening Peso. Our aim is to use data analysis techniques to look into Twitter data relevant to this topic.
                    </div>
                </span>
            </div>
        </section>
    );
}

import React from 'react';

import Logo from '../images/logo.png';
import Chip_white from '../images/chip_white.png';
import Chip_black from '../images/chip_black.png';

export default function Landing() {
    return (
        <section className='min-h-screen flex flex-col items-center  py-14 lg:py-52'>
            <div className='flex flex-col gap-5 max-w-3xl px-10 lg:max-w-6xl lg:flex-row '>
                <img className='w-72 h-72 self-center' src={Logo} alt="Logo" />
                <div>
                    <div className='my-5 font-A font-bold color-A text-center lg:text-left lg:flex lg:my-8'>
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
                </div>
            </div>
            <div className='block my-10 border-t-4 border-t-slate-900 w-screen max-w-3xl lg:max-w-6xl'></div>
            <div>
                <div className='flex gap-10'>
                    <div className='flex justify-center items-center gap-3'>
                        <img className='w-24 h-24' src={Chip_white} alt="" />
                        <p className='font-A font-bold color-A text-3xl'>Ann</p>
                    </div>
                    <div className='flex justify-center items-center gap-3'>
                        <img className='w-24 h-24' src={Chip_white} alt="" />
                        <p className='font-A font-bold color-A text-3xl'>Bea</p>
                    </div>
                    <div className='flex justify-center items-center gap-3'>
                        <img className='w-24 h-24' src={Chip_black} alt="" />
                        <p className='font-A font-bold color-A text-3xl'>riC</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

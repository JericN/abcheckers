import React from 'react';

import Logo from '../images/logo.png';
import Chip_white from '../images/chip_white.png';
import Chip_black from '../images/chip_black.png';

export default function Landing() {
    const css_chip = 'w-16 sm:w-20 lg:w-24 aspect-square';
    const css_member = 'flex items-center justify-center lg:gap-3';
    const css_name = 'text-2xl sm:text-3xl font-bold font-A color-Ax';
    return (
        <section className='flex flex-col items-center min-h-screen py-14 lg:py-52'>
            <div className='flex flex-col max-w-3xl gap-5 px-10 lg:max-w-6xl lg:flex-row '>
                <img className='self-center w-72 h-72' src={Logo} alt="Logo" />
                <div>
                    <div className='my-5 font-bold text-center font-A color-A lg:text-left lg:flex lg:my-8'>
                        <div className='flex items-end justify-center text-4xl tracking-tighter sm:text-5xl lg:text-6xl'>Hi! We are&nbsp;</div>
                        <div>
                            <span className='text-5xl sm:text-6xl text-violet-900 lg:text-7xl'>A</span>
                            <span className='text-5xl sm:text-6xl text-violet-900 lg:text-7xl'>B</span>
                            <span className='text-5xl sm:text-6xl text-violet-900 lg:text-7xl'>C</span>
                            <span className='text-4xl sm:text-5xl'>heckers</span>
                            <span className='text-4xl sm:text-5xl'>🏁</span>
                        </div>
                    </div>
                    <div className='pr-0 text-xl text-justify sm:text-3xl font-B lg:pr-12'>
                        This is our project, Misinformation Regarding the Country's Inflation and Weakening Peso. Our aim is to use data analysis techniques to look into Twitter data relevant to this topic.
                    </div>
                </div>
            </div>
            <div className='block w-11/12 my-10 border-t-8 border-t-slate-900 md:w-screen md:max-w-3xl lg:max-w-6xl'></div>
            <div>
                <div className='flex gap-5 lg:gap-10'>
                    <div className={css_member}>
                        <img className={css_chip} src={Chip_white} alt="" />
                        <p className={css_name}>Ann</p>
                    </div>
                    <div className={css_member}>
                        <img className={css_chip} src={Chip_white} alt="" />
                        <p className={css_name}>Bea</p>
                    </div>
                    <div className={css_member}>
                        <img className={css_chip} src={Chip_black} alt="" />
                        <p className={css_name}>riC</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

import Logo from '../images/logo.png';
import Chip_white from '../images/chip_white.png';
import Chip_black from '../images/chip_black.png';

const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
);

export default function Landing() {
    const text_size_A = 'text-5xl sm:text-6xl lg:text-7xl';
    const text_size_B = 'text-4xl sm:text-5xl lg:text-6xl';
    const text_size_C = 'text-3xl sm:text-5xl lg:text-5xl';
    const text_size_D = 'text-md sm:text-2xl lg:text-2xl';

    const width_size_A = 'max-w-xl sm:max-w-2xl lg:max-w-6xl';

    const css_member = 'flex items-center justify-center text-2xl lg:text-3xl ';
    const css_chip = 'w-10 sm:w-20 lg:w-20 aspect-square opacity-0 translate-y-4';
    const css_name = 'font-bold font-A w-14';

    const ref_landing = useRef();
    const ref_logo = useRef();
    const ref_heading = useRef();
    const ref_line = useRef();
    const ref_text = useRef();
    const ref_mem = useRef();
    const ref_A = useRef();
    const ref_B = useRef();
    const ref_C = useRef();



    useEffect(() => {
        initial_animation();
        reactive_animation();
    }, []);


    async function initial_animation() {
        chip_animation();
    }
    async function chip_animation() {
        const mem = ref_mem.current;
        const mems = mem.children;

        for (let i = 0; i < mems.length; i++) {
            const mem = mems[i];
            const chip = mem.children[0];


            chip.classList.add('animate-chip');
            await delay(800);
        }
        ref_logo.current.style.animation = 'widthh 0.4s ease-out forwards';
        ref_line.current.style.animation = 'lineExpand 0.5s ease-out forwards';
        await delay(6500);
        ref_heading.current.style.animation = 'headUp 0.2s linear forwards';
        await delay(100);
        ref_text.current.style.animation = 'textShow 0.3s linear forwards';
    }

    const animate_classes = ['animate-A', 'animate-B', 'animate-C'];
    const letterRefs = [ref_A, ref_B, ref_C];
    function reactive_animation() {
        const letters = document.querySelectorAll('.ref_letter');
        for (let i = 0; i < letters.length; i++) {
            letters[i].addEventListener('mouseover', () => {
                letterRefs[i].current.style.animation = 'letterFocus 0.3s ease-out infinite';
                letterRefs[i].current.classList.add(animate_classes[i]);
            });
            letters[i].addEventListener('mouseout', () => {
                letterRefs[i].current.style.animation = 'none';
                letterRefs[i].current.classList.remove(animate_classes[i]);
            });
        }
    }
    return (
        <section className='flex flex-col items-center min-h-screen py-24 lg:py-52 select-none'>
            <div ref={ref_landing} className={width_size_A + ' flex flex-col lg:flex-row gap-5 px-10 w-screen'}>

                {/* LOGO PLACE HERE */}
                <img ref={ref_logo} className='self-center w-52 sm:w-72 aspect-square lg:translate-x-[130%]' src={Logo} alt="[Logo]" />

                {/* HELLO TEXT */}
                <div className='flex flex-col justify-center gap-5 lg:-mt-10'>
                    <div className={text_size_C + ' font-bold font-A color-A text-center lg:text-left lg:flex'}>
                        <span ref={ref_heading} className='justify-center tracking-tighter translate-y-24'>
                            <TypeAnimation
                                sequence={[
                                    3000,
                                    'Hi!',
                                    1000,
                                    'Hi! we are not a Board Game!',
                                    1200,
                                    'Hi! we are ',
                                ]}

                                wrapper="span"
                                cursor={false}
                                speed={70}
                                deletionSpeed={90}
                            />
                            <TypeAnimation
                                className={text_size_A + ' text-red-900 text-border ref_letter'}
                                sequence={[7500, 'A']}
                                wrapper="span"
                                cursor={false}
                            />
                            <TypeAnimation
                                className={text_size_A + ' text-violet-900 text-border ref_letter'}
                                sequence={[7600, 'B']}
                                wrapper="span"
                                cursor={false}
                            />
                            <TypeAnimation
                                className={text_size_A + ' text-cyan-900 text-border ref_letter'}
                                sequence={[7700, 'C']}
                                wrapper="span"
                                cursor={false}
                            />
                            <TypeAnimation
                                className={text_size_B}
                                sequence={[7900, 'heckers']}
                                wrapper="span"
                                cursor={false}
                            />
                        </span>
                    </div>
                    <div ref={ref_text} className={text_size_D + ' pr-0 text-justify font-B lg:pr-12 opacity-0'}>
                        This is our project, Misinformation Regarding the Country's Inflation and Weakening Peso.Our aim is to use data analysis techniques to look into relevant Twitter data and provide context to the current state of our country.
                    </div>

                </div>
            </div>
            <div ref={ref_line} className='w-0 my-10 border-t-8 border-t-slate-900 md:max-w-3xl lg:max-w-6xl'></div>
            <div>
                <div ref={ref_mem} className='flex gap-5 lg:gap-10'>
                    <div ref={ref_A} className={css_member}>
                        <img className={css_chip} src={Chip_white} alt="" />
                        <TypeAnimation
                            className={css_name}
                            sequence={[500, 'Ann']}
                            wrapper='p'
                            speed='1'
                            cursor={false}
                        />
                    </div>
                    <div ref={ref_B} className={css_member}>
                        <img className={css_chip} src={Chip_white} alt="" />
                        <TypeAnimation
                            className={css_name}
                            sequence={[1300, 'Bea']}
                            wrapper='p'
                            speed='1'
                            cursor={false}
                        />
                    </div>
                    <div ref={ref_C} className={css_member}>
                        <img className={css_chip} src={Chip_black} alt="" />
                        <TypeAnimation
                            className={css_name}
                            sequence={[2100, 'riC']}
                            wrapper='p'
                            speed='1'
                            cursor={false}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

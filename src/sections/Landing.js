import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { motion, animate, transform, stagger, easeInOut, easeOut } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

import Logo from '../images/logo.png';
import Chip_white from '../images/chip_white.png';
import Chip_black from '../images/chip_black.png';

const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
);


export default function Landing() {

    const style_width_a = 'max-w-xl sm:max-w-2xl lg:max-w-6xl';

    const style_text_size_a = 'text-5xl sm:text-6xl lg:text-7xl';
    const style_text_size_b = 'text-4xl sm:text-5xl lg:text-6xl';
    const style_text_size_c = 'text-3xl sm:text-5xl lg:text-5xl';
    const style_text_size_d = 'text-md sm:text-2xl lg:text-2xl';

    const css_member = 'flex items-center justify-center text-2xl lg:text-3xl ';
    const css_chip = 'w-10 sm:w-20 lg:w-20 aspect-square z-10';
    const css_name = 'font-bold font-A w-14 z-0';


    const description_variant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                delay: 5.8,
            }
        }
    };

    const highlight_variant = {
        hidden: { opacity: 1 },
        visible: i => ({
            color: ["rgba(0,0,0)", "rgb(230, 0, 0)", "rgba(0,0,0)"],
            transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 1,
                repeatDelay: 5,
            }
        })
    };

    const chip_variant = {
        hidden: {
            opacity: 0,
            rotateY: 0,
            y: 10,
        },
        visible: i => ({
            opacity: 1,
            rotateY: 360,
            y: 0,
            transition: {
                delay: i + 5.5
            }
        }),
        active: i => ({
            rotateY: [0, 360, 0],
            transition: {
                delay: i + 8.5,
                repeatDelay: 10,
                repeat: Infinity,
            }
        })
    };


    const name_variant = {
        hidden: { opacity: 0, x: -50 },
        visible: i => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i + 6
            }
        }),
    };


    return (
        <section className='flex flex-col items-center min-h-screen py-24 lg:py-52 select-none'>
            <div className={`${style_width_a} flex flex-col lg:flex-row gap-5 px-10 w-screen`}>
                <motion.img className='self-center w-52 sm:w-72 aspect-square z-20 lg:translate-x-[250%]'
                    src={Logo} alt="[Logo]"
                    initial={{ opacity: 0, x: '250%' }}
                    animate={{ opacity: 1, x: 0 }}
                    whileTap={{ rotate: 360, scale: 0.7 }}
                    // transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    drag
                    dragSnapToOrigin='true'
                    dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
                    whileDrag={{ rotate: [0, 360], transition: { duration: 0.4, repeat: Infinity, ease: 'linear' } }}

                />
                <div className='flex flex-col justify-center gap-5 lg:-mt-10'>
                    <motion.div
                        className={`${style_text_size_c} font-bold font-A color-A text-center lg:text-left`}
                        initial={{ y: '150%' }}
                        animate={{ y: 0 }}
                        transition={{ delay: 5.5 }}
                    >
                        <TypeAnimation
                            sequence={[
                                1000, 'Hi!',
                                1000, 'Hi! we are not a Game!',
                                1000, 'Hi! we are ',
                            ]}
                            wrapper="span"
                            cursor={false}
                            speed={80}
                            deletionSpeed={90}
                        />
                        {animated_phrase(`${style_text_size_a} text-red-900 text-border`, [4000, 'A'])}
                        {animated_phrase(`${style_text_size_a} text-violet-900 text-border`, [4200, 'B'])}
                        {animated_phrase(`${style_text_size_a} text-cyan-900 text-border`, [4400, 'C'])}
                        {animated_phrase(`${style_text_size_b}`, [4700, 'heckers'])}
                    </motion.div>
                    <motion.div className={style_text_size_d + ' pr-0 text-justify font-B lg:pr-12'}
                        initial='hidden'
                        animate='visible'
                        variants={description_variant}
                    >
                        <motion.span>This is our project, </motion.span>
                        <motion.span custom={1} variants={highlight_variant}>Misinformation</motion.span>
                        <motion.span> Regarding the </motion.span>
                        <motion.span custom={2} variants={highlight_variant}>Country's Inflation</motion.span>
                        <motion.span> and </motion.span>
                        <motion.span custom={3} variants={highlight_variant}>Weakening Peso</motion.span>
                        <motion.span>. Our aim is to use data analysis techniques to look into </motion.span>
                        <motion.span>relevant Twitter data and provide context to the current state of the </motion.span>
                        <motion.span custom={4} variants={highlight_variant}>Philippines.</motion.span>
                    </motion.div>
                </div>
            </div>

            <motion.div
                className='my-10 border-t-8 border-t-slate-900 md:max-w-3xl lg:max-w-6xl'
                initial={{ width: '0' }}
                animate={{ width: '100%' }}
                transition={{ delay: 6, duration: 1, ease: 'easeInOut' }}
            ></motion.div>

            <motion.div
                className='flex gap-5 lg:gap-10'
                initial='hidden'
                animate={["visible", "active"]}
            >
                <div className={css_member}>
                    <motion.img
                        className={css_chip}
                        src={Chip_white} alt=""
                        custom={1}
                        variants={chip_variant}
                    />
                    <motion.p
                        className={css_name}
                        custom={1}
                        variants={name_variant}
                    >Ann</motion.p>
                </div>
                <div className={css_member}>
                    <motion.img
                        className={css_chip}
                        src={Chip_white} alt=""
                        custom={2}
                        variants={chip_variant} />
                    <motion.p
                        className={css_name}
                        custom={2}
                        variants={name_variant}
                    >Bea</motion.p>
                </div>
                <div className={css_member}>
                    <motion.img
                        className={css_chip}
                        src={Chip_black} alt=""
                        custom={3}
                        variants={chip_variant} />
                    <motion.p
                        className={css_name}
                        custom={3}
                        variants={name_variant}
                    >riC</motion.p>
                </div>
            </motion.div>
        </section >
    );


    function animated_phrase(style, sequence,) {
        return <TypeAnimation
            className={style}
            sequence={sequence}
            wrapper="span"
            cursor={false}
        />;
    }
}

// export default function Landing() {
//     const style_text_size_a = 'text-5xl sm:text-6xl lg:text-7xl';
//     const style_text_size_b = 'text-4xl sm:text-5xl lg:text-6xl';
//     const style_text_size_c = 'text-3xl sm:text-5xl lg:text-5xl';
//     const style_text_size_d = 'text-md sm:text-2xl lg:text-2xl';

//     const style_width_a = 'max-w-xl sm:max-w-2xl lg:max-w-6xl';

//     const css_member = 'flex items-center justify-center text-2xl lg:text-3xl ';
//     const css_chip = 'w-10 sm:w-20 lg:w-20 aspect-square opacity-0 translate-y-4';
//     const css_name = 'font-bold font-A w-14';

//     const ref_landing = useRef();
//     const ref_logo = useRef();
//     const ref_heading = useRef();
//     const ref_line = useRef();
//     const ref_text = useRef();
//     const ref_mem = useRef();
//     const ref_A = useRef();
//     const ref_B = useRef();
//     const ref_C = useRef();



//     useEffect(() => {
//         initial_animation();
//         reactive_animation();
//     }, []);


//     async function initial_animation() {
//         chip_animation();
//     }
//     async function chip_animation() {
//         const mem = ref_mem.current;
//         const mems = mem.children;

//         for (let i = 0; i < mems.length; i++) {
//             const mem = mems[i];
//             const chip = mem.children[0];


//             chip.classList.add('animate-chip');
//             await delay(800);
//         }
//         ref_logo.current.style.animation = 'widthh 0.4s ease-out forwards';
//         ref_line.current.style.animation = 'lineExpand 0.5s ease-out forwards';
//         await delay(6500);
//         ref_heading.current.style.animation = 'headUp 0.2s linear forwards';
//         await delay(100);
//         ref_text.current.style.animation = 'textShow 0.3s linear forwards';
//     }

//     const animate_classes = ['animate-A', 'animate-B', 'animate-C'];
//     const letterRefs = [ref_A, ref_B, ref_C];
//     function reactive_animation() {
//         const letters = document.querySelectorAll('.ref_letter');
//         for (let i = 0; i < letters.length; i++) {
//             letters[i].addEventListener('mouseover', () => {
//                 letterRefs[i].current.style.animation = 'letterFocus 0.3s ease-out infinite';
//                 letterRefs[i].current.classList.add(animate_classes[i]);
//             });
//             letters[i].addEventListener('mouseout', () => {
//                 letterRefs[i].current.style.animation = 'none';
//                 letterRefs[i].current.classList.remove(animate_classes[i]);
//             });
//         }
//     }
//     return (
//         <section className='flex flex-col items-center min-h-screen py-24 lg:py-52 select-none'>
//             <div ref={ref_landing} className={style_width_a + ' flex flex-col lg:flex-row gap-5 px-10 w-screen'}>

//                 {/* LOGO PLACE HERE */}
//                 <img ref={ref_logo} className='self-center w-52 sm:w-72 aspect-square lg:translate-x-[130%]' src={Logo} alt="[Logo]" />

//                 {/* HELLO TEXT */}
//                 <div className='flex flex-col justify-center gap-5 lg:-mt-10'>
//                     <div className={style_text_size_c + ' font-bold font-A color-A text-center lg:text-left lg:flex'}>
//                         <span ref={ref_heading} className='justify-center tracking-tighter translate-y-24'>
//                             <TypeAnimation
//                                 sequence={[
//                                     3000,
//                                     'Hi!',
//                                     1000,
//                                     'Hi! we are not a Board Game!',
//                                     1200,
//                                     'Hi! we are ',
//                                 ]}

//                                 wrapper="span"
//                                 cursor={false}
//                                 speed={50}
//                                 deletionSpeed={90}
//                             />
//                             <TypeAnimation
//                                 className={style_text_size_a + ' text-red-900 text-border ref_letter'}
//                                 sequence={[7500, 'A']}
//                                 wrapper="span"
//                                 cursor={false}
//                             />
//                             <TypeAnimation
//                                 className={style_text_size_a + ' text-violet-900 text-border ref_letter'}
//                                 sequence={[7600, 'B']}
//                                 wrapper="span"
//                                 cursor={false}
//                             />
//                             <TypeAnimation
//                                 className={style_text_size_a + ' text-cyan-900 text-border ref_letter'}
//                                 sequence={[7700, 'C']}
//                                 wrapper="span"
//                                 cursor={false}
//                             />
//                             <TypeAnimation
//                                 className={style_text_size_b}
//                                 sequence={[7900, 'heckers']}
//                                 wrapper="span"
//                                 cursor={false}
//                             />
//                         </span>
//                     </div>
//                     <div ref={ref_text} className={style_text_size_d + ' pr-0 text-justify font-B lg:pr-12 opacity-0'}>
//                         This is our project, Misinformation Regarding the Country's Inflation and Weakening Peso.Our aim is to use data analysis techniques to look into relevant Twitter data and provide context to the current state of our country.
//                     </div>

//                 </div>
//             </div>
//             <div ref={ref_line} className='w-0 my-10 border-t-8 border-t-slate-900 md:max-w-3xl lg:max-w-6xl'></div>
//             <div>
//                 <div ref={ref_mem} className='flex gap-5 lg:gap-10'>
//                     <div ref={ref_A} className={css_member}>
//                         <img className={css_chip} src={Chip_white} alt="" />
//                         <TypeAnimation
//                             className={css_name}
//                             sequence={[500, 'Ann']}
//                             wrapper='p'
//                             speed='1'
//                             cursor={false}
//                         />
//                     </div>
//                     <div ref={ref_B} className={css_member}>
//                         <img className={css_chip} src={Chip_white} alt="" />
//                         <TypeAnimation
//                             className={css_name}
//                             sequence={[1300, 'Bea']}
//                             wrapper='p'
//                             speed='1'
//                             cursor={false}
//                         />
//                     </div>
//                     <div ref={ref_C} className={css_member}>
//                         <img className={css_chip} src={Chip_black} alt="" />
//                         <TypeAnimation
//                             className={css_name}
//                             sequence={[2100, 'riC']}
//                             wrapper='p'
//                             speed='1'
//                             cursor={false}
//                         />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

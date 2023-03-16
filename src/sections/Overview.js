import React from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { useRef, useEffect, useState } from 'react';

const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
);


export default function Overview() {
    const css_label = 'font-A font-bold text-3xl w-44 text-center lg:text-right';
    const css_text = 'font-B text-md text-justify';

    const bg_ref = useRef();
    const grad_ref = useRef();

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    async function handleScroll() {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 800) {
            bg_ref.current.style.background = 'black';
            grad_ref.current.style.opacity = '100';
        }
    }


    return (
        <section >
            <div ref={grad_ref} className='custom-gradient h-20'></div>
            <div ref={bg_ref} className='custom-bg flex flex-col items-center min-h-screen text-white py-36 lg:py-60'>
                <h2 className='mb-16 font-bold font-A text-6xl sm:text-7xl'>OVERVIEW</h2>
                <div className='grid pr-0 mx-10 justify-items-center lg:w-5/6 lg:pr-10 xl:w-2/3 lg:grid-cols-2t gap-y-10'>
                    <h3 className={css_label}>MOTIVATION</h3>
                    <p className={css_text}>The tweets that contain mis/disinformation have no effect regarding the people's views on the government when it comes to our weakening peso and rising inflation. The tweets that contain mis/disinformation have no effect regarding the people's views on the government when it comes to our weakening peso and rising inflation. The tweets that contain mis/disinformation have no effect regarding the people's views on the government when it comes to our weakening peso and rising inflation.</p>
                    <h3 className={css_label}>SOLUTION</h3>
                    <p className={css_text}>The tweets that contain mis/disinformation have no effect regarding the people's views on the government when it comes to our weakening peso and rising inflation. The tweets that contain mis/disinformation have no effect regarding the people's views on the government when it comes to our weakening peso and rising inflation. The tweets that contain mis/disinformation have no effect regarding the people's views on the government when it comes to our weakening peso and rising inflation.</p>
                    <h3 className={css_label}>PROBLEM</h3>
                    <p className={css_text}>The tweets that contain mis/disinformation have no effect regarding the people's views on the government when it comes to our weakening peso and rising inflation. The tweets that contain mis/disinformation have no effect regarding the people's views on the government when it comes to our weakening peso and rising inflation. The tweets that contain mis/disinformation have no effect regarding the people's views on the government when it comes to our weakening peso and rising inflation.</p>
                </div>
            </div>

        </section>
    );
}

// const bg_ref = useRef();

// useEffect(() => {
//     checker_bg();
//     handleScroll();
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//         window.removeEventListener("scroll", handleScroll);
//     };
// }, []);

// async function handleScroll() {
//     const scrollPosition = window.scrollY; // => scroll position
//     if (scrollPosition > 1000) {
//         const cells = bg_ref.current.children;
//         console.log(cells);
//         for (let i = 0; i < cells.length; i++) {
//             if (Math.floor(i / 20) % 2 == 0) {
//                 if (i % 2 == 0) {
//                     cells[i].style.backgroundColor = 'rgba(255, 255, 255, 0)';
//                 }
//             } else {
//                 if (i % 2 != 0) {
//                     cells[i].style.backgroundColor = 'rgba(255, 255, 255, 0)';
//                 }
//             }
//         }
//         await delay(100);
//         for (let i = 0; i < cells.length; i++) {
//             if (Math.floor(i / 20) % 2 != 0) {
//                 if (i % 2 == 0) {
//                     cells[i].style.backgroundColor = 'rgba(255, 255, 255, 0)';
//                 }
//             } else {
//                 if (i % 2 != 0) {
//                     cells[i].style.backgroundColor = 'rgba(255, 255, 255, 0)';
//                 }
//             }
//             await delay(1);
//         }

//     }
//     console.log(scrollPosition);
// };

// function checker_bg() {
//     for (let i = 0; i < 400; i++) {
//         const node = document.createElement("div");
//         node.className = 'cells aspect-square';
//         node.id = 'bg_' + i;
//         bg_ref.current.appendChild(node);
//     }
// }
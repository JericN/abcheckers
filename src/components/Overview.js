import React from 'react';
import { useRef, useEffect, useState } from 'react';


export default function Overview() {
    const css_label = 'font-A font-bold text-3xl w-44 text-center lg:text-right';
    const css_text = 'font-B text-md text-justify';

    const bg_ref = useRef();

    // useEffect(() => {
    //     checker_bg();
    // }, []);

    // function checker_bg() {
    //     const bg = document.querySelector('#bg_grid');
    //     console.log(bg);

    //     for (let i = 0; i < 100; i++) {
    //         const node = document.createElement("div");
    //         node.className = 'w-40 bg-red-100 aspect-square';
    //         node.id = 'bg_' + i;
    //         bg.appendChild(node);
    //     }
    // }

    return (
        <section >
            <div ref={bg_ref} id='bg_grid' className='absolute left-0 flex flex-wrap custom-bg-checkers'>

            </div>
            <div className='flex flex-col items-center min-h-screen text-white bg-black py-36 lg:py-52'>
                <h2 className='mb-16 font-bold font-A text-7xl'>OVERVIEW</h2>
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

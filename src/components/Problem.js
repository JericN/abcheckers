import React from 'react';

export default function Problem() {
    const css_block = 'aspect-square w-96 flex flex-col justify-center items-center gap-10 p-10';
    const css_label = 'font-A font-bold text-2xl border-b-4';
    const css_text = 'font-B text-lg text-center';
    const css_whiteA = ' bg-white text-black';
    const css_whiteB = ' lg:bg-white lg:text-black';
    const css_whiteC = ' bg-white text-black lg:bg-black lg:text-white';

    return (
        <section className='flex flex-col items-center min-h-screen pt-20 text-white bg-black'>
            <h2 className='mb-16 text-5xl font-bold text-center font-A sm:text-7xl'>PROBLEM FORMULATION</h2>
            <div className='grid lg:grid-cols-2'>
                <div className={css_block + css_whiteA}>
                    <h3 className={css_label + ' border-b-black'}>RESEARCH QUESTION</h3>
                    <p className={css_text}>How effective is the mis/disinformation regarding the cause of the country's inflation and weakening peso on absolving the current administration's actions?</p>
                </div>
                <div className={css_block}>
                    <h3 className={css_label}>HYPOTHESIS</h3>
                    <p className={css_text}>The tweets that contain mis/disinformation are effective in at least partly absolving the government when it comes to our weakening peso and rising inflation.</p>
                </div>
                <div className={css_block + css_whiteC}>
                    <h3 className={css_label}>∅ HYPOTHESIS</h3>
                    <p className={css_text}>The tweets that contain mis/disinformation have no effect on the people's perception of the government's involvement when it comes to our weakening peso and rising inflation.</p>
                </div>
                <div className={css_block + css_whiteB}>
                    <h3 className={css_label + ' border-b-black'}>ACTION PLAN</h3>
                    <p className={css_text}>Analyze the frequency of likes on the tweets that contain mis/disinfomration about the weakening peso and rising inflation.</p>
                </div>
            </div>
        </section >
    );
}

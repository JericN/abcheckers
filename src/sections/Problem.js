import React from 'react';

export default function Problem() {
    const css_block = 'aspect-square w-80 sm:w-96 flex flex-col items-center gap-10 p-10';
    const css_label = 'font-A font-bold text-xl sm:text-2xl border-b-4';
    const css_text = 'font-B text-sm sm:text-md text-center h-40 sm:h-52';

    const css_whiteA = ' bg-white text-black';
    const css_whiteB = ' lg:bg-white lg:text-black';
    const css_whiteC = ' bg-white text-black lg:bg-black lg:text-white';

    return (
        <section className='flex flex-col items-center min-h-screen pt-20 text-white bg-black'>
            <h2 className='mb-16 text-5xl font-bold text-center font-A sm:text-7xl'>PROBLEM FORMULATION</h2>
            <div className='grid lg:grid-cols-2'>
                <div className={css_block + css_whiteA}>
                    <h3 className={css_label + ' border-b-black'}>RESEARCH QUESTION</h3>
                    <p className={css_text + ' font-bold'}>Do mis/disinformation tweets that attribute inflation and the weakening peso solely to foreign factors, which lack context, gain more engagement than those that states it as one of the known factors?</p>
                </div>
                <div className={css_block}>
                    <h3 className={css_label}>HYPOTHESIS</h3>
                    <p className={css_text}>Tweets that contain the mis/disinformation (which lack context) have significantly more engagement than those that do not contain mis/disinformation or has the proper context.</p>
                </div>
                <div className={css_block + css_whiteC}>
                    <h3 className={css_label + ' border-b-black lg:border-b-white'}>∅ HYPOTHESIS</h3>
                    <p className={css_text}>There is no signifiant difference between the engagement of the tweets with the mis/disinformation that lacks context and the tweets that do not contain mis/disinformation or also has the proper context.</p>
                </div>
                <div className={css_block + css_whiteB}>
                    <h3 className={css_label + ' border-b-white lg:border-b-black'}>ACTION PLAN</h3>
                    <p className={css_text + ' font-bold'}>Analyze the frequency of likes and retweets of tweets regarding the Philippines’ inflation and peso (both mis/disinformation and non-mis/disinformation).</p>
                </div>
            </div>
        </section >
    );
}

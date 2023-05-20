import React, { useState, useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion, useAnimate, AnimatePresence, useAnimationControls, useInView, delay } from "framer-motion";


const ddelay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
);


export default function DataCollection() {

    const css_title_a = 'title font-bold font-A text-xblack text-6xl sm:text-6xl select-none';
    const css_box = 'flipbox grid place-content-center border-4 rounded-2xl border-xblack-3 max-w-6xl w-full h-36 py-5 px-10 gap-4';
    const css_text = ' font-B text-sm sm:text-lg text-center';
    const css_label = 'font-A font-bold text-3xl select-none';



    const refTitle = useRef();
    const titleInView = useInView(refTitle, { margin: "-20% 0px -30% 0px" });

    const titleControl = useAnimationControls();
    const descControl = useAnimationControls();
    const buttonControl = useAnimationControls();

    async function startAnimation() {
        titleControl.start({ opacity: 1, y: 0 });
        descControl.start({ opacity: 1, x: 0, transition: { delay: 0.5 } });
        buttonControl.start({ opacity: 1, y: 0, transition: { delay: 1 } });
    }
    async function endAnimation() {
        titleControl.start({ opacity: 0, y: -100 });
        descControl.start({ opacity: 0, x: -100 });
        buttonControl.start({ opacity: 0, y: -100 });
    }
    useEffect(() => {
        if (titleInView) {
            startAnimation();
        } else {
            endAnimation();
            setCardCount(0);
            setCardFlipped(0);
        }
    }, [titleInView]);





    const [cardCount, setCardCount] = useState(0);
    const [cardFlipped, setCardFlipped] = useState(0);
    const [isUpdating, setIsUpdating] = useState(false);
    const [cardsRef, animateCards] = useAnimate();

    async function addCard() {
        if (cardCount > 3) {
            if (isUpdating) return;
            setCardCount(0);
            setCardFlipped(0);
            await buttonControl.start({ opacity: 0, y: -200, transition: { duration: 0.2 } });
            await buttonControl.start({ opacity: 0, y: 100, transition: { duration: 0.01, delay: 0.01 } });
            await buttonControl.start({ opacity: 1, y: 0, transition: { duration: 0.2, delay: 0.03 } });
            return;
        }
        setIsUpdating(true);
        setCardCount((cardCount) => cardCount + 1);
        await ddelay(100);
        const cards = document.querySelectorAll('.flipbox');
        const currentCard = cards[cards.length - 1];

        await animateCards(currentCard, { opacity: 1, x: 0 });
        await animateCards(currentCard, { rotateX: 90, }, { type: 'tween', duration: 0.2, delay: 1 });
        setCardFlipped((cardCount) => cardCount + 1);
        animateCards(currentCard, { rotateX: 0, }, { duration: 0.2, });
        if (cardCount > 2) {
            setIsUpdating(false);
        }
    }


    function cardFactory(index, label, desc) {
        return (
            <AnimatePresence>{
                cardCount > index &&
                <motion.div className={css_box + (cardFlipped > index ? ' bg-xwhite' : ' bg-xblack-1')} layout key={index} initial={{ opacity: 0, x: -200, width: '1000px' }} exit={{ opacity: 0, x: -200, transition: { duration: 0.2, delay: (5 - index) * 0.01 } }}>
                    {cardFlipped > index ?
                        <div className={css_text + ' text-xblack'}>{desc}</div> : <div className={css_label + ' text-xwhite'}>{label}</div>
                    }
                </motion.div>
            }</AnimatePresence>
        );
    }

    return (
        <section className='min-h-screen'>
            <div ref={refTitle} className='flex flex-col items-center text-xblack gap-5'>
                <motion.div className={css_title_a} animate={titleControl}>How did we Collect our Data?</motion.div>
                <motion.div className={css_text} animate={descControl}>Our target are tweets that red-tagged Chad Booc and Lumad schools. The scope of our data collection is 2022, the year he was killed.</motion.div>
                <motion.div ref={cardsRef} className='cardcontainer flex flex-col gap-5'>
                    {cardFactory(0, 'Scrapping the Twitter', 'First we used the snscrapper Python library to collect tweets using the keywords: "peso" "weak" "dollar" "strong" "sandro"')}
                    {cardFactory(1, 'Scrapping the Twitter', 'First we used the snscrapper Python library to collect tweets using the keywords: "peso" "weak" "dollar" "strong" "sandro"')}
                    {cardFactory(2, 'Scrapping the Twitter', 'First we used the snscrapper Python library to collect tweets using the keywords: "peso" "weak" "dollar" "strong" "sandro"')}
                    {cardFactory(3, 'Scrapping the Twitter', 'First we used the snscrapper Python library to collect tweets using the keywords: "peso" "weak" "dollar" "strong" "sandro"')}
                </motion.div>
                <motion.div className='flex justify-center font-B font-bold text-md border-4 rounded-2xl border-xblack-3 p-2 select-none w-52' initial={{ background: '#F0F0F0' }} animate={buttonControl} onClick={addCard} layout transition={{ type: 'spring', stiffness: 700, damping: 50 }} whileHover={{ scale: 0.9, background: '#2F2F2F', color: '#F0F0F0' }}>{cardCount == 0 ? 'Press to Start!' : cardCount == 4 ? 'Done!' : 'Step ' + (cardCount + 1)}</motion.div>
            </div>
        </section >
    );
}


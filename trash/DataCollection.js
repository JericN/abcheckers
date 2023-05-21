import React, { useState, useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion, useAnimate, AnimatePresence, useAnimationControls, useInView, delay } from "framer-motion";


const ddelay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
);


export default function DataCollection() {

    const css_title = 'title font-bold font-A text-6xl sm:text-7xl select-none border-b-4 border-b-xwhite';
    const css_desc = 'font-B text-sm sm:text-md text-justify select-none';
    const css_box_a = '';
    const css_box = 'flipbox grid place-content-center border-4 rounded-2xl border-xblack-3 max-w-4xl w-full h-32 py-3 px-5 gap-4';
    const css_text = ' font-B text-sm sm:text-lg text-center select-none pointer-events-none';
    const css_label = 'font-A font-bold text-3xl select-none pointer-events-none';
    const css_button = 'flex justify-center font-B font-bold text-md border-4 rounded-2xl border-xblack-3 p-2 select-none w-52';



    const refTitle = useRef();
    const titleInView = useInView(refTitle, { margin: "-20% 0px -30% 0px" });

    const titleControl = useAnimationControls();
    const descControl = useAnimationControls();
    const buttonControl = useAnimationControls();
    const seeDataControl = useAnimationControls();

    async function startAnimation() {
        titleControl.start({ opacity: 1, y: 0 });
        descControl.start({ opacity: 1, x: 0, transition: { delay: 0.4 } });
        buttonControl.start({ opacity: 1, x: 0, transition: { delay: 0.8 } });
    }
    async function endAnimation() {
        titleControl.start({ opacity: 0, y: -100 });
        descControl.start({ opacity: 0, x: -100 });
        buttonControl.start({ opacity: 0, x: -100 });
    }
    useEffect(() => {
        if (titleInView) {
            startAnimation();
            setCardCount(4);
        } else {
            endAnimation();
            setCardCount(0);
            setCardFlipped([false, false, false, false]);
        }
    }, [titleInView]);





    const [cardCount, setCardCount] = useState(0);
    const [cardFlipped, setCardFlipped] = useState([false, false, false, false]);
    const [isUpdating, setIsUpdating] = useState(false);
    const [cardsRef, animateCards] = useAnimate();

    async function addCard() {
        if (cardCount > 3) {
            if (isUpdating) return;
            // setCardCount(0);
            const childrens = cardsRef.current.childNodes;
            childrens.forEach(async (child, index) => {
                await animateCards(child, { rotateX: 90, }, { type: 'tween', duration: 0.2, delay: index * 0.1 });
                setCardFlipped((cardFlipped) => (cardFlipped[index] = !cardFlipped[index], [...cardFlipped]));
                animateCards(child, { rotateX: 0, }, { duration: 0.2, });
            });
            return;
        }
        setIsUpdating(true);
        setCardCount((cardCount) => cardCount + 1);
        await ddelay(100);
        const cards = document.querySelectorAll('.flipbox');
        const currentCard = cards[cards.length - 1];

        await animateCards(currentCard, { opacity: 1, x: 0 });
        await animateCards(currentCard, { rotateX: 90, }, { type: 'tween', duration: 0.2, delay: 0.8 });
        setCardFlipped((cardFlipped) => (cardFlipped[cardCount] = true, [...cardFlipped]));
        animateCards(currentCard, { rotateX: 0, }, { duration: 0.2, });
        if (cardCount > 2) {
            setIsUpdating(false);
        }
    }

    async function flipCard(el) {
        const id = el.target.id;
        await animateCards(el.target, { rotateX: 90, }, { type: 'tween', duration: 0.2 });
        setCardFlipped((cardFlipped) => (cardFlipped[id] = !cardFlipped[id], [...cardFlipped]));
        animateCards(el.target, { rotateX: 0, }, { duration: 0.2, });
    }


    function cardFactory(index, label, desc) {
        return (
            <AnimatePresence>{
                cardCount > index &&
                <motion.div id={index} className={css_box + (cardFlipped[index] ? ' bg-xwhite' : ' bg-xblack-2')} layout key={index} initial={{ opacity: 0, x: -200, width: '1000px' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -200, transition: { duration: 0.2, delay: (5 - index) * 0.01 } }} whileHover={{ scale: 1.03, transition: { type: 'tween', ease: 'easeOut', duration: 0.1 } }} onClick={flipCard}>
                    {cardFlipped[index] ?
                        <div id={index} className={css_text + ' text-xblack'}>{desc}</div> : <div id={index} className={css_label + ' text-xwhite'}>{label}</div>
                    }
                </motion.div>
            }</AnimatePresence>
        );
    }

    return (
        <section className='min-h-screen my-44'>
            <div ref={refTitle} className='min-h-screen flex flex-col items-center text-xblack gap-5'>
                <motion.div className={css_title} animate={titleControl}>How did we Collect our Data?</motion.div>
                <motion.div className='flex flex-col items-center bg-xblack-2 text-xwhite border-4 rounded-2xl border-xblack-3 max-w-6xl w-full px-5 py-5 gap-4' animate={descControl}>
                    <motion.div className={css_desc}>Our target are tweets that responded to Sandro Marcos statement regarding his reasoning why the philippines is experiencing hurdles in its economic stability. The search scope is from the day of his statement oct X till the last day of the year 2022.</motion.div>
                </motion.div>

                <motion.div ref={cardsRef} className='cardcontainer flex flex-col gap-5'>
                    {cardFactory(0, 'Scrapping the Twitter', 'First we used the snscrapper python library to collect tweets using the keywords: "peso" "weak" "dollar" "strong" "sandro"')}
                    {cardFactory(1, 'Tweet Curation', 'Next we\'ve sorted out tweets that are relevant to our topic and correctly formatted each column to our desired schema, such as date format.')}
                    {cardFactory(2, 'Manual Labeling', 'Then we manually label the columns Account type, Tweet type, Content type and Rating')}
                    {cardFactory(3, 'Data Review', 'Finally the data we\'ve collected are peer-reviewed by our class to ensure the quality of our data.')}
                </motion.div>
                {/* <motion.div className={css_button} initial={{ background: '#F0F0F0' }} animate={buttonControl} onClick={addCard} layout transition={{ type: 'spring', stiffness: 700, damping: 50 }} whileHover={{ scale: 1.07, background: '#2F2F2F', color: '#F0F0F0' }} whileTap={{ scale: 0.9 }}>{cardCount == 0 ? 'Press to Start!' : cardCount == 4 ? 'Done!' : 'Step ' + (cardCount + 1)}</motion.div> */}
            </div>
            <motion.div className='min-h-screen flex flex-col items-center gap-10' animate={seeDataControl}>
                <motion.div className='font-B font-medium text-sm sm:text-7xl text-center select-none mt-20 max-w-5xl'>We collected 150 data points to be used for exploration.</motion.div>
                <motion.div className={css_button} initial={{ background: '#F0F0F0' }} whileHover={{ scale: 1.07, background: '#2F2F2F', color: '#F0F0F0' }} whileTap={{ scale: 0.9 }}> See our Data</motion.div>
            </motion.div>
        </section >
    );
}


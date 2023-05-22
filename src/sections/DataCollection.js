import React, { useState, useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import {
  motion,
  useAnimate,
  AnimatePresence,
  useAnimationControls,
  useInView,
  delay,
} from "framer-motion";

const waitFor = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function DataCollection() {
  const [titleRef, animateTitle] = useAnimate();
  const [dataRef, animateData] = useAnimate();

  const titleInView = useInView(titleRef, { margin: "-30% 0px -40% 0px" });
  const dataInView = useInView(dataRef, { margin: "-30% 0px 0% 0px" });

  async function startAnimation() {
    animateTitle(".class-container", { opacity: 1, y: 0 });
    animateTitle(".class-title", { opacity: 1, y: 0 });
    animateTitle(".class-desc", { opacity: 1, y: 0 }, { delay: 0.3 });
    const cards = titleRef.current.querySelector(".class-cards").childNodes;
    cards.forEach(async (card, index) => {
      animateTitle(card, { opacity: 1, x: 0 }, { delay: 0.5 + index * 0.1 });
    });
    animateData("div", { opacity: 1, y: 0 }, { delay: 1 });
  }

  async function endAnimation() {
    animateTitle(".class-container", { opacity: 0, y: 200 });
    animateTitle(".class-title", { opacity: 0, y: 200 });
    animateTitle(".class-desc", { opacity: 0, y: 200 });
    const cards = titleRef.current.querySelector(".class-cards").childNodes;
    cards.forEach((card, index) => {
      animateTitle(card, { opacity: 0, x: -200 });
    });
    animateData("div", { opacity: 0, y: -200 });
  }

  useEffect(() => {
    if (titleInView) {
      startAnimation();
    } else {
      endAnimation();
    }
  }, [titleInView]);

  const [cardFlipped, setCardFlipped] = useState([false, false, false, false]);
  const [cardsRef, animateCards] = useAnimate();
  async function openCard(el) {
    const obj = el.target;
    const id = el.target.id[4];

    animateCards(
      obj,
      { background: "#F0F0F0", scale: 1.01 },
      { type: "tween", duration: 0.2, ease: "easeIn" }
    );
    setCardFlipped(
      (cardFlipped) => ((cardFlipped[id] = true), [...cardFlipped])
    );
  }

  async function closeCard(el) {
    const obj = el.target;
    const id = el.target.id[4];
    await waitFor(100);

    animateCards(
      obj,
      { background: "#2F2F2F", scale: 1 },
      { type: "tween", duration: 0.2, ease: "easeIn" }
    );
    setCardFlipped(
      (cardFlipped) => ((cardFlipped[id] = false), [...cardFlipped])
    );
  }

  function cardFactory(index, label, desc) {
    return (
      <motion.div
        id={"card" + index}
        className={
          "flex justify-center items-center text-justify border-4 rounded-2xl border-xblack-3 max-w-3xl w-[1000px] h-[120px] px-10 select-none" +
          (cardFlipped[index] ? " bg-xwhite" : " bg-xblack-2")
        }
        layout
        onHoverStart={openCard}
        onHoverEnd={closeCard}
      >
        {cardFlipped[index] ? (
          <div className={"font-B text-lg pointer-events-none text-xblack"}>
            {desc}
          </div>
        ) : (
          <div
            className={
              "font-A font-bold text-3xl pointer-events-none text-xwhite"
            }
          >
            {label}
          </div>
        )}
      </motion.div>
    );
  }

  function temp() {}

  return (
    <section className="min-h-screen my-44">
      <div
        ref={titleRef}
        className="min-h-screen flex flex-col items-center text-xblack gap-5"
      >
        <div className="class-container flex flex-col justify-center items-center gap-5 border-8 border-xblack-3 rounded-2xl p-5 px-10 mb-10">
          <motion.div className="class-title font-A font-bold text-6xl sm:text-6xl select-none">
            How did we collect our data?
          </motion.div>
          <motion.div className="class-desc font-B text-sm sm:text-lg text-justify max-w-6xl select-none">
            Our target are tweets that responded to Sandro Marcos' statement
            regarding his reasoning why the Philippines is experiencing hurdles
            in its economic stability. The search scope is from the day of his
            statement on October 11 until the last day of the year 2022.
          </motion.div>
        </div>

        <div ref={cardsRef} className="class-cards flex flex-col gap-5">
          {cardFactory(
            0,
            "Scrapping the Twitter",
            'First, we used the snscrapper python library to collect tweets using the keywords "peso", "weak", "dollar", "strong", and "sandro".'
          )}
          {cardFactory(
            1,
            "Tweet Curation",
            "Next, we've sorted out tweets that are relevant to our topic and correctly formatted each column to our desired schema, such as date format."
          )}
          {cardFactory(
            2,
            "Manual Labeling",
            "Then, we manually labeled the columns Account Type, Tweet Type, Content Type and Rating."
          )}
          {cardFactory(
            3,
            "Data Review",
            "Finally, the data we've collected were peer-reviewed by our classmates to ensure the quality of our data."
          )}
        </div>
        <motion.div
          ref={dataRef}
          className="font-B mt-20 flex flex-col items-center gap-10 max-w-5xl select-none"
        >
          <motion.div className="font-medium text-3xl">
            We collected 150 data points to be used for exploration.
          </motion.div>
          <motion.div
            className="flex justify-center font-bold text-lg border-4 rounded-2xl border-xblack-3 p-2 px-10"
            initial={{ background: "#F0F0F0" }}
            whileHover={{
              scale: 1.07,
              background: "#2F2F2F",
              color: "#F0F0F0",
            }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              window.open(
                "https://github.com/JericNarte/cs132-data/blob/master/full_clean_data.csv",
                "_blank"
              );
            }}
          >
            {" "}
            See our Data
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

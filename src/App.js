import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { motion, useInView, useAnimationControls } from "framer-motion";


import Header from './sections/Header';
import Landing from './sections/Landing';
import Overview from './sections/Overview';
import Problem from './sections/Problem';
import Data from './sections/Data';
import Team from './sections/Team';



function App() {

  const [background, setbackground] = useState(false);


  const overviewRef = useRef();
  const problemRef = useRef();

  const overviewInView = useInView(overviewRef, {
    margin: "0% 0px -60% 0px"
  });
  const problemInView = useInView(problemRef, {
    margin: "-30% 0px 0% 0px"
  });
  const globalControl = useAnimationControls();

  useEffect(() => {
    function global() {
      console.log('overviewInView:', overviewInView, ', problemInView:', problemInView);
      globalControl.start({
        background: (overviewInView || problemInView) ? '#121212' : '#ffffff',
      });
    }
    global();
  }, [overviewInView, problemInView]);

  return (
    <motion.div animate={globalControl}>
      <Header />
      <Landing />
      <Overview overviewRef={overviewRef} />
      <Problem problemRef={problemRef} />
      <Data />
      <Team />
    </motion.div >
  );
}

export default App;

import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { motion, useInView, useAnimationControls } from "framer-motion";


import Header from './sections/Header';
import Landing from './sections/Landing';
import Overview from './sections/Overview';
import Problem from './sections/Problem';
import DataCollection from './sections/DataCollection';
import Data from './sections/Data';
import Team from './sections/Team';



function App() {

  const [background, setbackground] = useState(false);


  const overviewRef = useRef();
  const problemRef = useRef();

  const overviewInView = useInView(overviewRef, {
    margin: "0% 0px -40% 0px"
  });
  const problemInView = useInView(problemRef, {
    margin: "-40% 0px 0% 0px"
  });
  const globalControl = useAnimationControls();

  useEffect(() => {
    function global() {
      globalControl.start({
        background: (overviewInView || problemInView) ? '#1F1F1F' : '#F1F1F1',
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
      <DataCollection />
      <Data />
      <Team />
    </motion.div >
  );
}

export default App;

import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { motion, useInView, useAnimationControls, useAnimate } from 'framer-motion';

import Header from './pages/Header';
import Landing from './pages/01-Landing';
import Overview from './pages/02-Overview';
import Problem from './pages/03-Problem';
import DataCollection from './pages/04-DataCollection';
import DataProcessing from './pages/05-DataProcessing';
import Visualization from './pages/06-Visualization';

import Team from './pages/Team';

function App() {
	const [background, setbackground] = useState(false);

	const [overviewRef, animateOverview] = useAnimate();
	const [problemRef, animateProblem] = useAnimate();

	const overviewInView = useInView(overviewRef, {
		margin: '0% 0px -40% 0px',
	});
	const problemInView = useInView(problemRef, {
		margin: '-40% 0px 0% 0px',
	});
	const globalControl = useAnimationControls();

	useEffect(() => {
		function global() {
			globalControl.start({
				background: overviewInView || problemInView ? '#1F1F1F' : '#F1F1F1',
			});
		}
		global();
	}, [overviewInView, problemInView]);

	return (
		<>
			<Header />
			<motion.div animate={globalControl} className='flex flex-col items-center gap-96 text-xblack overflow-x-hidden'>
				<Landing />
				<Overview overviewRef={overviewRef} animateOverview={animateOverview} />
				<Problem problemRef={problemRef} animateProblem={animateProblem} />
				<DataCollection />
				<DataProcessing />
				<Visualization />
				{/* <Team /> */}
			</motion.div>
		</>
	);
}

export default App;

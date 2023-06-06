import React from 'react';

export default function NLPWhiteCard({ content }) {
	return (
		<div className='responsive-box center-column border-4 rounded-2xl border-xblack-3 p-5 gap-2'>
			<div className='responsive-text-md font-bold font-A'>{content.title}</div>
			<div className='responsive-text-xs text-justify'>{content.desc}</div>
		</div>
	);
}

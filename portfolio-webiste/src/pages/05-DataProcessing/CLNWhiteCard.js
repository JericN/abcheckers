export default function CLNWhiteCard({ content }) {
	return (
		<div className='responsive-box center-column border-4 rounded-2xl border-xblack-3 p-5 gap-2'>
			<div className='responsive-text-md font-bold font-A text-center'>{content.title}</div>
			<div className='responsive-text-xs text-justify w-full'>{content.desc}</div>
			{content.list.length > 0 && (
				<ul className='w-full responsive-text-xs' style={{ listStyleType: 'disc' }}>
					{content.list.map((item, index) => {
						return (
							<li key={index} className='ml-10'>
								{item}
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
}

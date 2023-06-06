export default function CLNWhiteCard({ content }) {
	return (
		<div className='responsive-box center-column border-4 rounded-2xl border-xblack-3 p-5 gap-2'>
			<div className='responsive-text-md font-bold font-A'>{content.title}</div>
			<div className='responsive-text-xs text-justify w-full'>{content.desc}</div>
			<table className='responsive-text-xs'>
				<tbody>
					<tr>
						<td className='text-right p-1 px-4 border-2 bg-xblack-2 text-xwhite border-xwhite'>Account Type</td>
						<td className='border-2 px-2 border-xwhite border-b-xblack-3'>0: Identified, 1: Media, 2: Anonymous</td>
					</tr>
					<tr>
						<td className='text-right p-1 px-4 border-2 bg-xblack-2 text-xwhite border-xwhite'>Location</td>
						<td className='border-2 px-2 border-xwhite border-b-xblack-3'>0: Local, 1: International, 2: Unidentified</td>
					</tr>
				</tbody>
			</table>
			<div className='responsive-text-xs text-justify w-full mt-4'>{content.desc2}</div>
		</div>
	);
}

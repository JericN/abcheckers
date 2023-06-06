import { motion } from 'framer-motion';

export default function StructTable() {
	const data = {
		'tweet URL': 'https://twitter.com/inquirerdotnet/15798156647',
		'account handle': '@inquirerdotnet',
		'account name': 'Inquirer',
		'account bio': 'Balanced News, Fearless Views. inquirer.net',
		'account type': 'Media',
		joined: '8/7',
		following: '1810',
		followers: '3731332',
		location: 'Makati City, Philippines',
		tweet: 'Marcos: “The peso is not weak, because the...',
		'tweet type': 'Text,Image,URL',
		'date posted': '11/10/2022 20:46',
		'content type': 'Rational',
		likes: '1960',
		replies: '538',
		retweets: '198',
		'quote tweets': '1013',
	};
	const data2 = {
		'tweet URL': 'https://twitter.com/inquirerd...',
		'account handle': '@inquirerdotnet',
		'account name': 'Inquirer',
		'account bio': 'Balanced News, Fearless Vie...',
		'account type': 'Media',
		joined: '8/7',
		following: '1810',
		followers: '3731332',
		location: 'Makati City, Philippines',
		tweet: 'Marcos: “The peso is not weak, beca...',
		'tweet type': 'Text,Image,URL',
		'date posted': '11/10/2022 20:46',
		'content type': 'Rational',
		likes: '1960',
		replies: '538',
		retweets: '198',
		'quote tweets': '1013',
	};
	return (
		<motion.div className='responsive-text-xs border-4 rounded-xl border-xblack-3 p-2'>
			<table>
				<tbody>
					{Object.keys(data).map((key, index) => {
						return (
							<tr key={index}>
								<td className='text-xwhite text-right p-1 px-4 border-2 bg-xblack-2 border-xwhite'>{key}</td>
								<td className='px-4 border-2 border-xwhite border-b-xblack-3'>{data2[key]}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</motion.div>
	);
}

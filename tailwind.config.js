/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx}'],
	theme: {
		extend: {
			screens: {
				'2k': '2304px',
			},
			maxWidth: {
				'8xl': '100rem',
				'screen-2k': '110rem',
			},
			gridTemplateColumns: {
				'2t': 'auto auto',
			},
			colors: {
				xwhite: {
					DEFAULT: '#F0F0F0',
				},
				xblack: {
					DEFAULT: '#0F0F0F',
					1: '#1F1F1F',
					2: '#2F2F2F',
					3: '#3F3F3F',
				},
			},
		},
	},
	plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.tsx', './src/components/**/*.tsx'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				'ibm-plex-sans': 'IBM Plex Sans',
			},
		},
	},
	plugins: [],
}

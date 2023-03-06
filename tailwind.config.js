/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				mainBlue: '#356dd4',
				mainGreen: '#00af6c',
				mainRed: '#e51f2c',
				mainOrange: '#f3930d',
				mainBlueDark: '#2553a8',
				mainGreenDark: '#009b5f',
				mainRedDark: '#bd1b25',
				mainOrangeDark: '#da840d'
			}
		},
	},
	plugins: [],
}

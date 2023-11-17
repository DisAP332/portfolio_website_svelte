/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				lg_middle: '1fr 20rem 1fr',
				lg_left: '20rem 1fr .5fr',
				lg_right: '.5fr 1fr 20rem'
			},
			spacing: {
				'10vw': '10vw'
			}
		}
	},
	plugins: []
};

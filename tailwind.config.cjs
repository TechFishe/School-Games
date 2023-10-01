/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				pitchBlack: "#171D1C",
				midnight: "#1B2021",
              	snow: "#F9F4F5",
              	moonstone: "#63B0CD"
			},
			height: {
				"18": "4.5rem",
				"menu": "calc(100vh - 4rem)"
			},
			margin: {
				"18": "4.5rem"
			}
		},
	},
	plugins: [],
}

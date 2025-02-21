/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  colors: {
			primary: "#007AFF",
			secondary: "#34C759",
		  },
		  borderRadius: {
			none: "0px",
			sm: "4px",
			DEFAULT: "8px",
			md: "12px",
			lg: "16px",
			xl: "20px",
			"2xl": "24px",
			"3xl": "32px",
			full: "9999px",
			button: "8px",
		  },
		},
	  },
	plugins: [require("daisyui")],
}

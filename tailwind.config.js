/** @type {import('tailwindcss').Config} */
module.exports = {
	// NOTE: Update this to include the paths to all of your component files.
	content: ["./app/**/*.{js,jsx,ts,tsx}"],
	presets: [require("nativewind/preset")],
	theme: {
		extend: {
			colors: {
				blue: "#295791",
				"light-blue": "#AEC0D5",
				orange: "#E87400",
				green: "#14AE5C",
			},
			fontFamily: {
				raleway: ["Raleway-Regular", "sans-serif"],
				"raleway-bold": ["Raleway-Bold", "sans-serif"],
				"raleway-black": ["Raleway-Black", "sans-serif"],
				"raleway-extrabold": ["Raleway-ExtraBold", "sans-serif"],
				"raleway-light": ["Raleway-Light", "sans-serif"],
				"raleway-medium": ["Raleway-Medium", "sans-serif"],
				"raleway-semibold": ["Raleway-SemiBold", "sans-serif"],
				"raleway-thin": ["Raleway-Thin", "sans-serif"],
				"rem-black": ["REM-Black", "sans-serif"],
				"rem-bold": ["REM-Bold", "sans-serif"],
				"rem-light": ["REM-Light", "sans-serif"],
				"rem-medium": ["REM-Medium", "sans-serif"],
				"rem-semibold": ["REM-SemiBold", "sans-serif"],
				"rem-thin": ["REM-Thin", "sans-serif"],
				"rem-extrabold": ["REM-ExtraBold", "sans-serif"],
				"rem-extralight": ["REM-ExtraLight", "sans-serif"],
				rem: ["REM-Regular", "sans-serif"],
			},
		},
	},
	plugins: [],
};

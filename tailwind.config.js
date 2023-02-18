/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
      },
    },
  },
  plugins: [],
  screens: {
    xs: { max: "320px" }, // Mobile (iPhone 3 - iPhone XS Max).
    sm: { min: "321px", max: "897px" }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
    md: { min: "898px", max: "1199px" }, // Tablet (matches max: iPad Pro @ 1112px).
    lg: { min: "1200px" }, // Desktop smallest.
    xl: { min: "1159px" }, // Desktop wide.
    xxl: { min: "1359px" }, // Desktop widescreen.
  },
};

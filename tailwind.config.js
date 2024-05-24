/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        radio : ["Radio Canada Big", "sans-serif"],
        titan : ["Titan One", "sans-serif"],
        paytone : ["Paytone One", "sans-serif"],
      }
    },
  },
  plugins: [],
}


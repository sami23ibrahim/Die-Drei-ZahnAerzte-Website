/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        customWhite: '#ecfeff', // Add your custom color here
        customPink:'#f496bf',
        customOrange:'#f68b1f',
        customRed: '#f15a38'
      },
    },
  },
  plugins: [],
};

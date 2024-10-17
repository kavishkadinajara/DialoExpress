/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dialogRed: '#D2232A',  // Dialog brand color
        dialogBlack: '#000000',
        dialogWhite: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
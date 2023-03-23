/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      jet: "#1B1A17",
      orange: "#EC994B",
      platinum: "#D9D9D9",
      indigo: "#284B63",
      gold: "#F0A500",
    },
    extend: {},
  },
  plugins: [],
}

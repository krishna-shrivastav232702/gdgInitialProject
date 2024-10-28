const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: 'rgb(5, 10, 48)',
        current:"#006C67",
        gray:"#95A3B3",
        marine:"#1CFEBA",
        olive:"#414535",
        navyBlue:"#000080"
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [flowbite.plugin()],
}


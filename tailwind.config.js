/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./pages/**/*.{html,js}",
    "./index.html",
  ],
  theme: {
    colors: {
      merahbg: '#ed1f1f',
      white : '#ffffff',
      skyblue : '#d2e2fc',
      item : '#000000',
      merahpink : '#FFEEEE',
      igcolor : '#FDB353',
      fbcolor : '#1877F2',
      xtwittercolor : '#E0E0E0',
      gmailcolor : '#FFC1BC',
      linkcolor : '#E6E6E6',
      skeletonhover : '#D7D7D7',

    },
    extend: {
      fontFamily :{
        kaisei: ['"Kaisei Decol"', 'sans-serif'],
      },
      backgroundImage: {
        'bg-home': 'Home.png',
      },
    },
  },
  plugins: [],
}


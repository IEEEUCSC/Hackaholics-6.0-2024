/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#782A84',
        secondary: '#18113A',
        tertiary: '#575254',
      },
      fontFamily: {
        'pfont': ['source-sans-pro'],
        'sfont': ['raleway'],
    },
    letterSpacing: {
      widestone: '.3em',
    },
  },
  plugins: [],
}
}

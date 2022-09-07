/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'Mobile': { 'min': '375px', 'max': '600px' },

    },
    colors: {
      // PRIMARY
      // TEXT
      'Very-dark-desaturated-blue': 'hsl(238, 29%, 16%)',
      'Soft-red': 'hsl(14, 88%, 65%)',
      'Soft-violet': 'hsl(273, 75%, 66%)',

      // BACKGROUND GRADIENT
      'Soft-violet': 'hsl(273, 75%, 66%)',
      'Soft-blue': 'hsl(240, 73%, 65%)',
      // 'white': "#fffff",


      // NEUTRAL
      //TEXT
      'Very-dark-grayish-blue': 'hsl(237, 12%, 33%)',
      'Dark-grayish-blue': 'hsl(240, 6%, 50%)',

      // DIVIDERS
      'Light-grayish-blue': 'hsl(240, 5%, 91%)',

    },
    fontSize: {
      'ms': '12px',
    },
    fontFamily: {
      'kumbh': ['Kumbh Sans', 'sans-serif'],


    },
    fontWeight: {
      'ms': '400',
      'lg': '700',
    },
    extend: {},
  },
  plugins: [],
}

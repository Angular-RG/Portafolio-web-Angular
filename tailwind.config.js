module.exports = {
  purge: ['./src/**/*.{html,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        deepBlue: '#111827',
        darkPurple: '#201127',
        burgundy: '#271118',
        darkBrown: '#272011',
        forestGreen: '#182711',
        deepGreen: '#112720',
        midnightBlue: '#1F2937',
        royalPurple: '#2D1F37',
        wineRed: '#371F29',
        darkChocolate: '#372D1F',
        mossGreen: '#29371F',
        seaGreen: '#1F372D',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

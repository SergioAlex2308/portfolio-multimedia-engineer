/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'header': ['Bebas Neue', 'cursive'],
      'body': ['Roboto Condensed', 'sans-serif'],
    },
    colors: {
      'blue': {
        100: '#17F0FF',
        200: '#00E8F8',
        300: '#00CFDD',
        400: '#00B6C2',
        500: '#00A0AB',
      },
      'gray': {
        100: '#FAFAFA',
        200: '#E4E4E4',
        300: '#878787',
        400: '#484848',
        500: '#202020',
        600: '#101010',
      }
    },
    screens: {
      'phone': '375px',
      // => @media (min-width: 640px) { ... }

      'tablet': '768px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1920px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      backgroundImage: {
        'photo-main-large': "url('./assets/Images/Background/photo-background.jpg')",
        'photo-main-small': "url('./assets/Images/Background/photo-background-small.jpg')",
      },
      dropShadow: {
        '2xl': [
          '0px 172px 69px rgba(0, 0, 0, 0.03)',
          '0px 97px 58px rgba(0, 0, 0, 0.1)',
          '0px 43px 43px rgba(0, 0, 0, 0.17)',
          '0px 11px 24px rgba(0, 0, 0, 0.2)',
          '0px 0px 0px rgba(0, 0, 0, 0.2)',
        ]
      }
    }
  },
  plugins: [],
})

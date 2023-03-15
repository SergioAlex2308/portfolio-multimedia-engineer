/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'header':['Bebas Neue', 'cursive'],
      'body':['Roboto Condensed', 'sans-serif'],
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
    extend: {
      backgroundImage: {
        'photo-main': "url('./assets/Images/photo-background.jpg')",
      }
    }
  },
  plugins: [],
}

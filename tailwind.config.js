/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        heroh1: 'clamp(2rem, 9vw, 6rem)',
        h1: 'clamp(2.2rem, 8vw, 4rem)',
        h2: 'clamp(2.2rem, 8vw, 4rem)'

      },
      boxShadow: {
        lg: '2px 2px 10px -2px #ddd'
      },
      fontFamily: {
        'nunito': 'Nunito, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
        'quicksand': 'Quicksand, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
        'delius': 'Delius'
      },
    },
  },
  darkMode: "class",
  plugins: [],
}
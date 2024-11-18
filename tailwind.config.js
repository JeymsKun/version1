/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./App.{js,jsx,ts,tsx}", "./Apps/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          'primary': '#28B805',
          'secondary': '#4ED25B',
          'tertiary': '#12C824',
          'accent': '#4BFF5D',
        },
        fontFamily: {
          'poppins': ['Poppins', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
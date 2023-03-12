/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        '2t': '200px auto'
      }
    },
  },
  plugins: [],
};
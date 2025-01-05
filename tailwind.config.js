/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#111',
        'secondary': '#F5F5F0'
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./src/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'bgblue': '#0f172a',
      },
    },
  },
  plugins: [],
}

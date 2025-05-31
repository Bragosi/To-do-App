/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkGray:'#1f1e1e',
        wrapper:'#353434',
        purple : '#6A0DAD',
      },
    },
  },
  plugins: [],
}
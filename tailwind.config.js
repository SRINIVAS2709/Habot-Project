/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      white: '#FFFFFF',
      naviblue: '#072F57',
      green: '#00732F',
      orange:'#E7760D',
      lightOrange: '#EB7150',
      lightgrey: '#3E3E3E',
      black: '#000000',
    },
    fontFamily:{
      poppins: ['Poppins', 'sans-serif'],
      inter: ['inter', 'sans-serif']
    },
    extend: {
    },
  },
  plugins: [],
}
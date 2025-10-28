/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    fontFamily: {
      graphik: ['Graphik', 'sans-serif'],
      'graphik-bold': ['Graphik-bold', 'sans-serif'],
    },
    colors: {
      primary: '#2091F9',
      text: '#252B42',
      secondaryText: '#374754',
      darkBackground: '#252B42',
    },
    screens: {
      xs: '400px',
    },
  },
  plugins: [],
}

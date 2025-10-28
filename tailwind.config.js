export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,html}'],

  theme: {
    // define variáveis CSS no :root
    extend: {
      '--color-primary': '#2091F9',
      '--color-text': '#252B42',
      '--color-secondaryText': '#374754',
      '--color-darkBackground': '#252B42',
      '--font-graphik': 'Graphik, sans-serif',
      '--font-graphik-bold': 'Graphik-bold, sans-serif',
      '--breakpoint-xs': '400px',
    },
  },

  // tailwind v4 não precisa de plugins normalmente
}

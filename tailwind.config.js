import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'gunmetal': '#122C34',
        'indigo-dye': '#224870',
        'marian-blue': '#2A4494',
        'picton-blue': '#4EA5D9',
        'robin-egg-blue': '#44CFCB',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['Montserrat', ...defaultTheme.fontFamily.sans],
      }
    }
  },
  plugins: []
}
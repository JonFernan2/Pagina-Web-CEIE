import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        negro:        '#1d1e20',
        'negro-suave': '#2D2D2D',
        dorado:       '#6493b5',
        'dorado-claro': '#E8C84A',
        crema:        '#C7C2ba',
        'crema-oscura': '#EDE9E0',
        'gris-medio': '#6B6B6B',
        'gris-claro': '#E5E3DE',
      },
      fontFamily: {
        display: ['Made Tommy', 'system-ui', 'sans-serif'],
        body:    ['Roboto', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '2px',
        card:    '4px',
      },
      maxWidth: {
        ceie: '1200px',
      },
    },
  },
  plugins: [],
}
export default config

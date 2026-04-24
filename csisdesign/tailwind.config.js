
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          navy: '#0F1D3A',
          dark: '#0A1628',
          blue: '#2563EB',
          gold: '#C9A84C',
          ice: '#F1F5F9',
          slate: '#475569',
          border: '#E2E8F0'
        }
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, #E2E8F0 1px, transparent 1px), linear-gradient(to bottom, #E2E8F0 1px, transparent 1px)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

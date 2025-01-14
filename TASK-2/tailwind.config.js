/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        secondary: '#1E293B',
        accent: '#38BDF8',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      height: {
        'screen-90': '90vh',
      }
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'apple-gray': '#f5f5f7',
        'apple-blue': '#0071e3',
      },
      fontFamily: {
        'sf-pro-display': ['SF Pro Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
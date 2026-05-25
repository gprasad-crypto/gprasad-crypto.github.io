/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          orange: '#F4845F',
          green:  '#6BBF7A',
          pink:   '#E882B4',
          blue:   '#6EB5FF',
        },
      },
    },
  },
  plugins: [],
}


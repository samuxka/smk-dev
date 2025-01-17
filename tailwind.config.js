/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from 'tailwind-scrollbar'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Bai Jamjuree', 'Montserrat', 'sans-serif']
      },
      animation: {
        wave: 'wave 0.5s 2'
      },
      keyframes: {
        wave: {
          '0%, 100%': {
            transform: 'rotate(-12deg)'
          },
          '50%': {
            transform: 'rotate(-30deg)'
          }
        }
      }
    },
  },
  plugins: [tailwindScrollbar],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx,ts,jsx,js}"],
  theme: {
    fontFamily:{
      'Lato':['Lato-Bold',]
    },
    extend: {
      keyframes: {
        smartRotate: {
          '0%, 100%': { transform: 'rotate(180deg)' },
        }
      },
      animation: {
        smartRotate: 'smartRotate 1s ease-in-out ',
        animatePosition: 'animatePosition 1s ease-in-out',
        animateBorderColor:'animateBorderColor 1s ease-in-out'
      }
    },
  },
  plugins: [],
}

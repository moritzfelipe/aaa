const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {    
        'left': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(-252.1%)' },
        },     
      },
      animation: {
        'left': 'left 15s linear infinite',  
        'left-x2': 'left 12s linear infinite', 
        'left-x3': 'left 8s linear infinite',     
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')  
  ],
}

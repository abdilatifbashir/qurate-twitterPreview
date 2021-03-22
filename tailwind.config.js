const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{

        twitterBlue:colors.lightBlue


      },
      inset:{
        "70":"39rem",
        "66":"16rem",
        "120":"30rem",
        "21":"6rem"
      },
      height: {
        "96": '24rem',
        "92": '22rem',
        lg: '24px',
        xl: '48px',
       },
       width: {
        '1/4': '40%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

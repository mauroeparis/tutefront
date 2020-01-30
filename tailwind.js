module.exports = {
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway"]
      },
      margin: {
        '1/2': '50%',
        '1/4': '25%',
        '1/3': '33.333333%',
        '-1/2': '-50%',
        '-1/4': '-25%',
        '-1/3': '-33.333333%'
      },
      maxHeight: {
       '40': '10rem',
       '48': '12rem',
       '56': '14rem',
       '64': '16rem',
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    display: ['responsive', 'hover', 'group-hover'],
    borderColor: ['hover'],
  }
}

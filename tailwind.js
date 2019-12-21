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
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover'],
    display: ['responsive', 'hover', 'group-hover'],
  }
}

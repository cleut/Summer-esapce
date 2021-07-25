const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  theme: {
    extend: {
      fontFamily: {
        'hk': ['HK-Grotesk', 'sans-serif']
      },
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
        yellow: colors.yellow,
        rose: colors.rose,
      },
    },
  },
  spacing: {
    'xxl': '80rem',
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

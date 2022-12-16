/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",],
  theme: {
    extend: {
      colors: {
        'pr-red': 'hsl(7, 99%, 70%)',
        'pr-yellow': 'hsl(51, 100%, 49%)',
        'pr-cyan': 'hsl(167, 40%, 24%)',
        'pr-dark-blue': 'hsl(198, 62%, 26%)',
        'pr-dark-cyan': 'hsl(168, 34%, 41%)',
        'nt-dark-blue': 'hsl(212, 27%, 19%)',
        'nt-dark-grayish-blue': 'hsl(232, 10%, 55%)',
        'nt-grayish-blue': 'hsl(210, 4%, 67%)',
      },
      fontFamily: {
        'barlow': ['Barlow', 'sans-serif'],
        'fraunces': ['Fraunces', 'serif'],
      }
    },
  },
  plugins: [],
}

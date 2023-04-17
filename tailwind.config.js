/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#1D003D',
          200: '#260052',
          300: '#440092',
          400: '#651DB8',
          500: '#995AE0',
          600: '#CEA3FF',
          700: '#E4CCFF',
          800: '#EDDDFF',
        },
        card: '#110F14',
        accents: '#DE78F8',
        input: '#100F12',
      },
      backgroundImage: {
        CTA: 'linear-gradient(295.49deg, #42008F 16.14%, #8533B8 83.86%)',
        gradient:
          'linear-gradient(315deg, #22093F 0%, #611CB8 33.85%, #A94EE4 77.08%, #DE78F8 100%)',
        cardGradient: 'linear-gradient(180deg, #1C0529 0%, #000000 100%)',
      },
      fontFamily: {
        sans: ['var(--font-inter-tight)'],
      },
      screens: {
        md: '840px',
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
  plugins: [],
};

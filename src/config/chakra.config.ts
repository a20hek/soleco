import { extendTheme } from '@chakra-ui/react';
const colors = require('tailwindcss/colors');

export const theme = extendTheme({
  breakpoints: {
    md: '840px',
  },
  colors: {
    primary: '#14F195',
    neutral: colors.neutral,
  },
  styles: {
    global: () => ({
      body: {
        bg: '#fff',
      },
    }),
  },
});

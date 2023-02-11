import { extendTheme } from '@chakra-ui/react';
const colors = require('tailwindcss/colors');

export const theme = extendTheme({
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

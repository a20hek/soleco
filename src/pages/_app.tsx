import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '@/components/Navbar';
import { Inter } from '@next/font/google';
import { theme } from '@/config/chakra.config';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <div className={`${inter.variable} font-sans min-h-screen bg-[#030105]`}>
        <Navbar />
        <Component {...pageProps} />
        <Analytics />
      </div>
    </ChakraProvider>
  );
}

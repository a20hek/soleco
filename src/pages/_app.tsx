import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '@/components/Navbar';
import { Inter, Inter_Tight } from '@next/font/google';
import { theme } from '@/config/chakra.config';
import { Analytics } from '@vercel/analytics/react';
import Footer from '@/components/Footer';

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <div
        className={`${interTight.variable} font-sans min-h-screen bg-[#030007]`}
      >
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        <Analytics />
      </div>
    </ChakraProvider>
  );
}

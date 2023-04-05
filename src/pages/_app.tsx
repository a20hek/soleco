import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '@/components/Layout/Navbar';
import { Inter, Inter_Tight } from '@next/font/google';
import { theme } from 'config/chakra.config';
import { Analytics } from '@vercel/analytics/react';
import Footer from '@/components/Layout/Footer';

const interTight = Inter({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <div
        className={`${interTight.variable} min-h-screen bg-[#030007] font-sans`}
      >
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        <Analytics />
      </div>
    </ChakraProvider>
  );
}

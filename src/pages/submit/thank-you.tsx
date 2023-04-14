import React from 'react';
import { ThankYouIcon } from '@/svgs/submit';
import Head from 'next/head';

export default function Thanks() {
  return (
    <>
      <Head>
        <title>Thank You</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto mt-36 min-h-screen max-w-[600px] bg-black md:mt-36">
        <ThankYouIcon />
      </div>
    </>
  );
}

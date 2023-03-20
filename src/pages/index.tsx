import Head from 'next/head';

import { Box, Button, Divider, Flex, Heading, Image } from '@chakra-ui/react';
import SearchIcon from '@/dynamic/SearchIcon';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Twitter from '@/dynamic/socials/twitter';
import Github from '@/dynamic/socials/github';
import Telegram from '@/dynamic/socials/telegram';
import Reddit from '@/dynamic/socials/reddit';
import Discord from '@/dynamic/socials/discord';
import Youtube from '@/dynamic/socials/youtube';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Solana | Ecosystem</title>
        <meta name="description" content="by abhwshek" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-[1080px] mx-auto">
        <div className="flex p-32 items-center">
          <div className="w-1/2">
            <p className="text-4xl font-bold text-white">
              Meet the whole community
            </p>
            <p className="text-[#99969d] text-lg mt-5">
              Join a fast-growing community of developers and innovators
              connected all over the world, building the new era of the
              internet.
            </p>
          </div>

          <Flex className="w-1/2 mx-auto" justifyContent="space-around">
            <Flex flexDir="column" gap="16px">
              <Flex>
                <Twitter />
                <p className="text-lg font-semibold text-white ml-3">Twitter</p>
              </Flex>
              <Flex>
                <Github />
                <p className="text-lg font-semibold text-white ml-3">Github</p>
              </Flex>
              <Flex>
                <Telegram />
                <p className="text-lg font-semibold text-white ml-3">
                  Telegram
                </p>
              </Flex>
            </Flex>

            <Flex flexDir="column" gap="16px">
              <Flex>
                <Reddit />
                <p className="text-lg font-semibold text-white ml-3">Reddit</p>
              </Flex>
              <Flex>
                <Discord />
                <p className="text-lg font-semibold text-white ml-3">Discord</p>
              </Flex>
              <Flex>
                <Youtube />
                <p className="text-lg font-semibold text-white ml-3">Youtube</p>
              </Flex>
            </Flex>
          </Flex>
        </div>
      </div>
    </div>
  );
}

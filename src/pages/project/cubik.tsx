import { Button, Image } from '@chakra-ui/react';
import React from 'react';
import { Discord, Twitter, Telegram } from '@/dynamic/socials';
import LinkArrow from '@/dynamic/LinkArrow';

export default function Project() {
  return (
    <div>
      <div className="mx-auto w-[94%] max-w-[1128px] py-44">
        <div className="flex justify-between">
          <div className="flex items-center gap-5">
            <Image
              src="/cubik.png"
              alt="/"
              className="h-24 w-24 rounded-full"
            />
            <div>
              <div className="mt-2 text-2xl font-semibold text-white">
                Cubik
              </div>
              <div className="mt-1 text-neutral-300">
                Revolutionary Secure Messaging & Trading Dapp powered by Solana
              </div>
              <div className="mt-4 flex gap-4">
                <Discord />
                <Twitter />
                <Telegram />
              </div>
            </div>
          </div>
          <Button
            rounded="full"
            fontSize="18px"
            color="#fff"
            fontWeight="semibold"
            py={4}
            px={16}
            size="lg"
            rightIcon={<LinkArrow />}
            bg="linear-gradient(315deg, #22093F 0%, #611CB8 33.85%, #A94EE4 77.08%, #DE78F8 100%)"
          >
            Visit
          </Button>
        </div>
        <div className="mt-6 flex gap-4">
          <div className="h-fit w-fit rounded-md bg-neutral-900 py-1 px-3">
            <p className="text-xs text-neutral-300">DeFi</p>
          </div>
          <div className="h-fit w-fit rounded-md bg-neutral-900 py-1 px-3">
            <p className="text-xs text-neutral-300">NFTs</p>
          </div>
          <div className="h-fit w-fit rounded-md bg-neutral-900 py-1 px-3">
            <p className="text-xs text-neutral-300">Games</p>
          </div>
          <div className="h-fit w-fit rounded-md bg-neutral-900 py-1 px-3">
            <p className="text-xs text-neutral-300">Wallet</p>
          </div>
        </div>
        <div>
          <div className="mt-10 text-xl font-semibold text-white">
            About Secretum
          </div>
          <div className="mt-2 text-neutral-400">
            Meet Secretum — decentralised, encrypted messaging and OTC trading
            dApp. Secretum is on a mission to make decentralized messaging and
            trading seamless. It is DeFi and metaverse compatible, being
            positioned as the go-to solution for the Web 3.0 era. Secretum
            offers: validation through wallet, OTC, P2P trading (including NFTs)
            & access to smart public channels
          </div>

          <div className="mt-10 text-xl font-semibold text-white">
            Screenshots
          </div>
          <div className="custom-scrollbar mt-4 flex flex-nowrap overflow-x-scroll text-white">
            <div className="flex flex-nowrap gap-4 whitespace-nowrap">
              <Image
                src="cubik-cover.png"
                alt="/"
                className="mb-6 h-72 w-[28rem] rounded object-cover"
              />
              <Image
                src="cubik-cover.png"
                alt="/"
                className="mb-6 h-72 w-[28rem] rounded object-cover"
              />
              <Image
                src="cubik-cover.png"
                alt="/"
                className="mb-6 h-72 w-[28rem] rounded object-cover"
              />
              <Image
                src="cubik-cover.png"
                alt="/"
                className="mb-6 h-72 w-[28rem] rounded object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

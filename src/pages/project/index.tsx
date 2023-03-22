import { Button, Image } from '@chakra-ui/react';
import React from 'react';
import { Discord, Twitter, Telegram } from '@/dynamic/socials';
import LinkArrow from '@/dynamic/LinkArrow';

export default function Project() {
  return (
    <div>
      <div className="max-w-[1128px] mx-auto py-44">
        <div className="flex justify-between">
          <div className="flex items-center gap-5">
            <Image
              src="/cubik.png"
              alt="/"
              className="h-24 w-24 rounded-full"
            />
            <div>
              <div className="text-white font-semibold text-2xl mt-2">
                Cubik
              </div>
              <div className="text-neutral-300 mt-1">
                Revolutionary Secure Messaging & Trading Dapp powered by Solana
              </div>
              <div className="flex gap-4 mt-4">
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
          <div className="bg-neutral-900 rounded-md py-1 px-3 h-fit w-fit">
            <p className="text-neutral-300 text-xs">DeFi</p>
          </div>
          <div className="bg-neutral-900 rounded-md py-1 px-3 h-fit w-fit">
            <p className="text-neutral-300 text-xs">NFTs</p>
          </div>
          <div className="bg-neutral-900 rounded-md py-1 px-3 h-fit w-fit">
            <p className="text-neutral-300 text-xs">Games</p>
          </div>
          <div className="bg-neutral-900 rounded-md py-1 px-3 h-fit w-fit">
            <p className="text-neutral-300 text-xs">Wallet</p>
          </div>
        </div>
        <div>
          <div className="text-white font-semibold text-xl mt-10">
            About Secretum
          </div>
          <div className="text-neutral-400 mt-2">
            Meet Secretum — decentralised, encrypted messaging and OTC trading
            dApp. Secretum is on a mission to make decentralized messaging and
            trading seamless. It is DeFi and metaverse compatible, being
            positioned as the go-to solution for the Web 3.0 era. Secretum
            offers: validation through wallet, OTC, P2P trading (including NFTs)
            & access to smart public channels
          </div>

          <div className="text-white font-semibold text-xl mt-10">
            Screenshots
          </div>
          <div className="custom-scrollbar overflow-x-scroll text-white flex flex-nowrap mt-4">
            <div className="whitespace-nowrap flex flex-nowrap gap-4">
              <Image
                src="cubik-cover.png"
                alt="/"
                className="object-cover w-[28rem] h-72 rounded mb-6"
              />
              <Image
                src="cubik-cover.png"
                alt="/"
                className="object-cover w-[28rem] h-72 rounded mb-6"
              />
              <Image
                src="cubik-cover.png"
                alt="/"
                className="object-cover w-[28rem] h-72 rounded mb-6"
              />
              <Image
                src="cubik-cover.png"
                alt="/"
                className="object-cover w-[28rem] h-72 rounded mb-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

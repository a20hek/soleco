import Head from 'next/head';

import { Box, Button, Divider, Flex, Heading, Image } from '@chakra-ui/react';
import SearchIcon from '@/dynamic/SearchIcon';
import { useEffect, useRef, useState } from 'react';
import { categories } from '@/constants/categories';
import { useRouter } from 'next/router';
import Twitter from '@/dynamic/socials/twitter';
import Github from '@/dynamic/socials/github';
import Telegram from '@/dynamic/socials/telegram';
import Reddit from '@/dynamic/socials/reddit';
import Discord from '@/dynamic/socials/discord';
import Youtube from '@/dynamic/socials/youtube';
import { AppCard } from '@/components/AppCard';
import { LendingCard } from '@/components/LendingCard';
import { NFTCard } from '@/components/NFTCard';
import { DeFiCard } from '@/components/DeFiCard';
import { CategoryCard } from '@/components/CategoryCard';

export default function Home() {
  const [stuck, setStuck] = useState<boolean>(false);
  const [header, setHeader] = useState<string>();

  const elementRef = useRef<HTMLDivElement>(null);
  const defiRef = useRef<HTMLDivElement>(null);
  const marketRef = useRef<HTMLDivElement>(null);
  const lendingRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<HTMLDivElement>(null);
  const eventRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('right');

  const sections = [
    { id: 'defi', ref: defiRef },
    { id: 'market', ref: marketRef },
    { id: 'lending', ref: lendingRef },
    { id: 'app', ref: appRef },
    { id: 'event', ref: eventRef },
  ];

  const handleLinkScroll = () => {
    const scrollPosition = window.pageYOffset;
    let activeSection = '';

    sections.forEach((section) => {
      if (section.ref.current) {
        const sectionTop = section.ref.current.offsetTop;
        const sectionBottom =
          section.ref.current.offsetTop + section.ref.current.offsetHeight;

        if (
          scrollPosition >= sectionTop - 500 &&
          scrollPosition < sectionBottom
        ) {
          activeSection = section.id;
        }
      }
      setHeader(activeSection || '');
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleLinkScroll);

    return () => {
      window.removeEventListener('scroll', handleLinkScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        elementRef.current &&
        elementRef.current.getBoundingClientRect().top <= 72
      ) {
        setStuck(true);
      } else {
        setStuck(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (direction === 'right') {
        setCurrentIndex((currentIndex + 1) % categories.length);
      } else {
        setCurrentIndex(
          (currentIndex - 1 + categories.length) % categories.length
        );
      }
      if (currentIndex === categories.length - 1) {
        setDirection('left');
      }
      if (currentIndex === 0) {
        setDirection('right');
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [currentIndex, direction, categories.length]);

  const images = [];
  for (let i = 0; i < 8; i++) {
    images.push(<Image key={i} src={`img${i + 1}.png`} />);
  }

  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Solana | Ecosystem</title>
        <meta name="description" content="by abhwshek" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-[1080px] mx-auto">
        <div className="flex justify-between my-3">
          <div className="relative w-full max-w-[650px]">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <SearchIcon />
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-neutral-900 border border-neutral-800  text-white block w-full pl-12 p-2.5 rounded-[40px] h-[54px] placeholder-neutral-500 transition-all"
              placeholder="Search Projects..."
              required
            />
          </div>
          <div className="flex max-w-full">
            <Button
              h="54px"
              size="lg"
              variant="outline"
              fontSize="14px"
              borderRadius="40px"
              borderColor="primary"
              color="primary"
              px="40px"
              w="auto"
              _hover={{ bg: 'primary', color: 'black' }}
            >
              SUBMIT A PROJECT
            </Button>

            <Divider
              orientation="vertical"
              mx="16px"
              borderColor="neutral.600"
            />
            <a href="https://twitter.com/abhwshek">
              <Image
                src="/dp.jpg"
                alt="profile"
                width="54"
                height="54"
                className="object-cover"
                borderRadius="full"
              />
            </a>
          </div>
        </div>
      </div>
      <Box
        backgroundImage="url('hero.png')"
        h="calc(100vh - 150px)"
        bgRepeat="none"
        bgPosition="center"
        bgSize="cover"
      >
        <div className="max-w-[1080px] mx-auto my-auto h-full flex flex-col justify-center">
          <h1 className="font-semibold text-7xl max-w-[800px] text-white my-8">
            Discover the hottest projects on Solana
          </h1>
          <Button
            mt={8}
            mb={20}
            fontSize="18px"
            bg="primary"
            px={10}
            py={5}
            h="64px"
            borderRadius="40px"
            size="lg"
            w="fit-content"
            boxShadow="inset 0px 0px 0px 1px #14F195"
            _hover={{
              bg: 'black',
              color: 'primary',
            }}
            onClick={() => {
              router.push('/#browse');
            }}
          >
            EXPLORE THE ECOSYSTEM
          </Button>
        </div>
      </Box>

      <div
        className={`sticky top-[72px] z-10 py-8 bg-black transition-all ease-in ${
          stuck ? 'drop-shadow-[0_6px_60px_rgba(153,69,255,0.25)] ' : ''
        }`}
        ref={elementRef}
        id="browse"
      >
        <div className="flex text-neutral-400 justify-between max-w-[1080px] mx-auto">
          <p
            className={`${
              header === 'defi' ? 'text-white' : ''
            } transition-all duration-100 ease-in-out cursor-pointer`}
          >
            DeFi Projects
          </p>
          <p
            className={`${
              header === 'market' ? 'text-white' : ''
            } transition-all duration-100 ease-in-out cursor-pointer`}
          >
            Marketplaces
          </p>
          <p
            className={`${
              header === 'lending' ? 'text-white' : ''
            } transition-all duration-100 ease-in-out cursor-pointer`}
          >
            Lending Protocols
          </p>
          <p
            className={`${
              header === 'app' ? 'text-white' : ''
            } transition-all duration-100 ease-in-out cursor-pointer`}
          >
            Apps
          </p>
          <p
            className={`${
              header === 'event' ? 'text-white' : ''
            } transition-all duration-100 ease-in-out cursor-pointer`}
          >
            Events
          </p>
        </div>
      </div>
      <div className="max-w-[1080px] mx-auto bg-black">
        <div className="flex justify-between mt-24 items-center">
          <h2 className="text-4xl text-white font-bold">Browse by category</h2>
          <Button
            h="54px"
            size="lg"
            variant="outline"
            fontSize="14px"
            borderRadius="40px"
            borderColor="white"
            color="white"
            px="40px"
            w="auto"
            _hover={{ bg: 'white', color: 'black' }}
          >
            VIEW ALL
          </Button>
        </div>
        <div className="custom-scrollbar overflow-x-scroll text-white flex flex-nowrap">
          <div className="w-fit whitespace-nowrap flex flex-nowrap">
            {categories.map((category, index) => {
              return (
                <CategoryCard
                  key={index}
                  title={category.title}
                  icon={category.icon}
                  num={category.num}
                />
              );
            })}
          </div>
        </div>
        <h1 className="text-center font-semibold text-neutral-300 mt-56 tracking-[.2em]">
          TRENDING PROJECTS THIS MONTH
        </h1>

        <div className=" flex items-center justify-center relative">
          <div className="w-[200%] h-[300px] border-gray-600 overflow-hidden relative">
            <Box
              bg="linear-gradient(90deg, #000000 0%, rgba(6, 3, 10, 0) 100%)"
              position="absolute"
              h="300px"
              w="200px"
              top="0"
              left="0"
              zIndex={5}
            />
            <div className="w-[200%] flex items-center h-[300px] justify-around absolute left-0 animate gap-20 whitespace-nowrap flex-nowrap">
              {images}
            </div>
            <Box
              bg="linear-gradient(90deg, #000000 0%, rgba(6, 3, 10, 0) 100%)"
              position="absolute"
              h="300px"
              w="200px"
              top="0"
              right="0"
              zIndex={5}
              transform="matrix(-1, 0, 0, 1, 0, 0)"
            />
          </div>
        </div>
        <div ref={defiRef}>
          <h2 className="text-4xl text-white font-bold mt-56">
            Top DeFi Projects
          </h2>
          <div className="flex my-10 justify-between">
            <DeFiCard
              icon="/defi/orca.png"
              name="Orca"
              title="DeFi for people,not programs"
              desc="Trade, farm, and build on Solana’s most user-friendly concentrated liquidity AMM."
            />
            <DeFiCard
              icon="/defi/jupiter.png"
              name="Jupiter Aggregator"
              title="Built for smart traders who like money"
              desc="Jupiter offers a wide range of tokens in the Solana ecosystem."
            />
            <DeFiCard
              icon="/defi/drift.png"
              name="Drift Protocol"
              title="Trade with leverage. Earn yield."
              desc="All your assets cross-margined and a lightning fast experience."
            />
          </div>
        </div>
        <div ref={marketRef}>
          <h2 className="text-4xl text-white font-bold mt-56">
            Top NFT Marketplaces
          </h2>
          <div className="flex justify-between flex-wrap my-5">
            <NFTCard
              cover="/nft/1cover.png"
              icon="/nft/1logo.png"
              name="Exchange Art"
              desc="Exchange is the most innovative NFT marketplace on Solana."
            />
            <NFTCard
              cover="/nft/2cover.png"
              icon="/nft/2logo.png"
              name="Solana Art"
              desc="Solanart is the first fully-fledged NFT marketplace on Solana."
            />
            <NFTCard
              cover="/nft/3cover.png"
              icon="/nft/3logo.png"
              name="Solsea"
              desc="The biggest NFT platform on Solana"
            />
            <NFTCard
              cover="/nft/4cover.png"
              icon="/nft/4logo.png"
              name="Magic Eden"
              desc="Magic Eden is the leading NFT Marketplace on Solana."
            />
            <NFTCard
              cover="/nft/5cover.png"
              icon="/nft/5logo.png"
              name="Digital Eyes"
              desc="One of the best Solana NFT and Sol marketplace."
            />
            <NFTCard
              cover="/nft/6cover.png"
              icon="/nft/6logo.png"
              name="Metaplex"
              desc="Free-to-use, open source NFT standard & protocol."
            />
          </div>
        </div>
        <div ref={lendingRef}>
          <h2 className="text-4xl text-white font-bold mt-56 ">
            Top Lending Protocols
          </h2>
          <div className="flex justify-between my-10">
            <LendingCard icon="/lending/1.png" name="Port Finance" />
            <LendingCard icon="/lending/2.png" name="Francium" />
            <LendingCard icon="/lending/3.png" name="Solend" />
            <LendingCard icon="/lending/4.png" name="Tulip Protocol" />
          </div>
        </div>
        <div ref={appRef}>
          <h2 className="text-4xl text-white font-bold mt-56">Top WEB3 Apps</h2>
          <div className="flex justify-between my-5 flex-wrap">
            <AppCard
              icon="/apps/1.png"
              name="Phantasia Sports"
              desc="The Future of Fantasy Sports"
            />
            <AppCard
              icon="/apps/2.png"
              name="Audius"
              desc="The Future of Fantasy Sports"
            />
            <AppCard
              icon="/apps/3.png"
              name="Grape Protocol"
              desc="The Future of Fantasy Sports"
            />
            <AppCard
              icon="/apps/4.png"
              name="Panzer Dogs"
              desc="The Future of Fantasy Sports"
            />
          </div>
        </div>
        <div ref={eventRef}></div>
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

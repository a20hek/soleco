import Head from 'next/head';
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
} from '@chakra-ui/react';
import SearchIcon from '@/dynamic/SearchIcon';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import NextImage from 'next/image';
import {
  Twitter,
  Discord,
  Github,
  Reddit,
  Youtube,
  Telegram,
} from '@/dynamic/socials';
import ST from '@/dynamic/ST';
import ChevronDown from '@/dynamic/chevrondown';
import { ChevronDownIcon } from '@chakra-ui/icons';
import SortIcon from '@/dynamic/sorticon';

import {
  TrendingSubProject,
  TrendingTopProject,
  Project,
} from '@/components/ProjectCard';

export default function Home() {
  const [showProjects, setShowProjects] = useState<number>(9);

  const CategoryCard = ({ name }: { name: string }) => {
    const [selected, setSelected] = useState<boolean>(false);
    return (
      <div className="border-[#3d3a41] border rounded-full px-7 py-3">
        <p className="font-semibold text-white">{name}</p>
      </div>
    );
  };

  return (
    <div>
      <Head>
        <title>Solana | Ecosystem</title>
        <meta name="description" content="by abhwshek" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        bg="url('/bg-hero.png')"
        h="100vh"
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPosition="center"
        position="relative"
      >
        <div className="max-w-[1128px] mx-auto px-36 pt-48">
          <h1 className="font-semibold text-7xl text-white text-center">
            Discover the Hottest Projects Built on Solana
          </h1>
        </div>
        <Box
          position="absolute"
          bottom="0"
          bg="linear-gradient(180deg, rgba(3, 0, 7, 0) 0%, #030007 100%)"
          w="100%"
          h="30vh"
        />
      </Box>
      <div className="max-w-[1128px] mx-auto">
        {/* projects */}

        <h2 className="text-white font-bold text-4xl tracking-[-0.02em]">
          Top Projects
        </h2>
        <div className="flex justify-between">
          <TrendingTopProject
            logo="/cubik.png"
            cover="/cubik-cover.png"
            name="Cubik"
            description="Cubik is a decentralized, non-custodial, and permissionless exchange for Solana"
            tags={['DEX', 'Solana']}
            isSuperteam={true}
          />
          <div>
            <TrendingSubProject
              logo="/cubik.png"
              cover="/cubik-cover.png"
              name="Cubik"
              description="Cubik is a decentralized, non-custodial, and permissionless exchange for Solana."
              tags={['DEX', 'Solana']}
              isSuperteam={true}
            />
            <TrendingSubProject
              logo="/cubik.png"
              cover="/cubik-cover.png"
              name="Cubik"
              description="Cubik is a decentralized, non-custodial, and permissionless exchange for Solana."
              tags={['DEX', 'Solana']}
              isSuperteam={true}
            />
            <TrendingSubProject
              logo="/cubik.png"
              cover="/cubik-cover.png"
              name="Cubik"
              description="Cubik is a decentralized, non-custodial, and permissionless exchange for Solana."
              tags={['DEX', 'Solana']}
              isSuperteam={true}
            />
          </div>
        </div>
        <div className="flex justify-between mt-64">
          <h2 className="text-white font-bold text-4xl tracking-[-0.02em]">
            Explore all projects
          </h2>
          <div className="flex">
            <InputGroup w={'30rem'}>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon />}
                h="48px"
                w="48px"
              />
              <Input
                placeholder="Search projects, category..."
                rounded="8px"
                variant="filled"
                bgColor="#100f12"
                h="48px"
                color="white"
                _hover={{ bgColor: '#141316' }}
                _placeholder={{ color: '#77747B' }}
                mr={4}
              />
            </InputGroup>
            <Menu>
              <MenuButton
                as={Button}
                leftIcon={<SortIcon />}
                rightIcon={<ChevronDownIcon color="#edddff" />}
                _hover={{ bgColor: 'none' }}
                _active={{ bgColor: 'none' }}
                bg="none"
                rounded="full"
                borderColor="#edddff"
                borderWidth="2px"
                color="#edddff"
                fontSize="16px"
                h="48px"
                fontWeight={500}
              >
                Sort By
              </MenuButton>
            </Menu>
          </div>
        </div>
        {/* categories */}
        <div className="flex mt-10">
          <CategoryCard name="All" />
        </div>
        <div className="flex flex-wrap justify-between">
          <Project
            logo="/cubik.png"
            cover="/cubik-cover.png"
            name="Cubik"
            description="Cubik is a decentralized, non-custodial, and permissionless exchange for Solana."
            tags={['DEX', 'Solana']}
            isSuperteam={true}
          />
          <Project
            logo="/cubik.png"
            cover="/cubik-cover.png"
            name="Cubik"
            description="Cubik is a decentralized, non-custodial, and permissionless exchange for Solana."
            tags={['DEX', 'Solana']}
            isSuperteam={true}
          />
          <Project
            logo="/cubik.png"
            cover="/cubik-cover.png"
            name="Cubik"
            description="Cubik is a decentralized, non-custodial, and permissionless exchange for Solana."
            tags={['DEX', 'Solana']}
            isSuperteam={true}
          />
          <Project
            logo="/cubik.png"
            cover="/cubik-cover.png"
            name="Cubik"
            description="Cubik is a decentralized, non-custodial, and permissionless exchange for Solana."
            tags={['DEX', 'Solana']}
            isSuperteam={true}
          />
        </div>
        <div className="mx-auto cursor-pointer select-none">
          <p className="tracking-[0.2em] text-white text-sm font-semibold text-center mb-2">
            SHOW MORE
          </p>
          <ChevronDown />
        </div>

        <div className="bg-gradient rounded-3xl p-10 mt-36">
          <h1 className="text-white font-bold text-6xl">Learn, Build, Earn</h1>
          <h1 className="text-primary-800 font-semibold text-2xl mt-4">
            (Coming soon)
          </h1>
        </div>
        {/* community */}
        <div className="flex py-32 items-center justify-between">
          <div className="w-1/2 pr-20">
            <p className="text-4xl font-bold text-white">
              Become part of a flourishing community!
            </p>
            <p className="text-[#99969d] text-lg mt-5">
              Join a fast-growing community of developers, designers and
              innovators connected all over the world, building the new era of
              the internet.
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

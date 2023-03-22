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
      <div className="rounded-full border border-[#3d3a41] px-7 py-3">
        <p className="font-semibold text-white">{name}</p>
      </div>
    );
  };
  const router = useRouter();

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
        <div className="mx-auto max-w-[1128px] px-36 pt-40">
          <h1 className="text-center text-7xl font-semibold text-white">
            Discover the Hottest Projects Built on Solana
          </h1>
        </div>
        {/* <Image src="/globe.png" className="h-1/2 w-full" /> */}
        <div className="mt-6 flex justify-center gap-4">
          <Button
            color="#440092"
            bg="white"
            rounded="full"
            size="lg"
            // py={4}
            px={12}
            h={14}
            onClick={() => router.push('/submit')}
          >
            Submit a Project
          </Button>
          <Button
            variant="outline"
            borderWidth="2px"
            rounded="full"
            color="white"
            _hover={{ bg: 'none', borderColor: '#995AE0' }}
            _active={{ bg: 'none', borderColor: '#CEA3FF', color: '#CEA3FF' }}
            size="lg"
            // py={4}
            px={12}
            h={14}
            onClick={() => router.push('/#projects')}
          >
            Explore Projects
          </Button>
        </div>
        <Image src="/globe.png" className="mx-auto" />
        <Box
          position="absolute"
          bottom="0"
          bg="linear-gradient(180deg, rgba(3, 0, 7, 0) 0%, #030007 100%)"
          w="100%"
          h="30vh"
        />
      </Box>
      <div className="mx-auto max-w-[1128px]">
        {/* projects */}

        <h2 className="mt-10 text-4xl font-bold tracking-[-0.02em] text-white">
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
        <div className="mt-64 flex justify-between">
          <h2
            className="text-4xl font-bold tracking-[-0.02em] text-white"
            id="projects"
          >
            Explore all projects
          </h2>
          <div className="flex">
            <InputGroup w={'30rem'}>
              <InputLeftElement pointerEvents="none" h="48px" w="48px">
                <SearchIcon />
              </InputLeftElement>
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
        <div className="mt-10 flex">
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
          <p className="mb-2 text-center text-sm font-semibold tracking-[0.2em] text-white">
            SHOW MORE
          </p>
          <ChevronDown />
        </div>

        <div className="mt-36 rounded-3xl bg-gradient p-10">
          <h1 className="text-6xl font-bold text-white">Learn, Build, Earn</h1>
          <h1 className="mt-4 text-2xl font-semibold text-primary-800">
            (Coming soon)
          </h1>
        </div>
        {/* community */}
        <div className="flex items-center justify-between py-32">
          <div className="w-1/2 pr-20">
            <p className="text-4xl font-bold text-white">
              Become part of a flourishing community!
            </p>
            <p className="mt-5 text-lg text-[#99969d]">
              Join a fast-growing community of developers, designers and
              innovators connected all over the world, building the new era of
              the internet.
            </p>
          </div>

          <Flex className="mx-auto w-1/2" justifyContent="space-around">
            <Flex flexDir="column" gap="16px">
              <Flex>
                <Twitter />
                <p className="ml-3 text-lg font-semibold text-white">Twitter</p>
              </Flex>
              <Flex>
                <Github />
                <p className="ml-3 text-lg font-semibold text-white">Github</p>
              </Flex>
              <Flex>
                <Telegram />
                <p className="ml-3 text-lg font-semibold text-white">
                  Telegram
                </p>
              </Flex>
            </Flex>

            <Flex flexDir="column" gap="16px">
              <Flex>
                <Reddit />
                <p className="ml-3 text-lg font-semibold text-white">Reddit</p>
              </Flex>
              <Flex>
                <Discord />
                <p className="ml-3 text-lg font-semibold text-white">Discord</p>
              </Flex>
              <Flex>
                <Youtube />
                <p className="ml-3 text-lg font-semibold text-white">Youtube</p>
              </Flex>
            </Flex>
          </Flex>
        </div>
      </div>
    </div>
  );
}

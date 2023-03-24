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
  MenuItem,
  MenuList,
  useMediaQuery,
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
import { SortIcon, SortIconMobile } from '@/dynamic/sorticon';
import { categories } from 'constants/categories';

import {
  TrendingSubProject,
  TrendingTopProject,
  Project,
} from '@/components/ProjectCard';

import Spline from '@splinetool/react-spline';

export default function Home() {
  const [showProjects, setShowProjects] = useState<number>(9);
  const [isLargerthan668] = useMediaQuery('(min-width: 668px)');

  const CategoryCard = ({ name }: { name: string }) => {
    const [selected, setSelected] = useState<boolean>(false);
    return (
      <div
        onClick={() => setSelected((value) => !value)}
        className={`${
          selected ? 'border-primary-500 bg-primary-300' : 'border-[#3d3a41]'
        } cursor-pointer  rounded-full border px-7 py-3 transition-colors duration-150 ease-in-out`}
      >
        <p className="select-none font-semibold text-white">{name}</p>
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
      <div>
        {/* <div className="h-screen"> */}
        <Box
          bg="url('/bg-hero.png')"
          h={isLargerthan668 ? 'auto' : '100vh'}
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPosition="center"
          position="relative"
        >
          <div className="mx-auto w-[90%] max-w-[1128px] px-8 pt-40 md:px-36">
            <h1 className="text-center text-5xl font-semibold text-white md:text-7xl">
              Discover the Hottest Projects Built on Solana
            </h1>
          </div>
          {/* <Image src="/globe.png" className="h-1/2 w-full" /> */}
          <div className="mt-6 flex flex-col justify-center gap-4 md:flex-row">
            <Button
              color="#440092"
              bg="white"
              rounded="full"
              size="lg"
              px={12}
              h={14}
              mx={{ base: 'auto', md: '0px' }}
              w={{ base: '60%', md: 'auto' }}
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
              _active={{
                bg: 'none',
                borderColor: '#CEA3FF',
                color: '#CEA3FF',
              }}
              size="lg"
              mx={{ base: 'auto', md: '0px' }}
              w={{ base: '60%', md: 'auto' }}
              px={12}
              h={14}
              onClick={() => router.push('/#projects')}
            >
              Explore Projects
            </Button>
          </div>
          {
            isLargerthan668 ? (
              <Spline
                scene="https://prod.spline.design/7cURyV575C6gPenr/scene.splinecode"
                // style={{ position: 'absolute', bottom: 0, height: '600px' }}
                style={{
                  height: '500px',
                  marginRight: 'auto',
                  marginLeft: 'auto',
                }}
              />
            ) : null
            // <div className="absolute inset-x-0 bottom-0 mx-0 h-[60vh]">
            //   <Spline scene="https://prod.spline.design/WWzUIC5QmE1ufvus/scene.splinecode" />
            // </div>
          }

          <Box
            position="absolute"
            bottom="0"
            bg="linear-gradient(180deg, rgba(3, 0, 7, 0) 0%, #030007 100%)"
            w="100%"
            h="30vh"
          />
        </Box>
      </div>

      <div className="mx-auto w-[90%] max-w-[1128px]">
        {/* projects */}

        <h2 className="mt-10 text-3xl font-bold tracking-[-0.02em] text-white md:text-4xl">
          Top Projects
        </h2>
        <div className="flex flex-col justify-between md:flex-row">
          <TrendingTopProject
            logo="/cubik.png"
            cover="/cubik-cover.png"
            name="Cubik"
            description="Cubik is a decentralized, non-custodial, and permissionless exchange f"
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
        <div className="mt-36 flex flex-col justify-between md:mt-64 md:flex-row">
          <h2
            className="text-3xl font-bold tracking-[-0.02em] text-white md:text-4xl"
            id="projects"
          >
            Explore all projects
          </h2>
          <div className="mt-4 flex justify-between md:mt-0">
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
                w={{ base: '94%', md: '100%' }}
              />
            </InputGroup>
            <Menu>
              {isLargerthan668 ? (
                <MenuButton
                  as={Button}
                  leftIcon={<SortIcon />}
                  rightIcon={<ChevronDownIcon color="#edddff" />}
                  _hover={{ bgColor: 'none' }}
                  _active={{
                    bgColor: 'none',
                    borderColor: '#cea3ff',
                    color: '#cea3ff',
                  }}
                  bg="none"
                  rounded="full"
                  borderColor="#edddff"
                  borderWidth="2px"
                  color="#edddff"
                  fontSize="16px"
                  h="48px"
                  fontWeight={500}
                >
                  Sort by
                </MenuButton>
              ) : (
                <MenuButton
                  as={Button}
                  _hover={{ bgColor: 'none' }}
                  _active={{
                    bgColor: 'none',
                    borderColor: '#cea3ff',
                    color: '#cea3ff',
                  }}
                  bg="none"
                  rounded="full"
                  borderColor="#edddff"
                  borderWidth="2px"
                  color="#edddff"
                  fontSize="16px"
                  p={3}
                  h="48px"
                  flexShrink={0}
                  fontWeight={500}
                >
                  <SortIconMobile />
                </MenuButton>
              )}

              <MenuList bg="#030007" borderColor="#3D3A41">
                <MenuItem bg="#030007" color="#b2afb6">
                  Recently Added
                </MenuItem>
                <MenuItem bg="#030007" color="#b2afb6">
                  Most Popular
                </MenuItem>
                <MenuItem bg="#030007" color="#b2afb6">
                  A {'->'} Z
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
        {/* categories */}
        <div className="relative my-10 flex flex-nowrap overflow-hidden text-white">
          <div className="categories flex w-fit flex-nowrap gap-2 whitespace-nowrap">
            {categories.map((category, i) => {
              return <CategoryCard key={i} name={category} />;
            })}
            <div className="ml-24" />
          </div>
          <Box
            bg="linear-gradient(270deg, #030007 0%, rgba(3, 0, 7, 0) 100%)"
            w={24}
            h="full"
            right="0"
            position="absolute"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-12">
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
        <div className="mx-auto cursor-pointer">
          <p
            onClick={() => {
              setShowProjects(showProjects + 5);
            }}
            className="mb-2 mt-4 select-none text-center text-sm font-semibold tracking-[0.2em] text-white md:mt-8"
          >
            SHOW MORE
          </p>
          <ChevronDown />
        </div>

        <div className="mt-36 rounded-3xl bg-gradient p-10">
          <h1 className="text-3xl font-bold text-white md:text-6xl">
            Learn, Build, Earn
          </h1>
          <h1 className="mt-4 text-xl font-semibold text-primary-800 md:text-2xl">
            (Coming soon)
          </h1>
        </div>
        {/* community */}
        <div className="flex flex-col items-center justify-between py-32 md:flex-row">
          <div className="md:w-1/2 md:pr-20">
            <p className="text-3xl font-bold text-white md:text-4xl">
              Become part of a flourishing community!
            </p>
            <p className="mt-5 text-lg text-[#99969d]">
              Join a fast-growing community of developers, designers and
              innovators connected all over the world, building the new era of
              the internet.
            </p>
          </div>

          <Flex
            className="md:mx-auto md:w-1/2"
            justifyContent="space-around"
            mt={{ base: 10, md: 0 }}
          >
            <Flex flexDir="column" gap="16px" mx={4}>
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

            <Flex flexDir="column" gap="16px" mx={4}>
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
        {/* </div> */}
      </div>
    </div>
  );
}

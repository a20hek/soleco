import Head from 'next/head';
import { Box, Button, Flex, useMediaQuery, Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Twitter, Discord, Github, Youtube } from '@/svgs/socials';
import { TrendingSubProject, TrendingTopProject } from '@/components/Project';
import SplineAnimation from '@/components/SplineAnimation';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export default function Home() {
  const [isLargerthan668] = useMediaQuery('(min-width: 668px)');
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Solana | Superteam Ecosystem</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Box
          bg="url('/bg-hero.png')"
          h={isLargerthan668 ? 'auto' : '100vh'}
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPosition="center"
          position="relative"
        >
          <div className="mx-auto w-[90%] max-w-[1128px] px-8 pt-40 md:px-36">
            <h1 className="text-center text-5xl font-medium text-white md:text-7xl">
              Explore the thriving Solana Ecosystem
            </h1>
            <h2 className="mx-auto mt-6 w-[80%] text-center text-xl text-primary-800">
              Immerse yourself in over 420+ community-verified builds - from
              DeFi to NFTs, the possibilities are endless.
            </h2>
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
              onClick={() => router.push('/projects')}
              _hover={{ bg: '#edddff', color: '#651db8' }}
              _active={{ color: '#995aeo' }}
            >
              Explore Projects
            </Button>
          </div>
          <SplineAnimation />
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
        <div className="mt-24 flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-[-0.02em] text-white md:text-4xl">
            Top Projects
          </h2>
          <p className="font-semibold text-primary-800 hover:underline">
            <Link href="/projects">Explore more {'-->'}</Link>
          </p>
        </div>
        <div className="flex w-full flex-col items-center justify-between md:flex-row">
          <TrendingTopProject
            logo="/backpacklogo.jpg"
            cover="/backpack.png"
            name="Backpack"
            tagline="The home for your xNFTs. "
            isSuperteam={false}
            link="/projects/backpack"
          />
          <div className="md:w-3/5">
            <TrendingSubProject
              logo="/gumlogo.jpg"
              cover="/cubik-cover.png"
              name="Gum"
              tagline="Solana social legos to build sticky apps with ease"
              isSuperteam={true}
              link="/projects/gum"
            />
            <TrendingSubProject
              logo="/candypaylogo.png"
              cover="/cubik-cover.png"
              name="CandyPay"
              tagline="CandyPay is a no-code platform powering seamless, mobile native payment experiences on Solana!
              "
              isSuperteam={true}
              link="/projects/candypay"
            />
            <div
              className="group my-5 ml-auto mr-0 flex h-28 w-full cursor-pointer items-center justify-center gap-4 rounded-2xl
      bg-card px-6 py-12 transition-all duration-500 hover:scale-105 hover:bg-black hover:ring-2 hover:ring-inset hover:ring-card"
              onClick={() => {
                router.push('/projects');
              }}
            >
              <Image
                src="/stackedProjects.png"
                alt="/"
                h={{ base: '42px', md: '64px' }}
              />
              <p className="font-medium text-primary-800">
                Explore other projects {'-->'}
              </p>
            </div>
          </div>
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
              <Link href="https://twitter.com/SuperteamDAO">
                <Flex>
                  <Twitter link="https://twitter.com/SuperteamDAO" />
                  <p className="ml-3 text-lg font-semibold text-white">
                    Twitter
                  </p>
                </Flex>
              </Link>
              <Link href="https://github.com/superteamDAO">
                <Flex>
                  <Github link="https://github.com/superteamDAO" />
                  <p className="ml-3 text-lg font-semibold text-white">
                    Github
                  </p>
                </Flex>
              </Link>
            </Flex>

            <Flex flexDir="column" gap="16px" mx={4}>
              <Link href="https://discord.gg/uzujkHg6xy">
                <Flex>
                  <Discord link="https://discord.gg/uzujkHg6xy" />
                  <p className="ml-3 text-lg font-semibold text-white">
                    Discord
                  </p>
                </Flex>
              </Link>
              <Link href="https://www.youtube.com/@superteampodcast">
                <Flex>
                  <Youtube link="https://www.youtube.com/@superteampodcast" />
                  <p className="ml-3 text-lg font-semibold text-white">
                    Youtube
                  </p>
                </Flex>
              </Link>
            </Flex>
          </Flex>
        </div>
      </div>
    </div>
  );
}

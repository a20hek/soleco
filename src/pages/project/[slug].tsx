import { useRouter } from 'next/router';
import { supabase } from '@/lib/supabase';
import LinkArrow from '@/svgs/LinkArrow';
import { Button, Image } from '@chakra-ui/react';
import React from 'react';
import { Discord, Twitter, Telegram } from '@/svgs/socials';

export default function SlugPage({ data }: any) {
  const router = useRouter();
  console.log(data);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="mx-auto w-[90%] max-w-[1128px] py-28 md:py-44">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="flex flex-col gap-5 md:flex-row md:items-center">
            <Image src={data.logo} alt="/" className="h-24 w-24 rounded-full" />
            <div>
              <div className="text-2xl font-semibold text-white md:mt-2">
                {data.name}
              </div>
              <div className="mt-1 text-neutral-300">
                {/* Revolutionary Secure Messaging & Trading Dapp powered by Solana */}
              </div>
              <div className="my-6 flex gap-4 md:mb-0 md:mt-4">
                {data.discord && <Discord />}
                {data.twitter && <Twitter />}
                {data.telegram && <Telegram />}
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
            _hover={{
              borderColor:
                'linear-gradient(315deg, #22093F 0%, #611CB8 33.85%, #A94EE4 77.08%, #DE78F8 100%)',
              bg: 'transparent',
              borderWidth: '2px',
            }}
            rightIcon={<LinkArrow />}
            bg="linear-gradient(315deg, #22093F 0%, #611CB8 33.85%, #A94EE4 77.08%, #DE78F8 100%)"
            onClick={() => {
              router.push(data.website);
            }}
          >
            Visit
          </Button>
        </div>
        <div className="mt-6 flex gap-4">
          {data.categories &&
            data.categories.map((category: string, i: number) => {
              return (
                <div
                  key={i}
                  className="h-fit w-fit rounded-md bg-neutral-900 py-1 px-3"
                >
                  <p className="text-xs text-neutral-300">{category}</p>
                </div>
              );
            })}
        </div>
        <div>
          <div className="mt-16 text-xl font-semibold text-white">
            About {data.name}
          </div>
          <div className="mt-2 text-neutral-400">{data.description}</div>

          <div className="mt-16 text-xl font-semibold text-white">
            Screenshots
          </div>
          {/* <div className="custom-scrollbar mt-4 flex flex-nowrap overflow-x-scroll text-white">
            <div className="flex flex-nowrap gap-4 whitespace-nowrap">
              <Image
                src="/cubik-cover.png"
                alt="/"
                className="mb-6 h-72 w-[28rem] rounded object-cover"
              />
              <Image
                src="/cubik-cover.png"
                alt="/"
                className="mb-6 h-72 w-[28rem] rounded object-cover"
              />
              <Image
                src="/cubik-cover.png"
                alt="/"
                className="mb-6 h-72 w-[28rem] rounded object-cover"
              />
              <Image
                src="/cubik-cover.png"
                alt="/"
                className="mb-6 h-72 w-[28rem] rounded object-cover"
              />
            </div>
          </div> */}
          <p className="text-neutral-400">Screenshots to be added soon</p>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const { data, error } = await supabase.from('projects').select('slug');

  if (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }

  const paths = data.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }: any) {
  const { slug } = params;
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
    revalidate: 3600,
  };
}

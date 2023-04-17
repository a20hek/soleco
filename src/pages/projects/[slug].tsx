import { useRouter } from 'next/router';
import { supabase } from '@/lib/supabase';
import LinkArrow from '@/svgs/LinkArrow';
import { Button, Image } from '@chakra-ui/react';
import React, { useEffect, useState, useCallback } from 'react';
import { Discord, Twitter, Telegram } from '@/svgs/socials';
import { Project } from '@/components/Project';
import Head from 'next/head';

interface Data {
  logo: string;
  name: string;
  tagline: string;
  discord: string;
  twitter: string;
  telegram: string;
  website: string;
  categories: string[];
  description: string;
  screenshots: string[];
}

interface SlugPageProps {
  data: Data;
}

function SimilarProjects({ categories }: { categories: string[] }) {
  const [similarProjects, setSimilarProjects] = useState<any[]>([]);
  const router = useRouter();

  const fetchSimilarProjects = useCallback(async () => {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .contains('categories', categories)
      .neq('slug', router.query.slug)
      .limit(10);
    if (error) {
      console.error('Error fetching similar projects:', error);
    } else if (data.length === 0) {
      const { data: newData, error: newError } = await supabase
        .from('projects')
        .select('*')
        .contains('categories', [categories[0]])
        .neq('slug', router.query.slug)
        .limit(10);
      if (newError) {
        console.error(
          'Error fetching projects based on one category:',
          newError
        );
      } else {
        setSimilarProjects(newData);
      }
    } else {
      setSimilarProjects(data);
    }
  }, [categories, router.query.slug]);

  useEffect(() => {
    fetchSimilarProjects();
  }, [fetchSimilarProjects]);

  return (
    <div>
      <h2 className="mt-16 text-2xl font-semibold text-white">
        Similar Projects
      </h2>
      <div className="custom-scrollbar relative mt-4 overflow-x-auto text-white">
        <div className="flex flex-nowrap gap-8">
          {similarProjects.map((project) => (
            <div key={project.slug} className="">
              <Project {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SlugPage({ data }: SlugPageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{data?.name} | Superteam Ecosystem</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto w-[90%] max-w-[1128px] py-28 md:py-44">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="flex flex-col gap-5 md:flex-row md:items-center">
            {data.logo ? (
              <Image
                src={data.logo}
                alt={data.name}
                className="h-24 w-24 rounded-full"
              />
            ) : (
              <Image
                src="/placeholderlogo.png"
                alt={data.name}
                className="h-24 w-24 rounded-full"
              />
            )}
            <div>
              <div className="text-3xl font-semibold text-white md:mt-2">
                {data.name}
              </div>
              <div className="mt-1 text-lg text-neutral-300 md:mr-12">
                {data?.tagline}
              </div>
              <div className="my-6 flex gap-4 md:mb-0 md:mt-4">
                {data.discord && <Discord link={data.discord} />}
                {data.twitter && <Twitter link={data.twitter} />}
                {data.telegram && <Telegram link={data.telegram} />}
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
            className="hover:scale-105"
            transition="all 0.3s ease-in-out"
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
                  <p className="text-xs capitalize text-neutral-300">
                    {category}
                  </p>
                </div>
              );
            })}
        </div>
        <div>
          <div className="mt-16 text-2xl font-semibold text-white">
            About {data.name}
          </div>
          <div className="mt-2 text-lg text-neutral-400">
            {data.description}
          </div>

          <div className="mt-16 text-2xl font-semibold text-white">
            Screenshots
          </div>
          {data.screenshots && data.screenshots.length > 0 ? (
            <div className="custom-scrollbar mt-4 flex flex-nowrap overflow-x-auto text-white">
              <div className="flex flex-nowrap gap-4 whitespace-nowrap">
                {data.screenshots.map((screenshot: string) => (
                  <Image
                    key={screenshot}
                    src={screenshot}
                    alt="/"
                    className="mb-6 h-72 w-[28rem] rounded object-cover"
                  />
                ))}
              </div>
            </div>
          ) : (
            <p className="mt-2 text-neutral-400">
              There are no screenshots to display for this project at the
              moment.
            </p>
          )}
        </div>
        <SimilarProjects categories={data.categories} />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const { data, error } = await supabase.from('projects').select('slug');

  if (error) {
    return {
      notFound: true,
    };
  }

  const paths = data.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
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

import Logo from '@/svgs/logo';
import { Discord, Github, Twitter, Youtube } from '@/svgs/socials';
import { Divider } from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="border-t border-primary-100 pt-9">
      <div className="mx-auto w-[94%] max-w-[1128px]">
        <div className="mb-9 flex flex-col items-center justify-between md:flex-row">
          <div className="flex flex-col items-center md:items-start">
            <Logo />
            <p className="mt-4 text-sm text-neutral-500">
              Managed by Superteam
            </p>
            <div className=" mt-4 flex gap-7 md:mt-8 ">
              <Discord link="https://discord.gg/uzujkHg6xy" />
              <Twitter link="https://twitter.com/SuperteamDAO" />
              <Github link="https://github.com/superteamDAO" />
              <Youtube link="https://www.youtube.com/@superteampodcast" />
            </div>
          </div>
          <div className="flex flex-col text-center md:flex-row md:gap-36 md:text-left">
            <div>
              <p className="mb-2 mt-10 text-xs font-semibold tracking-[0.08em] text-neutral-500 md:mt-0">
                ECOSYSTEM
              </p>
              <Link href="/projects">
                <p className="my-4 text-primary-800 md:my-2">Explore</p>
              </Link>
              <Link href="/submit">
                <p className="my-4 text-primary-800 md:my-2">Submit Project</p>
              </Link>
            </div>
            <div>
              <p className="mb-2 mt-10 text-xs font-semibold tracking-[0.08em] text-neutral-500 md:mt-0">
                MORE BY SUPERTEAM
              </p>
              <Link href="https://earn.superteam.fun">
                <p className="my-4 text-primary-800 md:my-2">Earn</p>
              </Link>
              <p className="my-4 text-primary-800 md:my-2">Learn</p>
              <Link href="https://build.superteam.fun">
                <p className="my-4 text-primary-800 md:my-2">Build</p>
              </Link>
            </div>
          </div>
        </div>
        <Divider borderColor="gray.700" />
        <p className="py-9 text-sm text-neutral-500">
          © 2023 Superteam. All rights reserved.
        </p>
      </div>
    </div>
  );
}

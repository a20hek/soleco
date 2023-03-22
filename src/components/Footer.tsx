import Logo from '@/dynamic/logo';
import { Discord, Github, Twitter, Youtube } from '@/dynamic/socials';
import { Divider } from '@chakra-ui/react';
import React from 'react';

export default function Footer() {
  return (
    <div className="border-t border-primary-100 pt-9">
      <div className="mx-auto max-w-[1128px]">
        <div className="mb-9 flex justify-between">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-neutral-500">
              Managed by Superteam
            </p>
            <div className="mt-8 flex gap-7">
              <Discord />
              <Twitter />
              <Github />
              <Youtube />
            </div>
          </div>
          <div className="flex gap-36">
            <div>
              <p className="mb-2 text-xs font-semibold tracking-[0.08em] text-neutral-500">
                ECOSYSTEM
              </p>
              <p className="my-2 text-primary-800">Explore</p>
              <p className="my-2 text-primary-800">Submit Project</p>
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold tracking-[0.08em] text-neutral-500">
                MORE BY SUPERTEAM
              </p>
              <p className="my-2 text-primary-800">Earn</p>
              <p className="my-2 text-primary-800">Learn</p>
              <p className="my-2 text-primary-800">Build</p>
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

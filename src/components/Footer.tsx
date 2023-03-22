import Logo from '@/dynamic/logo';
import { Discord, Github, Twitter, Youtube } from '@/dynamic/socials';
import { Divider } from '@chakra-ui/react';
import React from 'react';

export default function Footer() {
  return (
    <div className="border-t border-primary-100 pt-9">
      <div className="max-w-[1128px] mx-auto">
        <div className="flex justify-between mb-9">
          <div>
            <Logo />
            <p className="text-sm text-neutral-500 mt-4">
              Managed by Superteam
            </p>
            <div className="flex gap-7 mt-8">
              <Discord />
              <Twitter />
              <Github />
              <Youtube />
            </div>
          </div>
          <div className="flex gap-36">
            <div>
              <p className="font-semibold text-neutral-500 text-xs tracking-[0.08em] mb-2">
                ECOSYSTEM
              </p>
              <p className="text-primary-800 my-2">Explore</p>
              <p className="text-primary-800 my-2">Submit Project</p>
            </div>
            <div>
              <p className="font-semibold text-neutral-500 text-xs tracking-[0.08em] mb-2">
                MORE BY SUPERTEAM
              </p>
              <p className="text-primary-800 my-2">Earn</p>
              <p className="text-primary-800 my-2">Learn</p>
              <p className="text-primary-800 my-2">Build</p>
            </div>
          </div>
        </div>
        <Divider borderColor="gray.700" />
        <p className="py-9 text-neutral-500 text-sm">
          © 2023 Superteam. All rights reserved.
        </p>
      </div>
    </div>
  );
}

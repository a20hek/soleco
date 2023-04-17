import Logo from '@/svgs/logo';
import { Center, Button } from '@chakra-ui/react';
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Navbar() {
  const router = useRouter();

  return (
    <Center>
      <div className="fixed top-4 z-20 mx-auto w-[94%] max-w-[1128px] rounded-full border border-[#1B191F] bg-black/[0.72] px-8 shadow-md backdrop-blur-2xl md:top-4">
        <div className="mx-auto flex items-center justify-between py-3 md:py-3">
          <div onClick={() => router.push('/')} className="cursor-pointer">
            <Logo />
          </div>
          <div className="flex items-center gap-6">
            <Link href="/projects" className="text-lg font-medium text-white">
              Explore
            </Link>
            <Button
              rounded="full"
              variant="outline"
              color="white"
              size="lg"
              transition="all 0.2s"
              _hover={{ bg: 'none', borderColor: '#995AE0', color: '#995AE0' }}
            >
              <Link href="/projects">Submit Project</Link>
            </Button>
          </div>
        </div>
      </div>
    </Center>
  );
}

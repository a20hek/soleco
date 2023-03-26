import Logo from '@/svgs/logo';
import {
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  Flex,
  Center,
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import React from 'react';
import { useRouter } from 'next/router';

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const NavMenu = ({ children }: { children: string }) => {
    return (
      <Menu>
        <MenuButton color="neutral.400" _hover={{ color: 'neutral.200' }}>
          <Flex alignContent="baseline">
            <p>{children}</p>
          </Flex>
        </MenuButton>
      </Menu>
    );
  };

  return (
    <Center>
      <div className="fixed top-4 z-20 mx-auto w-[94%] max-w-[1128px] rounded-full bg-black/[0.72] px-8 shadow-md backdrop-blur-2xl md:top-6">
        <div className="mx-auto flex justify-between py-3 md:py-5">
          <div onClick={() => router.push('/')} className="cursor-pointer">
            <Logo />
          </div>
          <div className="flex w-1/2 justify-between">
            {/* <NavMenu>Projects</NavMenu>
            <NavMenu>Events</NavMenu>
            <NavMenu>Community</NavMenu>
            <NavMenu>Newsletter</NavMenu> */}
          </div>
        </div>
      </div>
    </Center>
  );
}

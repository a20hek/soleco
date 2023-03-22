import Logo from '@/dynamic/logo';
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

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      <div className="fixed top-6 z-20 mx-auto w-[80%] max-w-[1200px] rounded-full bg-black/[0.72] px-8 shadow-md backdrop-blur-2xl">
        <div className="mx-auto flex justify-between py-5">
          <Logo />
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

import Logo from '@/dynamic/logo';
import {
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  Flex,
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
            <ChevronDownIcon h="24px" w="24px" />
          </Flex>
        </MenuButton>
      </Menu>
    );
  };

  return (
    <div className="bg-black sticky top-0 z-20">
      <div className="flex justify-between max-w-[1080px] mx-auto py-6">
        <Logo />
        <div className="flex justify-between w-1/2">
          <NavMenu>Learn</NavMenu>
          <NavMenu>Build</NavMenu>
          <NavMenu>Network</NavMenu>
          <NavMenu>Community</NavMenu>
        </div>
      </div>
    </div>
  );
}

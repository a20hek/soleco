import { Button, Image } from '@chakra-ui/react';
import React from 'react';

export const LendingCard = ({ icon, name }: any) => {
  return (
    <div
      className="p-7 bg-[#130f17] rounded-3xl w-64 hover:bg-[#0c0a0e] transition-all duration-300 ease-in-out
      hover:drop-shadow-[0_4px_60px_rgba(20,241,149,0.15)] hover:ring-primary hover:ring-[0.2px]"
    >
      <Image src={icon} width="84px" height="84px" mx="auto" />
      <p className="mt-4 text-center text-xl font-semibold text-white">
        {name}
      </p>
      <Button
        mt={8}
        fontSize="16px"
        bg="primary"
        size="lg"
        px={23}
        py={5}
        w="100%"
        fontWeight={600}
        borderRadius="40px"
        boxShadow="inset 0px 0px 0px 1px #14F195"
        _hover={{
          bg: 'black',
          color: 'primary',
        }}
      >
        Visit Website
      </Button>
    </div>
  );
};

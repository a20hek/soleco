import { Button, Flex, Image } from '@chakra-ui/react';

export const AppCard = ({ icon, name, desc }: any) => {
  return (
    <div
      className="p-6 my-5 bg-[#130f17] h-56 flex flex-col justify-between w-[500px] rounded-3xl hover:bg-[#0c0a0e] transition-all duration-300 ease-in-out
hover:drop-shadow-[0_4px_60px_rgba(20,241,149,0.15)] hover:ring-primary hover:ring-[0.2px]"
    >
      <Flex alignItems="center">
        <Image src={icon} width="84px" height="84px" />
        <Flex flexDir="column" ml="20px">
          <p className="text-2xl font-semibold text-white">{name}</p>
          <p className="mt-2 text-lg text-[#99969d]">{desc}</p>
        </Flex>
      </Flex>
      <Flex w="100%" justifyContent="space-between">
        <Button
          px={23}
          py={5}
          size="lg"
          variant="outline"
          fontSize="14px"
          borderRadius="40px"
          borderColor="primary"
          color="primary"
          className="w-1/2"
          _hover={{ bg: 'primary', color: 'black' }}
          mr="8px"
        >
          Learn More
        </Button>
        <Button
          ml="8px"
          fontSize="16px"
          bg="primary"
          size="lg"
          px={23}
          py={5}
          fontWeight={600}
          borderRadius="40px"
          className="w-1/2"
          boxShadow="inset 0px 0px 0px 1px #14F195"
          _hover={{
            bg: 'black',
            color: 'primary',
          }}
        >
          Visit Website
        </Button>
      </Flex>
    </div>
  );
};

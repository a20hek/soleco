import { Button, Image } from '@chakra-ui/react';

export const DeFiCard = ({ icon, name, title, desc }: any) => {
  return (
    <div
      className="px-5 py-6 bg-[#130f17] rounded-3xl w-80 h-[420px] flex flex-col justify-between hover:bg-[#0c0a0e] transition-all duration-300 ease-in-out
      hover:drop-shadow-[0_4px_60px_rgba(20,241,149,0.15)] hover:ring-primary hover:ring-[0.2px]"
    >
      <div>
        <Image src={icon} alt="" />
        <p className="mt-6 text-2xl font-semibold text-white">{name}</p>
        <p className="mt-6 text-lg font-semibold text-[#99969d]">{title}</p>
        <p className="mt-3 text-[#99969d]">{desc}</p>
      </div>
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

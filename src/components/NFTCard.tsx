import { Image } from '@chakra-ui/react';

export const NFTCard = ({ icon, cover, name, desc }: any) => {
  return (
    <div
      className="my-5 bg-[#130f17] rounded-3xl w-80 h-[420px] hover:bg-[#0c0a0e] transition-all duration-300 ease-in-out
      hover:drop-shadow-[0_4px_60px_rgba(20,241,149,0.15)] hover:ring-primary hover:ring-[0.2px]"
    >
      <Image src={cover} borderTopRadius="1.5rem" />
      <div className="px-5 py-6">
        <Image src={icon} w="64px" h="64px" />
        <p className="mt-4 text-2xl font-semibold text-white">{name}</p>
        <p className="mt-2 text-[#99969d] text-lg">{desc}</p>
      </div>
    </div>
  );
};

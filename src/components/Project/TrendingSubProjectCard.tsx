import ST from '@/svgs/ST';
import { Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import overflowText from '@/utils/overflow';
import { ProjectType } from './ProjectInterface';

export const TrendingSubProject = ({
  name,
  tagline,
  logo,
  categories,
  link,
}: any) => {
  const router = useRouter();
  return (
    <div
      className="group my-4 ml-auto mr-0 flex h-32 w-full cursor-pointer rounded-2xl bg-card px-6
      py-2 transition-all duration-500 hover:bg-black hover:ring-2 hover:ring-inset hover:ring-card"
      onClick={() => {
        router.push(`${link}`);
      }}
    >
      <div className="flex items-center">
        <Image
          src={logo}
          alt={name}
          className="h-[4rem] w-[4rem] rounded-full object-cover md:h-[4.5rem] md:w-[4.5rem]"
        />
        <div className="ml-4">
          <div className="flex justify-between">
            <div className="text-xl font-semibold text-white">{name}</div>
            <div className="flex gap-2">
              {categories &&
                categories.map((tag: string, i: number) => (
                  <div
                    key={i}
                    className="h-fit w-fit rounded-md bg-neutral-900 py-1 px-3"
                  >
                    <p className="text-xs text-neutral-300">{tag}</p>
                  </div>
                ))}
            </div>
          </div>
          <div className="mt-1 text-sm text-neutral-300 md:text-base">
            {overflowText(tagline, 120)}
          </div>
        </div>
      </div>
    </div>
  );
};

import ST from '@/svgs/ST';
import { Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ProjectType } from './ProjectInterface';

export const TrendingTopProject = ({
  name,
  tagline,
  logo,
  cover,
  categories,
  link,
}: any) => {
  const router = useRouter();

  return (
    <div
      className="group my-6 h-[25rem] w-full cursor-pointer rounded-2xl bg-card transition-all
      duration-500 hover:bg-black hover:ring-2 hover:ring-inset hover:ring-card md:mr-4 md:w-3/5"
      onClick={() => {
        router.push(`${link}`);
      }}
    >
      <Image
        className="h-2/3 w-full rounded-t-3xl object-cover"
        src={cover}
        alt={name}
      />
      <div className="flex w-full px-4 py-5 md:p-6">
        <div className="flex w-full items-center">
          <Image
            src={logo}
            alt={name}
            className="h-[4rem] w-[4rem] rounded-full object-cover md:h-[4.5rem] md:w-[4.5rem]"
          />
          <div className="ml-4 w-full">
            <div className="flex w-full justify-between">
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
            <div className="mt-1 text-neutral-300">{tagline}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

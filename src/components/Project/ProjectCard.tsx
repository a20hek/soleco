import ST from '@/svgs/ST';
import { Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import overflowText from 'utils/overflow';
import { ProjectType } from './ProjectInterface';

export const Project = ({
  name,
  tagline,
  logo,
  cover,
  categories,
  isSuperteam,
}: ProjectType) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push('/project/cubik');
      }}
      className="group my-5 h-[22rem] w-[21rem] cursor-pointer rounded-3xl bg-card
      transition-all duration-500 hover:bg-black hover:ring-2 hover:ring-inset hover:ring-card"
    >
      <Image
        className="h-2/5 w-full rounded-t-3xl object-cover transition-all duration-300 group-hover:h-2/5 md:h-3/5"
        src={cover}
        alt={name}
      />
      <div className="h-3/5 justify-center p-6 transition-all duration-300 group-hover:h-3/5 md:h-2/5">
        <div className="flex justify-between">
          <Image
            height={12}
            width={12}
            src={logo}
            alt={name}
            className="h-12 w-12 object-cover"
          />
          <div className="flex items-center gap-2">
            {isSuperteam && <ST />}
            {categories.slice(0, 3).map((category, i) => (
              <div
                key={i}
                className="h-fit rounded-md bg-neutral-900 py-1 px-2"
              >
                <p className="text-[0.65rem] text-neutral-300">
                  {category === 'Tools & Infrastructure'
                    ? 'Tools & Infra'
                    : category === 'DAOs and Network States'
                    ? 'DAO'
                    : category}
                </p>
              </div>
            ))}
            {categories.length > 3 && (
              <div className="h-fit rounded-md bg-neutral-900 p-1">
                <p className="text-[0.5rem] text-neutral-300">
                  +{categories.length - 3}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="mt-2 text-xl font-semibold text-white">{name}</div>
        <div className="mt-2 h-0 text-neutral-300 transition-all duration-100 ease-in-out group-hover:opacity-100 group-hover:duration-500 md:opacity-0">
          {overflowText(tagline, 108)}
        </div>
      </div>
    </div>
  );
};

import ST from '@/svgs/ST';
import { Button, Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import overflowText from '@/utils/overflow';
import { ProjectType } from './ProjectInterface';

export const Project = ({
  name,
  tagline,
  logo,
  categories,
  isSuperteam,
  slug,
}: ProjectType) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(`/projects/${slug}`);
      }}
      className="group my-5 flex h-[22rem] w-[21rem] cursor-pointer flex-col justify-between
      rounded-3xl bg-card transition-all duration-500 hover:scale-105 hover:bg-black hover:ring-2 hover:ring-inset hover:ring-card"
    >
      <div className="p-6 transition-all duration-300 group-hover:h-3/5 md:h-2/5">
        <div className="flex justify-between">
          {logo ? (
            <Image
              height={12}
              width={12}
              src={logo}
              alt={name}
              className="h-12 w-12 rounded-full object-cover transition-transform duration-500 group-hover:rotate-6"
            />
          ) : (
            <Image
              height={12}
              width={12}
              src="/placeholderlogo.png"
              alt={name}
              className="h-12 w-12 rounded-full object-cover transition-transform duration-500 group-hover:rotate-6"
            />
          )}
        </div>
        <div className="mt-4 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-primary-600">
          {name}
        </div>
        <div className="mt-2 text-neutral-300 transition-transform duration-500 group-hover:translate-y-[-4]">
          {overflowText(tagline, 160)}
        </div>
        {/* <div className="mt-2 h-0 text-neutral-300 transition-all duration-100 ease-in-out group-hover:opacity-100 group-hover:duration-500 md:opacity-0">
          <Button>View Details</Button>
        </div> */}
      </div>
      <div className="mt-auto p-6">
        <div className="flex items-center gap-2">
          {isSuperteam && <ST />}
          {categories &&
            categories.slice(0, 3).map((category, i) => (
              <div
                key={i}
                className="h-fit rounded-md bg-neutral-900 py-1 px-2"
              >
                <p className="text-[0.65rem] capitalize text-neutral-300">
                  {category === 'Tools & Infrastructure'
                    ? 'Tools & Infra'
                    : category === 'DAOs and Network States'
                    ? 'DAO'
                    : category}
                </p>
              </div>
            ))}
          {categories && categories.length > 3 && (
            <div className="h-fit rounded-md bg-neutral-900 p-1">
              <p className="text-[0.5rem] text-neutral-300">
                +{categories.length - 3}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

import ST from '@/dynamic/ST';
import { Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface ProjectType {
  name: string;
  description: string;
  logo: string;
  cover: string;
  tags: string[];
  isSuperteam: boolean;
}

const Project = ({
  name,
  description,
  logo,
  cover,
  tags,
  isSuperteam,
}: ProjectType) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push('/project/cubik');
      }}
      className="group my-5 h-[22rem] w-[21rem] rounded-3xl bg-card 
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
            {tags.map((tag, i) => (
              <div
                key={i}
                className="h-fit rounded-md bg-neutral-900 py-1 px-3"
              >
                <p className="text-xs text-neutral-300">{tag}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-2 text-xl font-semibold text-white">{name}</div>
        <div className="mt-2 h-0 text-neutral-300 transition-all duration-100 ease-in-out group-hover:opacity-100 group-hover:duration-500 md:opacity-0">
          {description}
        </div>
      </div>
    </div>
  );
};

const TrendingTopProject = ({
  name,
  description,
  logo,
  cover,
  tags,
}: ProjectType) => {
  return (
    <div
      className="group my-6 mr-4 h-[24rem] w-full rounded-2xl bg-card 
      transition-all duration-500 hover:bg-black hover:ring-2 hover:ring-inset hover:ring-card md:w-3/5"
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
                {tags.map((tag, i) => (
                  <div
                    key={i}
                    className="h-fit w-fit rounded-md bg-neutral-900 py-1 px-3"
                  >
                    <p className="text-xs text-neutral-300">{tag}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-1 text-neutral-300">{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TrendingSubProject = ({ name, description, logo, tags }: ProjectType) => {
  return (
    <div
      className="group my-3 ml-auto mr-0 flex h-32 w-full rounded-2xl bg-card
      px-6 py-2 transition-all duration-500 hover:bg-black hover:ring-2 hover:ring-inset hover:ring-card"
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
              {tags.map((tag, i) => (
                <div
                  key={i}
                  className="h-fit w-fit rounded-md bg-neutral-900 py-1 px-3"
                >
                  <p className="text-xs text-neutral-300">{tag}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-1 text-neutral-300">{description}</div>
        </div>
      </div>
    </div>
  );
};

export { Project, TrendingTopProject, TrendingSubProject };

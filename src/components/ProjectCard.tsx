import ST from '@/dynamic/ST';
import { Image } from '@chakra-ui/react';

interface Project {
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
}: Project) => {
  return (
    <div
      className="bg-card rounded-3xl w-[21rem] my-5 hover:bg-black transition-all 
      duration-500 hover:ring-inset hover:ring-card hover:ring-2 group h-[22rem]"
    >
      <Image
        className="object-cover w-full rounded-t-3xl h-3/5 group-hover:h-2/5 transition-all duration-300"
        src={cover}
        alt={name}
      />
      <div className="p-6 h-2/5 group-hover:h-3/5 justify-center transition-all duration-300">
        <div className="flex justify-between">
          <Image
            height={12}
            width={12}
            src={logo}
            alt={name}
            className="object-cover w-12 h-12"
          />
          <div className="flex items-center gap-2">
            {isSuperteam && <ST />}
            {tags.map((tag) => (
              <div className="bg-neutral-900 rounded-md py-1 px-3 h-fit">
                <p className="text-neutral-300 text-xs">{tag}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-white font-semibold text-xl mt-2">{name}</div>
        <div className="text-neutral-300 mt-2 h-0 opacity-0 group-hover:opacity-100 duration-100 transition-all ease-in-out group-hover:duration-500">
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
}: Project) => {
  return (
    <div
      className="bg-card rounded-2xl w-1/2 my-6 hover:bg-black transition-all 
      duration-500 mr-4 hover:ring-inset hover:ring-card hover:ring-2 group h-[24rem]"
    >
      <Image
        className="object-cover w-full rounded-t-3xl h-2/3"
        src={cover}
        alt={name}
      />
      <div className="p-6 flex w-full">
        <div className="flex items-center w-full">
          <Image
            src={logo}
            alt={name}
            className="object-cover h-[4.5rem] rounded-full"
          />
          <div className="ml-4 w-full">
            <div className="flex justify-between w-full">
              <div className="text-white font-semibold text-xl">{name}</div>
              <div className="flex gap-2">
                {tags.map((tag) => (
                  <div className="bg-neutral-900 rounded-md py-1 px-3 w-fit h-fit">
                    <p className="text-neutral-300 text-xs">{tag}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-neutral-300 mt-1">{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TrendingSubProject = ({ name, description, logo, tags }: Project) => {
  return (
    <div
      className="bg-card rounded-2xl w-full my-3 hover:bg-black transition-all 
      duration-500 hover:ring-inset hover:ring-card hover:ring-2 group h-32 px-6 py-2 flex"
    >
      <div className="flex items-center">
        <Image
          src={logo}
          alt={name}
          className="object-cover h-[4.5rem] w-[4.5rem]"
        />
        <div className="ml-4">
          <div className="flex justify-between">
            <div className="text-white font-semibold text-xl">{name}</div>
            <div className="flex gap-2">
              {tags.map((tag) => (
                <div className="bg-neutral-900 rounded-md py-1 px-3 w-fit h-fit">
                  <p className="text-neutral-300 text-xs">{tag}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-neutral-300 mt-1">{description}</div>
        </div>
      </div>
    </div>
  );
};

export { Project, TrendingTopProject, TrendingSubProject };

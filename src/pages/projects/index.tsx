import SearchIcon from '@/svgs/SearchIcon';
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  useMediaQuery,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { categories } from 'constants/categories';
import { Project } from '@/components/Project';

const CategoryCard = ({
  name,
  selectedCategory,
  onClick,
}: {
  name: string;
  selectedCategory: string;
  onClick: (name: string) => void;
}) => {
  const handleClick = () => {
    onClick(name);
  };

  const isSelected = selectedCategory.toLowerCase() === name.toLowerCase();

  return (
    <div
      onClick={handleClick}
      className={`${
        isSelected ? 'border-primary-500 bg-gradient' : 'border-[#3d3a41]'
      } cursor-pointer rounded-full border px-7 py-3 transition-colors duration-150 ease-in-out`}
    >
      <p className="select-none text-sm font-medium text-white">{name}</p>
    </div>
  );
};

const itemsPerPage = 10;

export default function Projects() {
  const [projects, setProjects] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleClick = (category: string) => {
    setSelectedCategory(
      category.toLowerCase() === selectedCategory ? '' : category.toLowerCase()
    );
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const router = useRouter();

  useEffect(() => {
    const getProjects = async () => {
      const { data: projects, error } = await supabase
        .from('projects')
        .select('*');
      if (error) console.log('error', error);
      else setProjects(projects);
      console.log(projects);
    };
    getProjects();
  }, []);

  const filteredProjects = selectedCategory
    ? projects.filter(
        (project) =>
          project.categories && project.categories.includes(selectedCategory)
      )
    : projects;

  const searchedProjects = searchQuery
    ? filteredProjects.filter((project) =>
        project.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredProjects;

  const totalPages = Math.ceil(searchedProjects.length / itemsPerPage);
  const displayedProjects = searchedProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="mx-auto w-[90%] max-w-[1128px]">
      <div className="mt-36 flex flex-col justify-between md:mt-64 md:flex-row">
        <h2
          className="text-3xl font-bold tracking-[-0.02em] text-white md:text-4xl"
          id="projects"
        >
          Explore all projects
        </h2>
        <div className="mt-4 flex justify-between md:mt-0">
          <InputGroup w={'30rem'}>
            <InputLeftElement pointerEvents="none" h="48px" w="48px">
              <SearchIcon />
            </InputLeftElement>
            <Input
              placeholder="Search projects, category..."
              rounded="8px"
              variant="filled"
              bgColor="#100f12"
              h="48px"
              color="white"
              _hover={{ bgColor: '#141316' }}
              _placeholder={{ color: '#77747B' }}
              mr={4}
              w={{ base: '94%', md: '100%' }}
              onChange={handleSearchChange}
            />
          </InputGroup>
        </div>
      </div>
      {/* categories */}
      <div className="relative my-10 flex flex-nowrap overflow-hidden text-white">
        <div className="categories flex w-fit flex-nowrap gap-2 whitespace-nowrap">
          {categories.map((category, i) => {
            return (
              <CategoryCard
                selectedCategory={selectedCategory}
                key={i}
                name={category.value}
                onClick={handleClick}
              />
            );
          })}
          <div className="ml-24" />
        </div>
        <Box
          bg="linear-gradient(270deg, #030007 0%, rgba(3, 0, 7, 0) 100%)"
          w={24}
          h="full"
          right="0"
          position="absolute"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-12">
        {displayedProjects.map((project, i) => (
          <Project
            logo={project.logo}
            key={project.id}
            tagline={project.tagline}
            categories={project.categories}
            isSuperteam={project.isSuperteam}
            name={project.name}
            slug={project.slug}
          />
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <nav>
          <ul className="flex items-center justify-center text-white">
            {currentPage > 2 && (
              <>
                <li
                  className={`cursor-pointer rounded px-4 py-2`}
                  onClick={() => handlePageChange(1)}
                >
                  1
                </li>
                <li className="px-2">...</li>
              </>
            )}
            {currentPage > 1 && (
              <li
                className={`cursor-pointer rounded px-4 py-2`}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                {currentPage - 1}
              </li>
            )}
            <li className={`cursor-pointer rounded bg-primary-500 px-4 py-2`}>
              {currentPage}
            </li>
            {currentPage < totalPages && (
              <li
                className={`cursor-pointer rounded px-4 py-2`}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                {currentPage + 1}
              </li>
            )}
            {currentPage < totalPages - 1 && (
              <>
                <li className="px-2">...</li>
                <li
                  className={`cursor-pointer rounded px-4 py-2`}
                  onClick={() => handlePageChange(totalPages)}
                >
                  {totalPages}
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}

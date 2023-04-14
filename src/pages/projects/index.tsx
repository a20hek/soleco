import React, { useEffect, useState, useMemo } from 'react';
import { supabase } from '@/lib/supabase';
import { categories } from 'constants/categories';
import { Project } from '@/components/Project';
import CategoryCard from '@/components/CategoryCard';
import Pagination from '@/components/Pagination';
import SearchIcon from '@/svgs/SearchIcon';
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Skeleton,
} from '@chakra-ui/react';
import { useDebounce } from 'use-debounce';
import Head from 'next/head';

const itemsPerPage = 12;

const Projects = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [debouncedSearchQuery] = useDebounce(searchQuery, 300);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleClick = (category: string) => {
    setSelectedCategory(
      category.toLowerCase() === selectedCategory ? '' : category.toLowerCase()
    );
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  useEffect(() => {
    const getProjects = async () => {
      setIsLoading(true);
      const { data: projects, error } = await supabase
        .from('projects')
        .select('*');
      if (error) console.log('error', error);
      else setProjects(projects);
      console.log(projects);
      setIsLoading(false);
    };
    getProjects();
  }, []);

  const filteredProjects = useMemo(
    () =>
      selectedCategory
        ? projects.filter(
            (project) =>
              project.categories &&
              project.categories.includes(selectedCategory)
          )
        : projects,
    [projects, selectedCategory]
  );

  const searchedProjects = useMemo(
    () =>
      debouncedSearchQuery
        ? filteredProjects.filter((project) =>
            project.name
              .toLowerCase()
              .includes(debouncedSearchQuery.toLowerCase())
          )
        : filteredProjects,
    [filteredProjects, debouncedSearchQuery]
  );

  const totalPages = Math.ceil(searchedProjects.length / itemsPerPage);
  const displayedProjects = useMemo(
    () =>
      searchedProjects.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      ),
    [searchedProjects, currentPage]
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const projectSkeletons = new Array(3)
    .fill(0)
    .map((_, index) => (
      <Skeleton
        key={index}
        startColor="#110F14"
        endColor="gray.700"
        borderRadius="3xl"
        className="h-[22rem] w-[21rem]"
      />
    ));

  return (
    <>
      <Head>
        <title>Projects | Superteam Ecosystem</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto w-[90%] max-w-[1128px]">
        <div className="mt-36 flex flex-col justify-between md:mt-40 md:flex-row">
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
            {categories.map((category, i) => (
              <CategoryCard
                selectedCategory={selectedCategory}
                key={i}
                name={category.value}
                onClick={handleClick}
              />
            ))}
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
          {isLoading ? (
            <div className="flex flex-wrap justify-center gap-12">
              {projectSkeletons}
            </div>
          ) : displayedProjects.length > 0 && totalPages > 1 ? (
            displayedProjects.map((project, i) => (
              <Project
                logo={project.logo}
                key={project.id}
                tagline={project.tagline}
                categories={project.categories}
                isSuperteam={project.isSuperteam}
                name={project.name}
                slug={project.slug}
              />
            ))
          ) : (
            <div className="mt-12 mb-36 text-xl text-white">
              No projects found matching your search or category.
            </div>
          )}
        </div>
        {displayedProjects.length > 0 && totalPages > 1 && (
          <div className="mt-8 mb-24 flex justify-center">
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Projects;

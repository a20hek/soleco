import React, { useEffect, useState, useMemo, useRef } from 'react';
import { supabase } from '@/lib/supabase';
import { categories } from '@/constants/categories';
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
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

const itemsPerPage = 12;

const Projects = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [debouncedSearchQuery] = useDebounce(searchQuery, 300);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleClick = (category: string) => {
    setSelectedCategory(category === selectedCategory ? '' : category);
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
        .select('*')
        .filter('isVerified', 'eq', true)
        .order('rank', { ascending: true });
      if (error) console.log('error', error);
      else setProjects(projects);
      console.log(projects);
      setIsLoading(false);
    };
    getProjects();
  }, []);

  const filteredProjects = useMemo(() => {
    console.log('selectedCategory:', selectedCategory);
    if (selectedCategory) {
      const filtered = projects.filter(
        (project) =>
          project.categories &&
          project.categories.some(
            (category: any) => category === selectedCategory
          )
      );
      console.log('filteredProjects:', filtered);
      return filtered;
    } else {
      return projects;
    }
  }, [projects, selectedCategory]);
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

  const categoriesRef = useRef<HTMLDivElement | null>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = () => {
    if (categoriesRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = categoriesRef.current;

      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    const categoriesElement = categoriesRef.current;
    if (categoriesElement) {
      categoriesElement.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (categoriesElement) {
        categoriesElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const slideLeft = () => {
    if (categoriesRef.current) {
      categoriesRef.current.scrollBy({
        top: 0,
        left: -400,
        behavior: 'smooth',
      });
    }
  };

  const slideRight = () => {
    if (categoriesRef.current) {
      categoriesRef.current.scrollBy({
        top: 0,
        left: 400,
        behavior: 'smooth',
      });
    }
  };

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
        <div className="relative my-10 flex flex-nowrap items-center overflow-hidden text-white">
          <div
            ref={categoriesRef}
            className="categories flex w-fit flex-nowrap gap-2 whitespace-nowrap"
            onScroll={handleScroll}
          >
            {showLeftArrow && (
              <>
                <Box
                  bg="linear-gradient(-270deg, #030007 0%, rgba(3, 0, 7, 0) 100%)"
                  w={24}
                  h="full"
                  left="0"
                  position="absolute"
                />
                <ArrowBackIcon
                  onClick={slideLeft}
                  color="gray.200"
                  w="24px"
                  borderColor="white"
                  borderRadius="full"
                  h="full"
                  cursor="pointer"
                  position="absolute"
                  left="0"
                />
              </>
            )}
            {categories.map((category, i) => (
              <CategoryCard
                selectedCategory={selectedCategory}
                key={i}
                name={category.value}
                onClick={() => handleClick(category.value)}
              />
            ))}

            {showRightArrow && (
              <>
                <Box
                  bg="linear-gradient(270deg, #030007 0%, rgba(3, 0, 7, 0) 100%)"
                  w={24}
                  h="full"
                  right="0"
                  position="absolute"
                />
                <ArrowForwardIcon
                  onClick={slideRight}
                  color="gray.200"
                  w="24px"
                  borderColor="white"
                  borderRadius="full"
                  h="full"
                  cursor="pointer"
                  position="absolute"
                  right="0"
                />
              </>
            )}
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-12">
          {isLoading ? (
            <div className="flex flex-wrap justify-center gap-12">
              {projectSkeletons}
            </div>
          ) : displayedProjects.length > 0 ? (
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

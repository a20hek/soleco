import React, { useState } from 'react';
import {
  FormControl,
  Input,
  FormLabel,
  FormHelperText,
  Textarea,
  Button,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import {
  AddIcon,
  ArrowBackIcon,
  ArrowForwardIcon,
  PlusSquareIcon,
  Search2Icon,
} from '@chakra-ui/icons';
import {
  CheckIcon,
  ProjectUploadIcon,
  ScreenshotUploadIcon,
} from '@/dynamic/submit';
import SearchIcon from '@/dynamic/SearchIcon';

const sections = [
  {
    title: 'Description',
  },
  {
    title: 'Images and Media',
  },
  {
    title: 'Category',
  },
  {
    title: 'Socials',
  },
];

function FormElement({
  label,
  placeholder,
  maxLength,
  htmlFor,
  type,
  ...props
}: any) {
  const [char, setChar] = useState<number>(0);
  return (
    <FormControl marginTop={10}>
      <div className="flex items-baseline justify-between">
        <FormLabel htmlFor={htmlFor} color="#d4d1d8" fontWeight={400}>
          {label}
        </FormLabel>
        {maxLength && (
          <p className="text-sm text-[#b7b4bb]">
            {char} / {maxLength}
          </p>
        )}
      </div>
      <Input
        onChange={(e) => setChar(e.target.value.length)}
        type={type}
        id="name"
        placeholder={placeholder}
        variant="filled"
        bg="#120f16"
        _hover={{ bg: '#141118' }}
        _placeholder={{ color: '#7b787f' }}
        h="44px"
        maxLength={maxLength}
        {...props}
      />
    </FormControl>
  );
}

export default function Submit() {
  const [descCharCount, setDescCharCount] = useState<number>(0);
  const [formStage, setFormStage] = useState<number>(1);
  return (
    <>
      <div className="mx-auto mt-12 max-w-[1080px] py-28 text-[#fbf8ff]">
        <h1 className="text-4xl font-bold tracking-tight">
          {formStage === 1
            ? 'Submit a Project'
            : formStage === 2
            ? 'Add Images and Media'
            : formStage === 3
            ? 'Category'
            : 'Socials'}
        </h1>
        {formStage === 1 && (
          <h3 className="mt-2">
            Found a Solana project you want everyone to know about? Made one
            yourself and want to share it with the community? You&apos;re in the
            right place.
          </h3>
        )}
        {/* Sections */}
        <div className="flex justify-between gap-4">
          {sections.map((section, i) => {
            return (
              <div
                key={i}
                className={`${
                  formStage > i + 1 ? 'bg-gradient' : 'bg-primary-800'
                } mt-12 w-1/4 rounded-[60px] `}
              >
                <div className="mx-auto mt-[1px] flex h-[calc(100%_-_2px)] w-[calc(100%_-_2px)] rounded-[60px] bg-[#030007] p-3">
                  <div
                    className={`flex h-5 w-5 rounded-full ${
                      formStage > i + 1 ? 'bg-primary-600' : 'bg-primary-800'
                    }`}
                  >
                    <p
                      className={`m-auto text-center text-xs font-semibold text-black`}
                    >
                      {formStage > i + 1 ? <CheckIcon /> : i + 1}
                    </p>
                  </div>
                  <p
                    className={`pl-2 text-sm ${
                      formStage > i + 1
                        ? 'text-primary-600'
                        : 'text-primary-800'
                    }`}
                  >
                    {section.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Form */}
        {formStage == 1 && (
          <>
            <FormElement
              label="Project"
              placeholder="Project Name"
              maxLength={40}
              htmlFor="name"
            />
            <FormElement
              label="Tagline"
              placeholder="A one sentence description of the project"
              maxLength={260}
              htmlFor="tagline"
            />
            <FormElement
              label="Website Link"
              placeholder="Project Name"
              type="url"
              htmlFor="name"
            />
            <FormElement
              label="Description"
              placeholder="Project Name"
              maxLength={40}
              htmlFor="name"
            />

            <FormControl marginTop={10}>
              <div className="flex items-baseline justify-between">
                <FormLabel
                  htmlFor="description"
                  color="#d4d1d8"
                  fontWeight={400}
                >
                  Description
                </FormLabel>

                <p className="text-sm text-[#b7b4bb]">
                  {descCharCount} / {400}
                </p>
              </div>
              <Textarea
                onChange={(e) => setDescCharCount(e.target.value.length)}
                id="name"
                placeholder="A description of the project..."
                variant="filled"
                bg="#120f16"
                _hover={{ bg: '#141118' }}
                _placeholder={{ color: '#7b787f' }}
                h="200px"
                maxLength={400}
              />
            </FormControl>
            <button
              className=" mt-8 mr-0 ml-auto flex items-center rounded-full border border-primary-800 py-3 px-6 text-primary-800 transition-all duration-300 hover:bg-primary-800 hover:text-black active:bg-black active:text-white"
              onClick={() => setFormStage(2)}
            >
              <p className="text-sm font-semibold">NEXT STEP</p>
              <ArrowForwardIcon />
            </button>
          </>
        )}
        {formStage == 2 && (
          <>
            <h1 className="mt-16 text-2xl font-semibold">Project Logo</h1>
            <p className="mt-1 text-neutral-400">
              Let’s make sure people can find your project easily.
            </p>

            <div className="mt-5 flex items-center">
              <ProjectUploadIcon />
              <div className="ml-5">
                <button
                  className="flex items-center rounded-full border border-white bg-primary-800 py-2 px-6 font-medium text-black transition-all duration-300 hover:bg-black hover:text-white active:bg-white active:text-black"
                  // onClick={() => setFormStage(3)}
                >
                  Upload your project logo
                </button>
                <p className="mt-2 text-sm text-[#7b787f]">
                  Image file must be max 160x160px / at an aspect ratio of —1:1,
                  max 5MB.
                </p>
              </div>
            </div>

            <h1 className="mt-16 text-2xl font-semibold">Screenshots</h1>
            <p className="mt-1 text-neutral-400">
              We recommend at least 3 screenshots of your project.
            </p>

            <div className="mt-5 flex flex-col items-center rounded-2xl p-10 outline-dashed outline-2 outline-[#7b787f]">
              <ScreenshotUploadIcon />
              <p className="mt-2 text-primary-600">Browse for files</p>
              <p className="mt-2 w-80 text-center text-neutral-500">
                Upload at least one image. 1270x760px or higher recommended,
                max. 5MB each. The first image will be used as preview.
              </p>
              <button
                className="mt-4 flex items-center rounded-full border border-white bg-primary-800 py-2 px-6 font-medium text-black transition-all duration-300 hover:bg-black hover:text-white active:bg-white active:text-black"
                // onClick={() => setFormStage(3)}
              >
                Browse
              </button>
            </div>

            <div className="mt-2 flex gap-5">
              <div className="mt-4 w-fit rounded-2xl p-5 outline-dashed outline-2 outline-[#7b787f]">
                <AddIcon h={5} w={5} color="#7b787f" />
              </div>
              <div className="mt-4 w-fit rounded-2xl p-8 outline-dashed outline-2 outline-[#7b787f]"></div>
              <div className="mt-4 w-fit rounded-2xl p-8 outline-dashed outline-2 outline-[#7b787f]"></div>
              <div className="mt-4 w-fit rounded-2xl p-8 outline-dashed outline-2 outline-[#7b787f]"></div>
              <div className="mt-4 w-fit rounded-2xl p-8 outline-dashed outline-2 outline-[#7b787f]"></div>
            </div>
            <div className="mt-10 flex items-center justify-between">
              <button className="flex items-center">
                <ArrowBackIcon mr={1} color="#edddff" />
                <p className="text-sm text-primary-800">GO BACK</p>
              </button>
              <button
                className="flex items-center rounded-full border border-primary-800 py-3 px-6 text-primary-800 transition-all duration-300 hover:bg-primary-800 hover:text-black active:bg-black active:text-white"
                onClick={() => setFormStage(3)}
              >
                <p className="text-sm font-semibold">NEXT STEP</p>
                <ArrowForwardIcon />
              </button>
            </div>
          </>
        )}

        {formStage == 3 && (
          <>
            <h1 className="mt-16 text-2xl font-semibold">
              Select a project category
            </h1>
            <p className="mt-1 text-neutral-400">Select up to 3 categories</p>
            <InputGroup mt={5}>
              <InputLeftElement pointerEvents="none" h="54px" w="54px">
                <SearchIcon />
              </InputLeftElement>

              <Input
                id="Search for a category"
                placeholder="Search category..."
                variant="filled"
                bg="#120f16"
                _hover={{ bg: '#141118' }}
                _placeholder={{ color: '#7b787f', fontSize: '16px' }}
                rounded="full"
                h="54px"
              />
            </InputGroup>
            <h1 className="mt-16 text-2xl font-semibold">Project Status</h1>
            <p className="mt-1 text-neutral-400">
              How far along is the project?
            </p>
            <div className="mt-10 flex items-center justify-between">
              <button className="flex items-center">
                <ArrowBackIcon mr={1} color="#edddff" />
                <p className="text-sm text-primary-800">GO BACK</p>
              </button>
              <button
                className="flex items-center rounded-full border border-primary-800 py-3 px-6 text-primary-800 transition-all duration-300 hover:bg-primary-800 hover:text-black active:bg-black active:text-white"
                onClick={() => setFormStage(4)}
              >
                <p className="text-sm font-semibold">NEXT STEP</p>
                <ArrowForwardIcon />
              </button>
            </div>
          </>
        )}
        {formStage === 4 && (
          <>
            <FormElement
              label="Twitter"
              placeholder="https://twitter.com/project"
              htmlFor="twitter"
              type="url"
            />
            <FormElement
              label="Discord"
              placeholder="https://discord.com/project"
              htmlFor="discord"
              type="url"
            />
            <FormElement
              label="Telegram"
              placeholder="https://telegram.com/project"
              htmlFor="telegram"
              type="url"
            />
            <div className="mt-10 flex items-center justify-between">
              <button className="flex items-center">
                <ArrowBackIcon mr={1} color="#edddff" />
                <p className="text-sm text-primary-800">GO BACK</p>
              </button>
              <button
                className="flex items-center rounded-full bg-gradient py-3 px-6 transition-all duration-300 hover:bg-white hover:text-black active:bg-black active:text-white"
                onClick={() => setFormStage(4)}
              >
                <p className="text-sm font-semibold">SUBMIT PROJECT</p>
              </button>
            </div>
          </>
        )}

        <br />
      </div>
    </>
  );
}

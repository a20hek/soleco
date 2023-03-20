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
      <div className="flex justify-between items-baseline">
        <FormLabel htmlFor={htmlFor} color="#d4d1d8" fontWeight={400}>
          {label}
        </FormLabel>
        {maxLength && (
          <p className="text-[#b7b4bb] text-sm">
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
      <div className="max-w-[1080px] mx-auto mt-12 text-[#fbf8ff]">
        <h1 className="font-bold text-4xl tracking-tight">
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
            yourself and want to share it with the community? You're in the
            right place.
          </h3>
        )}
        {/* Sections */}
        <div className="flex gap-4 justify-between">
          {sections.map((section, i) => {
            return (
              <div
                className={`border-2 border-[#5e5c5f] ${
                  formStage > i + 1 ? 'border-[#095839]' : 'border-[#5e5c5f]'
                } p-3 flex w-1/4 rounded-[60px] mt-12`}
              >
                <div
                  className={`rounded-full bg-white h-5 w-5 flex ${
                    formStage > i + 1 ? 'bg-[#14f195]' : 'bg-white'
                  }`}
                >
                  <p
                    className={`text-black text-xs text-center font-semibold mx-auto my-auto`}
                  >
                    {formStage > i + 1 ? <CheckIcon /> : i + 1}
                  </p>
                </div>
                <p
                  className={`text-sm pl-2 ${
                    formStage > i + 1 ? 'text-[#14f195]' : ''
                  }`}
                >
                  {section.title}
                </p>
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
              <div className="flex justify-between items-baseline">
                <FormLabel
                  htmlFor="description"
                  color="#d4d1d8"
                  fontWeight={400}
                >
                  Description
                </FormLabel>

                <p className="text-[#b7b4bb] text-sm">
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
              className=" mt-8 mr-0 ml-auto flex items-center border-white border rounded-full py-3 px-6 hover:bg-white hover:text-black transition-all duration-300 active:bg-black active:text-white"
              onClick={() => setFormStage(2)}
            >
              <p>NEXT STEP</p>
              <ArrowForwardIcon />
            </button>
          </>
        )}
        {formStage == 2 && (
          <>
            <h1 className="text-2xl font-semibold mt-16">Project Logo</h1>
            <p className="mt-2">
              Let’s make sure people can find your project easily.
            </p>

            <div className="flex items-center mt-5">
              <ProjectUploadIcon />
              <div className="ml-5">
                <button
                  className="flex items-center text-black bg-white border-white border rounded-full py-2 px-6 hover:bg-black hover:text-white transition-all duration-300 active:bg-white active:text-black"
                  // onClick={() => setFormStage(3)}
                >
                  Upload your project logo
                </button>
                <p className="text-[#7b787f] text-sm mt-2">
                  Image file must be max 160x160px / at an aspect ratio of —1:1,
                  max 5MB.
                </p>
              </div>
            </div>

            <h1 className="text-2xl font-semibold mt-16">Screenshots</h1>
            <p className="mt-2">
              We recommend at least 3 screenshots of your project.
            </p>

            <div className="flex flex-col items-center outline-2 outline-dashed outline-[#7b787f] rounded-2xl p-10 center mt-5">
              <ScreenshotUploadIcon />
              <p className="text-[#938dff] mt-2">Browse for files</p>
              <p className="text-[#7b787f] w-80 mt-2">
                Upload at least one image. 1270x760px or higher recommended,
                max. 5MB each. The first image will be used as preview.
              </p>
              <button
                className="mt-4 flex items-center text-black bg-white border-white border rounded-full py-2 px-6 hover:bg-black hover:text-white transition-all duration-300 active:bg-white active:text-black"
                // onClick={() => setFormStage(3)}
              >
                Browse
              </button>
            </div>

            <div className="flex gap-5 mt-2">
              <div className="outline-dashed outline-2 outline-[#7b787f] p-5 mt-4 rounded-2xl w-fit">
                <AddIcon h={5} w={5} color="#7b787f" />
              </div>
              <div className="outline-dashed outline-2 outline-[#7b787f] p-8 mt-4 rounded-2xl w-fit"></div>
              <div className="outline-dashed outline-2 outline-[#7b787f] p-8 mt-4 rounded-2xl w-fit"></div>
              <div className="outline-dashed outline-2 outline-[#7b787f] p-8 mt-4 rounded-2xl w-fit"></div>
              <div className="outline-dashed outline-2 outline-[#7b787f] p-8 mt-4 rounded-2xl w-fit"></div>
            </div>
            <div className="flex items-center mt-10 justify-between">
              <button className="flex items-center h-">
                <ArrowBackIcon />
                <p className="text-sm">GO BACK</p>
              </button>
              <button
                className="flex items-center border-white border rounded-full py-3 px-6 hover:bg-white hover:text-black transition-all duration-300 active:bg-black active:text-white"
                onClick={() => setFormStage(3)}
              >
                <p className="font-semibold text-sm">NEXT STEP</p>
                <ArrowForwardIcon />
              </button>
            </div>
          </>
        )}

        {formStage == 3 && (
          <>
            <h1 className="text-2xl font-semibold mt-16">
              Select a project category
            </h1>
            <p className="mt-2">Select up to 3 categories</p>
            <InputGroup mt={5}>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon />}
                h="54px"
                w="54px"
              />

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
            <h1 className="text-2xl font-semibold mt-16">Project Status</h1>
            <p className="mt-2">How far along is the project?</p>
            <div className="flex items-center mt-10 justify-between">
              <button className="flex items-center h-">
                <ArrowBackIcon />
                <p className="text-sm">GO BACK</p>
              </button>
              <button
                className="flex items-center border-white border rounded-full py-3 px-6 hover:bg-white hover:text-black transition-all duration-300 active:bg-black active:text-white"
                onClick={() => setFormStage(4)}
              >
                <p className="font-semibold text-sm">NEXT STEP</p>
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
            <div className="flex items-center mt-10 justify-between">
              <button className="flex items-center h-">
                <ArrowBackIcon />
                <p className="text-sm">GO BACK</p>
              </button>
              <button
                className="flex items-center border-white border rounded-full py-3 px-6 hover:bg-white hover:text-black transition-all duration-300 active:bg-black active:text-white"
                onClick={() => setFormStage(4)}
              >
                <p className="font-semibold text-sm">SUBMIT PROJECT</p>
              </button>
            </div>
          </>
        )}

        <br />
      </div>
    </>
  );
}

import React, {
  ChangeEvent,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  FormControl,
  Input,
  FormLabel,
  Textarea,
  InputGroup,
  InputLeftElement,
  useMediaQuery,
} from '@chakra-ui/react';
import { AddIcon, ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import {
  CheckIcon,
  ProjectUploadIcon,
  ScreenshotUploadIcon,
} from '@/dynamic/submit';
import SearchIcon from '@/dynamic/SearchIcon';
import { useForm } from 'react-hook-form';
import Image from 'next/image';

const sections = [
  {
    title: 'Description',
  },
  {
    title: 'Media',
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
        onChange={(e) => setChar(e.target.value.length)}
      />
    </FormControl>
  );
}

export default function Submit() {
  const [descCharCount, setDescCharCount] = useState<number>(0);
  const [formStage, setFormStage] = useState<number>(1);
  const { register, handleSubmit } = useForm();
  const logoUpload = useRef() as MutableRefObject<HTMLInputElement>;
  const screenshotUpload = useRef() as MutableRefObject<HTMLInputElement>;
  const [isLargerthan640] = useMediaQuery('(min-width: 640px)');

  const handleLogoUpload = () => {
    logoUpload.current.click();
  };

  const handleScreenshotUpload = () => {
    screenshotUpload.current.click();
  };

  const [selectedLogo, setselectedLogo] = useState<File | null>(null);
  const [selectedScreenshots, setselectedScreenshots] = useState<File[]>([]);

  const handleScreenshotSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setselectedScreenshots(filesArray);
    }
  };

  const previewScreenshots = selectedScreenshots.map((image) => {
    const url = URL.createObjectURL(image);
    return (
      <div
        key={image.name}
        className="mt-4 h-16 w-16 rounded-2xl  outline-dashed outline-2 outline-[#7b787f]"
      >
        <Image
          src={url}
          alt={image.name}
          className="h-16 w-16 rounded-2xl object-cover"
          height={16}
          width={16}
        />
      </div>
    );
  });

  return (
    <>
      <div className="mx-auto mt-12 w-[90%] max-w-[800px] py-28 text-[#fbf8ff]">
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
                  formStage > i + 1
                    ? 'bg-gradient'
                    : 'border-2 sm:bg-primary-800'
                } mt-12 rounded-[60px] border-primary-800 sm:w-1/4 `}
              >
                <div className="mx-auto mt-[1px] flex h-[calc(100%_-_2px)] w-[calc(100%_-_2px)] items-center rounded-[60px] p-3 sm:bg-[#030007]">
                  <div
                    className={`hidden h-5 w-5 rounded-full sm:flex  ${
                      formStage > i + 1 ? 'bg-primary-600' : 'bg-primary-800'
                    }`}
                  >
                    <p
                      className={`m-auto text-center text-xs font-semibold text-black`}
                    >
                      {formStage > i + 1 ? <CheckIcon color="black" /> : i + 1}
                    </p>
                  </div>
                  <p
                    className={`px-5 text-sm sm:pl-2 ${
                      formStage > i + 1
                        ? 'text-primary-600'
                        : 'text-primary-800'
                    }`}
                  >
                    {isLargerthan640 ? (
                      section.title
                    ) : formStage > i + 1 ? (
                      <CheckIcon color="#F5F2F9" />
                    ) : (
                      i + 1
                    )}
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
              {...register('name')}
            />
            <FormElement
              label="Tagline"
              placeholder="A one sentence description of the project"
              maxLength={260}
              htmlFor="tagline"
              {...register('tagline')}
            />
            <FormElement
              label="Website Link"
              placeholder="https://example.com"
              type="url"
              htmlFor="website"
              {...register('website')}
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
                id="name"
                placeholder="A description of the project..."
                variant="filled"
                bg="#120f16"
                _hover={{ bg: '#141118' }}
                _placeholder={{ color: '#7b787f' }}
                h="160px"
                maxLength={400}
                {...register('description')}
                onChange={(e) => setDescCharCount(e.target.value.length)}
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
              {/* {selectedLogo ? previewLogo :  */}
              <ProjectUploadIcon />
              {/* } */}
              <div className="ml-5">
                <button
                  className="flex items-center rounded-full border border-white bg-primary-800 py-2 px-6 font-medium text-black transition-all duration-300 hover:bg-black hover:text-white active:bg-white active:text-black"
                  onClick={() => handleLogoUpload()}
                >
                  Upload your project logo
                </button>
                <p className="mt-2 text-sm text-[#7b787f]">
                  Image file must be max 160x160px / at an aspect ratio of —1:1,
                  max 5MB.
                </p>
              </div>
              <input
                {...register('logo')}
                type="file"
                name="logo"
                id="logo"
                max={3}
                style={{ display: 'none' }}
                ref={logoUpload}
                accept="image/png, image/jpeg, image/jpg, image/webp"
                // onChange={handleLogoSelect}
              />
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
                onClick={() => handleScreenshotUpload()}
              >
                Browse
              </button>
              <input
                {...register('screenshots')}
                type="file"
                name="screenshot"
                id="screenshot"
                max={3}
                style={{ display: 'none' }}
                ref={screenshotUpload}
                accept="image/png, image/jpeg, image/jpg, image/webp"
                multiple
                onChange={handleScreenshotSelect}
              />
            </div>

            <div className="mt-2 flex gap-5">
              {previewScreenshots}
              <div
                className="mt-4 w-fit cursor-pointer rounded-2xl p-5 outline-dashed outline-2 outline-[#7b787f]"
                onClick={handleScreenshotUpload}
              >
                <AddIcon h={5} w={5} color="#7b787f" />
              </div>
            </div>
            <div className="mt-10 flex items-center justify-between">
              <button
                className="flex items-center"
                onClick={() => setFormStage(1)}
              >
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
              <button
                className="flex items-center"
                onClick={() => setFormStage(2)}
              >
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
              {...register('twitter')}
            />
            <FormElement
              label="Discord"
              placeholder="https://discord.com/project"
              htmlFor="discord"
              type="url"
              {...register('discord')}
            />
            <FormElement
              label="Telegram"
              placeholder="https://telegram.com/project"
              htmlFor="telegram"
              type="url"
              {...register('telegram')}
            />
            <div className="mt-10 flex items-center justify-between">
              <button
                className="flex items-center"
                onClick={() => setFormStage(3)}
              >
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
      </div>
    </>
  );
}

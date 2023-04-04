import { ProjectUploadIcon, ScreenshotUploadIcon } from '@/svgs/submit';
import { AddIcon, ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import React from 'react';
import { useForm, useFormContext } from 'react-hook-form';
import Image from 'next/image';
import { formAtom } from '@/context/form';
import { useAtom } from 'jotai';

export default function Part2() {
  const { register, watch } = useForm();
  const watchLogo = watch('logo');
  let logoPreview = '';
  if (watchLogo && watchLogo[0]) {
    logoPreview = URL.createObjectURL(watchLogo[0]);
  }

  const watchScreenshots = watch('screenshots') as FileList | undefined;

  const previewScreenshots = watchScreenshots
    ? Object.values(watchScreenshots).map((image) => {
        const url = URL.createObjectURL(image);
        return (
          <div
            key={image.name}
            className="mt-4 h-16 w-16 rounded-2xl outline-dashed outline-2 outline-[#7b787f]"
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
      })
    : null;

  const [formStage, setFormStage] = useAtom(formAtom);

  const handlePrevClick = () => {
    setFormStage((prev) => prev - 1);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleNextClick = () => {
    setFormStage((prev) => prev + 1);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <h1 className="mt-16 text-2xl font-semibold">Project Logo</h1>
      <p className="mt-1 text-neutral-400">
        Let’s make sure people can find your project easily.
      </p>

      <div className="mt-5 flex items-center">
        {logoPreview ? (
          <div className="h-16 w-16 rounded-2xl outline-dashed outline-2 outline-primary-800">
            <Image
              src={logoPreview}
              alt="logo"
              className="h-16 w-16 rounded-2xl object-cover"
              height={16}
              width={16}
            />
          </div>
        ) : (
          <ProjectUploadIcon />
        )}
        <div className="ml-5">
          <label
            htmlFor="logo"
            className="flex w-fit cursor-pointer items-center rounded-full border border-white bg-primary-800 py-2 px-6 font-medium text-black transition-all duration-300 hover:bg-black hover:text-white active:bg-white active:text-black"
          >
            Upload your project logo
          </label>
          <p className="mt-2 text-sm text-[#7b787f]">
            Image file must be max 160x160px / at an aspect ratio of —1:1, max
            5MB.
          </p>
        </div>
        <input
          id="logo"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          {...register('logo')}
          name="logo"
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
          Upload at least one image. 1270x760px or higher recommended, max. 5MB
          each. The first image will be used as preview.
        </p>
        <label
          htmlFor="screenshots"
          className="mt-4 flex w-fit cursor-pointer items-center rounded-full border border-white bg-primary-800 py-2 px-6 font-medium text-black transition-all duration-300 hover:bg-black hover:text-white active:bg-white active:text-black"
        >
          Browse
        </label>
        <input
          {...register('screenshots')}
          type="file"
          name="screenshots"
          id="screenshots"
          max={3}
          style={{ display: 'none' }}
          accept="image/png, image/jpeg, image/jpg, image/webp"
          multiple
        />
      </div>

      <div className="mt-2 flex gap-5">
        {previewScreenshots}
        <label
          htmlFor="screenshots"
          className="mt-4 w-fit cursor-pointer rounded-2xl p-5 outline-dashed outline-2 outline-[#7b787f]"
        >
          <AddIcon h={5} w={5} color="#7b787f" />
        </label>
      </div>
      <div className="mt-16 flex items-center justify-between">
        <button className="flex items-center" onClick={handlePrevClick}>
          <ArrowBackIcon mr={1} color="#edddff" />
          <p className="text-sm text-primary-800">GO BACK</p>
        </button>
        <button
          className="flex items-center rounded-full border border-primary-800 py-3 px-6 text-primary-800 transition-all duration-300 hover:bg-primary-800 hover:text-black active:bg-black active:text-white"
          onClick={handleNextClick}
        >
          <p className="text-sm font-semibold">NEXT STEP</p>
          <ArrowForwardIcon />
        </button>
      </div>
    </>
  );
}

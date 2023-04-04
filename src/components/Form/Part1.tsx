import React, { useState } from 'react';
import { FormElement } from '../FormElement';
import { useForm } from 'react-hook-form';
import { FormControl, FormLabel, Textarea } from '@chakra-ui/react';
import { formAtom } from '@/context/form';
import { useAtom } from 'jotai';
import { ArrowForwardIcon } from '@chakra-ui/icons';

export default function Part1() {
  const { register } = useForm();
  const [descCharCount, setDescCharCount] = useState<number>(0);
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
      <FormElement
        label="Project"
        placeholder="Project Name"
        maxLength={40}
        htmlFor="name"
        name="name"
        register={register}
      />
      <FormElement
        label="Tagline"
        placeholder="A one sentence description of the project"
        maxLength={260}
        htmlFor="tagline"
        name="tagline"
        register={register}
      />
      <FormElement
        label="Website Link"
        placeholder="https://example.com"
        type="url"
        htmlFor="website"
        name="website"
        register={register}
      />

      <FormControl marginTop={10}>
        <div className="flex items-baseline justify-between">
          <FormLabel htmlFor="description" color="#d4d1d8" fontWeight={400}>
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
          {...register('description', { required: 'This is required' })}
          onChange={(e) => setDescCharCount(e.target.value.length)}
        />
      </FormControl>
      <div className="mt-16 flex items-center justify-end">
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

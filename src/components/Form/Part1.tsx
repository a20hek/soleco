import React, { useState } from 'react';
import { FormElement } from '../FormElement';
import { useForm } from 'react-hook-form';
import { FormControl, FormLabel, Textarea } from '@chakra-ui/react';
import { formAtom } from '@/context/formStage';
import { useAtom } from 'jotai';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { formValuesAtom } from '@/context/formValues';

export default function Part1() {
  const [formValues, setFormValues] = useAtom(formValuesAtom);
  const { register, handleSubmit, formState } = useForm({
    defaultValues: formValues,
    mode: 'onChange',
  });
  const [descCharCount, setDescCharCount] = useState<number>(0);
  const [formStage, setFormStage] = useAtom(formAtom);

  const handleNextClick = () => {
    handleSubmit(onSubmit)();

    setFormStage((prev) => prev + 1);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const onSubmit = (data: any) => {
    setFormValues((prevValues: any) => ({ ...prevValues, ...data }));
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
        required
      />
      <FormElement
        label="Tagline"
        placeholder="A one sentence description of the project"
        maxLength={260}
        htmlFor="tagline"
        name="tagline"
        register={register}
        required
      />
      <FormElement
        label="Website Link"
        placeholder="https://example.com"
        type="url"
        htmlFor="website"
        name="website"
        register={register}
        required
      />

      <FormControl marginTop={10}>
        <div className="flex items-baseline justify-between">
          <FormLabel
            htmlFor="description"
            color="#d4d1d8"
            fontWeight={400}
            fontSize="lg"
          >
            Description <span className="text-[#DE78F8]">*</span>
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
          size="lg"
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
          className="flex items-center rounded-full border border-primary-800 py-3 px-6 text-primary-800 transition-all duration-300 hover:bg-primary-800 hover:text-black active:bg-black active:text-white disabled:pointer-events-none disabled:opacity-30"
          onClick={handleNextClick}
          disabled={!formState.isValid}
        >
          <p className="text-sm font-semibold">NEXT STEP</p>
          <ArrowForwardIcon />
        </button>
      </div>
    </>
  );
}

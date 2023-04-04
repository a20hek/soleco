import { formAtom } from '@/context/form';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Radio, RadioGroup, Stack } from '@chakra-ui/react';
import { categories } from 'constants/categories';
import { useAtom } from 'jotai';
import React from 'react';
import { useForm, Controller, useFormContext } from 'react-hook-form';
import MultiSelect from '../MultiSelect';

export default function Part3() {
  const { control, register } = useForm();
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
      <h1 className="mt-16 text-2xl font-semibold">
        Select a project category
      </h1>
      <p className="mt-1 text-neutral-400">Select up to 3 categories</p>
      <Controller
        control={control}
        defaultValue={[]}
        name="categories"
        render={({ field: { onChange, value, ref } }) => {
          console.log('value', value);
          return (
            <MultiSelect
              value={value || []}
              onChange={onChange}
              options={categories}
            />
          );
        }}
      />

      <h1 className="mt-16 text-2xl font-semibold">Project Status</h1>
      <p className="mt-1 text-neutral-400">How far along is the project?</p>
      <RadioGroup>
        <Stack direction="row" mt={5} gap={4}>
          <Radio colorScheme="purple" value="Live" {...register('status')}>
            Live on Mainnet, Devnet, or Testnet
          </Radio>
          <Radio colorScheme="purple" value="Building" {...register('status')}>
            Building
          </Radio>
        </Stack>
      </RadioGroup>
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

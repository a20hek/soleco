import { formAtom } from '@/context/form';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useAtom } from 'jotai';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormElement } from '../FormElement';

export default function Part4() {
  const { register } = useFormContext();
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
        label="Twitter"
        placeholder="https://twitter.com/project"
        htmlFor="twitter"
        type="url"
        name="twitter"
        register={register}
      />
      <FormElement
        label="Discord"
        placeholder="https://discord.com/project"
        htmlFor="discord"
        type="url"
        name="discord"
        register={register}
      />
      <FormElement
        label="Telegram"
        placeholder="https://telegram.com/project"
        htmlFor="telegram"
        type="url"
        name="telegram"
        register={register}
      />
      <div className="mt-16 flex items-center justify-between">
        <button className="flex items-center" onClick={handlePrevClick}>
          <ArrowBackIcon mr={1} color="#edddff" />
          <p className="text-sm text-primary-800">GO BACK</p>
        </button>

        <button
          className="flex items-center rounded-full bg-gradient py-3 px-6 transition-all duration-300 hover:bg-white hover:text-black active:bg-black active:text-white"
          // onClick={methods.handleSubmit(onSubmit)}
        >
          <p className="text-sm font-semibold">SUBMIT PROJECT</p>
        </button>
      </div>
    </>
  );
}

import React, { useEffect, useState } from 'react';
import { useMediaQuery } from '@chakra-ui/react';
import { CheckIcon } from '@/svgs/submit';
import { FormProvider, useForm } from 'react-hook-form';
import { sections } from 'constants/sections';
import { useRouter } from 'next/router';
import Part1 from '@/components/Form/Part1';
import Part2 from '@/components/Form/Part2';
import Part3 from '@/components/Form/Part3';
import { useAtom } from 'jotai';
import { formAtom } from '@/context/formStage';
import { formValuesAtom } from '@/context/formValues';

export default function Submit() {
  const methods = useForm();
  const [isLargerthan640] = useMediaQuery('(min-width: 640px)');
  const [formStage, setFormStage] = useAtom(formAtom);
  const [formValues, setFormValues] = useAtom(formValuesAtom);

  const router = useRouter();

  useEffect(() => {
    console.log('form: ', formValues);
  }, [formValues, formStage]);

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
            : ''}
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
                  formStage > i + 1 ? 'bg-gradient' : 'border sm:bg-primary-800'
                } mt-12 rounded-[60px] border-primary-800 sm:w-1/3 ${
                  formStage < i + 1 ? 'opacity-30' : ''
                }`}
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
        <FormProvider {...methods}>
          {formStage == 1 && <Part1 />}
          {formStage == 2 && <Part2 />}
          {formStage == 3 && <Part3 />}
        </FormProvider>
      </div>
    </>
  );
}

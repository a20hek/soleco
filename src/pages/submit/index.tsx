import React, { useState } from 'react';
import { useMediaQuery } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { CheckIcon } from '@/svgs/submit';
import { FormProvider, useForm } from 'react-hook-form';
import { supabase } from '@/lib/supabase';
import { sections } from 'constants/sections';
import { useRouter } from 'next/router';
import Part1 from '@/components/Form/Part1';
import Part2 from '@/components/Form/Part2';
import Part3 from '@/components/Form/Part3';
import Part4 from '@/components/Form/Part4';
import { useAtom } from 'jotai';
import { formAtom } from '@/context/form';

export default function Submit() {
  const methods = useForm();
  const [isLargerthan640] = useMediaQuery('(min-width: 640px)');
  const [formStage, setFormStage] = useAtom(formAtom);

  const router = useRouter();

  const onSubmit = async (formData: any) => {
    const name = formData.name;

    const { error } = await supabase.storage
      .from('project-logos')
      .upload(name, formData.logo[0]);

    const { data: logoUrlData } = await supabase.storage
      .from('project-logos')
      .getPublicUrl(name);

    const logoUrl = logoUrlData && logoUrlData.publicUrl;

    const screenshotUrls = [];
    for (const file of formData.screenshots) {
      const { error } = await supabase.storage
        .from('project-screenshots')
        .upload(name + file.name, file);
      const { data: screenshotUrlData } = await supabase.storage
        .from('project-screenshots')
        .getPublicUrl(file.name);
      screenshotUrls.push(screenshotUrlData.publicUrl);
    }
    console.log(formData.categories);

    const { data } = await supabase.from('projects').insert({
      name: formData.name,
      tagline: formData.tagline,
      website: formData.website,
      description: formData.description,
      logo: logoUrl as string,
      screenshots: screenshotUrls,
      categories: formData.categories,
      status: formData.status,
      twitter: formData.twitter,
      discord: formData.discord,
      telegram: formData.telegram,
    });

    if (data) {
      router.push('/submit/thank-you');
    }
  };

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
                  formStage > i + 1 ? 'bg-gradient' : 'border sm:bg-primary-800'
                } mt-12 rounded-[60px] border-primary-800 sm:w-1/4 ${
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
          {formStage === 4 && <Part4 />}
        </FormProvider>
      </div>
    </>
  );
}

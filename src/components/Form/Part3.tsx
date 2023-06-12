import { formAtom } from '@/context/formStage';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Radio, RadioGroup, Stack } from '@chakra-ui/react';
import { categories } from '@/constants/categories';
import { useAtom } from 'jotai';
import React, { useState, useEffect } from 'react';
import { useForm, Controller, useFormContext } from 'react-hook-form';
import { FormElement } from '../FormElement';
import MultiSelect from '../MultiSelect';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/router';
import { formValuesAtom } from '@/context/formValues';
import { Spinner } from '@chakra-ui/react';

export default function Part3() {
  const [formValues, setFormValues] = useAtom(formValuesAtom);
  const { register, handleSubmit, formState, control } = useForm({
    defaultValues: formValues,
    mode: 'onChange',
  });
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formStage, setFormStage] = useAtom(formAtom);
  const router = useRouter();

  const handlePrevClick = () => {
    setFormStage((prev) => prev - 1);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const onSubmit = async (formData: any) => {
    setLoading(true);
    setFormValues((prevValues: any) => ({ ...prevValues, ...formData }));
    const name = formValues.name;
    const { error } = await supabase.storage
      .from('project-logos')
      .upload(name, formValues.logo[0]);
    const { data: logoUrlData } = await supabase.storage
      .from('project-logos')
      .getPublicUrl(name);

    const logoUrl = logoUrlData && logoUrlData.publicUrl;

    const screenshotUrls = [];
    for (const file of formValues.screenshots) {
      const { error } = await supabase.storage
        .from('project-screenshots')
        .upload(name + file.name, file);
      const { data: screenshotUrlData } = await supabase.storage
        .from('project-screenshots')
        .getPublicUrl(file.name);
      screenshotUrls.push(screenshotUrlData.publicUrl);
    }
    console.log(formValues.categories);

    function createSlug(name: string) {
      return name
        .toLowerCase()
        .replace(/[\s]+/g, '-')
        .replace(/[^\w-]+/g, '');
    }

    const slug = createSlug(formValues.name);

    const { data } = await supabase.from('projects').insert({
      name: formValues.name,
      slug: slug,
      tagline: formValues.tagline,
      website: formValues.website,
      description: formValues.description,
      logo: logoUrl as string,
      screenshots: screenshotUrls,
      categories: formValues.categories,
      status: formValues.status,
      twitter: formValues.twitter,
      discord: formValues.discord,
      telegram: formValues.telegram,
    });
    setIsSubmitted(true);
    setLoading(false);
  };

  useEffect(() => {
    if (isSubmitted) {
      router.push('/submit/thank-you');
    }
  }, [isSubmitted, router]);

  return (
    <>
      <h1 className="mt-16 text-xl font-semibold">
        Select a project category <span className="text-[#DE78F8]">*</span>
      </h1>
      <p className="my-1 text-neutral-400">Select up to 3 categories</p>
      <Controller
        control={control}
        defaultValue={[]}
        name="categories"
        rules={{ required: true }}
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

      <h1 className="mt-10 text-xl font-semibold">
        Project Status <span className="text-[#DE78F8]">*</span>
      </h1>
      <p className="mt-1 text-neutral-400">How far along is the project?</p>
      <RadioGroup>
        <Stack direction="row" mt={5} gap={4}>
          <Radio
            colorScheme="purple"
            value="Live"
            {...register('status', { required: false })}
          >
            Live on Mainnet, Devnet, or Testnet
          </Radio>
          <Radio
            colorScheme="purple"
            value="Building"
            {...register('status', { required: false })}
          >
            Building
          </Radio>
        </Stack>
      </RadioGroup>
      <FormElement
        label="Twitter"
        placeholder="https://twitter.com/project"
        htmlFor="twitter"
        type="url"
        name="twitter"
        register={register}
        required
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
          className={`flex items-center rounded-full bg-gradient py-3 px-6 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white hover:shadow-md active:bg-black active:text-white disabled:pointer-events-none disabled:opacity-50 ${
            !formState.isValid ? 'pointer-events-none opacity-50' : ''
          }`}
          onClick={handleSubmit(onSubmit)}
          disabled={!formState.isValid || loading}
        >
          {loading ? (
            <Spinner size="sm" color="white" marginRight="4" />
          ) : (
            <>
              <p className="text-sm font-semibold">SUBMIT PROJECT</p>
              <ArrowForwardIcon ml={1} color="#edddff" />
            </>
          )}
        </button>
      </div>
    </>
  );
}

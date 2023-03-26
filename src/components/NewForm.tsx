import React from 'react';

import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useState } from 'react';

export function NewForm({
  label,
  placeholder,
  maxLength,
  htmlFor,
  type,
  register,
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
        {...register('name')}
        maxLength={maxLength}
        {...props}
        onChange={(e) => setChar(e.target.value.length)}
      />
    </FormControl>
  );
}

import Select from 'react-select';
import React, { useState } from 'react';

export default function MultiSelect({
  onChange,
  options,
  value,
  maxLength = 3,
}: any) {
  // const [selectedOptions, setSelectedOptions] = useState<any>([]);

  // const handleSelectChange = (newValue) => {
  //   if (selectedOptions.length < 3) {
  //     setSelectedOptions(newValue);
  //     if (onChange) {
  //       onChange(newValue);
  //     }
  //   }
  // };
  // console.log('options', options);
  return (
    <Select
      value={value}
      isMulti
      options={options}
      onChange={onChange}
      isOptionDisabled={(option) => value.length >= maxLength}
      // inputRef={inputRef}
      // value={selectedOptions}
      // onChange={handleSelectChange}
      // isOptionDisabled={() => selectedOptions.length >= 3}
      styles={{
        option: (styles, { isDisabled }) => ({
          ...styles,
          color: isDisabled ? '#737373' : 'black',
          backgroundColor: '#edddff',
        }),
        input: (styles) => ({
          ...styles,
          color: 'white',
        }),
        control: (styles) => ({
          ...styles,
          backgroundColor: '#120f16',
          border: 'none',
          borderRadius: '10px',
          height: '48px',
        }),
        indicatorSeparator: (styles) => ({
          ...styles,
          display: 'none',
        }),
        multiValue: (styles) => ({
          ...styles,
          backgroundColor: '#120f16',
          borderWidth: '1px',
          padding: '2px 8px',
          borderRadius: '24px',
          borderColor: '#edddff',
        }),
        multiValueLabel: (styles) => ({
          ...styles,
          color: '#edddff',
          fontSize: '12px',
        }),
        valueContainer: (styles) => ({
          ...styles,
          padding: '0 12px',
        }),
        menuList: (styles) => ({
          ...styles,
          backgroundColor: '#edddff',
          borderRadius: '16px',
        }),
        multiValueRemove: (styles) => ({
          ...styles,
          color: '#edddff',
          ':hover': {
            backgroundColor: '#120f16',
            color: '#FF7575',
          },
        }),
      }}
    />
  );
}

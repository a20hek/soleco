import Select from 'react-select';
import React, { useState } from 'react';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export default function MultiSelect() {
  const [selectedOptions, setSelectedOptions] = useState<any>([]);

  return (
    <Select
      isMulti
      options={options}
      onChange={(value) => setSelectedOptions(value)}
      isOptionDisabled={() => selectedOptions.length >= 3}
      styles={{
        option: (styles) => ({
          ...styles,
          color: 'black',
          backgroundColor: '#edddff',
        }),
        input: (styles) => ({
          ...styles,
          color: 'white',
        }),
        control: (styles) => ({
          ...styles,
          color: '#fff',
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

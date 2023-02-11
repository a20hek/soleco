import React from 'react';

export const CategoryCard = ({ title, icon, num }: any) => {
  return (
    <div className="p-5 w-60 bg-[#120F16] rounded-[20px] my-10 mr-8">
      {icon}
      <p className="mt-6 text-lg font-semibold text-white">{title}</p>
      <p className="mt-2 text-neutral-500">{num}</p>
    </div>
  );
};

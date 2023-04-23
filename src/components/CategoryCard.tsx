import React from 'react';
import { categories } from 'constants/categories';

interface CategoryCardProps {
  name: string;
  selectedCategory: string;
  onClick: (name: string) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  name,
  selectedCategory,
  onClick,
}) => {
  const category = categories.find((category) => category.value === name); // find the category object that corresponds to the given value
  const label = category ? category.label : ''; // get the label from the category object or set it to an empty string if the category is not found

  const handleClick = () => {
    onClick(name);
  };

  const isSelected = selectedCategory.toLowerCase() === name.toLowerCase();

  return (
    <div
      onClick={handleClick}
      className={`${
        isSelected ? 'border-primary-500 bg-gradient' : 'border-[#3d3a41]'
      } cursor-pointer rounded-full border px-7 py-3 transition-colors duration-150 ease-in-out`}
    >
      <p className="select-none text-sm font-medium text-white">{label}</p>{' '}
      {/* display the label instead of the name */}
    </div>
  );
};

export default CategoryCard;

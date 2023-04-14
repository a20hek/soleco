import React from 'react';

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
      <p className="select-none text-sm font-medium text-white">{name}</p>
    </div>
  );
};

export default CategoryCard;

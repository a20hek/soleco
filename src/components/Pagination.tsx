import React from 'react';
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const PageNumber: React.FC<{
  pageNumber: number;
  onClick: () => void;
  isActive?: boolean;
}> = ({ pageNumber, onClick, isActive }) => (
  <li
    className={`w-12 cursor-pointer select-none rounded border py-2 text-center ${
      isActive ? 'border-primary-500 bg-primary-500' : 'border-primary-600/50'
    }`}
    onClick={onClick}
  >
    {pageNumber}
  </li>
);

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (pageNumber: number) => {
    onPageChange(pageNumber);
  };

  return (
    <nav>
      <ul className="flex items-center justify-center gap-4 text-white">
        {currentPage > 2 && (
          <>
            <PageNumber pageNumber={1} onClick={() => handlePageChange(1)} />
            <li className="px-2">...</li>
          </>
        )}
        {currentPage > 1 && (
          <PageNumber
            pageNumber={currentPage - 1}
            onClick={() => handlePageChange(currentPage - 1)}
          />
        )}
        <PageNumber pageNumber={currentPage} isActive onClick={() => {}} />
        {currentPage < totalPages && (
          <PageNumber
            pageNumber={currentPage + 1}
            onClick={() => handlePageChange(currentPage + 1)}
          />
        )}
        {currentPage < totalPages - 1 && (
          <>
            <li className="px-2">...</li>
            <PageNumber
              pageNumber={totalPages}
              onClick={() => handlePageChange(totalPages)}
            />
          </>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;

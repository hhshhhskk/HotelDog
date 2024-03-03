// LikePagenation 컴포넌트
import React from "react";

const LikePagenation = ({
  currentPage,
  itemsPerPage,
  totalItems,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrevPage = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <div>
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        Previous
      </button>
      <span>{currentPage}</span>
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default LikePagenation;

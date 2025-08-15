import { ChevronLeft, ChevronRight } from "lucide-react";
import PaginationButton from "./PaginationButton";

const Pagination = ({
  currentPage = 1,
  totalPages = 10,
  onPageChange,
  onPrevious,
  onNext,
}) => {
  const renderPageNumbers = () => {
    const pages = [];

    // Always show page 1
    pages.push(
      <PaginationButton
        key={1}
        active={currentPage === 1}
        onClick={() => onPageChange?.(1)}
      >
        1
      </PaginationButton>
    );

    // Show page 2 and 3 if we're not too far
    if (currentPage <= 4) {
      [2, 3].forEach((page) => {
        if (page <= totalPages) {
          pages.push(
            <PaginationButton
              key={page}
              active={currentPage === page}
              onClick={() => onPageChange?.(page)}
            >
              {page}
            </PaginationButton>
          );
        }
      });
    }

    // Show ellipsis if there's a gap
    if (currentPage > 4) {
      pages.push(
        <span key="ellipsis1" className="px-3 py-2 text-gray-500">
          ...
        </span>
      );

      // Show current page and neighbors if not near the end
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let page = start; page <= end; page++) {
        pages.push(
          <PaginationButton
            key={page}
            active={currentPage === page}
            onClick={() => onPageChange?.(page)}
          >
            {page}
          </PaginationButton>
        );
      }
    }

    // Show ellipsis before the end if needed
    if (currentPage < totalPages - 3) {
      pages.push(
        <span key="ellipsis2" className="px-3 py-2 text-gray-500">
          ...
        </span>
      );
    }

    // Show last few pages
    const lastPages = [totalPages - 2, totalPages - 1, totalPages].filter(
      (page) => page > Math.max(3, currentPage + 1) && page > 0
    );

    lastPages.forEach((page) => {
      if (page <= totalPages) {
        pages.push(
          <PaginationButton
            key={page}
            active={currentPage === page}
            onClick={() => onPageChange?.(page)}
          >
            {page}
          </PaginationButton>
        );
      }
    });

    return pages;
  };

  return (
    <div className="flex items-center justify-between">
      <button
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors disabled:text-gray-300 disabled:cursor-not-allowed"
        disabled={currentPage === 1}
        onClick={onPrevious}
      >
        <ChevronLeft className="w-4 h-4" />
        Previous
      </button>

      <div className="flex items-center gap-1">{renderPageNumbers()}</div>

      <button
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors disabled:text-gray-300 disabled:cursor-not-allowed"
        disabled={currentPage === totalPages}
        onClick={onNext}
      >
        Next
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Pagination;

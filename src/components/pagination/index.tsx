import { Iconly } from "react-iconly";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const generatePageNumbers = () => {
    if (totalPages <= 4) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    } else if (currentPage <= 3) {
      return [1, 2, 3, "...", totalPages - 2, totalPages - 1, totalPages];
    } else if (currentPage >= totalPages - 2) {
      return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
    } else {
      return [1, 2, "...", currentPage, "...", totalPages - 1, totalPages];
    }
  };

  return (
    <div className="flex justify-between items-center gap-2 mt-4 w-full">
      {/* Nút Prev */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="disabled:text-[#B3C5D4] text-[#4D5F6E] flex items-center gap-2 px-2 py-1"
      >
        <Iconly name="ArrowLeft" size={24} />
        <span className="hidden sm:inline">Trang trước</span>
      </button>

      {/* Số trang */}
      <div className="flex justify-between items-center w-fit">
        {generatePageNumbers().map((num, index) => (
          <button
            key={index}
            onClick={() => typeof num === "number" && onPageChange(num)}
            className={`flex-none flex items-center justify-center 
            w-8 h-8 sm:w-10 sm:h-10
            ${
              currentPage === num
                ? "bg-[#D1F7EA] text-body-primary"
                : "text-body-secondary"
            } 
            rounded-lg text-sm sm:text-base`}
            disabled={num === "..."}
          >
            {num}
          </button>
        ))}
      </div>

      {/* Nút Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="disabled:text-[#B3C5D4] text-[#4D5F6E] flex items-center gap-2 px-2 py-1"
      >
        <span className="hidden sm:inline">Trang sau</span>
        <Iconly name="ArrowRight" size={24} />
      </button>
    </div>
  );
};

export default Pagination;

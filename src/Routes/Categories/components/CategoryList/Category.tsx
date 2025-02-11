import { useState, useRef, useEffect } from "react";
import { CategoryCardProps } from "../../types/Categories";

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onDelete }) => {
  const [isSlid, setIsSlid] = useState(false);

  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleSlide = () => {
    setIsSlid(!isSlid);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
      setIsSlid(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative w-full bg-[#2c2e2d] rounded-xl shadow-lg border-2 border-[#343434] overflow-hidden"
    >
      <div
        className={`flex items-center justify-between p-4 transition-transform duration-300 ${
          isSlid ? "translate-x-[-40%]" : ""
        }`}
      >
        <div className="flex flex-col w-3/5">
          <h4 className="text-lg font-semibold text-[#fbfbfb]">
            {category.name}
          </h4>
          <p className="text-sm text-[#d1d1d1] truncate">
            {category.description}
          </p>
        </div>

        <button
          onClick={handleSlide}
          className="text-[#f88b25] hover:text-[#e67e22] transition-all duration-300"
        >
          {!isSlid ? (
            <i className="bi bi-arrow-left text-xl"></i>
          ) : (
            <i className="bi bi-arrow-right text-xl"></i>
          )}
        </button>
      </div>

      <div
        className={`absolute top-0 right-0 h-full bg-red-500 w-[80px] flex items-center justify-center transition-all duration-300 ${
          isSlid ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={() => onDelete(category.id)}
      >
        <button
          className="text-white font-semibold"
          title="Delete"
        >
          <i className="bi bi-trash text-2xl"></i>
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;

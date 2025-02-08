import { useState, useRef, useEffect } from "react";
import { CategoryCardProps } from "../../types/Categories";

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [isSlid, setIsSlid] = useState(false);

  // Create a ref to the category card container
  const cardRef = useRef<HTMLDivElement | null>(null);

  // Toggle the slide effect
  const handleSlide = () => {
    setIsSlid(!isSlid); // Toggle the sliding effect
  };

  // Handle the delete action
  const handleDelete = () => {
    setIsDeleted(true); // Mark the item as deleted (you can implement actual delete logic here)
  };

  // Handle clicks outside the card container to close the sliding effect
  const handleClickOutside = (e: MouseEvent) => {
    if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
      setIsSlid(false); // Close the sliding effect if click is outside the card
    }
  };

  // Use effect to add event listener when component mounts
  useEffect(() => {
    // Add the event listener for detecting clicks outside
    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener when the component is unmounted
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []); 

  return (
    <div
      ref={cardRef} // Attach the ref to the root div
      className="relative w-full bg-[#2c2e2d] rounded-xl shadow-lg border-2 border-[#343434] overflow-hidden"
    >
      <div
        className={`flex items-center justify-between p-4 transition-transform duration-300 ${
          isSlid ? "translate-x-[-40%]" : "" // Shift the content left by 80%
        }`}
      >
        <div className="flex flex-col w-3/5">
          <h4 className="text-lg font-semibold text-[#fbfbfb]">
            {category.name}
          </h4>
          <p className="text-sm text-[#d1d1d1] truncate">{category.description}</p>
        </div>
        
        <button
          onClick={handleSlide}
          className="text-[#f88b25] hover:text-[#e67e22] transition-all duration-300"
        >
          {
            !isSlid ? <i className="bi bi-arrow-left text-xl"></i> : <i className="bi bi-arrow-right text-xl"></i>
          }
        </button>
      </div>

      {/* Trash icon slide out */}
      <div
        className={`absolute top-0 right-0 h-full bg-red-500 w-[80px] flex items-center justify-center transition-all duration-300 ${
          isSlid ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={handleDelete}
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







// import { useEffect, useRef, useState } from "react";
// import { CategoryCardProps } from "../../types/Categories";

// const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
//   const [isDeleted, setIsDeleted] = useState(false);
//   const [isSlid, setIsSlid] = useState(false);
//   const cardRef = useRef<HTMLDivElement | null>(null);

//   const handleSlide = () => {
//     setIsSlid(!isSlid); // Toggle the sliding effect
//   };

//   const handleDelete = () => {
//     setIsDeleted(true); // Mark the item as deleted (you can implement actual delete logic here)
//   };

//   const handleClickOutside = (e: React.MouseEvent) => {
//     // If clicked outside the trash button area, close the slide
//     if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
//       setIsSlid(false); // Close the sliding effect
//     }
//   };

//   return (
//     <div
//       className="relative w-full max-w-[300px] bg-[#2c2e2d] rounded-xl shadow-lg border-2 border-[#343434] overflow-hidden"
//       onClick={handleClickOutside} // Handle click outside to close the slide
//     >
//       <div
//         className={`flex items-center justify-between p-4 transition-transform duration-300 ${
//           isSlid ? "translate-x-[-100%]" : ""
//         }`}
//       >
//         <div className="flex flex-col">
//           <h4 className="text-lg font-semibold text-[#fbfbfb]">
//             {category.name}
//           </h4>
//           <p className="text-sm text-[#d1d1d1]">{category.description}</p>
//         </div>
//         <button
//           onClick={handleSlide}
//           className="text-[#f88b25] hover:text-[#e67e22] transition-all duration-300"
//         >
//           <i className="bi bi-trash text-xl"></i>
//         </button>
//       </div>

//       {/* Trash icon slide out */}
//       <div
//         className={`absolute top-0 right-0 h-full bg-red-500 w-[80px] flex items-center justify-center transition-all duration-300 ${
//           isSlid ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <button
//           onClick={handleDelete}
//           className="text-white font-semibold"
//           title="Delete"
//         >
//           <i className="bi bi-trash text-2xl"></i>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CategoryCard;

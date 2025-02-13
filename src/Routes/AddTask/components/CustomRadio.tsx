import { useState } from "react";
import { CustomRadioProps } from "../types/taskForm";

const selectedColors = "text-gray-300 bg-[#585757]";

const CustomRadio: React.FC<CustomRadioProps> = ({
  options,
  maxSelect = 1,
  colors = {},
  onChange,
}) => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelect = (value: string) => {
    let newSelected;
    if (maxSelect === 1) {
      newSelected = selected.includes(value) ? [] : [value];
    } else {
      if (selected.includes(value)) {
        newSelected = selected.filter((item) => item !== value);
      } else {
        if (selected.length < maxSelect) {
          newSelected = [...selected, value];
        } else {
          return;
        }
      }
    }

    setSelected(newSelected);
    if (onChange) onChange(newSelected);
  };

  return (
    <div className="mt-2 flex space-x-4 select-none overflow-auto">
      {options.map((option) => (
        <div
          key={option}
          onClick={() => handleSelect(option)}
          className={`cursor-pointer p-4 rounded-lg transition-all font-semibold bg-[#3a3a3a] border border-[#4a4a4a]
            ${
              selected.includes(option)
                ? `${
                    colors[option] ?? selectedColors
                  } flex items-center py-2 px-4`
                : `text-gray-400 flex items-center py-2 px-4`
            }`}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

export default CustomRadio;

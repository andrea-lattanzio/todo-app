import { useEffect, useState } from "react";


const selectedColors = "text-gray-300 bg-[#585757]";

interface Option {
  id: string;
  name: string;
  description?: string;
}

export interface CustomRadioProps {
  options: Option[];
  maxSelect?: number;
  colors?: { [key: string]: string };
  returnField?: keyof Option;
  selectedRadio?: string[];
  allowNone?: boolean;
  onChange: (option: string[] | null) => void;
}

const CustomRadio: React.FC<CustomRadioProps> = ({
  options,
  maxSelect = 1,
  colors = {},
  returnField = "id",
  selectedRadio = [],
  allowNone = false,
  onChange,
}) => {
  const [selected, setSelected] = useState<string[]>(
    selectedRadio ? selectedRadio : []
  );

  useEffect(() => {
    if (selected[0]) {
      onChange(selected);
    }
  }, []);

  const handleSelect = (value: string) => {
    let newSelected;
    if (maxSelect === 1) {
      if (selected.includes(value)) {
        newSelected = allowNone ? [] : selected;
      } else {
        newSelected = [value];
      }
    } else {
      if (selected.includes(value)) {
        newSelected = selected.filter((item) => item !== value);
        if (!allowNone && newSelected.length === 0) return; 
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
      {options.map((option: Option) => (
        <div
          key={option.id}
          onClick={() => handleSelect(option[returnField]!)}
          className={`cursor-pointer p-4 rounded-lg transition-all font-semibold bg-[#3a3a3a] border border-[#4a4a4a]
            ${
              selected.includes(option[returnField]!)
                ? `${
                    colors[option.name] ?? selectedColors
                  } flex items-center py-2 px-4`
                : `text-gray-400 flex items-center py-2 px-4`
            }`}
        >
          {option.name}
        </div>
      ))}
    </div>
  );
};

export default CustomRadio;

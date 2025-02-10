import { useNavigate } from "react-router-dom";

export interface NoElementProps {
  elementName?: string;
  createButton?: boolean;
  title: string;
  description: string;
  icon: string;
}

const NoElementComponent: React.FC<NoElementProps> = ({
  elementName,
  createButton = true,
  title,
  description,
  icon,
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center text-center text-gray-500">
      <i className={`bi ${icon} text-6xl text-gray-400`}></i>
      <h2 className="mt-4 text-xl font-semibold">{title}</h2>
      <p className="text-sm text-gray-400">{description}</p>
      {createButton && (
        <button
          className="mt-8 px-6 py-2 bg-[#f88b25] flex items-center text-gray-800 font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-[#e67e22] active:scale-95"
          onClick={() => navigate("/add")}
        >
          <i className="bi bi-plus-circle mr-2 text-2xl"></i> Create{" "}
          {elementName}
        </button>
      )}
    </div>
  );
};

export default NoElementComponent;

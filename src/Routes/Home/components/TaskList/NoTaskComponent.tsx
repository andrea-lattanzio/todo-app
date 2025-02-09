import { NoTaskProps } from "../../types/task";

const NoTaskComponent: React.FC<NoTaskProps> = ({
  name,
  description,
  icon,
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center text-gray-500">
      <i className={`bi ${icon} text-6xl text-gray-400`}></i>
      <h2 className="mt-4 text-xl font-semibold">{name}</h2>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
};

export default NoTaskComponent;

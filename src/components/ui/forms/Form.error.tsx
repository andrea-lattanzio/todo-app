import { ErrorMessageProps } from "./types/form.error.types";

const FormError: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="flex items-center text-red-500 mt-3 border-2 border-red-500 rounded-lg p-3 bg-[#dc26263d] w-full overflow-hidden">
      <i className="bi bi-exclamation-circle text-2xl"></i>
      <p className="ml-3">{message}</p>
    </div>
  );
};

export default FormError;

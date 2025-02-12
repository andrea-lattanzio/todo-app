import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FormError from "../../../components/ui/forms/Form.error";
import {
  CategoryFormProps,
  CategoryFormSchema,
  categorySchema,
} from "../types/Categories";

const CategoryForm: React.FC<CategoryFormProps> = ({ onSubmitForm, error }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryFormSchema>({
    resolver: zodResolver(categorySchema),
    mode: "onSubmit",
  });

  return (
    <div className="mt-5 w-full mx-auto bg-[#2c2e2d] p-6 rounded-xl shadow-lg border-2 border-[#343434]">
      <h2 className="text-xl font-semibold text-[#fbfbfb] mb-4">
        Create Category
      </h2>
      <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-4">
        <div>
          <label className="block text-[#d1d1d1] text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            placeholder="Category name"
            autoComplete="off"
            className="w-full p-3 rounded-lg bg-[#3a3a3a] text-[#fbfbfb] border border-[#4a4a4a] focus:outline-none focus:ring-2 focus:ring-[#f88b25]"
            {...register("name")}
            maxLength={10}
          />
          {errors.name && (
            <FormError message={errors.name.message ?? "Name is not valid"} />
          )}
        </div>

        <div>
          <label className="block text-[#d1d1d1] text-sm font-medium mb-1">
            Description
          </label>
          <textarea
            placeholder="Enter category description"
            className="w-full p-3 rounded-lg bg-[#3a3a3a] text-[#fbfbfb] border border-[#4a4a4a] focus:outline-none focus:ring-2 focus:ring-[#f88b25] resize-none h-24"
            {...register("description")}
            maxLength={50}
          ></textarea>
          {errors.description && (
            <FormError
              message={errors.description.message ?? "Description is not valid"}
            />
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-[#f88b25] text-[#292929] p-3 rounded-lg shadow-md transition-all duration-300 hover:bg-[#e67e22] active:scale-95 font-semibold"
        >
          Create Category
        </button>
        {error && <FormError message={error} />}
      </form>
    </div>
  );
};

export default CategoryForm;

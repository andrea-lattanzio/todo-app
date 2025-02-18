import { Task } from "../../types";
import { zodResolver } from "@hookform/resolvers/zod";
import Spinner from "../../../../../components/Spinner";
import { Controller, useForm } from "react-hook-form";
import { priorityColors } from "../../../../../components/ui/taskColors";
import FormError from "../../../../../components/ui/forms/Form.error";
import CustomRadio from "./customRadio";
import { TaskFormSchema, taskSchema } from "./taskFormTypes";
import useCategories from "../../../Category/hooks/useCategories";

export interface TaskFormProps {
  onSubmitForm: (data: TaskFormSchema) => void;
  error: string | undefined;
  task?: Task;
}

const priorities = [
  { id: "1", name: "LOW" },
  { id: "2", name: "MEDIUM" },
  { id: "3", name: "HIGH" },
];

const TaskForm: React.FC<TaskFormProps> = ({ onSubmitForm, error, task }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<TaskFormSchema>({
    resolver: zodResolver(taskSchema),
    mode: "onChange",
    defaultValues: task
      ? {
          name: task.name,
          description: task.description,
          dueDate: task.dueDate.split("T")[0],
        }
      : {},
  });
  const { data: categories, isLoading } = useCategories();

  if (!categories || isLoading) return <Spinner />;

  return (
    <>
      <div className="select-none h-auto w-full bg-[#2c2e2d] p-4 rounded-xl shadow-lg border-2 border-[#343434] overflow-y-auto">
        <h2 className="text-2xl font-semibold text-white mb-4">
          {task ? "Update task" : "Add task"}
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmitForm)}>
          <div>
            <label className="block text-gray-400 font-medium">Task Name</label>
            <input
              type="text"
              maxLength={50}
              className="mt-2 w-full p-3 rounded-lg bg-[#3a3a3a] text-[#fbfbfb] border border-[#4a4a4a] focus:outline-none focus:ring-2 focus:ring-[#f88b25]"
              placeholder="Task name"
              autoComplete="off"
              {...register("name")}
            />
            {errors.name && (
              <FormError message={errors.name.message ?? "Name is not valid"} />
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-400 font-medium">
              Description
            </label>
            <textarea
              className="h-40 resize-none select-all mt-2 w-full p-3 rounded-lg bg-[#3a3a3a] text-[#fbfbfb] border border-[#4a4a4a] focus:outline-none focus:ring-2 focus:ring-[#f88b25]"
              placeholder="Task description"
              maxLength={100}
              {...register("description")}
            />
            {errors.description && (
              <FormError
                message={
                  errors.description.message ?? "Description is not valid"
                }
              />
            )}
          </div>

          {/* Due Date */}
          <div>
            <label className="block text-gray-400 font-medium">Due Date</label>
            <input
              type="date"
              className="mt-2 w-full p-3 rounded-lg bg-[#3a3a3a] text-[#fbfbfb] border border-[#4a4a4a] focus:outline-none focus:ring-2 focus:ring-[#f88b25]"
              {...register("dueDate")}
            />
            {errors.dueDate && (
              <FormError
                message={errors.dueDate.message ?? "Due date is not valid"}
              />
            )}
          </div>

          {/* Priority */}
          <div>
            <label className="block text-gray-400 font-medium">Priority</label>
            <Controller
              name="priority"
              control={control}
              render={({ field }) => (
                <CustomRadio
                  options={priorities}
                  colors={priorityColors}
                  returnField="name"
                  selectedRadio={[task?.priority!]}
                  onChange={field.onChange}
                />
              )}
            />
            {errors.priority && (
              <FormError
                message={errors.priority.message! ?? "priority is not valid"}
              />
            )}
          </div>
          {/* Categories (Dropdown with max 3 selections) */}
          {categories.length > 0 ? (
            <div>
              <label className="block text-gray-400 font-medium">
                Categories
              </label>
              <span className="text-xs text-gray-400">select up to three</span>
              <Controller
                name="categories"
                control={control}
                render={({ field }) => (
                  <CustomRadio
                    options={categories}
                    maxSelect={3}
                    selectedRadio={task?.categories?.map((cat) => cat.id)}
                    allowNone={true}
                    onChange={field.onChange}
                  />
                )}
              />
              {errors.categories && (
                <FormError
                  message={errors.categories.message ?? "category is not valid"}
                />
              )}
            </div>
          ) : null}
          <button
            type="submit"
            disabled={!isValid}
            className={`text-gray-800 mt-3 w-full py-2 font-semibold rounded-md shadow-md transition active:scale-95
              ${
                isValid
                  ? "bg-[#f88b25] cursor-pointer"
                  : "bg-gray-600 cursor-not-allowed opacity-50"
              }`}
          >
            Save Task
          </button>
        </form>
      </div>
      {error && <FormError message={error} />}
    </>
  );
};

export default TaskForm;

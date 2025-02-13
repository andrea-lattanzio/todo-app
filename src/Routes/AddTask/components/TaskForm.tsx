import Spinner from "../../../components/Spinner";
import { priorityColors } from "../../../components/ui/taskColors";
import useCategories from "../../Categories/hooks/useCategories";
import { TaskFormProps } from "../types/taskForm";
import CustomRadio from "./CustomRadio";

const TaskForm: React.FC<TaskFormProps> = ({ onSubmitForm, error }) => {
  const { data: categories, isLoading } = useCategories();

  console.log(error);
  if (!categories || isLoading) return <Spinner />;

  return (
    <>
      <div className="select-none h-auto w-full bg-[#2c2e2d] p-4 rounded-xl shadow-lg border-2 border-[#343434] overflow-y-auto">
        <h2 className="text-2xl font-semibold text-white mb-4">New task</h2>
        <form className="space-y-4">
          {/* Task Name */}
          <div>
            <label className="block text-gray-400 font-medium">Task Name</label>
            <input
              type="text"
              maxLength={50}
              className="mt-2 w-full p-3 rounded-lg bg-[#3a3a3a] text-[#fbfbfb] border border-[#4a4a4a] focus:outline-none focus:ring-2 focus:ring-[#f88b25]"
              placeholder="Enter task name"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-400 font-medium">
              Description
            </label>
            <textarea
              className="resize-none select-all mt-2 w-full p-3 rounded-lg bg-[#3a3a3a] text-[#fbfbfb] border border-[#4a4a4a] focus:outline-none focus:ring-2 focus:ring-[#f88b25]"
              placeholder="Enter task description"
              maxLength={100}
            />
          </div>

          {/* Due Date */}
          <div>
            <label className="block text-gray-400 font-medium">Due Date</label>
            <input
              type="date"
              className="mt-2 w-full p-3 rounded-lg bg-[#3a3a3a] text-[#fbfbfb] border border-[#4a4a4a] focus:outline-none focus:ring-2 focus:ring-[#f88b25]"
            />
          </div>

          {/* Priority */}
          <div>
            <label className="block text-gray-400 font-medium">
              Priority
            </label>
            <CustomRadio
              options={["LOW", "MEDIUM", "HIGH"]}
              colors={priorityColors}
              onChange={(value) => console.log(value)}
            />
          </div>
            {/* Categories (Dropdown with max 3 selections) */}
          <div>
          <label className="block text-gray-400 font-medium">Categories</label>
          <span className="text-xs text-gray-400">select up to three</span>
            <CustomRadio
              options={categories.map((category) => category.name)}
              maxSelect={3}
              onChange={(value) => console.log(value)}
            />
          </div>
        </form>
      </div>
      <button
        type="submit"
        className="mt-3 w-full py-2 bg-orange-500 text-white font-semibold rounded-md shadow-md hover:bg-orange-600 transition active:scale-95"
      >
        Save Task
      </button>
    </>
  );
};

export default TaskForm;

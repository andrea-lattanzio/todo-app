import { TaskDetailProps } from "../types/task";

const TaskDetail: React.FC<TaskDetailProps> = ({ task }) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "HIGH":
        return "bg-red-500 text-[#292929]";
      case "MEDIUM":
        return "bg-yellow-500 text-yellow-800";
      case "LOW":
        return "bg-green-500 text-green-800";
      default:
        return "bg-gray-500 text-gray-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "PENDING":
        return "bg-gray-600 text-gray-800";
      case "COMPLETED":
        return "bg-green-600 text-green-800";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <div className="flex-col w-full">
      {/* Task Details Container */}
      <div className="mt-3 bg-[#2c2e2d] rounded-xl shadow-lg border-2 border-[#343434] p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Task Name */}
        <div className="flex flex-col">
          <label className="text-[#f88b25] font-semibold">Task Name</label>
          <span className="text-[#656567] font-medium">{task.name}</span>
        </div>

        {/* Task Description */}
        <div className="flex flex-col">
          <label className="text-[#f88b25] font-semibold">Description</label>
          <span className="text-[#656567]">{task.description}</span>
        </div>

        {/* Task Due Date */}
        <div className="flex flex-col">
          <label className="text-[#f88b25] font-semibold">Due Date</label>
          <span className="text-[#656567] font-medium">{task.dueDate}</span>
        </div>

        {/* Task Priority */}
        {task.status !== "COMPLETED" && (
          <div className="flex flex-col w-fit">
            <label className="text-[#f88b25] font-semibold">Priority</label>
            <span
              className={`font-semibold px-2 py-1 rounded-md ${getPriorityColor(
                task.priority!
              )}`}
            >
              {task.priority}
            </span>
          </div>
        )}

        {/* Task Status */}
        <div className="flex flex-col w-fit">
          <label className="text-[#f88b25] font-semibold">Status</label>
          <span
            className={`font-semibold px-2 py-1 rounded-md ${getStatusColor(
              task.status
            )}`}
          >
            {task.status}
          </span>
        </div>

        {/* Task Categories */}
        <div className="flex flex-col">
          <label className="text-[#f88b25] font-semibold">Categories</label>
          <span className="text-[#656567] font-medium">
            {task.categories.map((cat, index) => (
              <span key={index}>
                {cat.name}
                {index < task.categories.length - 1 && ", "}
              </span>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TaskDetail;

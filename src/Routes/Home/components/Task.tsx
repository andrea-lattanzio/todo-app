import { TaskItemProps } from "../types/task";

const statusColors: { [key: string]: string } = {
  PENDING: "bg-yellow-500 text-yellow-900",
  COMPLETED: "bg-green-500 text-green-900",
};

const priorityColors: { [key: string]: string } = {
  HIGH: "bg-red-500 text-red-900",
  MEDIUM: "bg-orange-500 text-orange-900",
  LOW: "bg-green-300 text-green-500",
};

const Task: React.FC<TaskItemProps> = ({ task }) => {
  return (
    <div className="select-none flex items-center justify-between border-2 border-[#5e5e5e] p-5 rounded-md shadow-lg text-[#d7d7d7] font-semibold">
      <div className="hidden md:flex w-full items-center justify-between">
        <div className="flex flex-col items-start w-1/5">
          <p className="text-sm text-[#a5a5a58f]">Name</p>
          <p className="mt-1 truncate w-full overflow-hidden whitespace-nowrap">
            {task.name}
          </p>
        </div>
        <div className="flex flex-col items-start w-1/5">
          <p className="text-sm text-[#a5a5a58f]">Due Date</p>
          <p className="mt-1">{task.dueDate}</p>
        </div>
        <div className="flex flex-col items-start w-1/5">
          {task.status !== "COMPLETED" ? (
            <div
              className={`px-3 py-1 rounded-md text-xs font-bold ${
                priorityColors[task.priority!] || "bg-gray-500 text-gray-900"
              }`}
            >
              {task.priority}
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="flex flex-col items-start w-1/5">
          <p className="text-sm text-[#a5a5a58f]">Status</p>
          <div className="mt-1 px-3 py-1 rounded-md text-xs font-bold bg-gray-700">
            {task.status}
          </div>
        </div>
        <div className="flex space-x-2">
          {task.status !== "COMPLETED" ? (
            <button
              type="button"
              className="hover:text-gray-400 transition duration-300"
            >
              <i className="bi bi-check-circle cursor-pointer text-2xl"></i>
            </button>
          ) : (
            <></>
          )}
          <button
            type="button"
            className="hover:text-gray-400 transition duration-300"
          >
            <i className="bi bi-trash cursor-pointer text-2xl"></i>
          </button>
        </div>
      </div>
      <div className="flex md:hidden w-full items-center justify-between">
        <div className="flex flex-col w-2/5">
          <p className="truncate w-full overflow-hidden whitespace-nowrap">
            {task.name}
          </p>
          <p className="text-xs text-[#a5a5a58f]">{task.dueDate}</p>
        </div>
        {task.status !== "COMPLETED" ? (
          <div
            className={`px-3 py-1 rounded-md text-xs font-bold ${
              priorityColors[task.priority!] || "bg-gray-500 text-gray-900"
            }`}
          >
            {task.priority}
          </div>
        ) : (
          <></>
        )}
        <div className="flex space-x-2">
          {task.status !== "COMPLETED" ? (
            <button type="button" className="">
              <i className="bi bi-check-circle cursor-pointer text-2xl"></i>
            </button>
          ) : (
            <></>
          )}
          <button type="button" className="">
            <i className="bi bi-trash cursor-pointer text-2xl"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;

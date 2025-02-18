import { useNavigate } from "react-router-dom";
import { Task } from "../../types";
import { useTaskMutations } from "../../hooks/useTaskMutations";
import {
  priorityColors,
  statusColors,
} from "../../../../../components/ui/taskColors";

interface TaskListItemProps {
  task: Task;
}

const TaskListItem: React.FC<TaskListItemProps> = ({ task }) => {
  const navigate = useNavigate();
  const { updateTaskMutation, deleteTaskMutation } = useTaskMutations(task.id);

  return (
    <div
      className="select-none flex items-center justify-between border border-[#4a4a4afd] p-5 rounded-lg shadow-lg text-[#d7d7d7] font-semibold cursor-pointer hover:bg-[#262726]"
      onClick={() => navigate(`task-detail/${task.id}`)}
    >
      <div className="hidden md:flex w-full items-center justify-between">
        <div className="flex flex-col items-start w-1/5">
          <p className="text-sm text-[#a5a5a58f]">Name</p>
          <p className="mt-1 truncate w-full overflow-hidden whitespace-nowrap">
            {task.name}
          </p>
        </div>
        <div className="flex flex-col items-start w-1/5">
          <p className="text-sm text-[#a5a5a58f]">Due Date</p>
          <p className="mt-1">
            {new Date(task.dueDate).toLocaleDateString("en-US", {
              weekday: "short",
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
        </div>
        <div className="flex flex-col items-start w-1/5">
          {task.status !== "COMPLETED" ? (
            <>
              <p className="text-sm text-[#a5a5a58f]">Priority</p>
              <div
                className={`mt-1 px-3 py-1 rounded-md text-xs font-bold ${
                  priorityColors[task.priority!] || "bg-gray-500 text-gray-900"
                }`}
              >
                {task.priority}
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="flex flex-col items-start w-1/5">
          <p className="text-sm text-[#a5a5a58f]">Status</p>
          <div
            className={`mt-1 px-3 py-1 rounded-md text-xs font-bold   ${
              statusColors[task.status!] || "bg-gray-500 text-gray-900"
            }`}
          >
            {task.status}
          </div>
        </div>
        <div className="flex space-x-2">
          {task.status !== "COMPLETED" ? (
            <button
              type="button"
              className="hover:text-gray-400 transition duration-300"
              onClick={(e) => {
                e.stopPropagation();
                updateTaskMutation.mutate({ status: "COMPLETED" });
              }}
            >
              <i className="bi bi-check-circle cursor-pointer text-2xl"></i>
            </button>
          ) : (
            <></>
          )}
          <button
            type="button"
            className="hover:text-gray-400 transition duration-300"
            onClick={(e) => {
              e.stopPropagation();
              deleteTaskMutation.mutate();
            }}
          >
            <i className="bi bi-trash cursor-pointer text-2xl"></i>
          </button>
        </div>
      </div>
      {/**
       * mobile layout
       */}
      <div className="flex md:hidden w-full items-center justify-between">
        <div className="flex flex-col w-3/5">
          <p className="truncate w-full overflow-hidden whitespace-nowrap">
            {task.name}
          </p>
          <p className="text-xs text-[#a5a5a58f]">
            {new Date(task.dueDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
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
      </div>
    </div>
  );
};

export default TaskListItem;

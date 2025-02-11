import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TaskListItem } from "../types/task";
import getTaskById from "../api/getTaskById";
import Spinner from "../../../components/Spinner";

const priorityColors: { [key: string]: string } = {
  HIGH: "bg-red-500 text-red-900",
  MEDIUM: "bg-orange-500 text-orange-900",
  LOW: "bg-green-600 text-[#174d28]",
};

const statusColors: { [key: string]: string } = {
  PENDING: "bg-gray-600 text-gray-800",
  COMPLETED: "bg-green-600 text-[#174d28]",
};

const TaskDetail = () => {
  const { taskId } = useParams();
  const [task, setTask] = useState<TaskListItem>();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const getTask = async (taskId: string) => {
    try {
      setLoading(true);
      const data: TaskListItem = await getTaskById(taskId);
      setTask(data);
    } catch (err) {
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!taskId) return;
    getTask(taskId);
  }, []);

  return loading || !task ? (
    <Spinner />
  ) : (
    <>
      <button
        className="select-none flex items-center justify-center space-x-2 md:w-1/6 w-1/3 py-2 pr-4 rounded-lg bg-[#f88b25] text-gray-800 font-semibold transition-all duration-300 hover:bg-[#e67e22] active:scale-95"
        onClick={() => navigate("/")}
      >
        <i className="bi bi-arrow-left text-xl"></i>
        <span>Back</span>
      </button>
      <div className="select-none mt-3 h-auto w-full bg-[#2c2e2d] p-6 rounded-xl shadow-lg border-2 border-[#343434]">
        <div className="flex flex-col">
          <h2 className="font-semibold text-[#6b7280] text-xl">Task Detail</h2>
          <button className="mt-2 flex items-center justify-center py-2 pr-4 bg-[#697565] text-gray-800 rounded-lg space-x-2 md:w-1/6 w-1/3 transition-all duration-300 hover:bg-[#5a6456] active:scale-95">
            <i className="bi bi-pencil text-xl"></i>
            <span className="font-semibold text-lg">Edit</span>
          </button>
        </div>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          <div className="flex flex-col">
            <label className="text-gray-300 font-semibold">Task Name</label>
            <span className="mt-2 text-[#656567] font-medium">{task.name}</span>
          </div>

          {/* Task Description */}
          <div className="flex flex-col">
            <label className="text-gray-300 font-semibold">Description</label>
            <span className="mt-2 text-[#656567]">{task.description}</span>
          </div>

          {/* Task Due Date */}
          <div className="flex flex-col">
            <label className="text-gray-300 fontfont-semibold">Due Date</label>
            <span className="mt-2 text-[#656567] font-medium">
              {new Date(task.dueDate).toLocaleDateString("en-US", {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          </div>

          {/* Task Priority */}
          {task.status !== "COMPLETED" && (
            <div className="flex flex-col w-fit">
              <label className="font-semibold text-gray-300">Priority</label>
              <span
                className={`mt-2 font-semibold px-2 py-1 rounded-md ${
                  priorityColors[task.priority!] || "bg-gray-500 text-gray-900"
                }`}
              >
                {task.priority}
              </span>
            </div>
          )}

          {/* Task Status */}
          <div className="flex flex-col w-fit">
            <label className="text-gray-300 font-semibold">Status</label>
            <span
              className={`mt-2 font-semibold px-2 py-1 rounded-md ${
                statusColors[task.status!] || "bg-gray-500 text-gray-900"
              }`}
            >
              {task.status}
            </span>
          </div>

          {/* Task Categories */}
          {task.categories!.length > 0 && (
            <div className="flex flex-col">
              <label className="text-gray-300 font-semibold">Categories</label>
              <span className="mt-2 text-[#656567] font-medium">
                {task.categories!.map((cat, index) => (
                  <span key={index}>
                    {cat.name}
                    {index < task.categories!.length - 1 && ", "}
                  </span>
                ))}
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="mt-8 flex flex-col items-center justify-between w-full h-auto space-y-2">
        <button
          className="text-center lg:w-60 w-full py-2 bg-[#697565] flex items-center justify-center text-gray-800 font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-[#5a6456] active:scale-95"
          onClick={() => navigate("/")}
        >
          Mark as completed
        </button>
        <button className="text-center lg:w-60 w-full py-2 bg-[#f88b25] flex items-center justify-center text-gray-800 font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-[#e67e22] active:scale-95">
          Delete
        </button>
      </div>
    </>
  );
};

export default TaskDetail;

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TaskListItem } from "../types/task";
import getTaskById from "../api/getTaskById";
import Spinner from "../../../components/Spinner";
import {
  priorityColors,
  statusColors,
} from "../../../components/ui/taskColors";
import deleteTask from "../api/deleteTask";
import updateTask from "../api/updateTask";

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

  const handleClick = async (deleting?: boolean) => {
    if (!task) return;
    try {
      setLoading(true);
      deleting
        ? await deleteTask(task.id)
        : updateTask(task.id, { status: "COMPLETED" });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      navigate("/");
    }
  };

  useEffect(() => {
    if (!taskId) return;
    getTask(taskId);
  }, []);

  if (!task) return;

  return loading ? (
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
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-[#6b7280] text-2xl">
            Task Details
          </h2>
          <button className="h-10 w-10 flex items-center justify-center p-2 bg-[#697565] text-gray-800 rounded-full transition-all duration-300 hover:bg-[#5a6456] active:scale-95">
            <i className="bi bi-pencil text-xl"></i>
          </button>
        </div>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          <div className="flex flex-col">
            <label className="text-[#656567]  font-semibold">Task Name</label>
            <span className="mt-2 text-gray-400 font-medium">{task.name}</span>
          </div>
          {/* Task Description */}
          <div className="flex flex-col">
            <label className="text-[#656567]  font-semibold">Description</label>
            <span className="mt-2 text-gray-400">{task.description}</span>
          </div>

          {/* Task Due Date */}
          <div className="flex flex-col">
            <label className="text-[#656567]  fontfont-semibold">
              Due Date
            </label>
            <span className="mt-2 text-gray-400 font-medium">
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
              <label className="font-semibold text-[#656567] ">Priority</label>
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
            <label className="text-[#656567]  font-semibold">Status</label>
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
              <label className="text-[#656567]  font-semibold">
                Categories
              </label>
              <span className="mt-2 text-gray-400 font-medium">
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
      <div className="mt-5 flex flex-col items-center justify-between w-full h-auto space-y-2">
        {task.status !== "COMPLETED" && (
          <button
            className="text-center lg:w-60 w-full py-2 bg-[#697565] flex items-center justify-center text-gray-800 font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-[#5a6456] active:scale-95"
            onClick={() => handleClick()}
          >
            Mark as completed
          </button>
        )}
        <button
          className="text-center lg:w-60 w-full py-2 bg-[#f88b25] flex items-center justify-center text-gray-800 font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-[#e67e22] active:scale-95"
          onClick={() => handleClick(true)}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default TaskDetail;

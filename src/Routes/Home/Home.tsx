import { useEffect, useMemo, useState } from "react";
import TaskList from "./components/TaskList";
import { TaskListItem } from "./types/task";
import Spinner from "../../components/Spinner";
import getTasks from "./api/getTasks";
import TaskDetail from "./components/TaskDetail";
import deleteTask from "./api/deleteTask";
import updateTask from "./api/updateTask";

const Home = () => {
  const [tasks, setTasks] = useState<TaskListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCompleted, setShowCompleted] = useState(false);
  const [detailedTask, setDetailedTask] = useState<TaskListItem | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        const data = await getTasks();
        setTasks(data);
      } catch (error) {
        setLoading(false);
        console.log(error instanceof Error ? error.message : null);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) =>
      showCompleted ? task.status === "COMPLETED" : task.status === "PENDING"
    );
  }, [tasks, showCompleted]);

  const toggleDetails = (task: TaskListItem) => {
    setDetailedTask(task);
  };

  if (loading) return <Spinner />;

  return (
    <div className="p-8 select-none h-screen overflow-auto">
      <div className="flex flex-col items-center justify-center">
        {detailedTask ? (
          <div>
            <button
              type="button"
              className="flex items-center bg-[#f88b25] text-[#292929] px-3 py-2 rounded-lg"
              onClick={() => setDetailedTask(null)}
            >
              <i className="bi bi-arrow-left text-2xl font-extrabold"></i>
              <span className="font-semibold">Back to list view</span>
            </button>
            <TaskDetail task={detailedTask} />
            <div className="w-full flex justify-center gap-4 py-4 font-semibold">
              <button
                className="w-full sm:w-[40%] md:w-[30%] lg:w-[20%] px-6 py-2 bg-[#f88b25] text-[#292929] rounded-lg shadow-md transition-all duration-300 hover:bg-[#e67e22] active:scale-95"
                onClick={() => updateTask(detailedTask.id, { name: "sas" })}
              >
                Mark as Done
              </button>
              <button
                className="w-full sm:w-[40%] md:w-[30%] lg:w-[20%] px-6 py-2 bg-red-500 text-[#292929] rounded-lg shadow-md transition-all duration-300 hover:bg-red-600 active:scale-95"
                onClick={() => deleteTask(detailedTask.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ) : (
          <>
            <TaskList tasks={filteredTasks} toggleDetails={toggleDetails} />
            <div className="mt-3 flex items-center text-[#f88b25]">
              <p className="font-semibold mr-4">Show completed tasks</p>
              <i
                className={`bi ${
                  showCompleted ? "bi-toggle-on" : "bi-toggle-off"
                } text-4xl cursor-pointer`}
                onClick={() => setShowCompleted((prev) => !prev)}
              ></i>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;

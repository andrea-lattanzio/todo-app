import TaskList from "./components/TaskList/TaskList";
import Spinner from "../../components/Spinner";
import useTasks from "./hooks/useTasks";
import { useMemo, useState } from "react";

const Home = () => {
  const { tasks, loading } = useTasks();
  const [showCompleted, setShowCompleted] = useState(false);
  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      return showCompleted
        ? task.status === "COMPLETED"
        : task.status === "PENDING";
    });
  }, [tasks, showCompleted]);

  if (loading) return <Spinner />;

  return (
    <div className="select-none overflow-auto h-[calc(100vh-100)]">
      <div className="flex flex-col items-center justify-center">
        <div className="h-96 w-full bg-[#2c2e2d] p-4 rounded-xl shadow-lg border-2 border-[#343434] flex flex-col items-center justify-center">
          <TaskList
            tasks={tasks}
            filteredTasks={filteredTasks}
            showCompleted={showCompleted}
          />
        </div>
        {tasks.length > 0 && (
          <div className="mt-3 flex items-center text-[#f88b25]">
            <p className="font-semibold mr-4">Show completed tasks</p>
            <i
              className={`bi ${
                showCompleted ? "bi-toggle-on" : "bi-toggle-off"
              } text-4xl cursor-pointer`}
              onClick={() => setShowCompleted((prev) => !prev)}
            ></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

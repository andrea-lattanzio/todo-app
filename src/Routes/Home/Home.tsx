import TaskList from "./components/TaskList/TaskList";
import Spinner from "../../components/Spinner";
import useTasks from "./hooks/useTasks";
import { useMemo, useState } from "react";

const Home = () => {
  const { data, isLoading, isFetching, refetch } = useTasks();
  const [showCompleted, setShowCompleted] = useState(false);

  const filteredTasks = useMemo(() => {
    if(!data) return [];
    return data.filter((task) => {
      return showCompleted
        ? task.status === "COMPLETED"
        : task.status === "PENDING";
    });
  }, [data, showCompleted]);

  if (!data || isLoading || isFetching) return <Spinner />;

  return (
    <div className="select-none overflow-auto h-[calc(100vh-100)]">
      <div className="flex flex-col items-center justify-center">
        <div className="h-96 w-full bg-[#2c2e2d] p-4 rounded-xl shadow-lg border-2 border-[#343434] flex flex-col items-center justify-center">
          <TaskList
            tasks={data}
            filteredTasks={filteredTasks}
            showCompleted={showCompleted}
            refetch={refetch}
          />
        </div>
        {data.length > 0 && (
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

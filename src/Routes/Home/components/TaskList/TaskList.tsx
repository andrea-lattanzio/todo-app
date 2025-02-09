import { useNavigate } from "react-router-dom";
import { TaskListItem, TaskListProps } from "../../types/task";
import NoTaskComponent from "./NoTaskComponent";
import Task from "./Task";

const getMessage = (showCompleted: boolean) => {
  return showCompleted
    ? {
        name: "No completed tasks",
        description: "You have not completed any tasks yet. Keep going!",
        icon: "bi-list-check",
      }
    : {
        name: "All tasks completed!",
        description: "Great job! You have no pending tasks left.",
        icon: "bi-emoji-laughing",
      };
};

const TaskList: React.FC<TaskListProps> = ({
  filteredTasks,
  showCompleted,
  toggleDetails,
}) => {
  const navigate = useNavigate();

  if (filteredTasks.length === 0) {
    const message = getMessage(showCompleted);
    return (
      <div className="h-96 w-full bg-[#2c2e2d] p-4 rounded-xl shadow-lg border-2 border-[#343434] flex flex-col items-center justify-center">
        <NoTaskComponent {...message} />
        {!showCompleted && (
          <button
            className="mt-8 px-6 py-2 bg-[#f88b25] flex items-center text-gray-800 font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-[#e67e22] active:scale-95"
            onClick={() => navigate("/add")}
          >
            <i className="bi bi-plus-circle mr-2 text-2xl"></i> Create Task
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="h-96 w-full bg-[#2c2e2d] p-4 rounded-xl shadow-lg border-2 border-[#343434]">
      <div className="sticky top-0 z-10 flex-column p-2 font-semibold text-[#fbfbfb] text-xl bg-[#2c2e2d]">
        {showCompleted ? <p>Completed tasks</p> : <p>Your Tasks</p>}
      </div>
      <div className="mt-2 space-y-2 px-3 overflow-y-auto h-[calc(100%-3rem)] scrollbar-hidden pb-5">
        {filteredTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onClick={(task: TaskListItem) => toggleDetails(task)}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;

import { NoTaskProps, TaskListProps } from "../../types/task";
import NoTaskComponent from "./NoTaskComponent";
import Task from "./Task";

const getMessage = (showCompleted: boolean) : NoTaskProps => {
  return showCompleted
    ? {
        name: "No completed tasks",
        description: "You have not completed any tasks yet. Keep going!",
        icon: "bi-list-check",
        showCompleted: true
      }
    : {
        name: "All tasks completed!",
        description: "Great job! You have no pending tasks left.",
        icon: "bi-emoji-laughing",
      };
};

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  filteredTasks,
  showCompleted,
}) => {
  if (tasks.length === 0) {
    const message: NoTaskProps = {
      name: "No tasks available",
      description: "Start by adding a new task to stay organized!",
      icon: "bi-journal-plus",
    };
    return <NoTaskComponent {...message} />;
  }

  if (filteredTasks.length === 0) {
    const message = getMessage(showCompleted);
    return <NoTaskComponent {...message} />;
  }

  return (
    <div className="w-full h-full">
      <div className="sticky top-0 z-10 flex-column p-2 font-semibold text-[#fbfbfb] text-xl bg-[#2c2e2d]">
        {showCompleted ? <p>Completed tasks</p> : <p>Your Tasks</p>}
      </div>
      <div className="mt-2 space-y-2 px-3 overflow-y-auto h-[calc(100%-3rem)] scrollbar-hidden pb-5">
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;

import NoElementComponent, {
  NoElementProps,
} from "../../../../../components/ui/NoElementComponent";
import { Task } from "../../types";
import TaskListItem from "./Task";

const getMessage = (showCompleted: boolean): NoElementProps => {
  return showCompleted
    ? {
        elementName: "Task",
        title: "No completed tasks",
        description: "You have not completed any tasks yet. Keep going!",
        icon: "bi-list-check",
        createButton: false,
      }
    : {
        elementName: "Task",
        title: "All tasks completed!",
        description: "Great job! You have no pending tasks left.",
        icon: "bi-emoji-laughing",
      };
};

interface TaskListProps {
  tasks: Task[];
  filteredTasks: Task[];
  showCompleted: boolean;
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  filteredTasks,
  showCompleted,
  onComplete,
  onDelete
}) => {
  if (tasks.length === 0) {
    const message: NoElementProps = {
      elementName: "Task",
      title: "No tasks available",
      description: "Start by adding a new task to stay organized!",
      icon: "bi-journal-plus",
    };
    return <NoElementComponent {...message} />;
  }

  if (filteredTasks.length === 0) {
    const message = getMessage(showCompleted);
    return <NoElementComponent {...message} />;
  }

  return (
    <div className="w-full h-full">
      <div className="sticky top-0 z-10 flex-column p-2 font-semibold text-[#fbfbfb] text-xl bg-[#2c2e2d]">
        {showCompleted ? <p>Completed tasks</p> : <p>Your Tasks</p>}
      </div>
      <div className="mt-2 space-y-2 px-3 overflow-y-auto h-[calc(100%-3rem)] scrollbar-hidden pb-5">
        {filteredTasks.map((task) => (
          <TaskListItem key={task.id} task={task} onComplete={onComplete} onDelete={onDelete}/>
        ))}
      </div>
    </div>
  );
};

export default TaskList;

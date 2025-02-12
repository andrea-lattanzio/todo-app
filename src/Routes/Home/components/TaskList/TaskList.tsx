import { TaskListProps } from "../../types/task";
import NoElementComponent, {
  NoElementProps,
} from "../../../../components/ui/NoElementComponent";
import Task from "./Task";

const getMessage = (showCompleted: boolean): NoElementProps => {
  return showCompleted
    ? {
        elementName: "Task",
        title: "No completed tasks",
        description: "You have not completed any tasks yet. Keep going!",
        icon: "bi-list-check",
        createButton: true,
      }
    : {
        elementName: "Task",
        title: "All tasks completed!",
        description: "Great job! You have no pending tasks left.",
        icon: "bi-emoji-laughing",
      };
};

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  filteredTasks,
  showCompleted,
  refetch
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
          <Task key={task.id} task={task} refetch={refetch}/>
        ))}
      </div>
    </div>
  );
};

export default TaskList;

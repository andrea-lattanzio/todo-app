import { TaskListProps } from "../types/task";
import Task from "./Task";

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleDetails }) => {
  return (
    <div className="h-96 w-full bg-[#2c2e2d] p-4 rounded-xl shadow-lg border-2 border-[#343434]">
      <div className="sticky top-0 z-10 flex-column p-2 font-semibold text-[#fbfbfb] text-xl bg-[#2c2e2d]">
        <p>Your Tasks</p>
      </div>
      <div className="mt-2 space-y-2 px-3 overflow-y-auto h-[calc(100%-3rem)] scrollbar-hidden pb-5">
        {tasks.map((task) => (
          <Task key={task.id} task={task} onClick={(task) => toggleDetails(task)} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;

import { useParams } from "react-router-dom";
import TaskForm from "../../AddTask/components/TaskForm";
import { TaskFormSchema } from "../../AddTask/types/taskForm";
import { AddTaskDto } from "../../AddTask/api/postTask";
import { useTaskMutations } from "../hooks/useTaskMutations";
import useTask from "../hooks/useTask";
import Spinner from "../../../components/Spinner";
import { UpdateTaskDto } from "../api/updateTask";

const UpdateTask = () => {
  const { taskId } = useParams();
  if (!taskId) return;
  const { data: task, isLoading } = useTask(taskId);
  const { updateTaskMutation } = useTaskMutations(taskId);

  const handleSubmit = async (task: TaskFormSchema) => {
    const taskDto: UpdateTaskDto = {
      name: task.name,
      description: task.description,
      dueDate: task.dueDate,
      priority: task.priority[0],
      categories: task.categories,
    };
    updateTaskMutation.mutate(taskDto);
  };

  if(isLoading || !task) return <Spinner />;

  return (
    <div className="flex flex-col items-center justify-center min-h-scren overflow-y-auto">
      <TaskForm task={task} onSubmitForm={handleSubmit} error={updateTaskMutation.error?.message} />
    </div>
  );
};

export default UpdateTask;

import { useParams } from "react-router-dom";
import useTask from "../hooks/useTask";
import { useTaskMutations } from "../hooks/useTaskMutations";
import { UpdateTaskDto } from "../api/updateTask";
import TaskForm from "../components/taskForm/TaskForm";
import { TaskFormSchema } from "../components/taskForm/taskFormTypes";
import Spinner from "../../../../components/Spinner";

const UpdateTask = () => {
  const { taskId } = useParams();
  if (!taskId) return;
  const { data: task, isLoading } = useTask(taskId);
  const { updateTaskMutation, error } = useTaskMutations(taskId);

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

  if (isLoading || !task) return <Spinner />;

  return (
    <div className="flex flex-col items-center justify-center min-h-scren overflow-y-auto">
      <TaskForm
        task={task}
        onSubmitForm={handleSubmit}
        error={error}
      />
    </div>
  );
};

export default UpdateTask;

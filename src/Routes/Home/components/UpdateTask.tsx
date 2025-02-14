import { useParams } from "react-router-dom";
import TaskForm from "../../AddTask/components/TaskForm";
import { TaskFormSchema } from "../../AddTask/types/taskForm";
import { AddTaskDto } from "../../AddTask/api/postTask";
import { useTaskMutations } from "../hooks/useTaskMutations";
import useTask from "../hooks/useTask";
import Spinner from "../../../components/Spinner";

const UpdateTask = () => {
  const { taskId } = useParams();
  if (!taskId) return;
  const { data: task, isLoading } = useTask(taskId);
  const { updateTaskMutation } = useTaskMutations(taskId);

  const handleSubmit = async (newTask: TaskFormSchema) => {
    const newTaskDto: AddTaskDto = {
      name: newTask.name,
      description: newTask.description,
      dueDate: newTask.dueDate,
      priority: newTask.priority[0],
      categories: newTask.categories,
    };

    updateTaskMutation.mutate(newTaskDto);
  };

  if(isLoading || !task) return <Spinner />;

  return (
    <div className="flex flex-col items-center justify-center min-h-scren overflow-y-auto">
      <TaskForm onSubmitForm={handleSubmit} error={updateTaskMutation.error?.message} />
    </div>
  );
};

export default UpdateTask;

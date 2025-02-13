import Spinner from "../../components/Spinner";
import { AddTaskDto } from "./api/postTask";
import TaskForm from "./components/TaskForm";
import { useTaskMutations } from "./hooks/useTaskMutation";
import { TaskFormSchema } from "./types/taskForm";

const AddTask = () => {
  const { addTaskMutation } = useTaskMutations();

  const handleSubmit = async (newTask: TaskFormSchema) => {
    const newTaskDto: AddTaskDto = {
      name: newTask.name,
      description: newTask.description,
      dueDate: newTask.dueDate,
      priority: newTask.priority[0],
      categories: newTask.categories,
    };

    addTaskMutation.mutate(newTaskDto);
  };

  if(addTaskMutation.isPending) return <Spinner />;

  return (
    <div className="flex flex-col items-center justify-center min-h-scren overflow-y-auto">
      <TaskForm onSubmitForm={handleSubmit} error={""} />
    </div>
  );
};

export default AddTask;

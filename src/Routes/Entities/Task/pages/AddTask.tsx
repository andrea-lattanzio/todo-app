import Spinner from "../../../../components/Spinner";
import { AddTaskDto } from "../api/postTask";
import TaskForm from "../components/taskForm/TaskForm";
import { TaskFormSchema } from "../components/taskForm/taskFormTypes";
import { useTaskMutations } from "../hooks/useTaskMutations";

const AddTask = () => {
  const { addTaskMutation, error } = useTaskMutations();

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

  if (addTaskMutation.isPending) return <Spinner />;

  return (
    <div className="flex flex-col items-center justify-center min-h-scren overflow-y-auto">
      <TaskForm
        onSubmitForm={handleSubmit}
        error={error}
      />
    </div>
  );
};

export default AddTask;

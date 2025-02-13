import addTask from "./api/postTask";
import TaskForm from "./components/TaskForm";
import { TaskFormSchema } from "./types/taskForm";

const AddTask = () => {

  const handleSubmit = async (newTask: TaskFormSchema) => {
    await addTask(newTask);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-scren overflow-y-auto">
      <TaskForm onSubmitForm={handleSubmit} error={""} />
    </div>
  );
};

export default AddTask;

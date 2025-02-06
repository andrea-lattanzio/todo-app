import { useEffect, useMemo, useState } from "react";
import TaskList from "./components/TaskList";
import { TaskListItem, TaskListProps } from "./types/task";
import Spinner from "../../components/Spinner";
import getTasks from "./api/getTasks";

const tasksArray: TaskListItem[] = [
  {
    id: "1",
    name: "Complete Project Proposal",
    description:
      "Finalize the proposal for the upcoming project and submit it.",
    dueDate: "2025-02-10",
    priority: "HIGH",
    status: "PENDING",
    createdAt: "2025-02-01T10:00:00Z",
    updatedAt: "2025-02-01T10:00:00Z",
    categories: [{ name: "Work" }],
    tags: [{ name: "Urgent", color: "red" }],
    userId: "user1",
    user: { email: "user1@example.com" },
  },
  {
    id: "2",
    name: "Team Meeting",
    description: "Organize and attend the weekly team meeting.",
    dueDate: "2025-02-07",
    priority: "MEDIUM",
    status: "PENDING",
    createdAt: "2025-02-02T09:30:00Z",
    updatedAt: "2025-02-02T09:30:00Z",
    categories: [{ name: "Work" }, { name: "Meetings" }],
    tags: [{ name: "Weekly", color: "blue" }],
    userId: "user2",
    user: { email: "user2@example.com" },
  },
  {
    id: "3",
    name: "Grocery Shopping",
    description:
      "Buy groceries for the week including vegetables, fruits, and snacks.",
    dueDate: "2025-02-05",
    status: "COMPLETED",
    createdAt: "2025-02-01T14:00:00Z",
    updatedAt: "2025-02-04T16:00:00Z",
    categories: [{ name: "Personal" }],
    tags: [{ name: "Errands", color: "green" }],
    userId: "user3",
    user: { email: "user3@example.com" },
  },
  {
    id: "4",
    name: "Finish Reading Book",
    description:
      "Complete reading 'The Great Gatsby' for the book club discussion.",
    dueDate: "2025-02-12",
    priority: "MEDIUM",
    status: "PENDING",
    createdAt: "2025-02-03T11:00:00Z",
    updatedAt: "2025-02-03T11:00:00Z",
    categories: [{ name: "Personal" }, { name: "Books" }],
    tags: [{ name: "Leisure", color: "purple" }],
    userId: "user4",
    user: { email: "user4@example.com" },
  },
  {
    id: "5",
    name: "Submit Timesheet",
    description: "Fill out and submit your weekly timesheet to HR.",
    dueDate: "2025-02-08",
    priority: "HIGH",
    status: "PENDING",
    createdAt: "2025-02-02T15:30:00Z",
    updatedAt: "2025-02-02T15:30:00Z",
    categories: [{ name: "Work" }],
    tags: [{ name: "Administrative", color: "yellow" }],
    userId: "user5",
    user: { email: "user5@example.com" },
  },
];

const Home = () => {
  const [tasks, setTasks] = useState<TaskListProps>({ tasks: [] });
  const [loading, setLoading] = useState(true);
  const [showCompleted, setShowCompleted] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      // const data = await getTasks();
      setTasks({ tasks: tasksArray });
      setLoading(false);
    };

    fetchTasks();
  }, []);

  const filteredTasks = useMemo(() => {
    return tasks.tasks.filter((task) =>
      showCompleted ? task.status === "COMPLETED" : task.status === "PENDING"
    );
  }, [tasks, showCompleted]);

  if (loading) return <Spinner />;

  return (
    <div className="p-8 select-none">
      <div className="flex flex-col items-center justify-center">
        <TaskList tasks={filteredTasks} />
      </div>
      <div className="mt-3 flex items-center text-[#f88b25]">
        <p className="font-semibold mr-4">Show completed tasks</p>
        <i
          className={`bi ${
            showCompleted ? "bi-toggle-on" : "bi-toggle-off"
          } text-4xl cursor-pointer`}
          onClick={() => setShowCompleted((prev) => !prev)}
        ></i>
      </div>
    </div>
  );
};

export default Home;

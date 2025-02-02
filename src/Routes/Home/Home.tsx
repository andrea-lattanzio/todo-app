import { useState } from "react";
import { TodoListItem } from "./types/todo";
import TodoList from "./components/TodoList";

const Home = () => {
  const [todos, setTodos] = useState<TodoListItem[]>([
    {
      id: "1",
      name: "Complete the annual report",
      description: "Write and finalize the report for the year 2025",
      dueDate: "2025-02-20T17:00:00.000Z",
      priority: "HIGH",
      status: "PENDING",
      createdAt: "2025-01-27T15:07:02.068Z",
      updatedAt: "2025-01-27T15:07:02.068Z",
      categories: [{ name: "Work" }],
      tags: [{ name: "Optional", color: "#008000" }],
      users: [{ username: "user1", email: "user1@example.com" }],
    },
    {
      id: "2",
      name: "Plan the team meeting",
      description: "Organize the agenda and send invites for the team meeting",
      dueDate: "2025-02-15T10:00:00.000Z",
      priority: "MEDIUM",
      status: "PENDING",
      createdAt: "2025-01-20T09:00:00.000Z",
      updatedAt: "2025-01-22T11:00:00.000Z",
      categories: [{ name: "Meetings" }],
      tags: [{ name: "Mandatory", color: "#FF0000" }],
      users: [{ username: "user2", email: "user2@example.com" }],
    },
    {
      id: "3",
      name: "Review design mockups",
      description: "Provide feedback on the latest design mockups from the UI team",
      dueDate: "2025-02-10T14:30:00.000Z",
      priority: "LOW",
      status: "PENDING",
      createdAt: "2025-01-18T08:30:00.000Z",
      updatedAt: "2025-01-21T12:15:00.000Z",
      categories: [{ name: "Design" }],
      tags: [{ name: "Review", color: "#0000FF" }],
      users: [{ username: "user3", email: "user3@example.com" }],
    },
    {
      id: "4",
      name: "Review design mockups",
      description: "Provide feedback on the latest design mockups from the UI team",
      dueDate: "2025-02-10T14:30:00.000Z",
      priority: "LOW",
      status: "PENDING",
      createdAt: "2025-01-18T08:30:00.000Z",
      updatedAt: "2025-01-21T12:15:00.000Z",
      categories: [{ name: "Design" }],
      tags: [{ name: "Review", color: "#0000FF" }],
      users: [{ username: "user3", email: "user3@example.com" }],
    },
    {
      id: "5",
      name: "Review design mockups",
      description: "Provide feedback on the latest design mockups from the UI team",
      dueDate: "2025-02-10T14:30:00.000Z",
      priority: "LOW",
      status: "PENDING",
      createdAt: "2025-01-18T08:30:00.000Z",
      updatedAt: "2025-01-21T12:15:00.000Z",
      categories: [{ name: "Design" }],
      tags: [{ name: "Review", color: "#0000FF" }],
      users: [{ username: "user3", email: "user3@example.com" }],
    },
    {
      id: "6",
      name: "Review design mockups",
      description: "Provide feedback on the latest design mockups from the UI team",
      dueDate: "2025-02-10T14:30:00.000Z",
      priority: "LOW",
      status: "PENDING",
      createdAt: "2025-01-18T08:30:00.000Z",
      updatedAt: "2025-01-21T12:15:00.000Z",
      categories: [{ name: "Design" }],
      tags: [{ name: "Review", color: "#0000FF" }],
      users: [{ username: "user3", email: "user3@example.com" }],
    },
    {
      id: "7",
      name: "Review design mockups",
      description: "Provide feedback on the latest design mockups from the UI team",
      dueDate: "2025-02-10T14:30:00.000Z",
      priority: "LOW",
      status: "PENDING",
      createdAt: "2025-01-18T08:30:00.000Z",
      updatedAt: "2025-01-21T12:15:00.000Z",
      categories: [{ name: "Design" }],
      tags: [{ name: "Review", color: "#0000FF" }],
      users: [{ username: "user3", email: "user3@example.com" }],
    },
    {
      id: "8",
      name: "Review design mockups",
      description: "Provide feedback on the latest design mockups from the UI team",
      dueDate: "2025-02-10T14:30:00.000Z",
      priority: "LOW",
      status: "PENDING",
      createdAt: "2025-01-18T08:30:00.000Z",
      updatedAt: "2025-01-21T12:15:00.000Z",
      categories: [{ name: "Design" }],
      tags: [{ name: "Review", color: "#0000FF" }],
      users: [{ username: "user3", email: "user3@example.com" }],
    },
    {
      id: "9",
      name: "Review design mockups",
      description: "Provide feedback on the latest design mockups from the UI team",
      dueDate: "2025-02-10T14:30:00.000Z",
      priority: "LOW",
      status: "PENDING",
      createdAt: "2025-01-18T08:30:00.000Z",
      updatedAt: "2025-01-21T12:15:00.000Z",
      categories: [{ name: "Design" }],
      tags: [{ name: "Review", color: "#0000FF" }],
      users: [{ username: "user3", email: "user3@example.com" }, { username: "user3", email: "user5@example.com" }],
    }
  ]);

  return (
    <div className="mt-12 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-semibold mb-4">Todo List</h2>
      <TodoList todos={todos} />
    </div>
  );
};

export default Home;

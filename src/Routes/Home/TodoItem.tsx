import React from "react";
interface Todo {
  id: string;
  name: string;
  description: string;
  dueDate: string;
  priority: "HIGH" | "MEDIUM" | "LOW";
  status: "PENDING" | "COMPLETED";
  createdAt: string;
  updatedAt: string;
  categories: { name: string }[];
  tags: { name: string; color: string }[];
  users: { username: string; email: string }[];
}

const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {
  return (
    <div className="flex items-center space-x-4 p-4 border-b border-gray-200">
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{todo.name}</h3>
        <p className="text-sm text-gray-500">{todo.dueDate}</p>
      </div>
      <div
        className={`px-3 py-1 rounded-full text-white ${
          todo.priority === "HIGH"
            ? "bg-red-500"
            : todo.priority === "MEDIUM"
            ? "bg-yellow-500"
            : "bg-green-500"
        }`}
      >
        {todo.priority}
      </div>
      <div
        className={`px-3 py-1 rounded-full ${
          todo.status === "COMPLETED"
            ? "bg-green-100 text-green-700"
            : "bg-yellow-100 text-yellow-700"
        }`}
      >
        {todo.status}
      </div>
      <div className="space-x-2">
        {todo.categories.map((category) => (
          <span key={category.name} className="text-sm text-gray-700">
            {category.name}
          </span>
        ))}
      </div>
      <div className="flex space-x-2">
        {todo.users.map((user) => (
          <div
            key={user.email}
            className="relative group w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white"
          >
            {/* Avatar */}
            <span className="text-xs">{user.username[0]}</span>

            {/* Username Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-black text-white text-xs rounded p-1 opacity-0 group-hover:opacity-100 transition-opacity">
              {user.username}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoItem;

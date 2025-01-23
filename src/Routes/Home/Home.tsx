import { useState } from "react";
import { Todo } from "./interfaces/Todo";
import TodoList from "./TodoList";

const Home = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: "Learn react", completed: false },
    { id: 2, title: "Build a todo App", completed: false },
    { id: 3, title: "Master tailwind css", completed: false },
  ]);

  const handleToggle = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-2xl font-semibold mb-4">Todo List</h2>
      <TodoList todos={todos} onToggle={handleToggle} />
    </div>
  );
};

export default Home;

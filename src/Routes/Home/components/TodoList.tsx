import { TodoListProps } from "../types/todo";
import TodoItem from "./TodoItem";


const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <div className="h-96 w-[90%] overflow-y-scroll bg-gray-100 p-4 rounded-lg shadow-lg">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;

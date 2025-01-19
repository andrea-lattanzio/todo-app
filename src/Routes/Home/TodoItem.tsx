import { TodoItemProps } from "./interfaces/Todo";

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle }) => {
  return (
    <li className="flex items-center justify-between p-4 my-2 bg-gray-200 rounded-lg">
      <span className={`${todo.completed ? "line-through" : ""}`}>
        {todo.title}
      </span>
      <input
        type="checkBox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)} // calls on toggle when checkbox changes
        className="ml-2"
      />
    </li>
  );
};

export default TodoItem;

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
}

export interface TodoItemProps {
  todo: Todo;  // Individual todo object passed as a prop
  onToggle: (id: number) => void;  // Function to toggle completion
}
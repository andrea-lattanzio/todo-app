export interface TodoListItem {
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

export interface TodoListProps {
  todos: TodoListItem[];
}

export interface TodoItemProps {
  todo: TodoListItem;
}

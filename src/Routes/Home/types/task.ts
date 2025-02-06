export interface TaskListItem {
  id: string;
  name: string;
  description: string;
  dueDate: string;
  priority?: "HIGH" | "MEDIUM" | "LOW";
  status: "PENDING" | "COMPLETED";
  createdAt: string;
  updatedAt: string;
  categories: { name: string }[];
  tags: { name: string; color: string }[];
  userId: string;
  user: { email: string };
}

export interface TaskListProps {
  tasks: TaskListItem[];
}

export interface TaskItemProps {
  task: TaskListItem;
}

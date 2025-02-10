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
}

export interface TaskListProps {
  tasks: TaskListItem[];
  filteredTasks: TaskListItem[];
  showCompleted: boolean;
}

export interface TaskItemProps {
  task: TaskListItem;
}

export interface TaskDetailProps {
  task: TaskListItem;
}

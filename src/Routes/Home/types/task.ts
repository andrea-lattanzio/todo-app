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
  filteredTasks: TaskListItem[];
  showCompleted: boolean;
  toggleDetails: (task: TaskListItem) => void;
}

export interface TaskItemProps {
  task: TaskListItem;
  onClick: (task: TaskListItem) => void;
}

export interface TaskDetailProps {
  task: TaskListItem,
}
export interface TaskListItem {
  id: string;
  name: string;
  description: string;
  dueDate: string;
  priority?: "HIGH" | "MEDIUM" | "LOW";
  status: "PENDING" | "COMPLETED";
  createdAt: string;
  updatedAt: string;
  categories?: { name: string }[];
}

export interface TaskListProps {
  tasks: TaskListItem[];
  filteredTasks: TaskListItem[];
  showCompleted: boolean;
  refetch: () => void;
}

export interface TaskItemProps {
  task: TaskListItem;
  refetch: () => void;
}

export interface TaskDetailProps {
  task: TaskListItem;
}

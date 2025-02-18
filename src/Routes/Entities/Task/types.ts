import { Category } from "../Category/types";

export interface Task {
  id: string;
  name: string;
  description: string;
  dueDate: string;
  priority: "LOW" | "MEDIUM" | "HIGH";
  status: "PENDING" | "COMPLETED";
  categories?: Category[]; 
}

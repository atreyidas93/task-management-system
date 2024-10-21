export interface TaskItem {
    id: number;
    name: string;
    description?: string;
    isComplete: boolean;
    dueDate: Date;
  }
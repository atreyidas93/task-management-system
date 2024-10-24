import { Component, OnInit } from '@angular/core';
import { TaskItem } from '../../../../models/task-item';
import { TaskService } from '../../../../services/task.service';
import { CommonModule } from '@angular/common';
import { TaskFormComponent } from '../task-form/task-form.component';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskFormComponent, SharedModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {

  tasks: TaskItem[] = [];
  loading: boolean = false;
  errorMessage: string = '';
  selectedTask: TaskItem | null = null;
  totalItems: number = 0;
  pageSize: number = 5;
  currentPage: number = 1;
  sortBy: string = 'name';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.loading = true;
    this.taskService.getTask(this.sortBy, this.currentPage, this.pageSize).subscribe({
      next: (data) =>  {
        this.tasks = data.items;
        this.loading = false;
        this.totalItems = data.totalItems;
      },
      error: (err) => {
        this.errorMessage = err;
        this.loading = false;
      }
    });
  }

  onSortChange(sortBy: string): void {
    this.sortBy = sortBy;
    this.getTasks();
  }

  nextPage(page: number): void {
    this.currentPage = page;
    this.getTasks();
  }

  handleTaskSubmit(task: TaskItem) {
    if(this.selectedTask) {
      this.updateTask(task);
    }
    else {
      this.addTask(task);
    }
  }

  addTask(newTask: TaskItem): void {
    this.taskService.addTask(newTask).subscribe((task) => {
      this.tasks.push(task);
    });
  }

  updateTask(task: TaskItem): void {
    this.taskService.updateTask(task).subscribe(() => {
      this.getTasks();
    });
  }

  editTask(task: TaskItem): void {
    this.selectedTask = task;
  }

  deleteTask(task: TaskItem): void {
    this.taskService.deleteTask(task.id).subscribe(() => {
      this.getTasks();
    });
  }
}

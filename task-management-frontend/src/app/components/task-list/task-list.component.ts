import { Component, OnInit } from '@angular/core';
import { TaskItem } from '../../models/task-item';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { TaskFormComponent } from '../task-form/task-form.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskFormComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {

  tasks: TaskItem[] = [];
  loading: boolean = false;
  errorMessage: string = '';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.loading = true;
    this.taskService.getTask().subscribe((tasks) => {
      this.tasks = tasks;
      this.loading = false;
    });
  }

  addTask(newTask: TaskItem): void {
    this.taskService.addTask(newTask).subscribe((task) => {
      this.tasks.push(task);
    });
  }
}

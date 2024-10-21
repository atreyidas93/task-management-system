import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskItem } from '../../models/task-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {

  @Output() taskCreated = new EventEmitter<TaskItem>();
  
  taskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.maxLength(250)),
      dueDate: new FormControl('', Validators.required),
      isComplete: new FormControl(false)
    })
  }

  onSubmit() {
    if(this.taskForm.valid) {
      this.taskCreated.emit(this.taskForm.value);
      this.taskForm.reset();
    }
  }
}

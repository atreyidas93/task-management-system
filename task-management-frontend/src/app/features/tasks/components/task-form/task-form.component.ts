import { Component, EventEmitter, Input, Output, SimpleChange } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskItem } from '../../../../models/task-item';
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
  @Input() taskSelected: TaskItem | null = null;
  isEditMode: boolean = false;
  
  taskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      description: new FormControl('', Validators.maxLength(250)),
      dueDate: new FormControl('', Validators.required),
      isComplete: new FormControl(false)
    })
  }

  ngOnChanges(changes: SimpleChange) {
    if(changes && this.taskSelected) {
      this.isEditMode = true;
      const formattedDueDate = this.formatDate(this.taskSelected.dueDate);

      this.taskForm.patchValue({
        name: this.taskSelected.name,
        description: this.taskSelected.description,
        dueDate: formattedDueDate,
        isComplete: this.taskSelected.isComplete
      });
    }
  }

  formatDate(date: string | Date): string {
    const d = new Date(date);
    const month = ('0' + (d.getMonth() + 1)).slice(-2); 
    const day = ('0' + d.getDate()).slice(-2);
    const year = d.getFullYear();
    return `${year}-${month}-${day}`;
  }

  onSubmit() {
    if(this.taskForm.valid) {
      const updatedTask: TaskItem = { ...this.taskForm.value, id: this.taskSelected?.id ?? 0 };
      this.taskCreated.emit(updatedTask);
      this.taskForm.reset();
    }
  }
}

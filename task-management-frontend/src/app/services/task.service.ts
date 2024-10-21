import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskItem } from '../models/task-item';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'https://localhost:7168/api/TaskItems';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getTask(sortBy: string = 'Name', isComplete?: boolean, pageNumber: number = 1, pageSize: number = 10): Observable<TaskItem[]> {
    let params = new HttpParams()
      .set('sortBy', sortBy)
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString());

    if (isComplete !== null && isComplete !== undefined) {
      params = params.set('isComplete', isComplete.toString());
    }

    return this.http.get<TaskItem[]>(this.apiUrl, { params });
  }

  addTask(task: TaskItem): Observable<any> {
    return this.http.post(this.apiUrl, task, this.httpOptions);
  }

  updateTask(task: TaskItem): Observable<any> {
    return this.http.put(`${this.apiUrl}/${task.id}`, task, this.httpOptions);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, this.httpOptions);
  }
}
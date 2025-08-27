import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskModel } from '../models/task.model';
import { HttpClient } from '@angular/common/http';
import { endpoints } from '../endpoints/endpoints';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getListTask(): Observable<TaskModel[]>{
    return this.http.get<TaskModel[]>(endpoints.task.taskGet); 
  }
}

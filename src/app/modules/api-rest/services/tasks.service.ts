import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { task } from 'src/app/modules/presentation/interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  
  constructor(private http: HttpClient) { }

  getTasks(): Observable<any>{
	  return this.http.get('https://lamansys-tasks-fake-api.herokuapp.com/api/tasks');
	}

  getStoryTasks(id: number): Observable<any>{
	  return this.http.get(`https://lamansys-tasks-fake-api.herokuapp.com/api/stories/${id}/tasks`);
	}
  
  getTask(id: number): Observable<any>{
	  return this.http.get(`https://lamansys-tasks-fake-api.herokuapp.com/api/task/${id}`);
	}

  addTask(task: task): Observable<any>{
    return this.http.post('https://lamansys-tasks-fake-api.herokuapp.com/api/tasks/', task);
  }

  deleteTask(task: task): Observable<any>{
    return this.http.delete(`https://lamansys-tasks-fake-api.herokuapp.com/api/tasks/${task.id}`);
  }
}

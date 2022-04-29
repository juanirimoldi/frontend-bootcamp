import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  getProjects(): Observable<any>{
	  return this.http.get('https://lamansys-tasks-fake-api.herokuapp.com/api/projects');
  }
  
  getProject(id: number): Observable<any>{
	  return this.http.get(`https://lamansys-tasks-fake-api.herokuapp.com/api/projects/${id}`);
	}
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpicsService {

  constructor(private http: HttpClient) { }

  getEpics(): Observable<any>{
	  return this.http.get('https://lamansys-tasks-fake-api.herokuapp.com/api/epics');
	}

  getProjectEpics(id: number): Observable<any>{
	  return this.http.get(`https://lamansys-tasks-fake-api.herokuapp.com/api/projects/${id}/epics`);
	}
  
  getEpic(id: number): Observable<any>{
	  return this.http.get(`https://lamansys-tasks-fake-api.herokuapp.com/api/epics/${id}`);
	}

}

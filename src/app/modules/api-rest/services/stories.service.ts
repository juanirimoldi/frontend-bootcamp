import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  constructor(private http: HttpClient) { }

  getStories(): Observable<any>{
	  return this.http.get('https://lamansys-tasks-fake-api.herokuapp.com/api/stories');
	}

  getEpicStories(id: number): Observable<any>{
	  return this.http.get(`https://lamansys-tasks-fake-api.herokuapp.com/api/epics/${id}/stories`);
	}
  
  getStory(id: number): Observable<any>{
	  return this.http.get(`https://lamansys-tasks-fake-api.herokuapp.com/api/stories/${id}`);
	}
}

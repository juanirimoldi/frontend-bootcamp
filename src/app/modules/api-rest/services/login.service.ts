import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  username: string;

  getToken(user: string, password:string): Observable<any>{
    this.username = user;
    return this.http.post(' https://lamansys-tasks-fake-api.herokuapp.com/api/login', 
    {
      "username": this.username,
      "password": password
    }
    );
  }

  isLogged(): boolean{
    if(localStorage.getItem('token') !== 'undefined')
      return true;
    return false;
  }

  getUserName(): string{
    return this.username;
  }

}

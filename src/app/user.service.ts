import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080/api/users'; // Replace with your Spring Boot backend URL

  constructor(private http: HttpClient) { }


    
    createUser(userData: any): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}/create`, userData);
      }
}

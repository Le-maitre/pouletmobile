import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserentriesService {
  private apiUrl = 'http://localhost:8080'; // Replace this with your API URL

  constructor(private http: HttpClient) {}

  getUserEntries(userId: number): Observable<any[]> {
    // Assuming your API endpoint for fetching user entries is '/api/users/{userId}/entries'
    const url = `${this.apiUrl}/api/users/${userId}/entrees/all`;
    return this.http.get<any[]>(url);
  }
}
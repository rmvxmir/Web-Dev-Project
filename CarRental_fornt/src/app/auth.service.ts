import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api'; // change if different

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login/`, { username, password });
  }

  register(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register/`, { email, password });
  }

  saveToken(token: string): void {
    localStorage.setItem('access_token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  logout(): void {
    localStorage.removeItem('access_token');
  }
}

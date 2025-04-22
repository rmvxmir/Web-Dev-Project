import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  private loggedIn = new BehaviorSubject<boolean>(this.hasToken());
  isLoggedIn$ = this.loggedIn.asObservable();

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login/`, { username, password });
  }

  register(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register/`, { email, password });
  }

  saveToken(token: string): void {
    localStorage.setItem('access_token', token);
    this.loggedIn.next(true); // Update state
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  logout(): void {
    localStorage.removeItem('access_token');
    this.loggedIn.next(false); // Update state
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('access_token');
  }

  getUser(): any {
    const token = localStorage.getItem('access_token');
    if (!token) return null;
    const decoded = jwtDecode(token);
    console.log('Decoded JWT:', decoded); 
    return decoded;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

import { SignUpData, SignInData } from './authData.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = `${environment.apiUrl}/api/auth`;

  register(signUpData: SignUpData): Observable<string> {
    return this.http.post<string>(`${this.authUrl}/register`, signUpData);
  }

  login(loginData: SignInData): Observable<string> {
    return this.http.post<string>(`${this.authUrl}/login`, loginData);
  }

  setToken(token: string): void {
    localStorage.setItem('USER_TOKEN', token);
  }

  getToken(): string {
    return localStorage.getItem('USER_TOKEN');
  }

  checkAuth(): boolean {
    return !!localStorage.getItem('USER_TOKEN');
  }

  logout(): void {
    localStorage.removeItem('USER_TOKEN');
  }

  constructor(private http: HttpClient) {}
}

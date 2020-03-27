import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

import { SignUpData, SignInData, AuthObj } from './authData.model';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = `${environment.apiUrl}/api/auth`;

  register(signUpData: SignUpData): Observable<AuthObj> {
    return this.http.post<AuthObj>(`${this.authUrl}/register`, signUpData);
  }

  login(loginData: SignInData): Observable<AuthObj> {
    return this.http.post<AuthObj>(`${this.authUrl}/login`, loginData);
  }

  setToken(token: string): void {
    localStorage.setItem('USER_TOKEN', token);
  }

  getToken(): string {
    return localStorage.getItem('USER_TOKEN');
  }

  getUser(): Observable<User> {
    return this.http.get<User>(`${this.authUrl}/current`);
  }

  checkAuth(): boolean {
    return !!localStorage.getItem('USER_TOKEN');
  }

  logout(): void {
    localStorage.removeItem('USER_TOKEN');
  }

  constructor(private http: HttpClient) {}
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SignUpData, SignInData } from './authData.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  register(signUpData: SignUpData): Observable<string> {
    return this.http.post<string>(`api/auth/register`, signUpData);
  }

  login(loginData: SignInData): Observable<string> {
    return this.http.post<string>(`api/auth/login`, loginData);
  }

  setToken(token: string): void {
    localStorage.setItem('USER_TOKEN', token);
  }

  checkAuth(): boolean {
    return !!localStorage.getItem('USER_TOKEN');
  }

  logout(): void {
    localStorage.removeItem('USER_TOKEN');
  }

  constructor(private http: HttpClient) {}
}

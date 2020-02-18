import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  register(signUpData): Observable<string> {
    return this.http.post<string>(`api/auth/register`, signUpData);
  }

  login(loginData): Observable<string> {
    return this.http.post<string>(`api/auth/login`, loginData);
  }

  constructor(private http: HttpClient) {}
}

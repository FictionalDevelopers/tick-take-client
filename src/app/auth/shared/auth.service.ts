import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // register(signUpFormData): Observable<User> {
  //   console.log(signUpFormData);
  //   return this.http.post();
  // }
  login(loginData): Observable<string> {
    return this.http.post<string>(`api/auth/login`, loginData);
  }

  constructor(private http: HttpClient) {}
}

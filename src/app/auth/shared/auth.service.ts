import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_ULR, HEADERS } from '../../shared/constants';
import { User } from './user.model';

const AUTH_URL = `${SERVER_ULR}/auth`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // register(signUpFormData): Observable<User> {
  //   console.log(signUpFormData);
  //   return this.http.post();
  // }
  login(loginData): Observable<string> {
    return this.http.post<string>(`${AUTH_URL}/login`, { headers: HEADERS, params: loginData });
  }

  constructor(private http: HttpClient) {}
}

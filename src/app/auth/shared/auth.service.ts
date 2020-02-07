import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from './user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //   login(loginFormData): Observable<User> {
  //     return this.http.get();
  //   }

  constructor(private http: HttpClient) {}
}

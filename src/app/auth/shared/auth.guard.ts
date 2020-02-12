import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppState } from '../../store/app.state';
import { getIsAuth } from '../store/auth.selector';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> {
    return this.store.select(getIsAuth).pipe(
      map(isAuth => {
        return isAuth ? true : this.router.createUrlTree(['/sign-in']);
      })
    );
  }
}

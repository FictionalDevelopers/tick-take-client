import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { login, authSuccess, authError, register, logout } from './auth.actions';
import { AuthService } from '../shared/auth.service';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      mergeMap(({ loginData }) =>
        this.auth.login(loginData).pipe(
          map(token => {
            localStorage.setItem('USER_TOKEN', token);
            return authSuccess({ isAuth: true });
          }),
          catchError(err => of(authError({ errors: err })))
        )
      )
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(register),
      mergeMap(({ signUpData }) =>
        this.auth.register(signUpData).pipe(
          map(token => {
            localStorage.setItem('USER_TOKEN', token);
            return authSuccess({ isAuth: true });
          }),
          catchError(err => of(authError({ errors: err })))
        )
      )
    )
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logout),
        map(() => {
          localStorage.removeItem('USER_TOKEN');
        })
      ),
    { dispatch: false }
  );
  constructor(private actions$: Actions, private auth: AuthService) {}
}

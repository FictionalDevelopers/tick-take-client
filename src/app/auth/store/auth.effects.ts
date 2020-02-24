import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { login, authSuccess, authError, register, logout } from './auth.actions';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      mergeMap(({ loginData }) =>
        this.auth.login(loginData).pipe(
          map(token => {
            this.router.navigateByUrl('/home');
            return authSuccess({ token });
          }),
          catchError(({ error }) => of(authError({ errors: error })))
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
            this.router.navigateByUrl('/home');
            return authSuccess({ token });
          }),
          catchError(({ error }) => of(authError({ errors: error })))
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
  constructor(private actions$: Actions, private auth: AuthService, private router: Router) {}
}

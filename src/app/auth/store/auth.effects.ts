import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { login, authSuccess, authError, register, logout, setIsAuth, logoutSuccess } from './auth.actions';
import { AuthService } from '../shared/auth.service';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      mergeMap(({ loginData }) =>
        this.auth.login(loginData).pipe(
          map(token => setIsAuth({ token })),
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
          map(token => setIsAuth({ token })),
          catchError(({ error }) => of(authError({ errors: error })))
        )
      )
    )
  );

  setIsAuth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setIsAuth),
      map(({ token }) => {
        this.auth.setToken(token);
        this.router.navigateByUrl('/home');
        return authSuccess({ isAuth: true });
      })
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logout),
      tap(() => this.auth.logout()),
      map(() => logoutSuccess({ isAuth: false }))
    )
  );
  constructor(private actions$: Actions, private auth: AuthService, private router: Router) {}
}

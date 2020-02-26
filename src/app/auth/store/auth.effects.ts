import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { login, authSuccess, authError, register, logout, setIsAuth, logoutSuccess, ifHasToken } from './auth.actions';
import { AuthService } from '../shared/auth.service';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      mergeMap(({ loginData }) =>
        this.auth.login(loginData).pipe(
          tap(token => this.auth.setToken(token)),
          map(() => setIsAuth({ isAuth: true })),
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
          tap(token => this.auth.setToken(token)),
          map(() => setIsAuth({ isAuth: true })),
          catchError(({ error }) => of(authError({ errors: error })))
        )
      )
    )
  );

  setIsAuth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setIsAuth),
      tap(() => this.router.navigateByUrl('/home')),
      map(({ isAuth }) => authSuccess({ isAuth }))
    )
  );

  ifHasToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ifHasToken),
      map(() => (this.auth.ifHasToken() ? setIsAuth({ isAuth: true }) : logoutSuccess({ isAuth: false })))
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logout),
      tap(() => this.auth.logout()),
      tap(() => this.router.navigateByUrl('/sign-in')),
      map(() => logoutSuccess({ isAuth: false }))
    )
  );
  constructor(private actions$: Actions, private auth: AuthService, private router: Router) {}
}

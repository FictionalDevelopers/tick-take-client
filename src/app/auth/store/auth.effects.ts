import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AppState } from '@app/store/app.state';

import { login, authError, register, logout, setIsAuth, checkAuth, setUser, getUser } from './auth.actions';
import { AuthService } from '../shared/auth.service';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      mergeMap(({ loginData }) =>
        this.auth.login(loginData).pipe(
          tap(({ token }) => this.auth.setToken(token)),
          tap(() => this.router.navigateByUrl('/home')),
          tap(({ user }) => this.store.dispatch(setUser({ currentUser: user }))),
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
          tap(({ token }) => this.auth.setToken(token)),
          tap(() => this.router.navigateByUrl('/home')),
          tap(({ user }) => this.store.dispatch(setUser({ currentUser: user }))),
          map(() => setIsAuth({ isAuth: true })),
          catchError(({ error }) => of(authError({ errors: error })))
        )
      )
    )
  );

  checkAuth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(checkAuth),
      tap(() => {
        if (this.auth.checkAuth()) {
          this.store.dispatch(getUser());
        }
      }),
      map(() => setIsAuth({ isAuth: this.auth.checkAuth() }))
    )
  );

  setUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUser),
      mergeMap(() => this.auth.getUser().pipe(map(user => setUser({ currentUser: user }))))
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logout),
      tap(() => this.auth.logout()),
      tap(() => this.router.navigateByUrl('/sign-in')),
      tap(() => this.store.dispatch(setUser({ currentUser: null }))),
      map(() => setIsAuth({ isAuth: false }))
    )
  );
  constructor(
    private actions$: Actions,
    private auth: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {}
}

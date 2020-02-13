import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { login, loginSuccess, loginError } from './auth.actions';
import { AuthService } from '../shared/auth.service';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      mergeMap(({ loginData }) =>
        this.auth.login(loginData).pipe(
          map(token => loginSuccess({ token })),
          catchError(err => of(loginError({ errors: err })))
        )
      )
    )
  );
  constructor(private actions$: Actions, private auth: AuthService) {}
}

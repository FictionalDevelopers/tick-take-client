import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { createLot, createLotSuccess, createLotError } from './profile.actions';
import { ProfileService } from '../shared/profile.service';

@Injectable()
export class ProfileEffects {
  createLot$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createLot),
      mergeMap(({ lotData }) =>
        this.profileService.createLot(lotData).pipe(
          tap(({ _id }) => this.router.navigate(['/profile/lots', _id])),
          map(() => createLotSuccess()),
          catchError(errors => of(createLotError({ errors })))
        )
      )
    )
  );
  constructor(private actions$: Actions, private router: Router, private profileService: ProfileService) {}
}

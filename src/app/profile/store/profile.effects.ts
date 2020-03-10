import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
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
          map(data => {
            console.log(data);
            return createLotSuccess();
          }),
          catchError(errors => of(createLotError({ errors })))
        )
      )
    )
  );
  constructor(private actions$: Actions, private profileService: ProfileService) {}
}

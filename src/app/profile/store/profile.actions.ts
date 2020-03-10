import { createAction, props } from '@ngrx/store';
import { Lot } from '@app/shared/models/lot.model';

export const createLot = createAction('[PROFILE] Create Lot', props<{ lotData: Lot }>());
export const createLotSuccess = createAction('[PROFILE] Create Lot Success');
export const createLotError = createAction('[PROFILE] Create Lot Error', props<{ errors: any }>());

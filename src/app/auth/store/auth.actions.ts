import { createAction, props } from '@ngrx/store';
import { FormGroup } from '@angular/forms';

export const login = createAction('[AUTH] Login', props<{ loginData: FormGroup }>());
export const loginSuccess = createAction('[AUTH] Login Success', props<{ token: string }>());
export const loginError = createAction('[AUTH] Login Error', props<{ errors: any }>());

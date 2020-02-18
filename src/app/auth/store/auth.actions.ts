import { createAction, props } from '@ngrx/store';
import { FormGroup } from '@angular/forms';

export const login = createAction('[AUTH] Login', props<{ loginData: FormGroup }>());
export const register = createAction('[AUTH] Register', props<{ signUpData: FormGroup }>());

export const authError = createAction('[AUTH] Register Error', props<{ errors: any }>());
export const authSuccess = createAction('[AUTH] Auth Success', props<{ isAuth: boolean }>());

export const logout = createAction('[AUTH] Logout');

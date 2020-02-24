import { createAction, props } from '@ngrx/store';
import { SignUpData, SignInData } from '../shared/authData.model';

export const login = createAction('[AUTH] Login', props<{ loginData: SignInData }>());
export const register = createAction('[AUTH] Register', props<{ signUpData: SignUpData }>());

export const authError = createAction('[AUTH] Register Errors', props<{ errors: any }>());
export const authSuccess = createAction('[AUTH] Auth Success', props<{ token: string }>());

export const logout = createAction('[AUTH] Logout');

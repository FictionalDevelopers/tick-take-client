import { createAction, props } from '@ngrx/store';
import { SignUpData, SignInData } from '../shared/authData.model';

export const login = createAction('[AUTH] Login', props<{ loginData: SignInData }>());
export const register = createAction('[AUTH] Register', props<{ signUpData: SignUpData }>());

export const setIsAuth = createAction('[AUTH] Set IsAuth', props<{ token: string }>());
export const authError = createAction('[AUTH] Auth Errors', props<{ errors: any }>());
export const authSuccess = createAction('[AUTH] Auth Success', props<{ isAuth: boolean }>());

export const logout = createAction('[AUTH] Logout');
export const logoutSuccess = createAction('[AUTH] Logout Success', props<{ isAuth: boolean }>());

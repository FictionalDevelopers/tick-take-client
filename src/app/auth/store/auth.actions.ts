import { createAction, props } from '@ngrx/store';
import { SignUpData, SignInData } from '../shared/authData.model';
import { User } from '../shared/user.model';

export const login = createAction('[AUTH] Login', props<{ loginData: SignInData }>());
export const register = createAction('[AUTH] Register', props<{ signUpData: SignUpData }>());
export const logout = createAction('[AUTH] Logout');

export const checkAuth = createAction('[AUTH] Check Auth');
export const getUser = createAction('[AUTH] Get User');
export const setUser = createAction('[AUTH] Set User', props<{ currentUser: User }>());
export const setIsAuth = createAction('[AUTH] Set IsAuth', props<{ isAuth: boolean }>());
export const authError = createAction('[AUTH] Auth Errors', props<{ errors: any }>());

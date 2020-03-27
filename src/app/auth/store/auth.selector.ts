import { createSelector } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { AuthState } from '../store/auth.state';

const authFeature = (state: AppState) => state.authFeature;

export const getIsAuth = createSelector(authFeature, (state: AuthState) => state.isAuth);
export const getAuthErrors = createSelector(authFeature, (state: AuthState) => state.errors);
export const getCurrentUser = createSelector(authFeature, (state: AuthState) => state.currentUser);

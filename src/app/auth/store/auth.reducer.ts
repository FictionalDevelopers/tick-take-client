import { createReducer, on } from '@ngrx/store';

import { authSuccess, authError, logoutSuccess } from './auth.actions';
import { AuthState } from './auth.state';

const initialState: AuthState = {
  isAuth: false,
  errors: null
};

const reducer = createReducer(
  initialState,
  on(authSuccess, (state, { isAuth }) => {
    return { ...state, isAuth, errors: null };
  }),
  on(logoutSuccess, (state, { isAuth }) => {
    return { ...state, isAuth, errors: null };
  }),
  on(authError, (state, { errors }) => {
    return { ...state, errors };
  })
);

export function authReducer(state, action) {
  return reducer(state, action);
}

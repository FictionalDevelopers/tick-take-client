import { createReducer, on } from '@ngrx/store';

import { authSuccess, authError } from './auth.actions';

const initialState = {
  isAuth: false,
  errors: null
};

const reducer = createReducer(
  initialState,
  on(authSuccess, (state, { token }) => {
    localStorage.setItem('USER_TOKEN', token);
    return { ...state, isAuth: true, errors: null };
  }),
  on(authError, (state, { errors }) => {
    return { ...state, errors };
  })
);

export function authReducer(state, action) {
  return reducer(state, action);
}

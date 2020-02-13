import { createReducer, on } from '@ngrx/store';

import { loginSuccess } from './auth.actions';

const initialState = {
  isAuth: false,
  errors: {}
};

const reducer = createReducer(
  initialState,
  on(loginSuccess, (state, { token }) => {
    localStorage.setItem('USER_TOKEN', token);
    return { ...state, errors: {} };
  })
);

export function authReducer(state, action) {
  return reducer(state, action);
}

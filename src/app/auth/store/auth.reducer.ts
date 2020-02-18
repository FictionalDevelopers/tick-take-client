import { createReducer, on } from '@ngrx/store';

import { authSuccess } from './auth.actions';

const initialState = {
  isAuth: false,
  errors: {}
};

const reducer = createReducer(
  initialState,
  on(authSuccess, (state, { isAuth }) => {
    return { ...state, isAuth, errors: {} };
  })
);

export function authReducer(state, action) {
  return reducer(state, action);
}

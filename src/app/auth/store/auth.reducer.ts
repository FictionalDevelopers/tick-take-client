import { createReducer, on } from '@ngrx/store';

import { loginSuccess } from './auth.actions';

const initialState = {
  user: null,
  isAuth: false
};

const reducer = createReducer(
  initialState,
  on(loginSuccess, (state, { user }) => {
    return { ...state, user: { ...user } };
  })
);

export function authReducer(state, action) {
  return reducer(state, action);
}

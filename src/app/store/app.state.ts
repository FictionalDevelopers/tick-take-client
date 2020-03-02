import { AuthState } from '../auth/store/auth.state';

export interface AppState {
  authFeature: AuthState;
}

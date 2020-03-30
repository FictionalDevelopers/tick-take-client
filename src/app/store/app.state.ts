import { AuthState } from '../auth/store/auth.state';
import { ProfileState } from '@app/profile/store/profile.state';

export interface AppState {
  authFeature: AuthState;
  profileFeature: ProfileState;
}

import { User } from '../shared/user.model';

export interface AuthState {
  isAuth: boolean;
  user: User;
}

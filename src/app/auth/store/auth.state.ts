import { User } from '../shared/user.model';

export interface AuthState {
  isLogin: boolean;
  user: User;
}

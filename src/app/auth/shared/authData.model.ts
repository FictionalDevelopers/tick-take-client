import { User } from './user.model';

export interface SignUpData {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface SignInData {
  email: string;
  password: string;
}

export interface AuthObj {
  token: string;
  user: User;
}

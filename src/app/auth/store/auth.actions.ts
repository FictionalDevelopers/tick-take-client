import { createAction, props } from '@ngrx/store';
import { FormGroup } from '@angular/forms';

import { User } from '../shared/user.model';

export const login = createAction('[AUTH] Login', props<{ loginFormData: FormGroup }>());
export const loginSuccess = createAction('[AUTH] Login Success', props<{ user: User }>());

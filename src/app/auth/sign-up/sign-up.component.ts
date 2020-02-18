import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AppState } from '../../store/app.state';
import { register, logout } from '../store/auth.actions';

import { emailValidator } from '../shared/validators/email.validator';
import { passwordValidator } from '../shared/validators/password.validator';
import { confirmPasswordValidator } from '../shared/validators/confirm-password.validator';
import { ValidationService } from '../shared/validation.service';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AppState>, private validation: ValidationService) {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, emailValidator]],
      passwordGroup: this.fb.group(
        {
          password: ['', [Validators.required, passwordValidator]],
          passwordConfirm: ['', [Validators.required]]
        },
        { validator: confirmPasswordValidator }
      )
    });
  }

  ngOnInit() {
    this.store.dispatch(logout());
  }

  errorMessages(controlName: string | string[]) {
    const { errors, touched } = this.signUpForm.get(controlName);

    for (let error in errors) {
      if (errors.hasOwnProperty(error) && touched) {
        return this.validation.getErrorMessage(error);
      }
    }
    return null;
  }

  onSubmit() {
    this.signUpForm.markAllAsTouched();
    this.store.dispatch(register({ signUpData: this.signUpForm.value }));
  }
}

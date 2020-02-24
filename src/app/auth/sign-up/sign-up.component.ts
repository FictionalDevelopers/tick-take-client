import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AppState } from '../../store/app.state';
import { register, logout } from '../store/auth.actions';

import { emailValidator } from '../shared/validators/email.validator';
import { passwordValidator } from '../shared/validators/password.validator';
import { confirmPasswordValidator } from '../shared/validators/confirm-password.validator';
import { ValidationService } from '../shared/validation.service';
import { getAuthErrors } from '../store/auth.selector';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  authErrors$ = this.store.select(getAuthErrors);

  buildForm() {
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

  constructor(private fb: FormBuilder, private store: Store<AppState>, private validation: ValidationService) {}

  ngOnInit() {
    this.buildForm();
    this.authErrors$.subscribe(errors => {
      for (let err in errors) {
        const control = this.signUpForm.controls[err];
        control ? control.setErrors({ [err]: errors[err] }) : this.signUpForm.setErrors({ [err]: errors[err] });
      }
    });
  }

  getErrorMessage(control: FormControl) {
    return this.validation.errorMessage(control);
  }

  onSubmit() {
    const { name, email, passwordGroup } = this.signUpForm.value;
    const signUpData = {
      name,
      email,
      password: passwordGroup.password,
      passwordConfirm: passwordGroup.passwordConfirm
    };
    this.signUpForm.markAllAsTouched();
    this.store.dispatch(register({ signUpData }));
  }
}

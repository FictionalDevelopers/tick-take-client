import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AppState } from '../../store/app.state';
import { register } from '../store/auth.actions';
import { getAuthErrors } from '../store/auth.selector';

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
  authErrors$ = this.store.select(getAuthErrors);

  buildForm(): void {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
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
      for (const err in errors) {
        if (errors.hasOwnProperty(err)) {
          this.signUpForm.controls[err].setErrors({ [err]: errors[err] });
        }
      }
    });
  }

  getErrorMessage(control: AbstractControl): string {
    return this.validation.errorMessage(control);
  }

  onSubmit(): void {
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

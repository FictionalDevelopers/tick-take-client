import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../store/app.state';
import { login, logout } from '../store/auth.actions';
import { ValidationService } from '../shared/validation.service';
import { emailValidator } from '../shared/validators/email.validator';
import { passwordValidator } from '../shared/validators/password.validator';
import { getAuthErrors } from '../store/auth.selector';

@Component({
  selector: 'sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent implements OnInit {
  userToken$: Observable<string>;
  singInForm: FormGroup;
  authErrors$ = this.store.select(getAuthErrors);

  buildForm() {
    this.singInForm = this.fb.group({
      email: ['', [Validators.required, emailValidator]],
      password: ['', [Validators.required, passwordValidator]]
    });
  }

  constructor(private fb: FormBuilder, private store: Store<AppState>, private validation: ValidationService) {}

  ngOnInit() {
    this.buildForm();
    this.authErrors$.subscribe(errors => {
      for (let err in errors) {
        const control = this.singInForm.controls[err];
        control ? control.setErrors({ [err]: errors[err] }) : this.singInForm.setErrors({ [err]: errors[err] });
      }
    });
  }

  getErrorMessage(control: FormControl) {
    return this.validation.errorMessage(control);
  }

  onSubmit() {
    this.singInForm.markAllAsTouched();
    this.store.dispatch(login({ loginData: this.singInForm.value }));
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../store/app.state';
import { login } from '../store/auth.actions';
import { getAuthErrors } from '../store/auth.selector';

import { ValidationService } from '../shared/validation.service';
import { passwordValidator } from '../shared/validators/password.validator';

@Component({
  selector: 'sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent implements OnInit {
  userToken$: Observable<string>;
  singInForm: FormGroup;
  authErrors$ = this.store.select(getAuthErrors);

  buildForm(): void {
    this.singInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, passwordValidator]]
    });
  }

  constructor(private fb: FormBuilder, private store: Store<AppState>, private validation: ValidationService) {}

  ngOnInit() {
    this.buildForm();
    this.authErrors$.subscribe(errors => {
      for (const err in errors) {
        if (errors.hasOwnProperty(err)) {
          this.singInForm.controls[err].setErrors({ [err]: errors[err] });
        }
      }
    });
  }

  getErrorMessage(control: AbstractControl): string {
    return this.validation.errorMessage(control);
  }

  onSubmit(): void {
    this.singInForm.markAllAsTouched();
    this.store.dispatch(login({ loginData: this.singInForm.value }));
  }
}

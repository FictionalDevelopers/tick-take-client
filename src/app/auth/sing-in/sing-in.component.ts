import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../store/app.state';
import { login, logout } from '../store/auth.actions';
import { ValidationService } from '../shared/validation.service';
import { emailValidator } from '../shared/validators/email.validator';

@Component({
  selector: 'sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent implements OnInit {
  userToken$: Observable<string>;
  singInForm: FormGroup;
  buildForm() {
    this.singInForm = this.fb.group({
      email: ['', [Validators.required, emailValidator]],
      password: ['', Validators.required]
    });
  }

  constructor(private fb: FormBuilder, private store: Store<AppState>, private validation: ValidationService) {}

  ngOnInit() {
    this.store.dispatch(logout());
    this.buildForm();
  }

  errorMessages(controlName: string | string[]) {
    const { errors, touched } = this.singInForm.get(controlName);

    for (let error in errors) {
      if (errors.hasOwnProperty(error) && touched) {
        return this.validation.getErrorMessage(error);
      }
    }
    return null;
  }

  onSubmit() {
    this.singInForm.markAllAsTouched();
    this.store.dispatch(login({ loginData: this.singInForm.value }));
  }
}

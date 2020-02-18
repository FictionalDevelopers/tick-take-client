import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../store/app.state';
import { login, logout } from '../store/auth.actions';

@Component({
  selector: 'sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent implements OnInit {
  userToken$: Observable<string>;
  singInForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.singInForm = this.fb.group({
      email: '',
      password: ''
    });
  }

  ngOnInit() {
    this.store.dispatch(logout());
  }

  onSubmit() {
    this.singInForm.markAllAsTouched();
    this.store.dispatch(login({ loginData: this.singInForm.value }));
  }
}

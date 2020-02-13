import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../store/app.state';
import { login } from '../store/auth.actions';

@Component({
  selector: 'sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent {
  userToken$: Observable<string>;
  singInForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.singInForm = this.fb.group({
      email: '',
      password: ''
    });
  }

  onSubmit() {
    this.store.dispatch(login({ loginData: this.singInForm.value }));
  }
}

import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { login } from '../store/auth.actions';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  title = 'Login';
  isLoginPage = true;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.initForm(this.isLoginPage);
  }

  onSubmit() {
    console.log(this.loginForm);
  }

  changeType(type: string) {
    this.isLoginPage = !this.isLoginPage;
    this.title = type;
    this.initForm(this.isLoginPage);
  }

  private initForm = isLoginPage => {
    if (isLoginPage) {
      this.loginForm = this.fb.group({
        email: '',
        password: ''
      });
    } else {
      this.loginForm = this.fb.group({
        name: '',
        email: '',
        password: '',
        confirmPass: ''
      });
    }
  };
}

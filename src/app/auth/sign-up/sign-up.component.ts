import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.signUpForm = this.fb.group({
      name: '',
      email: '',
      password: '',
      confirmPass: ''
    });
  }

  onSubmit() {
    console.log(this.signUpForm);
    // this.auth.register();
  }
}

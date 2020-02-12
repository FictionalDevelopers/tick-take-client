import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent {
  userToken$: Observable<string>;
  singInForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.singInForm = this.fb.group({
      email: '',
      password: ''
    });
  }

  onSubmit() {
    this.userToken$ = this.auth.login(this.singInForm.value);
    this.userToken$.subscribe(token => console.log(token));
  }
}

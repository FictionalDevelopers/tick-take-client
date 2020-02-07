import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLogin: boolean;
  loginForm: FormGroup;
  title: string;

  constructor(private route: ActivatedRoute, private fb: FormBuilder) {
    this.route.queryParams.subscribe(({ type }) => {
      console.log(type);

      this.isLogin = type === 'login';
      this.title = type;
      if (this.isLogin) {
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
    });
  }

  ngOnInit() {}
}

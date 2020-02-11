import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent {
  singInForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.singInForm = this.fb.group({
      email: '',
      password: ''
    });
  }

  onSubmit() {
    console.log(this.singInForm);
  }
}

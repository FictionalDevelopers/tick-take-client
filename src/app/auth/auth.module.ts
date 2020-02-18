import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';

import { authReducer } from './store/auth.reducer';
import { SingInComponent } from './sing-in/sing-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ErrorsOutputComponent } from './errors-output/errors-output.component';

@NgModule({
  declarations: [SingInComponent, SignUpComponent, ErrorsOutputComponent],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('authFeature', authReducer),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class AuthModule {}

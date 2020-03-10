import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';

import { authReducer } from './store/auth.reducer';
import { SingInComponent } from './sing-in/sing-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [SingInComponent, SignUpComponent],
  imports: [CommonModule, StoreModule.forFeature('authFeature', authReducer), ReactiveFormsModule, SharedModule]
})
export class AuthModule {}

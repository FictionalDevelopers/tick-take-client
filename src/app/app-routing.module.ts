import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { AuthComponent } from './auth/auth/auth.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'sign-up',
        component: SignUpComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

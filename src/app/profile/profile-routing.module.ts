import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { LotManagerComponent } from './lot-manager/lot-manager.component';

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'lots/new', component: LotManagerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}

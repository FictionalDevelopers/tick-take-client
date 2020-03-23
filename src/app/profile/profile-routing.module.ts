import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { LotManagerComponent } from './lot-manager/lot-manager.component';
import { ProfileDashboardComponent } from './profile-dashboard/profile-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      { path: '', component: ProfileDashboardComponent },
      { path: 'lots/new', component: LotManagerComponent },
      { path: 'lots/:id', component: LotManagerComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}

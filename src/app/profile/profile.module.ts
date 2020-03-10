import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { LotManagerComponent } from './lot-manager/lot-manager.component';

@NgModule({
  declarations: [ProfileComponent, LotManagerComponent],
  imports: [CommonModule, ProfileRoutingModule, ReactiveFormsModule, SharedModule]
})
export class ProfileModule {}

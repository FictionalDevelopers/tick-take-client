import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  exports: [RouterModule, MatFormFieldModule, MatInputModule, MatButtonModule]
})
export class SharedModule {}

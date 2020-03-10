import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AppState } from '@app/store/app.state';

import { createLot } from '../store/profile.actions';

@Component({
  selector: 'tt-lot-manager',
  templateUrl: './lot-manager.component.html',
  styleUrls: ['./lot-manager.component.scss']
})
export class LotManagerComponent {
  public lotForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  onSubmit() {
    console.log(this.lotForm.value);
    this.store.dispatch(createLot({ lotData: this.lotForm.value }));
  }
}

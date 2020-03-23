import { Component } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';

import { AppState } from '@app/store/app.state';
import { ValidationService } from '@app/shared/validation.service';

import { createLot } from '../store/profile.actions';

@Component({
  selector: 'tt-lot-manager',
  templateUrl: './lot-manager.component.html',
  styleUrls: ['./lot-manager.component.scss']
})
export class LotManagerComponent {
  public lotId: number;
  public lotForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private validation: ValidationService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    const paramId = this.route.snapshot.paramMap.get('id');
    if (paramId) {
      this.lotId = +paramId;
    }
  }

  getErrorMessage(control: AbstractControl): string {
    return this.validation.errorMessage(control);
  }

  onSubmit() {
    if (this.lotId) {
      console.log(this.lotId);
    } else {
      this.store.dispatch(createLot({ lotData: this.lotForm.value }));
    }
  }

  onCancel() {
    this.lotForm.reset();
    this.router.navigateByUrl('/profile');
  }
}

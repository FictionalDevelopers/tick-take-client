import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationService } from '../shared/validation.service';

@Component({
  selector: 'errors-output',
  template: '<mat-error *ngIf="errorMessages() !== null">{{errorMessages()}}</mat-error>'
})
export class ErrorsOutputComponent {
  @Input() control: FormControl;

  constructor(private validation: ValidationService) {}

  errorMessages() {
    const { errors, touched } = this.control;

    for (let error in errors) {
      if (errors.hasOwnProperty(error) && touched) {
        return this.validation.getErrorMessage(error);
      }
    }
    return null;
  }
}

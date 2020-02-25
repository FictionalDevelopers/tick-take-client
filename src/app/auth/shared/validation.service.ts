import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  errorMessage({ errors, touched }): null | string {
    for (const err in errors) {
      if (errors.hasOwnProperty(err) && touched) {
        return err === 'required' ? 'Required' : errors[err];
      }
    }
    return null;
  }
}

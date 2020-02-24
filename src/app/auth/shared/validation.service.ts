import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  errorMessage({ errors, touched }) {
    for (let error in errors) {
      if (errors.hasOwnProperty(error) && touched) {
        return error === 'required' ? 'Required' : errors[error];
      }
    }
    return null;
  }
}

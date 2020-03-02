import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  errorMessage({ errors, touched }): null | string {
    for (const err in errors) {
      if (errors.hasOwnProperty(err) && touched) {
        const config = {
          required: 'Required',
          email: 'Invalid email address.',
          minlength: `At least ${errors[err].requiredLength} characters`
        };
        return config[err] ? config[err] : errors[err];
      }
    }
    return null;
  }
}

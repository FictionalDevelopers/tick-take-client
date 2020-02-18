import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  getErrorMessage(validatorName: string) {
    let config = {
      required: 'Required',
      invalidEmail: 'Invalid email address',
      invalidPassword: 'Invalid! At least 6 characters long, and contain number.',
      notSame: `Your confirmation doesn't match the password.`
    };

    return config[validatorName];
  }
}

import { FormControl } from '@angular/forms';

export function passwordValidator(control: FormControl) {
  const regExp = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/;

  return control.value.match(regExp)
    ? null
    : { invalidPassword: 'Invalid! At least 6 characters, and contain number.' };
}

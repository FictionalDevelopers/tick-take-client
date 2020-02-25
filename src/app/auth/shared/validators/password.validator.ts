import { FormControl } from '@angular/forms';

export function passwordValidator(control: FormControl): null | object {
  const regExp = /[0-9a-zA-Z]{3,}/;

  return control.value.match(regExp)
    ? null
    : { invalidPassword: 'Invalid! At least 3 characters, and contain number.' };
}

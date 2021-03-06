import { FormControl } from '@angular/forms';

export function nameValidator(control: FormControl): null | object {
  return control.value.trim() ? null : { invalidName: 'Name cannot be empty.' };
}

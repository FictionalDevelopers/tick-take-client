import { FormGroup } from '@angular/forms';

export function confirmPasswordValidator(group: FormGroup): null | object {
  const pass = group.get('password').value;
  const confirmPass = group.get('passwordConfirm').value;

  return pass === confirmPass ? null : { notSame: `Your confirmation doesn't match the password.` };
}

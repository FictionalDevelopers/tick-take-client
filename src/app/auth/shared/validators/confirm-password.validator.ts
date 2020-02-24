import { FormGroup } from '@angular/forms';

export function confirmPasswordValidator(group: FormGroup) {
  const pass = group.get('password').value;
  const confirmPass = group.get('passwordConfirm').value;

  return pass === confirmPass ? null : { notSame: `Your confirmation doesn't match the password.` };
}

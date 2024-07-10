import { AbstractControl, ValidationErrors } from '@angular/forms';

export class ChangePasswordValidators {
  static checkCurrentPassword(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === '1234') resolve(null);
        else resolve({ checkCurrentPassword: true });
      }, 10000);
    });
  }
}

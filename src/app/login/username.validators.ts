import { AbstractType } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0)
      return { cannotContainSpace: true };

    return null;
  }

  static cannotContainAli(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf('Ali') >= 0)
      return { cannotContainAli: true };

    return null;
  }

  static shouldBeUnique(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'salar') resolve({ shouldBeUnique: true });
        else resolve(null);
      }, 5000);
    });
  }

  static checkNationalCode(control: AbstractControl): ValidationErrors | null {
    var meli_code = control.value;
    if (meli_code.length == 10) {
      if (
        meli_code == '1111111111' ||
        meli_code == '0000000000' ||
        meli_code == '2222222222' ||
        meli_code == '3333333333' ||
        meli_code == '4444444444' ||
        meli_code == '5555555555' ||
        meli_code == '6666666666' ||
        meli_code == '7777777777' ||
        meli_code == '8888888888' ||
        meli_code == '9999999999'
      ) {
        return { checkNationalCode: true };
      }
      var c = parseInt(meli_code.charAt(9));
      var n =
        parseInt(meli_code.charAt(0)) * 10 +
        parseInt(meli_code.charAt(1)) * 9 +
        parseInt(meli_code.charAt(2)) * 8 +
        parseInt(meli_code.charAt(3)) * 7 +
        parseInt(meli_code.charAt(4)) * 6 +
        parseInt(meli_code.charAt(5)) * 5 +
        parseInt(meli_code.charAt(6)) * 4 +
        parseInt(meli_code.charAt(7)) * 3 +
        parseInt(meli_code.charAt(8)) * 2;

      var r = n - parseInt(String(n / 11)) * 11;
      if ((r == 0 && r == c) || (r == 1 && c == 1) || (r > 1 && c == 11 - r)) {
        return null;
      } else {
        return { checkNationalCode: true };
      }
    } else {
      return { checkNationalCode: true };
    }
  }
}

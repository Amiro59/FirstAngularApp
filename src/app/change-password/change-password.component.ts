import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChangePasswordValidators } from './change-password.validator';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {
  isPasswordsMatch: boolean = false;
  form = new FormGroup({
    currentPassword: new FormControl(
      '',
      [Validators.required],
      [ChangePasswordValidators.checkCurrentPassword]
    ),
    newPasswordSection: new FormGroup({
      newPassword: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    }),
  });

  constructor() {}

  ngOnInit(): void {}
  changePassword() {
    console.log(this.form);
  }

  CheckMatchness() {
    if (this.newPassword?.value != this.confirmPassword?.value) {

      this.newPasswordSection?.setErrors({ NotMatch: true });

      this.confirmPassword?.setErrors({ NotMatch: true });
      this.isPasswordsMatch = false;
    } else {
      alert('match');
      this.isPasswordsMatch = true;
    }
  }

  get newPasswordSection() {
    return this.form.get('newPasswordSection');
  }

  get currentPassword() {
    return this.form.get('currentPassword');
  }

  get newPassword() {
    return this.form.get('newPasswordSection.newPassword');
  }

  get confirmPassword() {
    return this.form.get('newPasswordSection.confirmPassword');
  }
}

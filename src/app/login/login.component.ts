import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UsernameValidators } from './username.validators';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      identicalInfos:fb.group({
        username:[''],
        password:['']
      })
      });
  }

  ngOnInit(): void {}

  submit() {
    console.log(this.form);
  }

  login() {
    let isValid = false;

    if (!isValid) {
      this.form.setErrors({
        karabarnamaaloom: true,
      });
      this.form.get('identicalInfos')?.setErrors({ karabarnamaaloom: true });
    }
  }

  get username() {
    return this.form.get('identicalInfos.username');
  }

  get password() {
    return this.form.get('identicalInfos.password');
  }
}

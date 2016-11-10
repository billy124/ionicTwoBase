import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../../services/validation.service';
import { User } from '../../providers/user';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loginForm;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      'email': ['', [Validators.required, ValidationService.emailValidator]],
      'password': ['', [Validators.required]],
    });
  }

  doLogin(event) {
    event.preventDefault();
    if(this.loginForm._status === 'VALID') {
      console.log(User.login());
    }
  }
}




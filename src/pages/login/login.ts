import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  form;

  constructor(public navCtrl: NavController) {
    this.form = new FormGroup({
      email: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
  }

  ionViewDidLoad() {
    console.log('Hello Login Page');
  }

  doLogin(event) {
   event.preventDefault();
      console.log(this.form);
    }
}




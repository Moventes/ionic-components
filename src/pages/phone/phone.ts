import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the PhonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-phone',
  templateUrl: 'phone.html',
})
export class PhonePage {

  private form: FormGroup;
  private phone = '0613256545';


  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {
    this.form = this.fb.group({
      'phone': new FormControl(this.phone, [Validators.minLength(2), Validators.required])
    });
  }

  onSubmit(): void {
    this.navCtrl.pop();
  }

}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

/**
 * Generated class for the AddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-address',
  templateUrl: 'address.html',
})
export class AddressPage {

  private form: FormGroup;
  private address: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {
    this.form = this.fb.group({
      'address': new FormControl(this.address, [Validators.minLength(2), Validators.required])
    });
  }

  onSubmit(): void {
    this.navCtrl.pop();
  }

}

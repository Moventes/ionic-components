import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { NavController, NavParams } from 'ionic-angular';

import { Country } from '../../../componentes/src/models/country.model';

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
  private intlPhone: string;
  private countryList: Country[] = [
    {
      id: 'FR',
      label: 'France'
    },
    {
      id: 'US',
      label: 'U.S.A.'
    },
    {
      id: 'GB',
      label: 'United Kingdom'
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {
    this.form = this.fb.group({
      'phone': new FormControl(this.phone, [Validators.minLength(2), Validators.required])
    });
  }

  onSubmit(): void {
    this.navCtrl.pop();
  }

}

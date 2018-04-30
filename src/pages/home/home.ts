import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AddressPage } from '../address/address';
import { CounterPage } from '../counter/counter';
import { PhonePage } from '../phone/phone';
import { RadioListPage } from '../radio-list/radio-list';
import { YesNoListPage } from './../yes-no-list/yes-no-list';
import { IteratorPipePage } from '../iterator-pipe/iterator-pipe';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToAddressPage(): void {
    this.navCtrl.push(AddressPage);
  }

  goToCounterPage(): void {
    this.navCtrl.push(CounterPage);
  }

  goToPhonePage(): void {
    this.navCtrl.push(PhonePage);
  }

  goToRadioListPage() {
    this.navCtrl.push(RadioListPage);
  }

  goToYesNoListPage() {
    this.navCtrl.push(YesNoListPage);
  }

  goToIteratorPipePage() {
    this.navCtrl.push(IteratorPipePage);
  }
}

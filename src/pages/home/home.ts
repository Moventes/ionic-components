import { LoadingProvider } from './../../../componentes/src/providers/loading';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AddressPage } from '../address/address';
import { CounterPage } from '../counter/counter';
import { PhonePage } from '../phone/phone';
import { RadioListPage } from '../radio-list/radio-list';
import { YesNoListPage } from './../yes-no-list/yes-no-list';
import { IteratorPipePage } from '../iterator-pipe/iterator-pipe';
import { AutocompletePage } from '../autocomplete/autocomplete';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public loadingProvider: LoadingProvider) {

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

  goToAutocompletePage(): void {
    this.navCtrl.push(AutocompletePage);
  }

  public showLoad() {
    this.loadingProvider.waitForPromise(this.wait(3000), false, 'wait 3s', true);
    this.loadingProvider.waitForPromise(this.wait(6000), false, 'wait 6s', false);
  }

  wait(time: number = 0): Promise<void> {
    return new Promise((res) => {
      setTimeout(() => {
        console.log(time + ' wait end');
        res();
      }, time);
    });
  }

}

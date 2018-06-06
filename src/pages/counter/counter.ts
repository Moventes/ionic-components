import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { createCounterRangeValidator } from '../../../componentes/src/components/counter-input/counter-input';

/**
 * Generated class for the CounterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-counter',
  templateUrl: 'counter.html',
})
export class CounterPage implements OnInit {

  outerCounterValue = 5;
  formGroup: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      counter: [5, createCounterRangeValidator(10, 0)]
    });
  }

}

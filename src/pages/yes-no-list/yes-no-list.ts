import { AnswersProvider } from './../../providers/answers';
import { Component, OnDestroy } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { HomePage } from '../home/home';

/**
 * Generated class for the YesNoListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-yes-no-list',
  templateUrl: 'yes-no-list.html'
})
export class YesNoListPage implements OnDestroy {
  question = "Je voudrais être capable de"
  itemsList = [
    {
      $id: 'id5',
      title: 'voler',
      numberInGroup: '1'
    },
    {
      $id: 'id4',
      title: 'me rendre invisible',
      numberInGroup: '3'
    },
    {
      $id: 'id3',
      title: 'me téléporter',
      numberInGroup: '2'
    },
    {
      $id: 'id2',
      title: 'contrôler le feu',
      numberInGroup: '4'
    },
    {
      $id: 'id1',
      title: 'maîtriser la Force',
      numberInGroup: '5'
    }
  ];
  answers: Object;
  answersControl: FormControl;
  callback: Function;

  constructor(
    public navCtrl: NavController,
    private fb: FormBuilder,
    private answersProvider: AnswersProvider
  ) {
    this.answersControl = this.fb.control(null, [Validators.required, Validators.minLength(this.itemsList.length)]);
    this.answers = this.answersProvider.answers;
    this.callback = () => {
      this.navCtrl.push(HomePage);
    }
  }

  ngOnDestroy() {
    this.answersProvider.answers = this.answers;
  }

}

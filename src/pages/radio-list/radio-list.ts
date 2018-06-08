import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ISubscription } from 'rxjs/Subscription';
import { EnumValidator } from '../../validators/enum.validator';
enum EnumOfChoices {
  Chien,
  Chat,
  Oiseau
}

const importedEnumName = 'animals';

const choicesArray: string[] = ['Chien', 'Chat', 'Oiseau', 'Chtulu'];

@Component({
  selector: 'mv-radio-list-page',
  templateUrl: 'radio-list.html',
})
export class RadioListPage implements OnInit, OnDestroy {
  enumSelected: number;
  observableSelected = 0;
  observableFormGroup: FormGroup;
  enumFormGroup: FormGroup;

  choices: Observable<string[]> | EnumOfChoices;
  private _results: string[];

  enumOfChoices = EnumOfChoices;
  enumName = importedEnumName;

  private subscriber: ISubscription;

  constructor(
    public navCtrl: NavController,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.choices = Observable.of(choicesArray);
    this.observableFormGroup = this.fb.group({
      selected: new FormControl(null, [Validators.required, EnumValidator.isElementOf(EnumOfChoices)])
    });

    this.enumFormGroup = this.fb.group({
      selected: new FormControl(1, [Validators.required, EnumValidator.isElementOf(EnumOfChoices)])
    });

    if (this.choices instanceof Observable) {
      this.subscriber = this.choices.subscribe(results => this._results = results);
    } else {
      // enum
      this._results = this.choices;
    }
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }
}

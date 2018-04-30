import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EnumValidator } from '../../validators/enum.validator';
import { Observable } from 'rxjs/Observable';

enum AnimalsEnum {
  DOG = 'ANIMAL.DOG',
  CAT = 'ANIMAL.CAT',
  BIRD = 'ANIMAL.BIRD'
};

@Component({
  selector: 'page-iterator-pipe',
  templateUrl: 'iterator-pipe.html',
})
export class IteratorPipePage {
  formGroup: FormGroup
  enum = AnimalsEnum;
  observable = Observable.of(['DOG', 'CAT', 'BIRD']);

  constructor(private fb: FormBuilder, public navCtrl: NavController) {
    this.formGroup = this.fb.group({
      selectedInEnum: new FormControl(null, [Validators.required, EnumValidator.isElementOf(this.enum)]),
      selectedInObs: new FormControl(null, [Validators.required])
    })
  }

}

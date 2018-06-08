import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, Input, forwardRef } from '@angular/core';

/**
 * This Component displays questions one after an other.
 * The only possible answers are yes or no.
 * After the last question, a templatable screen is diplayed.
 *
 * @example
 * <mv-yes-no-list [(ngModel)]="answers" [question]="question" [itemsList]="itemsList" name="answers">
 */
@Component({
  selector: 'mv-yes-no-list',
  templateUrl: 'yes-no-list.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => YesNoListComponent),
      multi: true
    }
  ]
})
export class YesNoListComponent implements ControlValueAccessor {
  /**
   * Model where are stored the answers
   */
  @Input()
  _answers: Object;

  /**
   * Main question displayed
   */
  @Input()
  question: string;

  /**
   * Callback called on last question reached
   */
  @Input()
  callback: Function;

  /**
   * Subquestions/propositions provided as an array
   */
  @Input()
  set itemsList(list) {
    this.sortedItemsList = list.sort((a, b) => {
      return (a.orderInGroup > b.orderInGroup) ? 1 : ((b.orderInGroup > a.orderInGroup) ? -1 : 0);
    });
    if (this._answers) {
      this.resolveCurrentItem();
    }
  }

  set answers(value) {
    this._answers = value;
    if (value && this.sortedItemsList) {
      this.resolveCurrentItem();
    }
    this.propagateChange(this._answers);
  }

  get answers() {
    return this._answers;
  }

  /**
   * Subquestions/propositions stored ordered by their "orderInGroup"
   */
  sortedItemsList: any[] = [];

  /**
   * ID of the current displayed item
   */
  currentItem: number;

  /**
   * Percentage of the questionary reached
   */
  progress: string;

  /**
   * Constructor of the components,
   * set the current item to 0
   */
  constructor() {
    this.currentItem = 0;
    this.progress = '0%';
  }

  private resolveCurrentItem() {
    const filteredList = this.sortedItemsList.filter(item => !this._answers.hasOwnProperty(item.$id));
    this.currentItem = this.sortedItemsList.indexOf(filteredList[0]);
    this.progress = (Math.round(100 * this.currentItem / (this.sortedItemsList.length - 1))).toString().concat('%');
  }

  /**
   * Increment the progress bar until the last item is clicked,
   * Then, increments currentItem if it's not the last one, or execute the callback.
   */
  nextItem() {
    if (this.currentItem < this.sortedItemsList.length - 1) {
      this.currentItem++;
      this.progress = (Math.round(100 * this.currentItem / (this.sortedItemsList.length - 1))).toString().concat('%');
    } else {
      this.callback();
    }
  }

  /**
   * Saves the answer to the current question as a yes.
   * Then, call the nextItem method.
   */
  answerYes() {
    this.answers[this.sortedItemsList[this.currentItem].$id] = true;
    this.nextItem();
  }

  /**
   * Saves the answer to the current question as a no.
   * Then, call the nextItem method.
   */
  answerNo() {
    this.answers[this.sortedItemsList[this.currentItem].$id] = false;
    this.nextItem();
  }

  /**
   * This method is part of ControlValueAccessor interface.
   * Its role is to set value from the model to the DOM
   *
   * @param value Value given from the model
   */
  writeValue(value: any) {
    if (value !== undefined) {
      this.answers = value;
    } else {
      this.answers = {};
    }
  }

  /**
   * This method is part of ControlValueAccessor interface.
   * Its role is to set the function that will propagate changes from the DOM to the model.
   *
   * @param fn {function} Angular internal function
   */
  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  /**
   * This method is part of ControlValueAccessor interface.
   * Not used here
   */
  registerOnTouched(): void { }

  /**
   * Container for the propagation function.
   */
  propagateChange = (_: any) => { };
}

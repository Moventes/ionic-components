import { Component, Input, forwardRef, OnInit, OnDestroy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { EnumsHelper } from '../../helpers/enums.helper';
import { Observable, Subscription } from 'rxjs';

/**
 * This components provides a radiogroup composed of radios based on the elements from an enum or the observable of an array.
 * //TODO : See with Thierry for precisions and/or rectifications where ***** Question ? *****
 *
 * @example
 * <form #observableForm="ngForm">
 *     <ion-item>
 *         <mv-radio-list name="selected" [(ngModel)]="observableSelected" [values]="choices"></mv-radio-list>
 *     </ion-item>
 * </form>
 * <form #enumForm="ngForm">
 *     <ion-item>
 *         <mv-radio-list name="selected" [(ngModel)]="enumSelected" [values]="enumOfChoices" [enumName]="enumName"></mv-radio-list>
 *     </ion-item>
 * </form>
 */
@Component({
  templateUrl: './radio-list.html',
  selector: 'mv-radio-list',
  providers: [
    // tells Angular that this component can be instantiate to be used as a control value accessor
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioListComponent),
      multi: true
    }
  ]
})
export class RadioListComponent implements ControlValueAccessor, OnInit, OnDestroy {
  /**
   * Object listing choices
   */
  enumOfChoices: { [k: string]: any; };

  // logic used when received data is an observable or an array of strings
  /**
   * Observable of an array listing choices provided to the component
   * ***** Can it be an enum ? *****
   */
  @Input()
  values?: Observable<string[]>;

  /**
   * Name of the enumeration where the possible values are listed
   */
  @Input()
  enumName?: string;

  /**
   * True if the values were provided as an enum
   */
  enum = false;

  /**
   * Key Id of the element selected
   * ***** From enum ? What if the element is selected from an observable ? *****
   */
  private _selected: number;

  /**
   * Subscription to the observable provided
   */
  private subscriber: Subscription;

  /**
   * Array of possible values build from observable or enum provided
   */
  private _currentValues: string[];

  /**
   * Called when the directive is initialized.
   * Constructs the list of choices.
   */
  ngOnInit() {
    if (this.values instanceof Observable) {
      this.subscriber = this.values.subscribe(values => this._currentValues = values);
    } else {
      this.enumName = this.enumName ? this.enumName : 'ENUMNAME';
      this.enum = true;
      this.enumOfChoices = EnumsHelper.getEnum(this.values, this.enumName);
      this._currentValues = this.enumOfChoices.keys();
    }
  }

  /**
   * Called when the directive is destroyed.
   * Unsubscribes to the observable if it was provided
   */
  ngOnDestroy() {
    if (this.subscriber) {
      this.subscriber.unsubscribe();
    }
  }

  /**
   * Gets the _selected value.
   */
  get selected() {
    return this._selected;
  }

  /**
   * Sets the provided value and propagate it to the model/control
   */
  set selected(val) {
    this._selected = val;
    this.propagateChange(this._selected);
  }

  //  model value ==> DOM value
  /**
   * This method is part of ControlValueAccessor interface.
   * Its role is to set value from the model to the DOM
   *
   * @param value Value given from the model
   */
  writeValue(value: any) {
    if (value !== undefined) {
      this.selected = value;
    }
  }

  //  DOM value ==> model value
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

  // the method set in registerOnChange, it is just
  // a placeholder for a method that takes one parameter,
  // we use it to emit changes back to the form
  /**
   * Container for the propagation function.
   */
  propagateChange = (_: any) => { };
}

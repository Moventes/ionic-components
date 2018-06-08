import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

/**
 * allows the user to modify a given element of an array attribute
 *
 * An optional index attribute lets you choose which N'th element of the array should be modified (default is 0)
 *
 * @example
 * <ion-item>
 *   <ion-label floating>{{ 'PAGES.REGISTER.EMAIL' | translate }}</ion-label>
 *   <mv-element-of-array item-content formControlName="emails" required></mv-element-of-array>
 * </ion-item>
 */
@Component({
  selector: 'mv-element-of-array',
  templateUrl: 'element-of-array.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ElementOfArrayComponent),
      multi: true
    }
  ]
})
export class ElementOfArrayComponent implements ControlValueAccessor {

  @Input()
  public index = 0;

  /**
   * The elements value stored in the model
   */
  private _elementsValue: string[] = [];

  /**
   * The element value as it will be displayed in the DOM
   */
  private _displayedElementValue = '';

  public get elementsValue() {
    return this._elementsValue;
  }

  public set elementsValue(val) {
    this._elementsValue = val;
    this.propagateChange(this._elementsValue);
  }

  public get displayedElementValue() {
    return this._displayedElementValue;
  }

  public set displayedElementValue(val: any) {
    if (val instanceof Array) {
      this._displayedElementValue = val[this.index] || null;
      this.elementsValue = val;
    } else {
      this._displayedElementValue = val;
      const arr = this._elementsValue;
      arr[this.index] = val;
      this.elementsValue = arr;
    }
  }

  /**
   * This method is part of ControlValueAccessor interface.
   * Its role is to set value from the model to the DOM
   *
   * @param value Value given from the model
   */
  public writeValue(value: any) {
    if (value !== undefined) {
      this.displayedElementValue = value;
    }
  }

  /**
   * This method is part of ControlValueAccessor interface.
   * Its role is to set the function that will propagate changes from the DOM to the model.
   *
   * @param fn {function} Angular internal function
   */
  public registerOnChange(fn) {
    this.propagateChange = fn;
  }

  /**
   * This method is part of ControlValueAccessor interface.
   * Not used here
   */
  public registerOnTouched(): void { }

  /**
   * Container for the propagation function.
   */
  public propagateChange = (_: any) => { };
}

import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

// this kind of import is necessary for packaging to work
import * as libPhoneNumber from 'google-libphonenumber';

/**
 * Provides utils for phone numbers
 */
const PhoneNumberUtil = libPhoneNumber.PhoneNumberUtil;

/**
 * Provides the differents format used by Google's libphonenumber
 */
const PhoneNumberFormat = libPhoneNumber.PhoneNumberFormat;


/**
 * This components aims to provide an input that will display a national phone number while you're typing
 * but will save an international (E164) phone number .
 * It's based on google-libphonenumber.
 *
 * @example
 * <mv-phone-input label="Phone number" formControlName="phone"></mv-phone-input>
 */
@Component({
  selector: 'mv-phone-input',
  templateUrl: 'phone-input.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhoneInputComponent),
      multi: true
    }
  ]
})
export class PhoneInputComponent implements ControlValueAccessor {
  @Input()
  public label: string;

  private _countryCode = 'FR';

  @Input()
  public set countryCode(value: string) {
    this._countryCode = value;
    this.displayedPhoneValue = this.displayedPhoneValue;
  }

  public get countryCode(): string {
    return this._countryCode;
  }

  /**
   * The phone value stored in the model
   */
  private _phoneValue = '';

  /**
   * The phone value as it will be displayed in the DOM
   */
  private _displayedPhoneValue = '';

  /**
   * Instance of the Google Phonenumber utils
   */
  private phoneUtil = PhoneNumberUtil.getInstance();

  /**
   * Phone number object in google format
   */
  private number;


  public get phoneValue() {
    return this._phoneValue;
  }

  public set phoneValue(val) {
    this._phoneValue = val;
    this.propagateChange(this._phoneValue);
  }

  public get displayedPhoneValue() {
    return this._displayedPhoneValue;
  }

  public set displayedPhoneValue(val) {
    try {
      this.number = this.phoneUtil.parse(val, this.countryCode);
      this._displayedPhoneValue = this.phoneUtil.format(this.number, PhoneNumberFormat.NATIONAL);
      this.phoneValue = this.phoneUtil.format(this.number, PhoneNumberFormat.E164).replace('+', '00');
      // numbers in +xxyyyy do not work on some Android versions
    } catch (e) {
      this._displayedPhoneValue = val;
      this.phoneValue = null;
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
      this.displayedPhoneValue = value;
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

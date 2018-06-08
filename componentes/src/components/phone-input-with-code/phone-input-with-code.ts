import { Component, forwardRef, Input, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

// this kind of import is necessary for packaging to work
import * as libPhoneNumber from 'google-libphonenumber';

import { Country } from '../../models/country.model';

/**
 * Provides utils for phone numbers
 */
const PhoneNumberUtil = libPhoneNumber.PhoneNumberUtil;
const phoneNumberUtil = PhoneNumberUtil.getInstance();

/**
 * Component providing an autocomplete input to selct country and an input to type a local phone number
 * It returns an international phone number correctly formatted
 *
 * @example
 * //TODO
 */
@Component({
  selector: 'mv-phone-input-with-code',
  templateUrl: 'phone-input-with-code.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhoneInputWithCodeComponent),
      multi: true
    }
  ]
})
export class PhoneInputWithCodeComponent implements ControlValueAccessor {
  @Input()
  public countryList: Country[];

  @Input()
  public label: string;

  @Input()
  public countryLabel: string;

  @Input()
  public phoneLabel: string;

  public selectedCountry: Country;

  private _internationalPhoneValue: string;

  public get internationalPhoneValue(): string {
    return this._internationalPhoneValue;
  }
  public set internationalPhoneValue(value: string) {
    this._internationalPhoneValue = value;
    setTimeout(() => this.propagateChange(this._internationalPhoneValue));
    // this.cd.markForCheck();
  }

  // constructor(private cd: ChangeDetectorRef) {

  // }

  public writeValue(value: string): void {
    if (value) {
      this.internationalPhoneValue = value;
    } else {
      this.internationalPhoneValue = '';
    }
  }

  /**
   * This method is part of ControlValueAccessor interface.
   * Its role is to set the function that will propagate changes from the DOM to the model.
   *
   * @param fn {function} Angular internal function
   */
  public registerOnChange(fn): void {
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

  displayFunction(item: Country): string {
    return `<p>
      <span>${item.label}</span>
      <span style="color="#606060 !important;">(+${phoneNumberUtil.getCountryCodeForRegion(item.id)})</span>
    </p>`;
  }

  filterFunction(item: Country, searchTerm: string): boolean {
    return item.label.toLowerCase().includes(searchTerm.toLowerCase());
  }
}

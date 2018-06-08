
import { Component, forwardRef, Input, NgZone } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ModalController } from 'ionic-angular';
import { Address } from 'mv-common-components';
import { AddressAutocompleteModalComponent } from './address-autocomplete-modal';



/**
 * Component providing a searchbar input which autocomplete returned by Google Maps API
 *
 * @example
 * //TODO
 */
@Component({
  selector: 'mv-address-autocomplete',
  templateUrl: 'address-autocomplete.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddressAutocompleteComponent),
      multi: true
    }
  ]
})
export class AddressAutocompleteComponent implements ControlValueAccessor {
  /**
   * The component needs a label option to fill the placeholder
   */
  @Input()
  label: string;

  /**
   * Boolean that indicates if the component will accept custom value or not.
   */
  @Input()
  allowCustom: boolean;

  /**
   * Boolean that indicates if the component will return the full detailed address or not.
   */
  @Input()
  fullAddressDetails: boolean;

  /**
   * Address value
   */
  private _addressValue: Address;

  private isModalPresented = false;

  private get addressValue(): Address {
    return this._addressValue;
  }

  private set addressValue(val: Address) {
    this.ngZone.run(() => {
      this._addressValue = val;
      this.propagateChange(this._addressValue);
    });
  }

  constructor(
    private modalCtrl: ModalController,
    private ngZone: NgZone
  ) { }

  /**
   * Open a modal with searchbar and results list.
   */
  public openModal() {
    console.log('openModal');
    if (!this.isModalPresented) {
      const addressAutocompleteModal = this.modalCtrl.create(AddressAutocompleteModalComponent, {
        label: this.label,
        allowCustom: this.allowCustom,
        fullAddressDetails: this.fullAddressDetails
      });
      addressAutocompleteModal.onDidDismiss((newAddress: Address) => {
        if (newAddress && newAddress.formattedAddress) {
          this.addressValue = newAddress;
        }
        this.isModalPresented = false;
      });
      addressAutocompleteModal.present();
      this.isModalPresented = true;
    }
  }

  /**
   * This method is part of ControlValueAccessor interface.
   * Its role is to set value from the model to the DOM
   *
   * @param value Value given from the model
   */
  public writeValue(value: any) {
    if (value) {
      this.addressValue = value;
    } else {
      this.addressValue = {
        formattedAddress: ''
      };
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


import { Component, forwardRef, OnInit, Input, NgZone } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { ModalController } from 'ionic-angular';

import { AutocompleteModalComponent } from './autocomplete-modal';

/**
 * Component providing a searchbar input which autocomplete returned by Google Maps API
 *
 * @example
 * //TODO
 */
@Component({
  selector: 'mv-autocomplete',
  templateUrl: 'autocomplete.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutocompleteComponent),
      multi: true
    }
  ]
})
export class AutocompleteComponent<T> implements ControlValueAccessor {
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

  @Input()
  display: Function;

  @Input()
  filter: Function;

  @Input()
  factory: Function;

  @Input()
  list: T[];

  value: string;

  /**
   * Address value
   */
  private _itemValue: T;

  private get itemValue(): T {
    return this._itemValue;
  }

  private set itemValue(val: T) {
    this._itemValue = val;
    this.propagateChange(this._itemValue);
  }

  constructor(
    private modalCtrl: ModalController,
  ) { }

  /**
   * Open a modal with searchbar and results list.
   */
  public openModal() {
    const autocompleteModal = this.modalCtrl.create(AutocompleteModalComponent, {
      label: this.label,
      list: this.list,
      allowCustom: this.allowCustom,
      display: this.display,
      filter: this.filter,
      factory: this.factory
    });
    autocompleteModal.onDidDismiss((newItem: T) => {
      if (newItem) {
        this.itemValue = newItem;
        this.value = this.removeTags(this.display(this.itemValue));
      } else {
        // do nothing
      }
    });
    autocompleteModal.present();
  }

  /**
   * This method is part of ControlValueAccessor interface.
   * Its role is to set value from the model to the DOM
   *
   * @param value Value given from the model
   */
  public writeValue(value: T) {
    if (value) {
      this.itemValue = value;
    } else {
      this.itemValue = null;
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

  public removeTags(string: string) {
    return string.replace(/<[^>]+>/gm, '');
  }
}

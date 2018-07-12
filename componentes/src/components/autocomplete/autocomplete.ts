
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ModalController } from 'ionic-angular';
import { findIndex } from 'lodash';
import { AutocompleteModalComponent } from './autocomplete-modal';

/**
 * Component providing a searchbar input with autocomplete
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


  // ###########################################################
  // #######  COMPONENT INPUTS
  // ###########################################################


  /**
   * The component needs a label option to fill the placeholder
   */
  @Input()
  public label: string;

  /**
   * Boolean that indicates if the component will accept custom value or not.
   */
  @Input()
  public allowCustom: boolean;

  @Input()
  public display: Function;

  @Input()
  public filter: Function;

  @Input()
  public factory: Function;



  private _list: T[];
  @Input()
  public set list(val: T[]) {
    this._list = val;
    if (!this.checkValueValidity()) {
      console.log('list changed => cleared value because no more present in the list');
    }
  }
  public get list(): T[] {
    return this._list;
  }


  // ###########################################################
  // #######  ATTRIBUTES
  // ###########################################################

  public displayedValue: string;

  private isModalPresented = false;

  /**
   * Address value
   */
  private _itemValue: T;

  private get itemValue(): T {
    return this._itemValue;
  }

  private set itemValue(val: T) {
    this._itemValue = val;
    if (val) {
      this.displayedValue = this.removeTags(this.display(val));
    } else {
      this.displayedValue = '';
    }
    this.propagateChange(this._itemValue);
  }

  // ###########################################################
  // #######  CORE FUNCTIONS OF ANGULAR COMPONENT
  // ###########################################################

  constructor(
    private modalCtrl: ModalController,
  ) { }


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




  // ###########################################################
  // #######  UTILITY FUNCTIONS
  // ###########################################################

  /**
   * Open a modal with searchbar and results list.
   */
  public openModal() {
    if (!this.isModalPresented) {
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
        } else {
          // do nothing
        }
        this.isModalPresented = false;
      });
      autocompleteModal.present();
      this.isModalPresented = true;
    }
  }

  public removeTags(string: string) {
    return string.replace(/<[^>]+>/gm, '');
  }



  checkValueValidity(): boolean {
    if (this._list && this._itemValue) {


      // ------------------------
      // --- algo "findIndex" --
      const itemValueContent = {};
      Object.keys(this._itemValue)
        .filter((key) => this._itemValue.hasOwnProperty(key) && typeof this._itemValue[key] !== 'function')
        .forEach((key) => itemValueContent[key] = this._itemValue[key]);

      const foundIdx = findIndex(this._list, itemValueContent);
      // console.log('search for ', itemValueContent, ' in ', this._list, ' ==> ', foundIdx);
      if (foundIdx >= 0) {
        return true;
      } else {
        this.itemValue = null;
        return false;
      }

    } else if (this._itemValue) {
      this.itemValue = null;
      return false;
    } else {
      return true;
    }
  }
}

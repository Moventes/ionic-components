import { Component, forwardRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NavParams, Searchbar, ViewController } from 'ionic-angular';

/**
 * Component providing a searchbar input which autocomplete returned by Google Maps API
 *
 * @example
 * //TODO
 */
@Component({
  selector: 'mv-autocomplete-modal',
  templateUrl: 'autocomplete-modal.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutocompleteModalComponent),
      multi: true
    }
  ]
})
export class AutocompleteModalComponent<T> implements ControlValueAccessor {
  @ViewChild('search') searchBar: Searchbar;

  /**
   * Full list of results
   */
  list: T[];

  /**
   * Boolean that indicates if the "custom address he typed could be presented on the list"
   */
  allowCustom: boolean;

  /**
   * The component needs a label option to fill the placeholder
   */
  label: string;

  /**
   * Boolean that indicates if user can validate the "custom address he typed or not"
   */
  customEnabled: boolean;

  /**
   * Function returning an html string for item displaying
   */
  display: Function;

  /**
   * Function returning a filtered array
   */
  filter: Function;

  /**
   * Function returning an object <T> ffrom a string
   */
  factory: Function;

  /**
   * The component needs a model (ngModel od formControlName) option that will store the returned address
   */
  private _itemValue: T;

  /**
   * {string} Item formatted as it will appear in the dom
   */
  private _displayedItemValue = '';

  /**
   * Filterd list
   */
  private results: T[] = [];

  private get itemValue(): T {
    return this._itemValue;
  }

  private set itemValue(val: T) {
    this._itemValue = val;
    this.propagateChange(this._itemValue);
  }

  private get displayedItemValue() {
    return this._displayedItemValue;
  }

  private set displayedItemValue(val) {
    this._displayedItemValue = val;
  }

  constructor(
    private params: NavParams,
    private viewCtrl: ViewController
  ) { }

  ionViewDidEnter() {
    this.label = this.params.get('label');
    this.list = this.params.get('list');
    this.display = this.params.get('display');
    this.filter = this.params.get('filter');
    this.factory = this.params.get('factory');
    this.allowCustom = this.params.get('allowCustom');
    this.customEnabled = false;
    setTimeout(() => {
      this.searchBar.setFocus();
    }, 500);
  }

  /**
   * Empties the propositions list.
   * Called before its filling or when there are not results from Google services
   */
  private setList(results = null) {
    this.results = results || [];
  }

  /**
   * When the input loses the focus, this method is called to hide the propositions list.
   */
  public onBlur() {
    // we need a timeout to prevent list from being emptied before the click event is emitted
    setTimeout(() => this.setList(), 300);
  }

  /**
   * This method is part of ControlValueAccessor interface.
   * Its role is to set value from the model to the DOM
   *
   * @param value Value given from the model
   */
  public writeValue(value: T) {
    if (value) {
      this.displayedItemValue = this.display(value);
    } else {
      this.displayedItemValue = null;
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

  /**
  * When user type something in the searchbar,
  * this method updates the formatted address of the address model.
  * This also calls the method responsible of filling the propositions list with AutocompleteService.
  */
  public inputOnSearchbar(disableCustom: boolean) {
    if (this.displayedItemValue && this.allowCustom) {
      this.itemValue = this.factory(this.displayedItemValue);
    } else {
      this.itemValue = null;
    }
    if (this.customEnabled && disableCustom) {
      this.customEnabled = false;
    } else {
      // Nothing to do...
    }
    if (this.displayedItemValue) {
      this.setList(this.list.filter((item: T) => this.filter(item, this.displayedItemValue)));
    } else {
      this.setList();
    }
    if (!this.customEnabled) {
      this.customEnabled = true;
    } else {
      // Nothing to do...
    }
  }

  /**
   * This method is called when the user validates input without any result,
   * the address only contains the formatted address entered in the search bar
   */
  selectCustomItem() {
    this.viewCtrl.dismiss(this.itemValue);
  }

  /**
   * This method is called when user select a proposition in the list.
   * The Google PlaceService is called to get precise informations about this place.
   * the address object is built with those informations.
   *
   * @param item Selected item from propositon list
   */
  public selectSearchResult(item) {
    this.itemValue = item;
    this.viewCtrl.dismiss(this.itemValue);
    this.setList();
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
}

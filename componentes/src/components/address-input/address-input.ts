import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, forwardRef, NgZone, Input } from '@angular/core';
import { AddressDetails, Address } from 'mv-common-components';

/**
 * Google declaration provides access to Google maps api
 */
declare var google: any;

/**
 * Component providing a searchbar input which autocomplete returned by Google Maps API
 *
 * @example
 * <mv-address-input label="Address" formControlName="address"></mv-address-input>
 */
@Component({
  selector: 'mv-address-input',
  templateUrl: 'address-input.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddressInputComponent),
      multi: true
    }
  ]
})
export class AddressInputComponent implements ControlValueAccessor {
  // TODO: configure API key : this one is Gwenaël HENOT's for lea-firestore : AIzaSyA9Pk3eEXTAFA04nbUjcdAlkcoyXMoSzFM

  /**
   * The component needs a label option to fill the placeholder
   */
  @Input()
  label: string;

  /**
   * The component needs a model (ngModel od formControlName) option that will store the returned address
   */
  private _addressValue: Address = { formattedAddress: '' };

  /**
   * {string} Address formatted as it will appear in the dom
   */
  private _displayedAddressValue = '';

  /**
   * True if the input address will be used as is
   */
  private useInputAddress: boolean;

  /**
   * Google autocomplete service
   */
  private autocompleteService = new google.maps.places.AutocompleteService();

  /**
   * Google place service
   */
  private placeService;

  /**
   * Google geocoder service
   */
  private geocoder;

  /**
   * Results received from Google services
   */
  private results = [];

  private get addressValue(): Address {
    return this._addressValue;
  }

  private set addressValue(val: Address) {
    this.ngZone.run(() => {
      this._addressValue = val;
      this.propagateChange(this._addressValue);
    });
  }

  private get displayedAddressValue() {
    return this._displayedAddressValue;
  }

  private set displayedAddressValue(val) {
    this.ngZone.run(() => {
      this._displayedAddressValue = val;
    });
  }

  constructor(private ngZone: NgZone) {
  }

  /**
   * Empties the propositions list.
   * Called before its filling or when there are not results from Google services
   */
  private setList(results = null) {
    this.ngZone.run(() => {
      this.results = results || [];
    });
  }

  /**
   * This method calls the autocomplete service to get predictions based on the input value.
   * If there are some results, they wil fill the propositions list.
   * Else, Google geocoding will be called
   */
  private useAutocompleteservice() {
    this.useInputAddress = false;
    if (this.displayedAddressValue === '') {
      this.setList();
      return;
    }
    this.autocompleteService.getPlacePredictions({ input: this.displayedAddressValue },
      (results, status) => {
        if (results && results.length > 0) {
          this.setList(results);
        } else {
          this.useGeocoding();
        }
      });
  }

  /**
   * This method calls the Google geocoding to get predictions based on the input value.
   * If there are some results, they wil fill the propositions list.
   */
  private useGeocoding() {
    this.useInputAddress = true;
    const request = {
      address: this.displayedAddressValue
    };
    if (!this.geocoder) {
      this.geocoder = new google.maps.Geocoder();
    }
    this.geocoder.geocode(request, (results, status) => {
      this.setList(results);
    });
  }

  /**
   * When user type something in the searchbar,
   * this method updates the formatted address of the address model.
   * This also calls the method responsible of filling the propositions list with AutocompleteService.
   */
  public inputOnSearchbar() {
    if (this.displayedAddressValue) {
      this.addressValue = {
        formattedAddress: this.displayedAddressValue
      };
    } else {
      this.addressValue = null;
    }
    if (this.addressValue) {
      this.useAutocompleteservice();
    } else {
      this.setList();
    }
  }

  /**
   * This method is called when user select a proposition in the list.
   * The Google PlaceService is called to get precise informations about this place.
   * the address object is built with those informations.
   *
   * @param item Selected item from propositon list
   */
  public selectSearchResult(item) {
    const request = {
      placeId: item.place_id
    };
    if (!this.placeService) {
      this.placeService = new google.maps.places.PlacesService(document.getElementById('attribution'));
    }
    this.placeService.getDetails(request, (place, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        this.displayedAddressValue = place.formatted_address;
        const addressDetails: AddressDetails = {
          route: '',
          postalCode: '',
          city: '',
          country: ''
        };
        for (const component of place.address_components) {
          if (component.types[0] === 'street_number') {
            addressDetails.streetNumber = component.long_name;
          }
          if (component.types[0] === 'route') {
            addressDetails.route = component.long_name;
          }
          if (component.types[0] === 'postal_code') {
            addressDetails.postalCode = component.long_name;
          }
          if (component.types[0] === 'locality') {
            addressDetails.city = component.long_name;
          }
          if (component.types[0] === 'country') {
            addressDetails.country = component.long_name;
          }
        }
        this.addressValue = {
          latitude: place.geometry.location.lat(),
          longitude: place.geometry.location.lng(),
          formattedAddress: this.useInputAddress ? this.displayedAddressValue : place.formatted_address,
          googlePlaceId: place.place_id,
          addressDetails: addressDetails
        };
      }
    });
    this.results = [];
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
  public writeValue(value: any) {
    if (value && value.formattedAddress) {
      this.displayedAddressValue = value.formattedAddress;
    } else {
      this.displayedAddressValue = null;
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


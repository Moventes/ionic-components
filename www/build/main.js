webpackJsonp([0],{

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__address_address__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__counter_counter__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__phone_phone__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__radio_list_radio_list__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__yes_no_list_yes_no_list__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__iterator_pipe_iterator_pipe__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__autocomplete_autocomplete__ = __webpack_require__(429);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.goToAddressPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__address_address__["a" /* AddressPage */]);
    };
    HomePage.prototype.goToCounterPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__counter_counter__["a" /* CounterPage */]);
    };
    HomePage.prototype.goToPhonePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__phone_phone__["a" /* PhonePage */]);
    };
    HomePage.prototype.goToRadioListPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__radio_list_radio_list__["a" /* RadioListPage */]);
    };
    HomePage.prototype.goToYesNoListPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__yes_no_list_yes_no_list__["a" /* YesNoListPage */]);
    };
    HomePage.prototype.goToIteratorPipePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__iterator_pipe_iterator_pipe__["a" /* IteratorPipePage */]);
    };
    HomePage.prototype.goToAutocompletePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__autocomplete_autocomplete__["a" /* AutocompletePage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/media/data/Projects/componentes/ionic-components-v2/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Componentes Demo Project\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button full (click)=goToAddressPage()>Address Input</button>\n  <button ion-button full (click)=goToAutocompletePage()>Autocomplete Input</button>\n  <button ion-button full (click)=goToCounterPage()>Counter Input</button>\n  <button ion-button full (click)=goToPhonePage()>Phone Input</button>\n  <button ion-button full (click)=goToRadioListPage()>Radio List</button>\n  <button ion-button full (click)=goToYesNoListPage()>Yes No List</button>\n  <button ion-button full (click)=goToIteratorPipePage()>Iterator Pipe</button>\n</ion-content>'/*ion-inline-end:"/media/data/Projects/componentes/ionic-components-v2/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnswersProvider = /** @class */ (function () {
    function AnswersProvider() {
    }
    Object.defineProperty(AnswersProvider.prototype, "answers", {
        get: function () {
            return this._answers;
        },
        set: function (answers) {
            this._answers = answers;
        },
        enumerable: true,
        configurable: true
    });
    AnswersProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AnswersProvider);
    return AnswersProvider;
}());

//# sourceMappingURL=answers.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutocompleteModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Component providing a searchbar input which autocomplete returned by Google Maps API
 *
 * @example
 * //TODO
 */
var AutocompleteModalComponent = /** @class */ (function () {
    function AutocompleteModalComponent(params, viewCtrl) {
        this.params = params;
        this.viewCtrl = viewCtrl;
        /**
         * {string} Item formatted as it will appear in the dom
         */
        this._displayedItemValue = '';
        /**
         * Filterd list
         */
        this.results = [];
        /**
         * Container for the propagation function.
         */
        this.propagateChange = function (_) { };
    }
    AutocompleteModalComponent_1 = AutocompleteModalComponent;
    Object.defineProperty(AutocompleteModalComponent.prototype, "itemValue", {
        get: function () {
            return this._itemValue;
        },
        set: function (val) {
            this._itemValue = val;
            this.propagateChange(this._itemValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AutocompleteModalComponent.prototype, "displayedItemValue", {
        get: function () {
            return this._displayedItemValue;
        },
        set: function (val) {
            this._displayedItemValue = val;
        },
        enumerable: true,
        configurable: true
    });
    AutocompleteModalComponent.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.label = this.params.get('label');
        this.list = this.params.get('list');
        this.display = this.params.get('display');
        this.filter = this.params.get('filter');
        this.factory = this.params.get('factory');
        this.allowCustom = this.params.get('allowCustom');
        this.customEnabled = false;
        setTimeout(function () {
            _this.searchBar.setFocus();
        }, 150);
    };
    /**
     * Empties the propositions list.
     * Called before its filling or when there are not results from Google services
     */
    AutocompleteModalComponent.prototype.setList = function (results) {
        if (results === void 0) { results = null; }
        this.results = results || [];
    };
    /**
     * When the input loses the focus, this method is called to hide the propositions list.
     */
    AutocompleteModalComponent.prototype.onBlur = function () {
        var _this = this;
        // we need a timeout to prevent list from being emptied before the click event is emitted
        setTimeout(function () { return _this.setList(); }, 300);
    };
    /**
     * This method is part of ControlValueAccessor interface.
     * Its role is to set value from the model to the DOM
     *
     * @param value Value given from the model
     */
    AutocompleteModalComponent.prototype.writeValue = function (value) {
        if (value) {
            this.displayedItemValue = this.display(value);
        }
        else {
            this.displayedItemValue = null;
        }
    };
    /**
     * This method is part of ControlValueAccessor interface.
     * Its role is to set the function that will propagate changes from the DOM to the model.
     *
     * @param fn {function} Angular internal function
     */
    AutocompleteModalComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    /**
     * This method is part of ControlValueAccessor interface.
     * Not used here
     */
    AutocompleteModalComponent.prototype.registerOnTouched = function () { };
    /**
    * When user type something in the searchbar,
    * this method updates the formatted address of the address model.
    * This also calls the method responsible of filling the propositions list with AutocompleteService.
    */
    AutocompleteModalComponent.prototype.inputOnSearchbar = function (disableCustom) {
        var _this = this;
        if (this.displayedItemValue && this.allowCustom) {
            this.itemValue = this.factory(this.displayedItemValue);
        }
        else {
            this.itemValue = null;
        }
        if (this.customEnabled && disableCustom) {
            this.customEnabled = false;
        }
        else {
            // Nothing to do...
        }
        if (this.displayedItemValue) {
            this.setList(this.list.filter(function (item) { return _this.filter(item, _this.displayedItemValue); }));
        }
        else {
            this.setList();
        }
        if (!this.customEnabled) {
            this.customEnabled = true;
        }
        else {
            // Nothing to do...
        }
    };
    /**
     * This method is called when the user validates input without any result,
     * the address only contains the formatted address entered in the search bar
     */
    AutocompleteModalComponent.prototype.selectCustomItem = function () {
        this.viewCtrl.dismiss(this.itemValue);
    };
    /**
     * This method is called when user select a proposition in the list.
     * The Google PlaceService is called to get precise informations about this place.
     * the address object is built with those informations.
     *
     * @param item Selected item from propositon list
     */
    AutocompleteModalComponent.prototype.selectSearchResult = function (item) {
        this.itemValue = item;
        this.viewCtrl.dismiss(this.itemValue);
        this.setList();
    };
    AutocompleteModalComponent.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('search'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Searchbar */])
    ], AutocompleteModalComponent.prototype, "searchBar", void 0);
    AutocompleteModalComponent = AutocompleteModalComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'mv-autocomplete-modal',template:/*ion-inline-start:"/media/data/Projects/componentes/ionic-components-v2/componentes/src/components/autocomplete/autocomplete-modal.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button clear color="dark" icon-only (click)="closeModal()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{ label }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-item>\n    <ion-searchbar #search type="text" id="search" [(ngModel)]="displayedItemValue" (ionInput)="inputOnSearchbar(true)" (ionFocus)="inputOnSearchbar(false)"\n      (ionBlur)="onBlur()" [placeholder]="label"></ion-searchbar>\n  </ion-item>\n  <ion-item *ngIf="results.length > 0 || (allowCustom && displayedItemValue)">\n    <ion-list>\n      <ion-item text-wrap *ngFor="let item of results" tappable (click)="selectSearchResult(item)" [innerHTML]="display(item) | mvSafeHtml">\n      </ion-item>\n      <ion-item (click)="selectCustomItem()" *ngIf="allowCustom && customEnabled">\n        <p style="color: #606060; font-style: oblique">{{ displayedItemValue }}</p>\n      </ion-item>\n    </ion-list>\n  </ion-item>\n  <!-- some html element is needed by maps API to "display" attribution when no maps is generated -->\n  <p id="attribution"></p>\n</ion-content>'/*ion-inline-end:"/media/data/Projects/componentes/ionic-components-v2/componentes/src/components/autocomplete/autocomplete-modal.html"*/,
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* NG_VALUE_ACCESSOR */],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* forwardRef */])(function () { return AutocompleteModalComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ViewController */]])
    ], AutocompleteModalComponent);
    return AutocompleteModalComponent;
    var AutocompleteModalComponent_1;
}());

//# sourceMappingURL=autocomplete-modal.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressAutocompleteModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Component providing a searchbar input which autocomplete returned by Google Maps API
 *
 * @example
 * //TODO
 */
var AddressAutocompleteModalComponent = /** @class */ (function () {
    function AddressAutocompleteModalComponent(ngZone, params, viewCtrl) {
        this.ngZone = ngZone;
        this.params = params;
        this.viewCtrl = viewCtrl;
        /**
         * {string} Address formatted as it will appear in the dom
         */
        this._displayedAddressValue = '';
        /**
         * Google autocomplete service
         */
        this.autocompleteService = new google.maps.places.AutocompleteService();
        /**
         * Results received from Google services
         */
        this.results = [];
        /**
         * Container for the propagation function.
         */
        this.propagateChange = function (_) { };
    }
    AddressAutocompleteModalComponent_1 = AddressAutocompleteModalComponent;
    Object.defineProperty(AddressAutocompleteModalComponent.prototype, "addressValue", {
        get: function () {
            return this._addressValue;
        },
        set: function (val) {
            var _this = this;
            this.ngZone.run(function () {
                _this._addressValue = val;
                _this.propagateChange(_this._addressValue);
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddressAutocompleteModalComponent.prototype, "displayedAddressValue", {
        get: function () {
            return this._displayedAddressValue;
        },
        set: function (val) {
            var _this = this;
            this.ngZone.run(function () {
                _this._displayedAddressValue = val;
            });
        },
        enumerable: true,
        configurable: true
    });
    AddressAutocompleteModalComponent.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.label = this.params.get('label');
        this.allowCustom = this.params.get('allowCustom');
        this.customEnabled = false;
        this.fullAddressDetails = this.params.get('fullAddressDetails');
        setTimeout(function () {
            _this.searchBar.setFocus();
        }, 150);
    };
    /**
     * Empties the propositions list.
     * Called before its filling or when there are not results from Google services
     */
    AddressAutocompleteModalComponent.prototype.setList = function (results) {
        var _this = this;
        if (results === void 0) { results = null; }
        this.ngZone.run(function () {
            _this.results = results || [];
        });
    };
    /**
     * When the input loses the focus, this method is called to hide the propositions list.
     */
    AddressAutocompleteModalComponent.prototype.onBlur = function () {
        var _this = this;
        // we need a timeout to prevent list from being emptied before the click event is emitted
        setTimeout(function () { return _this.setList(); }, 300);
    };
    /**
     * This method is part of ControlValueAccessor interface.
     * Its role is to set value from the model to the DOM
     *
     * @param value Value given from the model
     */
    AddressAutocompleteModalComponent.prototype.writeValue = function (value) {
        if (value && value.formattedAddress) {
            this.displayedAddressValue = value.formattedAddress;
        }
        else {
            this.displayedAddressValue = null;
        }
    };
    /**
     * This method is part of ControlValueAccessor interface.
     * Its role is to set the function that will propagate changes from the DOM to the model.
     *
     * @param fn {function} Angular internal function
     */
    AddressAutocompleteModalComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    /**
     * This method is part of ControlValueAccessor interface.
     * Not used here
     */
    AddressAutocompleteModalComponent.prototype.registerOnTouched = function () { };
    /**
    * When user type something in the searchbar,
    * this method updates the formatted address of the address model.
    * This also calls the method responsible of filling the propositions list with AutocompleteService.
    */
    AddressAutocompleteModalComponent.prototype.inputOnSearchbar = function (disableCustom) {
        if (this.displayedAddressValue) {
            this.addressValue = {
                formattedAddress: this.displayedAddressValue
            };
        }
        else {
            this.addressValue = null;
        }
        if (this.customEnabled && disableCustom) {
            this.customEnabled = false;
        }
        else {
            // Nothing to do...
        }
        if (this.addressValue) {
            this.useAutocompleteservice();
        }
        else {
            this.setList();
        }
    };
    /**
     * This method calls the autocomplete service to get predictions based on the input value.
     * If there are some results, they wil fill the propositions list.
     * Else, Google geocoding will be called
     */
    AddressAutocompleteModalComponent.prototype.useAutocompleteservice = function () {
        var _this = this;
        this.useInputAddress = false;
        if (this.displayedAddressValue === '') {
            this.setList();
            return;
        }
        this.autocompleteService.getPlacePredictions({ input: this.displayedAddressValue }, function (results, status) {
            if (results && results.length > 0) {
                _this.setList(results);
                _this.ngZone.run(function () {
                    if (!_this.customEnabled) {
                        _this.customEnabled = true;
                    }
                    else {
                        // Nothing to do...
                    }
                });
            }
            else {
                _this.useGeocoding();
            }
        });
    };
    /**
     * This method calls the Google geocoding to get predictions based on the input value.
     * If there are some results, they wil fill the propositions list.
     */
    AddressAutocompleteModalComponent.prototype.useGeocoding = function () {
        var _this = this;
        this.useInputAddress = true;
        var request = {
            address: this.displayedAddressValue
        };
        if (!this.geocoder) {
            this.geocoder = new google.maps.Geocoder();
        }
        this.geocoder.geocode(request, function (results, status) {
            _this.setList(results);
            _this.ngZone.run(function () {
                if (!_this.customEnabled) {
                    _this.customEnabled = true;
                }
                else {
                    // Nothing to do...
                }
            });
        });
    };
    /**
     * This method is called when the user validates input without any result,
     * the address only contains the formatted address entered in the search bar
     */
    AddressAutocompleteModalComponent.prototype.selectCustomAddress = function () {
        this.viewCtrl.dismiss(this.addressValue);
    };
    /**
     * This method is called when user select a proposition in the list.
     * The Google PlaceService is called to get precise informations about this place.
     * the address object is built with those informations.
     *
     * @param item Selected item from propositon list
     */
    AddressAutocompleteModalComponent.prototype.selectSearchResult = function (item) {
        var _this = this;
        if (this.fullAddressDetails) {
            var request = {
                placeId: item.place_id
            };
            if (!this.placeService) {
                this.placeService = new google.maps.places.PlacesService(document.getElementById('attribution'));
            }
            this.placeService.getDetails(request, function (place, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    _this.displayedAddressValue = place.formatted_address;
                    var addressDetails = {
                        route: '',
                        postalCode: '',
                        city: '',
                        country: ''
                    };
                    for (var _i = 0, _a = place.address_components; _i < _a.length; _i++) {
                        var component = _a[_i];
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
                    _this.addressValue = {
                        latitude: place.geometry.location.lat(),
                        longitude: place.geometry.location.lng(),
                        formattedAddress: _this.useInputAddress ? _this.displayedAddressValue : place.formatted_address,
                        googlePlaceId: place.place_id,
                        addressDetails: addressDetails
                    };
                }
                else {
                    console.log('place service answer status = ', status);
                }
                _this.viewCtrl.dismiss(_this.addressValue);
            });
        }
        else {
            this.addressValue = {
                formattedAddress: item.description || item.formatted_address,
                googlePlaceId: item.place_id
            };
            this.viewCtrl.dismiss(this.addressValue);
        }
        this.setList();
    };
    AddressAutocompleteModalComponent.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('search'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Searchbar */])
    ], AddressAutocompleteModalComponent.prototype, "searchBar", void 0);
    AddressAutocompleteModalComponent = AddressAutocompleteModalComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'mv-address-autocomplete-modal',template:/*ion-inline-start:"/media/data/Projects/componentes/ionic-components-v2/componentes/src/components/address-autocomplete/address-autocomplete-modal.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button clear color="dark" icon-only (click)="closeModal()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{ label }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-item>\n    <ion-searchbar #search type="text" id="search" [(ngModel)]="displayedAddressValue" (ionInput)="inputOnSearchbar(true)" (ionFocus)="inputOnSearchbar(false)"\n      (ionBlur)="onBlur()" [placeholder]="label"></ion-searchbar>\n  </ion-item>\n  <ion-item *ngIf="results.length > 0 || (allowCustom && displayedAddressValue)">\n    <ion-list>\n      <ion-item text-wrap *ngFor="let item of results" tappable (click)="selectSearchResult(item)">\n        {{ item.description || item.formatted_address }}\n      </ion-item>\n      <ion-item (click)="selectCustomAddress()" *ngIf="allowCustom && customEnabled">\n        <p style="color: #606060; font-style: oblique">{{ displayedAddressValue }}</p>\n      </ion-item>\n    </ion-list>\n  </ion-item>\n  <!-- some html element is needed by maps API to "display" attribution when no maps is generated -->\n  <p id="attribution"></p>\n</ion-content>'/*ion-inline-end:"/media/data/Projects/componentes/ionic-components-v2/componentes/src/components/address-autocomplete/address-autocomplete-modal.html"*/,
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* NG_VALUE_ACCESSOR */],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* forwardRef */])(function () { return AddressAutocompleteModalComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ViewController */]])
    ], AddressAutocompleteModalComponent);
    return AddressAutocompleteModalComponent;
    var AddressAutocompleteModalComponent_1;
}());

//# sourceMappingURL=address-autocomplete-modal.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromptProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Class used to display informations to the user
 */
var PromptProvider = /** @class */ (function () {
    function PromptProvider(toastCtrl, translate) {
        this.toastCtrl = toastCtrl;
        this.translate = translate;
        this.TOAST_DURATION = 5000;
    }
    PromptProvider.prototype.info = function (message) {
        this.presentToast(message, 'info');
    };
    PromptProvider.prototype.warning = function (message) {
        this.presentToast(message, 'warn');
    };
    PromptProvider.prototype.error = function (message) {
        this.presentToast(message, 'error');
    };
    PromptProvider.prototype.presentToast = function (messageObj, level) {
        var _this = this;
        if (!messageObj) {
            console.error('message to display is empty');
            return null;
        }
        console[level](messageObj);
        var message = messageObj;
        if (typeof message !== 'string') {
            // if (message.display) {
            //   message = message.display
            // } else if (message.message) {
            //   message = message.message;
            // } else if (message.code) {
            //   message = message.code;
            // } else {
            //   message = JSON.stringify(message);
            // }
            if (this.config && this.config.promptParseFunction) {
                message = this.config.promptParseFunction(message);
            }
            else {
                if (message.display) {
                    message = message.display;
                }
                else if (message.message) {
                    message = message.message;
                }
                else {
                    var stringified = '';
                    for (var property in message) {
                        if (message.hasOwnProperty(property) && (typeof message[property] !== 'object' || message[property].toString)) {
                            stringified += message[property] + '  ';
                        }
                    }
                    message = stringified;
                }
            }
        }
        this.translate.get(message).first().toPromise()
            .then(function (translation) {
            var toast = _this.toastCtrl.create({
                message: translation,
                duration: _this.TOAST_DURATION || 3000,
                position: 'bottom',
                cssClass: 'toast-' + level
            });
            toast.present();
        }).catch(function (error) {
            var toast = _this.toastCtrl.create({
                message: message,
                duration: _this.TOAST_DURATION || 3000,
                position: 'bottom',
                cssClass: 'toast-' + level
            });
            toast.present();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])('COMPONENTES_CONFIG'),
        __metadata("design:type", Object)
    ], PromptProvider.prototype, "config", void 0);
    PromptProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["d" /* TranslateService */]])
    ], PromptProvider);
    return PromptProvider;
}());

//# sourceMappingURL=prompt.js.map

/***/ }),

/***/ 202:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 202;

/***/ }),

/***/ 245:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 245;

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsCommonModule; });
/* unused harmony export SortPipe */
/* unused harmony export SafeHtmlPipe */
/* unused harmony export CircularJsonPipe */
/* unused harmony export IteratorPipe */
/* unused harmony export ɵb */
/* unused harmony export ɵa */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_circular_json__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_circular_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_circular_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_google_libphonenumber__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_google_libphonenumber___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_google_libphonenumber__);










/**
 * This pipe extends the AsyncPipe.
 * It takes an object, an enum or an observable as an input and returns an array.
 * The array is a list of the different objects in case of an observable.
 * The array is a list of objects {key: key, value: value} in case of an object or an enum.
 */
var IteratorPipe = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */])(IteratorPipe, _super);
    function IteratorPipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Method returning the array from in object
     * @param {?} object the object to transform
     *
     * @return {?} list The array build from the object
     */
    IteratorPipe.prototype.transform = function (object) {
        if (object instanceof __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"]) {
            return _super.prototype.transform.call(this, object);
        }
        var /** @type {?} */ list = [];
        // tslint:disable-next-line:forin
        for (var /** @type {?} */ key in object) {
            list.push({ key: key, value: object[key] });
        }
        return list;
    };
    return IteratorPipe;
}(__WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* AsyncPipe */]));
IteratorPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["S" /* Pipe */], args: [{
                name: 'mvIterator'
            },] },
];

/**
 * mvValueFromEnum pipe
 * It takes a string and an enum as inputs and returns the translation of the value from enum.
 */
var ValueFromEnumPipe = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */])(ValueFromEnumPipe, _super);
    function ValueFromEnumPipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Method returning the translated value.
     * @param {?} key
     * @param {?} enumeration
     * @return {?} list The array build from the object
     */
    ValueFromEnumPipe.prototype.transform = function (key, enumeration) {
        var /** @type {?} */ value = enumeration[key];
        return _super.prototype.transform.call(this, value);
    };
    return ValueFromEnumPipe;
}(__WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslatePipe */]));
ValueFromEnumPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["S" /* Pipe */], args: [{
                name: 'mvValueFromEnum'
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CircularJsonPipe = /** @class */ (function () {
    function CircularJsonPipe() {
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    CircularJsonPipe.prototype.transform = function (obj) {
        return Object(__WEBPACK_IMPORTED_MODULE_5_circular_json__["stringify"])(obj, null, 2);
    };
    return CircularJsonPipe;
}());
CircularJsonPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["S" /* Pipe */], args: [{ name: 'mvCircularJson' },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ moment = __WEBPACK_IMPORTED_MODULE_6_moment__;
/**
 * SortPipe pipe.
 * @argument args.property name of the property used to sort the array
 * @argument args.order order of the list (asc or desc)
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var SortPipe = /** @class */ (function () {
    function SortPipe() {
    }
    /**
     * @param {?} array
     * @param {?} args
     * @return {?}
     */
    SortPipe.prototype.transform = function (array, args) {
        if (typeof array === 'undefined' || array === null || !(array.length > 1)) {
            return array;
        }
        var /** @type {?} */ order = 1;
        if (typeof args.order === 'string') {
            if (args.order === 'desc' || args.order === '-' || args.order === '>') {
                order = -1;
            }
        }
        else if (typeof args.order === 'number') {
            order = args.order;
        }
        if (typeof args.property !== 'string') {
            throw new Error('property param of the pipe "order" should be a string');
        }
        var /** @type {?} */ property = args.property.trim();
        return array.sort(function (a, b) {
            if (a === b || a[property] === b[property]) {
                return 0;
            }
            else if (typeof (a[property]) === 'undefined' || a[property] === null) {
                return -1 * order;
            }
            else if (typeof (b[property]) === 'undefined' || b[property] === null) {
                return 1 * order;
            }
            else if ((a[property] instanceof Date || a[property] instanceof moment) && (b[property] instanceof Date || b[property] instanceof moment)) {
                var /** @type {?} */ aMoment = moment(a[property]);
                var /** @type {?} */ bMoment = moment(b[property]);
                return aMoment.diff(bMoment) * order;
            }
            else if (typeof a[property] === 'number' && typeof b[property] === 'number') {
                return (a[property] - b[property]) * order;
            }
            else if (typeof a[property] === 'string' && typeof b[property] === 'string') {
                return a[property].localeCompare(b[property]) * order;
            }
            else {
                throw new Error('type of ' + property + ' is not handled by "sort" pipe');
            }
        });
    };
    return SortPipe;
}());
SortPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["S" /* Pipe */], args: [{
                name: 'mvSort',
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SafeHtmlPipe = /** @class */ (function () {
    /**
     * @param {?} sanitized
     */
    function SafeHtmlPipe(sanitized) {
        this.sanitized = sanitized;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    SafeHtmlPipe.prototype.transform = function (value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    };
    return SafeHtmlPipe;
}());
SafeHtmlPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["S" /* Pipe */], args: [{ name: 'mvSafeHtml' },] },
];
/** @nocollapse */
SafeHtmlPipe.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["c" /* DomSanitizer */], },
]; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ PhoneNumberUtil$1 = __WEBPACK_IMPORTED_MODULE_8_google_libphonenumber__["PhoneNumberUtil"];
var /** @type {?} */ PhoneNumberFormat$1 = __WEBPACK_IMPORTED_MODULE_8_google_libphonenumber__["PhoneNumberFormat"];
// const PhoneNumberType = libPhoneNumber.PhoneNumberType;
var /** @type {?} */ phoneUtil = PhoneNumberUtil$1.getInstance();
/**
 * mvPhoneFormat pipe.
 * @argument phoneToFormat phone number to format
 * @argument countryCode country code in 2 caracters (eg. 'FR')
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var PhoneFormatPipe = /** @class */ (function () {
    function PhoneFormatPipe() {
    }
    /**
     * @param {?} phoneToFormat
     * @param {?} countryCode
     * @return {?}
     */
    PhoneFormatPipe.prototype.transform = function (phoneToFormat, countryCode) {
        try {
            var /** @type {?} */ gNumber = phoneUtil.parse(phoneToFormat.replace(/\s/, ''), countryCode);
            return phoneUtil.format(gNumber, PhoneNumberFormat$1.NATIONAL);
        }
        catch (err) {
            return phoneToFormat;
        }
    };
    return PhoneFormatPipe;
}());
PhoneFormatPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["S" /* Pipe */], args: [{
                name: 'mvPhoneFormat',
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ComponentsCommonModule = /** @class */ (function () {
    function ComponentsCommonModule() {
    }
    /**
     * @return {?}
     */
    ComponentsCommonModule.forRoot = function () {
        return {
            ngModule: ComponentsCommonModule,
            providers: []
        };
    };
    return ComponentsCommonModule;
}());
ComponentsCommonModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */], args: [{
                imports: [
                    __WEBPACK_IMPORTED_MODULE_3__angular_common__["c" /* CommonModule */]
                ],
                declarations: [
                    IteratorPipe,
                    ValueFromEnumPipe,
                    PhoneFormatPipe,
                    CircularJsonPipe,
                    SortPipe,
                    SafeHtmlPipe
                ],
                exports: [
                    IteratorPipe,
                    ValueFromEnumPipe,
                    PhoneFormatPipe,
                    CircularJsonPipe,
                    SortPipe,
                    SafeHtmlPipe
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=mv-common-components.js.map


/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddressPage = /** @class */ (function () {
    function AddressPage(navCtrl, navParams, fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.form = this.fb.group({
            'address': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */](this.address, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required])
        });
    }
    AddressPage.prototype.onSubmit = function () {
        this.navCtrl.pop();
    };
    AddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-address',template:/*ion-inline-start:"/media/data/Projects/componentes/ionic-components-v2/src/pages/address/address.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>AddressInput / AddressAutocomplete</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-title>AddressAutocomplete</ion-title>\n  <ion-item>\n    <mv-address-autocomplete label="Adress full" [fullAddressDetails]="true" [(ngModel)]="addressFull" [allowCustom]="true"></mv-address-autocomplete>\n    <pre>\n    {{ addressFull | json }}\n  </pre>\n    <mv-address-autocomplete label="Adress lite" [fullAddressDetails]="false" [(ngModel)]="addressLite" [allowCustom]="true"></mv-address-autocomplete>\n    <pre>\n    {{ addressLite | json }}\n  </pre>\n  </ion-item>\n  <ion-item>\n    <pre>{{ addressResult | json }}</pre>\n  </ion-item>\n  <ion-title>AddressInput (deprecated)</ion-title>\n  <form *ngIf="form" [formGroup]="form" novalidate>\n    <mv-address-input label="Address" formControlName="address"></mv-address-input>\n\n    {{form.value | mvCircularJson}}\n\n    <mv-errors-display target="address"></mv-errors-display>\n\n    <ion-item>\n      <button ion-button type="submit" [disabled]="!form.valid" (click)="onSubmit()">Submit</button>\n    </ion-item>\n  </form>\n</ion-content>'/*ion-inline-end:"/media/data/Projects/componentes/ionic-components-v2/src/pages/address/address.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]])
    ], AddressPage);
    return AddressPage;
}());

//# sourceMappingURL=address.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CounterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__componentes_src_components_counter_input_counter_input__ = __webpack_require__(416);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CounterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CounterPage = /** @class */ (function () {
    function CounterPage(navCtrl, navParams, fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.outerCounterValue = 5;
    }
    CounterPage.prototype.ngOnInit = function () {
        this.formGroup = this.fb.group({
            counter: [5, Object(__WEBPACK_IMPORTED_MODULE_3__componentes_src_components_counter_input_counter_input__["b" /* createCounterRangeValidator */])(10, 0)]
        });
    };
    CounterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-counter',template:/*ion-inline-start:"/media/data/Projects/componentes/ionic-components-v2/src/pages/counter/counter.html"*/'<!--\n  Generated template for the CounterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Counter</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #form="ngForm">\n    <ion-item>\n      <ion-label>example with templatedriven form</ion-label>\n    </ion-item>\n    <ion-item>\n      <p>ngModel value: {{ outerCounterValue }}</p>\n      <mv-counter-input name="counter" [(ngModel)]="outerCounterValue" counterRangeMax="10" counterRangeMin="0"></mv-counter-input>\n      <pre>{{ form.value | json }}</pre>\n    </ion-item>\n    <mv-errors-display></mv-errors-display>\n  </form>\n  <form [formGroup]="formGroup">\n    <ion-item>\n      <ion-label>example with modeldriven form</ion-label>\n    </ion-item>\n    <ion-item>\n      <mv-counter-input formControlName="counter" counterRangeMax="10" counterRangeMin="0"></mv-counter-input>\n      <pre>{{ formGroup.value | json }}</pre>\n    </ion-item>\n    <ion-item *ngIf="!formGroup.valid">\n      <p>\n        Counter is invalid! (for this example, validators are is in the formgroup AND in component decorator but you can choose only\n        one of them, error is dislayed in parent)\n      </p>\n    </ion-item>\n    <mv-errors-display></mv-errors-display>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/media/data/Projects/componentes/ionic-components-v2/src/pages/counter/counter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]])
    ], CounterPage);
    return CounterPage;
}());

//# sourceMappingURL=counter.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = createCounterRangeValidator;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CounterInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


function createCounterRangeValidator(maxValue, minValue) {
    return function validateCounterRange(c) {
        var err = {
            rangeError: {
                given: c.value,
                max: maxValue,
                min: minValue
            }
        };
        return (c.value > +maxValue || c.value < +minValue) ? err : null;
    };
}
var CounterInputComponent = /** @class */ (function () {
    function CounterInputComponent() {
        // init counter value if not binded to component
        this._counterValue = 0;
        // init empty validation function
        this.validateFn = function () { };
        // the method set in registerOnChange, it is just
        // a placeholder for a method that takes one parameter,
        // we use it to emit changes back to the form
        this.propagateChange = function (_) { };
    }
    CounterInputComponent_1 = CounterInputComponent;
    // update validation function on init and when binded attributes change
    CounterInputComponent.prototype.ngOnChanges = function (changes) {
        if (changes.counterRangeMin || changes.counterRangeMax) {
            this.validateFn = createCounterRangeValidator(this.counterRangeMax, this.counterRangeMin);
        }
    };
    CounterInputComponent.prototype.validate = function (c) {
        return this.validateFn(c);
    };
    Object.defineProperty(CounterInputComponent.prototype, "counterValue", {
        get: function () {
            return this._counterValue;
        },
        set: function (val) {
            this._counterValue = val;
            this.propagateChange(this._counterValue);
        },
        enumerable: true,
        configurable: true
    });
    //  model value ==> DOM value
    CounterInputComponent.prototype.writeValue = function (value) {
        if (value !== undefined) {
            this.counterValue = value;
        }
    };
    //  DOM value ==> model value
    CounterInputComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    CounterInputComponent.prototype.registerOnTouched = function () { };
    //  custom function
    CounterInputComponent.prototype.increment = function () {
        this.counterValue++;
    };
    //  custom function
    CounterInputComponent.prototype.decrement = function () {
        this.counterValue--;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], CounterInputComponent.prototype, "_counterValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], CounterInputComponent.prototype, "counterRangeMax", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], CounterInputComponent.prototype, "counterRangeMin", void 0);
    CounterInputComponent = CounterInputComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'mv-counter-input',
            template: "\n    <button ion-button (click)=\"increment()\">+</button>\n    <button ion-button disabled round color=\"light\">{{ counterValue }}</button>\n    <button ion-button (click)=\"decrement()\">-</button>\n  ",
            providers: [
                // tells Angular that this component can be instantiate to be used as a control value accessor
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* NG_VALUE_ACCESSOR */],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* forwardRef */])(function () { return CounterInputComponent_1; }),
                    multi: true
                },
                // custom validation
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NG_VALIDATORS */],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* forwardRef */])(function () { return CounterInputComponent_1; }),
                    multi: true
                }
            ]
        })
        // the component must implement CVA interface
    ], CounterInputComponent);
    return CounterInputComponent;
    var CounterInputComponent_1;
}());

//# sourceMappingURL=counter-input.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhonePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PhonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PhonePage = /** @class */ (function () {
    function PhonePage(navCtrl, navParams, fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.phone = '0613256545';
        this.countryList = [
            {
                id: 'FR',
                label: 'France'
            },
            {
                id: 'US',
                label: 'U.S.A.'
            },
            {
                id: 'GB',
                label: 'United Kingdom'
            }
        ];
        this.form = this.fb.group({
            'phone': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](this.phone, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required])
        });
    }
    PhonePage.prototype.onSubmit = function () {
        this.navCtrl.pop();
    };
    PhonePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-phone',template:/*ion-inline-start:"/media/data/Projects/componentes/ionic-components-v2/src/pages/phone/phone.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>PhoneInput</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-title>Phone input with code</ion-title>\n  <ion-item>\n    <mv-phone-input-with-code label="Phone" phoneLabel="Phone" [countryList]="countryList" countryLabel="Country" [(ngModel)]="intlPhone"></mv-phone-input-with-code>\n  </ion-item>\n  <ion-item>\n    <pre>\n          {{ intlPhone | json }}\n        </pre>\n  </ion-item>\n  <ion-title>Phone input standard</ion-title>\n  <form *ngIf="form" [formGroup]="form" novalidate>\n    <ion-item>\n      <ion-label text-wrap>{{\'Phone number\' | translate}}</ion-label>\n      <mv-phone-input item-content formControlName="phone"></mv-phone-input>\n    </ion-item>\n    <mv-errors-display target="phone"></mv-errors-display>\n\n    <pre>\n      {{form.value | json}}\n    </pre>\n    <ion-item>\n      <button ion-button type="submit" [disabled]="!form.valid" (click)="onSubmit()">Submit</button>\n    </ion-item>\n  </form>\n</ion-content>'/*ion-inline-end:"/media/data/Projects/componentes/ionic-components-v2/src/pages/phone/phone.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], PhonePage);
    return PhonePage;
}());

//# sourceMappingURL=phone.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_enum_validator__ = __webpack_require__(419);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EnumOfChoices;
(function (EnumOfChoices) {
    EnumOfChoices[EnumOfChoices["Chien"] = 0] = "Chien";
    EnumOfChoices[EnumOfChoices["Chat"] = 1] = "Chat";
    EnumOfChoices[EnumOfChoices["Oiseau"] = 2] = "Oiseau";
})(EnumOfChoices || (EnumOfChoices = {}));
var importedEnumName = 'animals';
var choicesArray = ['Chien', 'Chat', 'Oiseau', 'Chtulu'];
var RadioListPage = /** @class */ (function () {
    function RadioListPage(navCtrl, fb) {
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.observableSelected = 0;
        this.enumOfChoices = EnumOfChoices;
        this.enumName = importedEnumName;
    }
    RadioListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.choices = __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].of(choicesArray);
        this.observableFormGroup = this.fb.group({
            selected: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__validators_enum_validator__["a" /* EnumValidator */].isElementOf(EnumOfChoices)])
        });
        this.enumFormGroup = this.fb.group({
            selected: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */](1, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__validators_enum_validator__["a" /* EnumValidator */].isElementOf(EnumOfChoices)])
        });
        if (this.choices instanceof __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"]) {
            this.subscriber = this.choices.subscribe(function (results) { return _this._results = results; });
        }
        else {
            // enum
            this._results = this.choices;
        }
    };
    RadioListPage.prototype.ngOnDestroy = function () {
        this.subscriber.unsubscribe();
    };
    RadioListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'mv-radio-list-page',template:/*ion-inline-start:"/media/data/Projects/componentes/ionic-components-v2/src/pages/radio-list/radio-list.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Radio List\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-item>\n        <ion-label>TEMPLATE DRIVEN + OBSERVABLE</ion-label>\n    </ion-item>\n    <ion-item>\n        <ion-label>Choice number {{ observableSelected }} was selected, so the answer is {{ _results[observableSelected] }} </ion-label>\n    </ion-item>\n\n    <form #observableForm="ngForm">\n        <ion-item>\n            <mv-radio-list name="selected" [(ngModel)]="observableSelected" [values]="choices"></mv-radio-list>\n            <pre>{{ observableForm.value | json }}</pre>\n        </ion-item>\n    </form>\n\n    <ion-item>\n        <ion-label>TEMPLATE DRIVEN + ENUM</ion-label>\n    </ion-item>\n    <ion-item>\n        <ion-label>Choice {{ enumSelected }} was selected, so the answer is {{ enumOfChoices[enumSelected] }} </ion-label>\n    </ion-item>\n    <form #enumForm="ngForm">\n        <ion-item>\n            <mv-radio-list name="selected" [(ngModel)]="enumSelected" [values]="enumOfChoices" [enumName]="enumName"></mv-radio-list>\n            <pre>{{ enumForm.value | json }}</pre>\n        </ion-item>\n    </form>\n\n    <form [formGroup]="observableFormGroup">\n        <ion-item>\n            <ion-label>MODELDRIVEN + OBSERVABLE + ENUM.VALIDATOR</ion-label>\n        </ion-item>\n        <ion-item>\n            <mv-radio-list formControlName="selected" [values]="choices"></mv-radio-list>\n            <pre>{{ observableFormGroup.value | json }}</pre>\n        </ion-item>\n        <ion-label>errors should display here</ion-label>\n        <mv-errors-display target="selected"></mv-errors-display>\n        <ion-item>\n            <ion-label>\n                Choice number {{ observableFormGroup.value.selected }} was selected, so the answer is {{ _results[observableFormGroup.value.selected]\n                }}\n            </ion-label>\n        </ion-item>\n        <mv-errors-display></mv-errors-display>\n    </form>\n\n    <form [formGroup]="enumFormGroup">\n        <ion-item>\n            <ion-label>MODELDRIVEN + ENUM</ion-label>\n        </ion-item>\n        <ion-item>\n            <mv-radio-list formControlName="selected" [values]="enumOfChoices" [enumName]="enumName"></mv-radio-list>\n            <pre>{{ enumFormGroup.value | json }}</pre>\n        </ion-item>\n        <ion-item>\n            <ion-label>\n                Choice number {{ enumFormGroup.value.selected }} was selected, so the answer is {{ _results[enumFormGroup.value.selected]\n                }}\n            </ion-label>\n        </ion-item>\n    </form>\n\n</ion-content>\n'/*ion-inline-end:"/media/data/Projects/componentes/ionic-components-v2/src/pages/radio-list/radio-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]])
    ], RadioListPage);
    return RadioListPage;
}());

//# sourceMappingURL=radio-list.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnumValidator; });
var EnumValidator = /** @class */ (function () {
    function EnumValidator() {
    }
    EnumValidator.isElementOf = function (enumeration) {
        return function (control) {
            var elementIsValid = enumeration[enumeration[control.value]];
            return typeof elementIsValid !== 'undefined' ? null : { 'INVALID_ELEMENT': { value: control.value } };
        };
    };
    return EnumValidator;
}());

//# sourceMappingURL=enum.validator.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YesNoListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__componentes_src_providers_answers__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the YesNoListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var YesNoListPage = /** @class */ (function () {
    function YesNoListPage(navCtrl, fb, answersProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.answersProvider = answersProvider;
        this.question = 'Je voudrais être capable de';
        this.itemsList = [
            {
                $id: 'id5',
                title: 'voler',
                numberInGroup: '1'
            },
            {
                $id: 'id4',
                title: 'me rendre invisible',
                numberInGroup: '3'
            },
            {
                $id: 'id3',
                title: 'me téléporter',
                numberInGroup: '2'
            },
            {
                $id: 'id2',
                title: 'contrôler le feu',
                numberInGroup: '4'
            },
            {
                $id: 'id1',
                title: 'maîtriser la Force',
                numberInGroup: '5'
            }
        ];
        this.answersControl = this.fb.control(null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].minLength(this.itemsList.length)]);
        this.answers = this.answersProvider.answers;
        this.callback = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        };
    }
    YesNoListPage.prototype.ngOnDestroy = function () {
        this.answersProvider.answers = this.answers;
    };
    YesNoListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-yes-no-list',template:/*ion-inline-start:"/media/data/Projects/componentes/ionic-components-v2/src/pages/yes-no-list/yes-no-list.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Yes No List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <form name="templateForm" class="full-height">\n    <mv-yes-no-list [(ngModel)]="answers" [question]="question" [itemsList]="itemsList" name="answers" [callback]="callback"></mv-yes-no-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/media/data/Projects/componentes/ionic-components-v2/src/pages/yes-no-list/yes-no-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__componentes_src_providers_answers__["a" /* AnswersProvider */]])
    ], YesNoListPage);
    return YesNoListPage;
}());

//# sourceMappingURL=yes-no-list.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IteratorPipePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_enum_validator__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_compat__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_compat___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_compat__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AnimalsEnum;
(function (AnimalsEnum) {
    AnimalsEnum["DOG"] = "ANIMAL.DOG";
    AnimalsEnum["CAT"] = "ANIMAL.CAT";
    AnimalsEnum["BIRD"] = "ANIMAL.BIRD";
})(AnimalsEnum || (AnimalsEnum = {}));
var IteratorPipePage = /** @class */ (function () {
    function IteratorPipePage(fb, navCtrl) {
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.enum = AnimalsEnum;
        this.observable = __WEBPACK_IMPORTED_MODULE_4_rxjs_compat__["Observable"].of(['DOG', 'CAT', 'BIRD']);
        this.formGroup = this.fb.group({
            selectedInEnum: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["i" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__validators_enum_validator__["a" /* EnumValidator */].isElementOf(this.enum)]),
            selectedInObs: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["i" /* Validators */].required])
        });
    }
    IteratorPipePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-iterator-pipe',template:/*ion-inline-start:"/media/data/Projects/componentes/ionic-components-v2/src/pages/iterator-pipe/iterator-pipe.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>iterator-pipe</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="formGroup">\n    <ion-item>Model driven, list = enum, constructed with pipe</ion-item>\n    <ion-list radio-group formControlName="selectedInEnum">\n      <ion-item *ngFor="let element of enum | mvIterator">\n        <ion-label>{{ element.value }}</ion-label>\n        <ion-radio value="{{element.key}}"></ion-radio>\n      </ion-item>\n    </ion-list>\n    <ion-item>\n      <ion-label>\n        selectedInEnum = {{ formGroup.get(\'selectedInEnum\').value | translate }}\n      </ion-label>\n    </ion-item>\n    <ion-item>Model driven, list = obs, constructed with pipe</ion-item>\n    <ion-list radio-group formControlName="selectedInObs">\n      <ion-item *ngFor="let element of observable | mvIterator">\n        <ion-label>{{ element }}</ion-label>\n        <ion-radio value="{{element}}"></ion-radio>\n      </ion-item>\n    </ion-list>\n    <ion-item>\n      <ion-label>\n        selectedInObs = {{ formGroup.get(\'selectedInObs\').value | translate }}\n      </ion-label>\n    </ion-item>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/media/data/Projects/componentes/ionic-components-v2/src/pages/iterator-pipe/iterator-pipe.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */]])
    ], IteratorPipePage);
    return IteratorPipePage;
}());

//# sourceMappingURL=iterator-pipe.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutocompletePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__componentes_src_components_autocomplete_autocomplete__ = __webpack_require__(430);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AutocompletePage = /** @class */ (function () {
    function AutocompletePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.list = [
            {
                id: 1,
                fname: 'item1',
                lname: 'tateti'
            },
            {
                id: 2,
                fname: 'item2',
                lname: 'tetito'
            },
            {
                id: 3,
                fname: 'item3',
                lname: 'titotu'
            }
        ];
    }
    AutocompletePage.prototype.displayFunction = function (item) {
        var html = "<h1>" + (item.id || 'N.A.') + "</h1> <h2>" + (item.fname || '') + " " + (item.lname || '') + "</h2>";
        return html;
    };
    AutocompletePage.prototype.filterFunction = function (item, searchTerm) {
        return (item.fname.includes(searchTerm) || item.lname.includes(searchTerm));
    };
    AutocompletePage.prototype.factoryFunction = function (string) {
        var newItem = {
            id: null,
            fname: string,
            lname: null
        };
        return newItem;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('autocomplete-1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__componentes_src_components_autocomplete_autocomplete__["a" /* AutocompleteComponent */])
    ], AutocompletePage.prototype, "autocomplete1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('autocomplete-2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__componentes_src_components_autocomplete_autocomplete__["a" /* AutocompleteComponent */])
    ], AutocompletePage.prototype, "autocomplete2", void 0);
    AutocompletePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-autocomplete',template:/*ion-inline-start:"/media/data/Projects/componentes/ionic-components-v2/src/pages/autocomplete/autocomplete.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>autocomplete</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <mv-autocomplete id="autocomplete-1" label="Custom item allowed" [(ngModel)]="itemCustom" [display]="displayFunction" [filter]="filterFunction"\n      [factory]="factoryFunction" [list]="list" [allowCustom]="true"></mv-autocomplete>\n    <pre>\n    {{ itemCustom | json }}\n  </pre>\n    <mv-autocomplete id="autocomplete-2" label="Custom item disabled" [(ngModel)]="itemNoCustom" [display]="displayFunction"\n      [filter]="filterFunction" [list]="list" [allowCustom]="false"></mv-autocomplete>\n    <pre>\n    {{ itemNoCustom | json }}\n  </pre>\n  </ion-item>\n</ion-content>'/*ion-inline-end:"/media/data/Projects/componentes/ionic-components-v2/src/pages/autocomplete/autocomplete.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AutocompletePage);
    return AutocompletePage;
}());

//# sourceMappingURL=autocomplete.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutocompleteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__autocomplete_modal__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Component providing a searchbar input which autocomplete returned by Google Maps API
 *
 * @example
 * //TODO
 */
var AutocompleteComponent = /** @class */ (function () {
    function AutocompleteComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
        /**
         * Container for the propagation function.
         */
        this.propagateChange = function (_) { };
    }
    AutocompleteComponent_1 = AutocompleteComponent;
    Object.defineProperty(AutocompleteComponent.prototype, "itemValue", {
        get: function () {
            return this._itemValue;
        },
        set: function (val) {
            this._itemValue = val;
            this.propagateChange(this._itemValue);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Open a modal with searchbar and results list.
     */
    AutocompleteComponent.prototype.openModal = function () {
        var _this = this;
        var autocompleteModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__autocomplete_modal__["a" /* AutocompleteModalComponent */], {
            label: this.label,
            list: this.list,
            allowCustom: this.allowCustom,
            display: this.display,
            filter: this.filter,
            factory: this.factory
        });
        autocompleteModal.onDidDismiss(function (newItem) {
            if (newItem) {
                _this.itemValue = newItem;
                _this.value = _this.removeTags(_this.display(_this.itemValue));
            }
            else {
                // do nothing
            }
        });
        autocompleteModal.present();
    };
    /**
     * This method is part of ControlValueAccessor interface.
     * Its role is to set value from the model to the DOM
     *
     * @param value Value given from the model
     */
    AutocompleteComponent.prototype.writeValue = function (value) {
        if (value) {
            this.itemValue = value;
        }
        else {
            this.itemValue = null;
        }
    };
    /**
     * This method is part of ControlValueAccessor interface.
     * Its role is to set the function that will propagate changes from the DOM to the model.
     *
     * @param fn {function} Angular internal function
     */
    AutocompleteComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    /**
     * This method is part of ControlValueAccessor interface.
     * Not used here
     */
    AutocompleteComponent.prototype.registerOnTouched = function () { };
    AutocompleteComponent.prototype.removeTags = function (string) {
        return string.replace(/<[^>]+>/gm, '');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], AutocompleteComponent.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], AutocompleteComponent.prototype, "allowCustom", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Function)
    ], AutocompleteComponent.prototype, "display", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Function)
    ], AutocompleteComponent.prototype, "filter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Function)
    ], AutocompleteComponent.prototype, "factory", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], AutocompleteComponent.prototype, "list", void 0);
    AutocompleteComponent = AutocompleteComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'mv-autocomplete',template:/*ion-inline-start:"/media/data/Projects/componentes/ionic-components-v2/componentes/src/components/autocomplete/autocomplete.html"*/'<ion-item>\n  <ion-label>{{ label }}</ion-label>\n  <ion-input type="text" [(ngModel)]="value" (click)="openModal()"></ion-input>\n</ion-item>'/*ion-inline-end:"/media/data/Projects/componentes/ionic-components-v2/componentes/src/components/autocomplete/autocomplete.html"*/,
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* NG_VALUE_ACCESSOR */],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* forwardRef */])(function () { return AutocompleteComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* ModalController */]])
    ], AutocompleteComponent);
    return AutocompleteComponent;
    var AutocompleteComponent_1;
}());

//# sourceMappingURL=autocomplete.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_first__ = __webpack_require__(839);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__prompt__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var LOADING_TEXT = 'Loading...';
/**
 * Provides the user's context to the application
 * This provider should be used to store and find the current course, mission, questions being answered
 */
var LoadingProvider = /** @class */ (function () {
    function LoadingProvider(gifPath, loadingCtrl, translate, prompt) {
        this.gifPath = gifPath;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.prompt = prompt;
        // private defaultLoadingText: string = null;
        this.loading = null;
        this.knownMessages = {};
    }
    LoadingProvider.prototype.initLoading = function (loadingMessage) {
        if (!this.loading) {
            this.loading = this.loadingCtrl.create({
                spinner: 'hide',
                content: "<img style=\"width:100%\" src=\"" + this.gifPath + "\" alt=\"Loading\"></img>\n          <p style=\"text-align: center;\">" + loadingMessage + "</p>",
                cssClass: 'vertical-flex-centered'
            });
            this.loading.present();
        }
        return this.loading;
    };
    LoadingProvider.prototype.getLoadingMessage = function (loadingMessage) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var messageKey = loadingMessage || 'LOADING.PLEASE_WAIT';
            if (_this.knownMessages.hasOwnProperty(messageKey)) {
                resolve(_this.knownMessages[messageKey]);
            }
            else {
                _this.translate.get(messageKey).first().toPromise()
                    .then(function (message) {
                    if (message) {
                        _this.knownMessages[messageKey] = message;
                    }
                    else {
                        _this.knownMessages[messageKey] = LOADING_TEXT;
                    }
                    resolve(_this.knownMessages[messageKey]);
                }).catch(function (err) { return reject(err); });
            }
        });
    };
    LoadingProvider.prototype.waitForPromise = function (promise, promptError, loadingMessage, keepLoadingIfResolved) {
        var _this = this;
        if (promptError === void 0) { promptError = false; }
        if (keepLoadingIfResolved === void 0) { keepLoadingIfResolved = false; }
        return new Promise(function (resolve, reject) {
            _this.getLoadingMessage(loadingMessage)
                .then(function (message) {
                _this.initLoading(message);
                return promise;
            }).then(function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (!keepLoadingIfResolved && _this.loading) {
                    _this.loading.dismiss();
                    _this.loading = null;
                }
                resolve.apply(void 0, args);
            }).catch(function () {
                var err = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    err[_i] = arguments[_i];
                }
                if (_this.loading) {
                    _this.loading.dismiss();
                    _this.loading = null;
                }
                if (promptError) {
                    _this.prompt.error(err[0]);
                    resolve();
                }
                else {
                    reject.apply(void 0, err);
                }
            });
        });
    };
    LoadingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])('LOADING_GIF_PATH')),
        __metadata("design:paramtypes", [String, __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["d" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4__prompt__["a" /* PromptProvider */]])
    ], LoadingProvider);
    return LoadingProvider;
}());

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(532);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export promptParse */
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_mv_common_components__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_address_address__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_counter_counter__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_phone_phone__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_iterator_pipe_iterator_pipe__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_radio_list_radio_list__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_yes_no_list_yes_no_list__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__componentes_src_componentes_module__ = __webpack_require__(829);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_autocomplete_autocomplete__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__componentes_src_components_autocomplete_autocomplete_modal__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















function promptParse(message) {
    if (message && typeof message !== 'string') {
        if (message.display) {
            message = message.display;
        }
        else if (message.error) {
            message = message.error;
        }
        else if (message.message) {
            message = message.message;
        }
        else {
            var stringified = '';
            for (var property in message) {
                if (message.hasOwnProperty(property) && (typeof message[property] !== 'object' || message[property].toString)) {
                    stringified += message[property] + '  ';
                }
            }
            message = stringified;
        }
    }
    return message;
}
function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http);
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_address_address__["a" /* AddressPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_autocomplete_autocomplete__["a" /* AutocompletePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_counter_counter__["a" /* CounterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_phone_phone__["a" /* PhonePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_radio_list_radio_list__["a" /* RadioListPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_yes_no_list_yes_no_list__["a" /* YesNoListPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_iterator_pipe_iterator_pipe__["a" /* IteratorPipePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_17__componentes_src_componentes_module__["b" /* ComponentsIonicModule */].forRoot({
                    promptParseFunction: promptParse
                }),
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_8_mv_common_components__["a" /* ComponentsCommonModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_address_address__["a" /* AddressPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_autocomplete_autocomplete__["a" /* AutocompletePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_counter_counter__["a" /* CounterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_phone_phone__["a" /* PhonePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_radio_list_radio_list__["a" /* RadioListPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_yes_no_list_yes_no_list__["a" /* YesNoListPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_iterator_pipe_iterator_pipe__["a" /* IteratorPipePage */],
                __WEBPACK_IMPORTED_MODULE_17__componentes_src_componentes_module__["a" /* AddressAutocompleteModalComponent */],
                __WEBPACK_IMPORTED_MODULE_19__componentes_src_components_autocomplete_autocomplete_modal__["a" /* AutocompleteModalComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 595:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 291,
	"./af.js": 291,
	"./ar": 292,
	"./ar-dz": 293,
	"./ar-dz.js": 293,
	"./ar-kw": 294,
	"./ar-kw.js": 294,
	"./ar-ly": 295,
	"./ar-ly.js": 295,
	"./ar-ma": 296,
	"./ar-ma.js": 296,
	"./ar-sa": 297,
	"./ar-sa.js": 297,
	"./ar-tn": 298,
	"./ar-tn.js": 298,
	"./ar.js": 292,
	"./az": 299,
	"./az.js": 299,
	"./be": 300,
	"./be.js": 300,
	"./bg": 301,
	"./bg.js": 301,
	"./bm": 302,
	"./bm.js": 302,
	"./bn": 303,
	"./bn.js": 303,
	"./bo": 304,
	"./bo.js": 304,
	"./br": 305,
	"./br.js": 305,
	"./bs": 306,
	"./bs.js": 306,
	"./ca": 307,
	"./ca.js": 307,
	"./cs": 308,
	"./cs.js": 308,
	"./cv": 309,
	"./cv.js": 309,
	"./cy": 310,
	"./cy.js": 310,
	"./da": 311,
	"./da.js": 311,
	"./de": 312,
	"./de-at": 313,
	"./de-at.js": 313,
	"./de-ch": 314,
	"./de-ch.js": 314,
	"./de.js": 312,
	"./dv": 315,
	"./dv.js": 315,
	"./el": 316,
	"./el.js": 316,
	"./en-au": 317,
	"./en-au.js": 317,
	"./en-ca": 318,
	"./en-ca.js": 318,
	"./en-gb": 319,
	"./en-gb.js": 319,
	"./en-ie": 320,
	"./en-ie.js": 320,
	"./en-il": 321,
	"./en-il.js": 321,
	"./en-nz": 322,
	"./en-nz.js": 322,
	"./eo": 323,
	"./eo.js": 323,
	"./es": 324,
	"./es-do": 325,
	"./es-do.js": 325,
	"./es-us": 326,
	"./es-us.js": 326,
	"./es.js": 324,
	"./et": 327,
	"./et.js": 327,
	"./eu": 328,
	"./eu.js": 328,
	"./fa": 329,
	"./fa.js": 329,
	"./fi": 330,
	"./fi.js": 330,
	"./fo": 331,
	"./fo.js": 331,
	"./fr": 332,
	"./fr-ca": 333,
	"./fr-ca.js": 333,
	"./fr-ch": 334,
	"./fr-ch.js": 334,
	"./fr.js": 332,
	"./fy": 335,
	"./fy.js": 335,
	"./gd": 336,
	"./gd.js": 336,
	"./gl": 337,
	"./gl.js": 337,
	"./gom-latn": 338,
	"./gom-latn.js": 338,
	"./gu": 339,
	"./gu.js": 339,
	"./he": 340,
	"./he.js": 340,
	"./hi": 341,
	"./hi.js": 341,
	"./hr": 342,
	"./hr.js": 342,
	"./hu": 343,
	"./hu.js": 343,
	"./hy-am": 344,
	"./hy-am.js": 344,
	"./id": 345,
	"./id.js": 345,
	"./is": 346,
	"./is.js": 346,
	"./it": 347,
	"./it.js": 347,
	"./ja": 348,
	"./ja.js": 348,
	"./jv": 349,
	"./jv.js": 349,
	"./ka": 350,
	"./ka.js": 350,
	"./kk": 351,
	"./kk.js": 351,
	"./km": 352,
	"./km.js": 352,
	"./kn": 353,
	"./kn.js": 353,
	"./ko": 354,
	"./ko.js": 354,
	"./ky": 355,
	"./ky.js": 355,
	"./lb": 356,
	"./lb.js": 356,
	"./lo": 357,
	"./lo.js": 357,
	"./lt": 358,
	"./lt.js": 358,
	"./lv": 359,
	"./lv.js": 359,
	"./me": 360,
	"./me.js": 360,
	"./mi": 361,
	"./mi.js": 361,
	"./mk": 362,
	"./mk.js": 362,
	"./ml": 363,
	"./ml.js": 363,
	"./mn": 364,
	"./mn.js": 364,
	"./mr": 365,
	"./mr.js": 365,
	"./ms": 366,
	"./ms-my": 367,
	"./ms-my.js": 367,
	"./ms.js": 366,
	"./mt": 368,
	"./mt.js": 368,
	"./my": 369,
	"./my.js": 369,
	"./nb": 370,
	"./nb.js": 370,
	"./ne": 371,
	"./ne.js": 371,
	"./nl": 372,
	"./nl-be": 373,
	"./nl-be.js": 373,
	"./nl.js": 372,
	"./nn": 374,
	"./nn.js": 374,
	"./pa-in": 375,
	"./pa-in.js": 375,
	"./pl": 376,
	"./pl.js": 376,
	"./pt": 377,
	"./pt-br": 378,
	"./pt-br.js": 378,
	"./pt.js": 377,
	"./ro": 379,
	"./ro.js": 379,
	"./ru": 380,
	"./ru.js": 380,
	"./sd": 381,
	"./sd.js": 381,
	"./se": 382,
	"./se.js": 382,
	"./si": 383,
	"./si.js": 383,
	"./sk": 384,
	"./sk.js": 384,
	"./sl": 385,
	"./sl.js": 385,
	"./sq": 386,
	"./sq.js": 386,
	"./sr": 387,
	"./sr-cyrl": 388,
	"./sr-cyrl.js": 388,
	"./sr.js": 387,
	"./ss": 389,
	"./ss.js": 389,
	"./sv": 390,
	"./sv.js": 390,
	"./sw": 391,
	"./sw.js": 391,
	"./ta": 392,
	"./ta.js": 392,
	"./te": 393,
	"./te.js": 393,
	"./tet": 394,
	"./tet.js": 394,
	"./tg": 395,
	"./tg.js": 395,
	"./th": 396,
	"./th.js": 396,
	"./tl-ph": 397,
	"./tl-ph.js": 397,
	"./tlh": 398,
	"./tlh.js": 398,
	"./tr": 399,
	"./tr.js": 399,
	"./tzl": 400,
	"./tzl.js": 400,
	"./tzm": 401,
	"./tzm-latn": 402,
	"./tzm-latn.js": 402,
	"./tzm.js": 401,
	"./ug-cn": 403,
	"./ug-cn.js": 403,
	"./uk": 404,
	"./uk.js": 404,
	"./ur": 405,
	"./ur.js": 405,
	"./uz": 406,
	"./uz-latn": 407,
	"./uz-latn.js": 407,
	"./uz.js": 406,
	"./vi": 408,
	"./vi.js": 408,
	"./x-pseudo": 409,
	"./x-pseudo.js": 409,
	"./yo": 410,
	"./yo.js": 410,
	"./zh-cn": 411,
	"./zh-cn.js": 411,
	"./zh-hk": 412,
	"./zh-hk.js": 412,
	"./zh-tw": 413,
	"./zh-tw.js": 413
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 595;

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, translate) {
        var _this = this;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.language = 'fr';
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            translate.setDefaultLang('fr');
            translate.use(_this.language);
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/media/data/Projects/componentes/ionic-components-v2/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/media/data/Projects/componentes/ionic-components-v2/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["d" /* TranslateService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 829:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ComponentsIonicModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mv_common_components__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_address_autocomplete_address_autocomplete__ = __webpack_require__(830);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_address_autocomplete_address_autocomplete_modal__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_address_input_address_input__ = __webpack_require__(831);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_autocomplete_autocomplete__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_autocomplete_autocomplete_modal__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_counter_input_counter_input__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_element_of_array_element_of_array__ = __webpack_require__(832);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_errors_display_errors_display__ = __webpack_require__(833);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_phone_input_phone_input__ = __webpack_require__(834);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_phone_input_with_code_phone_input_with_code__ = __webpack_require__(835);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_radio_list_radio_list__ = __webpack_require__(836);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_yes_no_list_yes_no_list__ = __webpack_require__(838);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_answers__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_loading__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_prompt__ = __webpack_require__(170);
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__components_address_autocomplete_address_autocomplete_modal__["a"]; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var ComponentsIonicModule = /** @class */ (function () {
    function ComponentsIonicModule() {
    }
    ComponentsIonicModule_1 = ComponentsIonicModule;
    ComponentsIonicModule.forRoot = function (componentesConfigModel) {
        return {
            ngModule: ComponentsIonicModule_1,
            providers: [
                { provide: 'COMPONENTES_CONFIG', useValue: componentesConfigModel },
                __WEBPACK_IMPORTED_MODULE_16__providers_answers__["a" /* AnswersProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_loading__["a" /* LoadingProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_prompt__["a" /* PromptProvider */]
            ]
        };
    };
    ComponentsIonicModule = ComponentsIonicModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__components_address_autocomplete_address_autocomplete__["a" /* AddressAutocompleteComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_address_autocomplete_address_autocomplete_modal__["a" /* AddressAutocompleteModalComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_address_input_address_input__["a" /* AddressInputComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_autocomplete_autocomplete__["a" /* AutocompleteComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_autocomplete_autocomplete_modal__["a" /* AutocompleteModalComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_counter_input_counter_input__["a" /* CounterInputComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_element_of_array_element_of_array__["a" /* ElementOfArrayComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_errors_display_errors_display__["a" /* ErrorsDisplayComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_phone_input_phone_input__["a" /* PhoneInputComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_phone_input_with_code_phone_input_with_code__["a" /* PhoneInputWithCodeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_radio_list_radio_list__["a" /* RadioListComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_yes_no_list_yes_no_list__["a" /* YesNoListComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */],
                // IonicModule.forRoot(AddressInputComponent),
                // IonicModule.forRoot(CounterInputComponent),
                // IonicModule.forRoot(ElementOfArrayComponent),
                // IonicModule.forRoot(ErrorsDisplayComponent),
                // IonicModule.forRoot(PhoneInputComponent),
                // IonicModule.forRoot(RadioListComponent),
                // IonicModule.forRoot(YesNoListComponent),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_3_mv_common_components__["a" /* ComponentsCommonModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__components_address_autocomplete_address_autocomplete__["a" /* AddressAutocompleteComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_address_autocomplete_address_autocomplete_modal__["a" /* AddressAutocompleteModalComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_address_input_address_input__["a" /* AddressInputComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_autocomplete_autocomplete__["a" /* AutocompleteComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_autocomplete_autocomplete_modal__["a" /* AutocompleteModalComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_counter_input_counter_input__["a" /* CounterInputComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_element_of_array_element_of_array__["a" /* ElementOfArrayComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_errors_display_errors_display__["a" /* ErrorsDisplayComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_phone_input_phone_input__["a" /* PhoneInputComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_phone_input_with_code_phone_input_with_code__["a" /* PhoneInputWithCodeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_radio_list_radio_list__["a" /* RadioListComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_yes_no_list_yes_no_list__["a" /* YesNoListComponent */],
            ]
        })
    ], ComponentsIonicModule);
    return ComponentsIonicModule;
    var ComponentsIonicModule_1;
}());

//# sourceMappingURL=componentes.module.js.map

/***/ }),

/***/ 830:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressAutocompleteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__address_autocomplete_modal__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Component providing a searchbar input which autocomplete returned by Google Maps API
 *
 * @example
 * //TODO
 */
var AddressAutocompleteComponent = /** @class */ (function () {
    function AddressAutocompleteComponent(modalCtrl, ngZone) {
        this.modalCtrl = modalCtrl;
        this.ngZone = ngZone;
        /**
         * Container for the propagation function.
         */
        this.propagateChange = function (_) { };
    }
    AddressAutocompleteComponent_1 = AddressAutocompleteComponent;
    Object.defineProperty(AddressAutocompleteComponent.prototype, "addressValue", {
        get: function () {
            return this._addressValue;
        },
        set: function (val) {
            var _this = this;
            this.ngZone.run(function () {
                _this._addressValue = val;
                _this.propagateChange(_this._addressValue);
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Open a modal with searchbar and results list.
     */
    AddressAutocompleteComponent.prototype.openModal = function () {
        var _this = this;
        var addressAutocompleteModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__address_autocomplete_modal__["a" /* AddressAutocompleteModalComponent */], {
            label: this.label,
            allowCustom: this.allowCustom,
            fullAddressDetails: this.fullAddressDetails
        });
        addressAutocompleteModal.onDidDismiss(function (newAddress) {
            if (newAddress && newAddress.formattedAddress) {
                _this.addressValue = newAddress;
            }
        });
        addressAutocompleteModal.present();
    };
    /**
     * This method is part of ControlValueAccessor interface.
     * Its role is to set value from the model to the DOM
     *
     * @param value Value given from the model
     */
    AddressAutocompleteComponent.prototype.writeValue = function (value) {
        if (value) {
            this.addressValue = value;
        }
        else {
            this.addressValue = {
                formattedAddress: ''
            };
        }
    };
    /**
     * This method is part of ControlValueAccessor interface.
     * Its role is to set the function that will propagate changes from the DOM to the model.
     *
     * @param fn {function} Angular internal function
     */
    AddressAutocompleteComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    /**
     * This method is part of ControlValueAccessor interface.
     * Not used here
     */
    AddressAutocompleteComponent.prototype.registerOnTouched = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], AddressAutocompleteComponent.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], AddressAutocompleteComponent.prototype, "allowCustom", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], AddressAutocompleteComponent.prototype, "fullAddressDetails", void 0);
    AddressAutocompleteComponent = AddressAutocompleteComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'mv-address-autocomplete',template:/*ion-inline-start:"/media/data/Projects/componentes/ionic-components-v2/componentes/src/components/address-autocomplete/address-autocomplete.html"*/'<ion-item>\n  <ion-label>{{ label }}</ion-label>\n  <ion-input type="text" [(ngModel)]="addressValue.formattedAddress" (click)="openModal()"></ion-input>\n</ion-item>'/*ion-inline-end:"/media/data/Projects/componentes/ionic-components-v2/componentes/src/components/address-autocomplete/address-autocomplete.html"*/,
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* NG_VALUE_ACCESSOR */],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* forwardRef */])(function () { return AddressAutocompleteComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]])
    ], AddressAutocompleteComponent);
    return AddressAutocompleteComponent;
    var AddressAutocompleteComponent_1;
}());

//# sourceMappingURL=address-autocomplete.js.map

/***/ }),

/***/ 831:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Component providing a searchbar input which autocomplete returned by Google Maps API
 *
 * @example
 * <mv-address-input label="Address" formControlName="address"></mv-address-input>
 */
var AddressInputComponent = /** @class */ (function () {
    function AddressInputComponent(ngZone) {
        this.ngZone = ngZone;
        /**
         * The component needs a model (ngModel od formControlName) option that will store the returned address
         */
        this._addressValue = { formattedAddress: '' };
        /**
         * {string} Address formatted as it will appear in the dom
         */
        this._displayedAddressValue = '';
        /**
         * Google autocomplete service
         */
        this.autocompleteService = new google.maps.places.AutocompleteService();
        /**
         * Results received from Google services
         */
        this.results = [];
        /**
         * Container for the propagation function.
         */
        this.propagateChange = function (_) { };
    }
    AddressInputComponent_1 = AddressInputComponent;
    Object.defineProperty(AddressInputComponent.prototype, "addressValue", {
        get: function () {
            return this._addressValue;
        },
        set: function (val) {
            var _this = this;
            this.ngZone.run(function () {
                _this._addressValue = val;
                _this.propagateChange(_this._addressValue);
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddressInputComponent.prototype, "displayedAddressValue", {
        get: function () {
            return this._displayedAddressValue;
        },
        set: function (val) {
            var _this = this;
            this.ngZone.run(function () {
                _this._displayedAddressValue = val;
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Empties the propositions list.
     * Called before its filling or when there are not results from Google services
     */
    AddressInputComponent.prototype.setList = function (results) {
        var _this = this;
        if (results === void 0) { results = null; }
        this.ngZone.run(function () {
            _this.results = results || [];
        });
    };
    /**
     * This method calls the autocomplete service to get predictions based on the input value.
     * If there are some results, they wil fill the propositions list.
     * Else, Google geocoding will be called
     */
    AddressInputComponent.prototype.useAutocompleteservice = function () {
        var _this = this;
        this.useInputAddress = false;
        if (this.displayedAddressValue === '') {
            this.setList();
            return;
        }
        this.autocompleteService.getPlacePredictions({ input: this.displayedAddressValue }, function (results, status) {
            if (results && results.length > 0) {
                _this.setList(results);
            }
            else {
                _this.useGeocoding();
            }
        });
    };
    /**
     * This method calls the Google geocoding to get predictions based on the input value.
     * If there are some results, they wil fill the propositions list.
     */
    AddressInputComponent.prototype.useGeocoding = function () {
        var _this = this;
        this.useInputAddress = true;
        var request = {
            address: this.displayedAddressValue
        };
        if (!this.geocoder) {
            this.geocoder = new google.maps.Geocoder();
        }
        this.geocoder.geocode(request, function (results, status) {
            _this.setList(results);
        });
    };
    /**
     * When user type something in the searchbar,
     * this method updates the formatted address of the address model.
     * This also calls the method responsible of filling the propositions list with AutocompleteService.
     */
    AddressInputComponent.prototype.inputOnSearchbar = function () {
        if (this.displayedAddressValue) {
            this.addressValue = {
                formattedAddress: this.displayedAddressValue
            };
        }
        else {
            this.addressValue = null;
        }
        if (this.addressValue) {
            this.useAutocompleteservice();
        }
        else {
            this.setList();
        }
    };
    /**
     * This method is called when user select a proposition in the list.
     * The Google PlaceService is called to get precise informations about this place.
     * the address object is built with those informations.
     *
     * @param item Selected item from propositon list
     */
    AddressInputComponent.prototype.selectSearchResult = function (item) {
        var _this = this;
        var request = {
            placeId: item.place_id
        };
        if (!this.placeService) {
            this.placeService = new google.maps.places.PlacesService(document.getElementById('attribution'));
        }
        this.placeService.getDetails(request, function (place, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                _this.displayedAddressValue = place.formatted_address;
                var addressDetails = {
                    route: '',
                    postalCode: '',
                    city: '',
                    country: ''
                };
                for (var _i = 0, _a = place.address_components; _i < _a.length; _i++) {
                    var component = _a[_i];
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
                _this.addressValue = {
                    latitude: place.geometry.location.lat(),
                    longitude: place.geometry.location.lng(),
                    formattedAddress: _this.useInputAddress ? _this.displayedAddressValue : place.formatted_address,
                    googlePlaceId: place.place_id,
                    addressDetails: addressDetails
                };
            }
        });
        this.results = [];
    };
    /**
     * When the input loses the focus, this method is called to hide the propositions list.
     */
    AddressInputComponent.prototype.onBlur = function () {
        var _this = this;
        // we need a timeout to prevent list from being emptied before the click event is emitted
        setTimeout(function () { return _this.setList(); }, 300);
    };
    /**
     * This method is part of ControlValueAccessor interface.
     * Its role is to set value from the model to the DOM
     *
     * @param value Value given from the model
     */
    AddressInputComponent.prototype.writeValue = function (value) {
        if (value && value.formattedAddress) {
            this.displayedAddressValue = value.formattedAddress;
        }
        else {
            this.displayedAddressValue = null;
        }
    };
    /**
     * This method is part of ControlValueAccessor interface.
     * Its role is to set the function that will propagate changes from the DOM to the model.
     *
     * @param fn {function} Angular internal function
     */
    AddressInputComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    /**
     * This method is part of ControlValueAccessor interface.
     * Not used here
     */
    AddressInputComponent.prototype.registerOnTouched = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], AddressInputComponent.prototype, "label", void 0);
    AddressInputComponent = AddressInputComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'mv-address-input',template:/*ion-inline-start:"/media/data/Projects/componentes/ionic-components-v2/componentes/src/components/address-input/address-input.html"*/'<ion-item>\n  <ion-searchbar type="text" id="search" [(ngModel)]="displayedAddressValue" (ionInput)="inputOnSearchbar()" (ionFocus)="inputOnSearchbar()"\n    (ionBlur)="onBlur()" [placeholder]="label"></ion-searchbar>\n</ion-item>\n<ion-item *ngIf="results.length > 0">\n  <ion-list>\n    <ion-item text-wrap *ngFor="let item of results" tappable (click)="selectSearchResult(item)">\n      {{ item.description || item.formatted_address }}\n    </ion-item>\n  </ion-list>\n</ion-item>\n<!-- some html element is needed by maps API to "display" attribution when no maps is generated -->\n<p id="attribution"></p>\n'/*ion-inline-end:"/media/data/Projects/componentes/ionic-components-v2/componentes/src/components/address-input/address-input.html"*/,
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* NG_VALUE_ACCESSOR */],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* forwardRef */])(function () { return AddressInputComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgZone */]])
    ], AddressInputComponent);
    return AddressInputComponent;
    var AddressInputComponent_1;
}());

//# sourceMappingURL=address-input.js.map

/***/ }),

/***/ 832:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementOfArrayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
var ElementOfArrayComponent = /** @class */ (function () {
    function ElementOfArrayComponent() {
        this.index = 0;
        /**
         * The elements value stored in the model
         */
        this._elementsValue = [];
        /**
         * The element value as it will be displayed in the DOM
         */
        this._displayedElementValue = '';
        /**
         * Container for the propagation function.
         */
        this.propagateChange = function (_) { };
    }
    ElementOfArrayComponent_1 = ElementOfArrayComponent;
    Object.defineProperty(ElementOfArrayComponent.prototype, "elementsValue", {
        get: function () {
            return this._elementsValue;
        },
        set: function (val) {
            this._elementsValue = val;
            this.propagateChange(this._elementsValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementOfArrayComponent.prototype, "displayedElementValue", {
        get: function () {
            return this._displayedElementValue;
        },
        set: function (val) {
            if (val instanceof Array) {
                this._displayedElementValue = val[this.index] || null;
                this.elementsValue = val;
            }
            else {
                this._displayedElementValue = val;
                var arr = this._elementsValue;
                arr[this.index] = val;
                this.elementsValue = arr;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * This method is part of ControlValueAccessor interface.
     * Its role is to set value from the model to the DOM
     *
     * @param value Value given from the model
     */
    ElementOfArrayComponent.prototype.writeValue = function (value) {
        if (value !== undefined) {
            this.displayedElementValue = value;
        }
    };
    /**
     * This method is part of ControlValueAccessor interface.
     * Its role is to set the function that will propagate changes from the DOM to the model.
     *
     * @param fn {function} Angular internal function
     */
    ElementOfArrayComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    /**
     * This method is part of ControlValueAccessor interface.
     * Not used here
     */
    ElementOfArrayComponent.prototype.registerOnTouched = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ElementOfArrayComponent.prototype, "index", void 0);
    ElementOfArrayComponent = ElementOfArrayComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'mv-element-of-array',template:/*ion-inline-start:"/media/data/Projects/componentes/ionic-components-v2/componentes/src/components/element-of-array/element-of-array.html"*/'<ion-input type="text" [(ngModel)]="displayedElementValue"></ion-input>\n'/*ion-inline-end:"/media/data/Projects/componentes/ionic-components-v2/componentes/src/components/element-of-array/element-of-array.html"*/,
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* NG_VALUE_ACCESSOR */],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* forwardRef */])(function () { return ElementOfArrayComponent_1; }),
                    multi: true
                }
            ]
        })
    ], ElementOfArrayComponent);
    return ElementOfArrayComponent;
    var ElementOfArrayComponent_1;
}());

//# sourceMappingURL=element-of-array.js.map

/***/ }),

/***/ 833:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorsDisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Component that displays errors from a form control if a target is set or from a form if no target were specified.
 *
 * @example
 * <mv-errors-display target="address"></mv-errors-display>
 */
var ErrorsDisplayComponent = /** @class */ (function () {
    /**
     * Constructor of the component
     *
     * @param cc Control container, element allowing to get the parent form
     */
    function ErrorsDisplayComponent(cc) {
        this.cc = cc;
        this.group = this.cc.formDirective;
    }
    Object.defineProperty(ErrorsDisplayComponent.prototype, "errors", {
        /**
         * Retrieves error from the target or from the full form depending on the presence or not of a target
         *
         * @returns errors Object containing the errors retrieved
         */
        get: function () {
            var errors = {};
            if (this.target) {
                if (this.group.control.get(this.target) && this.group.control.get(this.target).dirty && this.group.control.get(this.target).errors) {
                    errors[this.target] = this.group.control.get(this.target).errors;
                    errors[this.target].keys = Object.keys(this.group.control.get(this.target).errors);
                }
            }
            else {
                for (var control in this.group.form.controls) {
                    if (this.group.form.controls[control].dirty && this.group.form.controls[control].errors) {
                        errors[control] = this.group.control.get(control).errors;
                        errors[control].keys = Object.keys(this.group.control.get(control).errors);
                    }
                }
            }
            if (Object.keys(errors)) {
                errors.keys = Object.keys(errors);
            }
            return errors;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ErrorsDisplayComponent.prototype, "target", void 0);
    ErrorsDisplayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'mv-errors-display',template:/*ion-inline-start:"/media/data/Projects/componentes/ionic-components-v2/componentes/src/components/errors-display/errors-display.html"*/'<ion-item *ngIf="errors.keys && errors.keys.length">\n  <h3 ion-text color="danger" *ngIf="!target">{{\'There are errors\' | translate}}</h3>\n  <div *ngFor="let labelKey of errors.keys">\n    <h4 ion-text color="danger" *ngIf="!target">{{ labelKey | translate }}</h4>\n    <div *ngFor="let errorKey of errors[labelKey].keys">\n      <p ion-text color="danger" *ngIf="errorKey != \'keys\'">{{ \'error.\'+ labelKey + \'.\' + errorKey | uppercase | translate }}</p>\n    </div>\n  </div>\n</ion-item>\n'/*ion-inline-end:"/media/data/Projects/componentes/ionic-components-v2/componentes/src/components/errors-display/errors-display.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* ControlContainer */]])
    ], ErrorsDisplayComponent);
    return ErrorsDisplayComponent;
}());

//# sourceMappingURL=errors-display.js.map

/***/ }),

/***/ 834:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_google_libphonenumber__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_google_libphonenumber___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_google_libphonenumber__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// this kind of import is necessary for packaging to work

/**
 * Provides utils for phone numbers
 */
var PhoneNumberUtil = __WEBPACK_IMPORTED_MODULE_2_google_libphonenumber__["PhoneNumberUtil"];
/**
 * Provides the differents format used by Google's libphonenumber
 */
var PhoneNumberFormat = __WEBPACK_IMPORTED_MODULE_2_google_libphonenumber__["PhoneNumberFormat"];
/**
 * This components aims to provide an input that will display a national phone number while you're typing
 * but will save an international (E164) phone number .
 * It's based on google-libphonenumber.
 *
 * @example
 * <mv-phone-input label="Phone number" formControlName="phone"></mv-phone-input>
 */
var PhoneInputComponent = /** @class */ (function () {
    function PhoneInputComponent() {
        this.countryCode = 'FR';
        /**
         * The phone value stored in the model
         */
        this._phoneValue = '';
        /**
         * The phone value as it will be displayed in the DOM
         */
        this._displayedPhoneValue = '';
        /**
         * Instance of the Google Phonenumber utils
         */
        this.phoneUtil = PhoneNumberUtil.getInstance();
        /**
         * Container for the propagation function.
         */
        this.propagateChange = function (_) { };
    }
    PhoneInputComponent_1 = PhoneInputComponent;
    Object.defineProperty(PhoneInputComponent.prototype, "phoneValue", {
        get: function () {
            return this._phoneValue;
        },
        set: function (val) {
            this._phoneValue = val;
            this.propagateChange(this._phoneValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PhoneInputComponent.prototype, "displayedPhoneValue", {
        get: function () {
            return this._displayedPhoneValue;
        },
        set: function (val) {
            try {
                this.number = this.phoneUtil.parse(val, this.countryCode);
                this._displayedPhoneValue = this.phoneUtil.format(this.number, PhoneNumberFormat.NATIONAL);
                this.phoneValue = this.phoneUtil.format(this.number, PhoneNumberFormat.E164).replace('+', '00');
                // numbers in +xxyyyy do not work on some Android versions
            }
            catch (e) {
                this._displayedPhoneValue = val;
                this.phoneValue = null;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * This method is part of ControlValueAccessor interface.
     * Its role is to set value from the model to the DOM
     *
     * @param value Value given from the model
     */
    PhoneInputComponent.prototype.writeValue = function (value) {
        if (value !== undefined) {
            this.displayedPhoneValue = value;
        }
    };
    /**
     * This method is part of ControlValueAccessor interface.
     * Its role is to set the function that will propagate changes from the DOM to the model.
     *
     * @param fn {function} Angular internal function
     */
    PhoneInputComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    /**
     * This method is part of ControlValueAccessor interface.
     * Not used here
     */
    PhoneInputComponent.prototype.registerOnTouched = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], PhoneInputComponent.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PhoneInputComponent.prototype, "countryCode", void 0);
    PhoneInputComponent = PhoneInputComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'mv-phone-input',template:/*ion-inline-start:"/media/data/Projects/componentes/ionic-components-v2/componentes/src/components/phone-input/phone-input.html"*/'<ion-input type="tel" [(ngModel)]="displayedPhoneValue"></ion-input>'/*ion-inline-end:"/media/data/Projects/componentes/ionic-components-v2/componentes/src/components/phone-input/phone-input.html"*/,
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* NG_VALUE_ACCESSOR */],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* forwardRef */])(function () { return PhoneInputComponent_1; }),
                    multi: true
                }
            ]
        })
    ], PhoneInputComponent);
    return PhoneInputComponent;
    var PhoneInputComponent_1;
}());

//# sourceMappingURL=phone-input.js.map

/***/ }),

/***/ 835:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneInputWithCodeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_google_libphonenumber__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_google_libphonenumber___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_google_libphonenumber__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// this kind of import is necessary for packaging to work

/**
 * Provides utils for phone numbers
 */
var PhoneNumberUtil = __WEBPACK_IMPORTED_MODULE_2_google_libphonenumber__["PhoneNumberUtil"];
var phoneNumberUtil = PhoneNumberUtil.getInstance();
/**
 * Component providing an autocomplete input to selct country and an input to type a local phone number
 * It returns an international phone number correctly formatted
 *
 * @example
 * //TODO
 */ var PhoneInputWithCodeComponent = /** @class */ (function () {
    function PhoneInputWithCodeComponent() {
        /**
         * Container for the propagation function.
         */
        this.propagateChange = function (_) { };
    }
    PhoneInputWithCodeComponent_1 = PhoneInputWithCodeComponent;
    Object.defineProperty(PhoneInputWithCodeComponent.prototype, "internationalPhoneValue", {
        get: function () {
            return this._internationalPhoneValue;
        },
        set: function (value) {
            this._internationalPhoneValue = value;
            this.propagateChange(this._internationalPhoneValue);
        },
        enumerable: true,
        configurable: true
    });
    PhoneInputWithCodeComponent.prototype.writeValue = function (value) {
        if (value) {
            this.internationalPhoneValue = value;
        }
        else {
            this.internationalPhoneValue = '';
        }
    };
    /**
     * This method is part of ControlValueAccessor interface.
     * Its role is to set the function that will propagate changes from the DOM to the model.
     *
     * @param fn {function} Angular internal function
     */
    PhoneInputWithCodeComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    /**
     * This method is part of ControlValueAccessor interface.
     * Not used here
     */
    PhoneInputWithCodeComponent.prototype.registerOnTouched = function () { };
    PhoneInputWithCodeComponent.prototype.displayFunction = function (item) {
        return "<p>\n      <span>" + item.label + "</span>\n      <span style=\"color=\"#606060 !important;\">(+" + phoneNumberUtil.getCountryCodeForRegion(item.id) + ")</span>\n    </p>";
    };
    PhoneInputWithCodeComponent.prototype.filterFunction = function (item, searchTerm) {
        return item.label.toLowerCase().includes(searchTerm.toLowerCase());
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], PhoneInputWithCodeComponent.prototype, "countryList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], PhoneInputWithCodeComponent.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], PhoneInputWithCodeComponent.prototype, "countryLabel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], PhoneInputWithCodeComponent.prototype, "phoneLabel", void 0);
    PhoneInputWithCodeComponent = PhoneInputWithCodeComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'mv-phone-input-with-code',template:/*ion-inline-start:"/media/data/Projects/componentes/ionic-components-v2/componentes/src/components/phone-input-with-code/phone-input-with-code.html"*/'<ion-list>\n  <mv-autocomplete [label]="countryLabel" [list]="countryList" [allowCustom]="false" [display]="displayFunction" [filter]="filterFunction"\n    [(ngModel)]="selectedCountry"></mv-autocomplete>\n  <ion-item>\n    <ion-label text-wrap>{{ phoneLabel }}</ion-label>\n    <mv-phone-input item-content [(ngModel)]="internationalPhoneValue" [countryCode]="selectedCountry?.id"> </mv-phone-input>\n  </ion-item>\n</ion-list>'/*ion-inline-end:"/media/data/Projects/componentes/ionic-components-v2/componentes/src/components/phone-input-with-code/phone-input-with-code.html"*/,
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* NG_VALUE_ACCESSOR */],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* forwardRef */])(function () { return PhoneInputWithCodeComponent_1; }),
                    multi: true
                }
            ]
        })
    ], PhoneInputWithCodeComponent);
    return PhoneInputWithCodeComponent;
    var PhoneInputWithCodeComponent_1;
}());

//# sourceMappingURL=phone-input-with-code.js.map

/***/ }),

/***/ 836:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_enums_helper__ = __webpack_require__(837);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




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
var RadioListComponent = /** @class */ (function () {
    function RadioListComponent() {
        /**
         * True if the values were provided as an enum
         */
        this.enum = false;
        // the method set in registerOnChange, it is just
        // a placeholder for a method that takes one parameter,
        // we use it to emit changes back to the form
        /**
         * Container for the propagation function.
         */
        this.propagateChange = function (_) { };
    }
    RadioListComponent_1 = RadioListComponent;
    /**
     * Called when the directive is initialized.
     * Constructs the list of choices.
     */
    RadioListComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.values instanceof __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"]) {
            this.subscriber = this.values.subscribe(function (values) { return _this._currentValues = values; });
        }
        else {
            this.enumName = this.enumName ? this.enumName : 'ENUMNAME';
            this.enum = true;
            this.enumOfChoices = __WEBPACK_IMPORTED_MODULE_2__helpers_enums_helper__["a" /* EnumsHelper */].getEnum(this.values, this.enumName);
            this._currentValues = this.enumOfChoices.keys();
        }
    };
    /**
     * Called when the directive is destroyed.
     * Unsubscribes to the observable if it was provided
     */
    RadioListComponent.prototype.ngOnDestroy = function () {
        if (this.subscriber) {
            this.subscriber.unsubscribe();
        }
    };
    Object.defineProperty(RadioListComponent.prototype, "selected", {
        /**
         * Gets the _selected value.
         */
        get: function () {
            return this._selected;
        },
        /**
         * Sets the provided value and propagate it to the model/control
         */
        set: function (val) {
            this._selected = val;
            this.propagateChange(this._selected);
        },
        enumerable: true,
        configurable: true
    });
    //  model value ==> DOM value
    /**
     * This method is part of ControlValueAccessor interface.
     * Its role is to set value from the model to the DOM
     *
     * @param value Value given from the model
     */
    RadioListComponent.prototype.writeValue = function (value) {
        if (value !== undefined) {
            this.selected = value;
        }
    };
    //  DOM value ==> model value
    /**
     * This method is part of ControlValueAccessor interface.
     * Its role is to set the function that will propagate changes from the DOM to the model.
     *
     * @param fn {function} Angular internal function
     */
    RadioListComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    /**
     * This method is part of ControlValueAccessor interface.
     * Not used here
     */
    RadioListComponent.prototype.registerOnTouched = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"])
    ], RadioListComponent.prototype, "values", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], RadioListComponent.prototype, "enumName", void 0);
    RadioListComponent = RadioListComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/media/data/Projects/componentes/ionic-components-v2/componentes/src/components/radio-list/radio-list.html"*/'<ion-list radio-group [(ngModel)]="selected">\n    <ion-item *ngFor="let value of _currentValues; index as i">\n        <ion-label>{{ enum ? enumOfChoices[_currentValues[i]] : value | translate }}</ion-label>\n        <ion-radio value={{i}}></ion-radio>\n    </ion-item>\n</ion-list>\n'/*ion-inline-end:"/media/data/Projects/componentes/ionic-components-v2/componentes/src/components/radio-list/radio-list.html"*/,
            selector: 'mv-radio-list',
            providers: [
                // tells Angular that this component can be instantiate to be used as a control value accessor
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* NG_VALUE_ACCESSOR */],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* forwardRef */])(function () { return RadioListComponent_1; }),
                    multi: true
                }
            ]
        })
    ], RadioListComponent);
    return RadioListComponent;
    var RadioListComponent_1;
}());

//# sourceMappingURL=radio-list.js.map

/***/ }),

/***/ 837:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnumsHelper; });
var EnumsHelper = /** @class */ (function () {
    function EnumsHelper() {
    }
    EnumsHelper.getEnum = function (enumeration, enumName) {
        var wrappedEnum = {};
        var enumKeys = Object.keys(enumeration).filter(function (key) { return !isNaN(Number(enumeration[key])); });
        enumKeys.forEach(function (value) {
            wrappedEnum[value] = enumName.toUpperCase() + "." + value.toUpperCase();
        });
        wrappedEnum.keys = function () {
            return enumKeys;
        };
        return wrappedEnum;
    };
    return EnumsHelper;
}());

//# sourceMappingURL=enums.helper.js.map

/***/ }),

/***/ 838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YesNoListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * This Component displays questions one after an other.
 * The only possible answers are yes or no.
 * After the last question, a templatable screen is diplayed.
 *
 * @example
 * <mv-yes-no-list [(ngModel)]="answers" [question]="question" [itemsList]="itemsList" name="answers">
 */
var YesNoListComponent = /** @class */ (function () {
    /**
     * Constructor of the components,
     * set the current item to 0
     */
    function YesNoListComponent() {
        /**
         * Subquestions/propositions stored ordered by their "orderInGroup"
         */
        this.sortedItemsList = [];
        /**
         * Container for the propagation function.
         */
        this.propagateChange = function (_) { };
        this.currentItem = 0;
        this.progress = '0%';
    }
    YesNoListComponent_1 = YesNoListComponent;
    Object.defineProperty(YesNoListComponent.prototype, "itemsList", {
        /**
         * Subquestions/propositions provided as an array
         */
        set: function (list) {
            this.sortedItemsList = list.sort(function (a, b) {
                return (a.orderInGroup > b.orderInGroup) ? 1 : ((b.orderInGroup > a.orderInGroup) ? -1 : 0);
            });
            if (this._answers) {
                this.resolveCurrentItem();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(YesNoListComponent.prototype, "answers", {
        get: function () {
            return this._answers;
        },
        set: function (value) {
            this._answers = value;
            if (value && this.sortedItemsList) {
                this.resolveCurrentItem();
            }
            this.propagateChange(this._answers);
        },
        enumerable: true,
        configurable: true
    });
    YesNoListComponent.prototype.resolveCurrentItem = function () {
        var _this = this;
        var filteredList = this.sortedItemsList.filter(function (item) { return !_this._answers.hasOwnProperty(item.$id); });
        this.currentItem = this.sortedItemsList.indexOf(filteredList[0]);
        this.progress = (Math.round(100 * this.currentItem / (this.sortedItemsList.length - 1))).toString().concat('%');
    };
    /**
     * Increment the progress bar until the last item is clicked,
     * Then, increments currentItem if it's not the last one, or execute the callback.
     */
    YesNoListComponent.prototype.nextItem = function () {
        if (this.currentItem < this.sortedItemsList.length - 1) {
            this.currentItem++;
            this.progress = (Math.round(100 * this.currentItem / (this.sortedItemsList.length - 1))).toString().concat('%');
        }
        else {
            this.callback();
        }
    };
    /**
     * Saves the answer to the current question as a yes.
     * Then, call the nextItem method.
     */
    YesNoListComponent.prototype.answerYes = function () {
        this.answers[this.sortedItemsList[this.currentItem].$id] = true;
        this.nextItem();
    };
    /**
     * Saves the answer to the current question as a no.
     * Then, call the nextItem method.
     */
    YesNoListComponent.prototype.answerNo = function () {
        this.answers[this.sortedItemsList[this.currentItem].$id] = false;
        this.nextItem();
    };
    /**
     * This method is part of ControlValueAccessor interface.
     * Its role is to set value from the model to the DOM
     *
     * @param value Value given from the model
     */
    YesNoListComponent.prototype.writeValue = function (value) {
        if (value !== undefined) {
            this.answers = value;
        }
        else {
            this.answers = {};
        }
    };
    /**
     * This method is part of ControlValueAccessor interface.
     * Its role is to set the function that will propagate changes from the DOM to the model.
     *
     * @param fn {function} Angular internal function
     */
    YesNoListComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    /**
     * This method is part of ControlValueAccessor interface.
     * Not used here
     */
    YesNoListComponent.prototype.registerOnTouched = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], YesNoListComponent.prototype, "_answers", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], YesNoListComponent.prototype, "question", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", Function)
    ], YesNoListComponent.prototype, "callback", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], YesNoListComponent.prototype, "itemsList", null);
    YesNoListComponent = YesNoListComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'mv-yes-no-list',template:/*ion-inline-start:"/media/data/Projects/componentes/ionic-components-v2/componentes/src/components/yes-no-list/yes-no-list.html"*/'<div class="full-height flex-vertical justify-between">\n  <div class="progress-bar full-width">\n    <div [style.width]="progress" class="progress"></div>\n  </div>\n  <h1 ion-text color="primary" text-center text-wrap>{{ question | translate }}</h1>\n  <h2 text-center>{{ sortedItemsList[currentItem].title | translate }}</h2>\n  <div class="flex-horizontal height-15">\n    <div class="half-width">\n      <div ion-button full large color="danger" class="full-height" (click)="answerNo()">\n        <ion-icon name="thumbs-down" class="font-5"></ion-icon>\n      </div>\n    </div>\n    <div class="half-width">\n      <div ion-button full large color="secondary" class="full-height" (click)="answerYes()">\n        <ion-icon name="thumbs-up" class="font-5"></ion-icon>\n      </div>\n    </div>\n  </div>\n</div>\n'/*ion-inline-end:"/media/data/Projects/componentes/ionic-components-v2/componentes/src/components/yes-no-list/yes-no-list.html"*/,
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* NG_VALUE_ACCESSOR */],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* forwardRef */])(function () { return YesNoListComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], YesNoListComponent);
    return YesNoListComponent;
    var YesNoListComponent_1;
}());

//# sourceMappingURL=yes-no-list.js.map

/***/ })

},[432]);
//# sourceMappingURL=main.js.map
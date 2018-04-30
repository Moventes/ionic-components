import { Component, Input, forwardRef, OnChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl } from '@angular/forms';

export function createCounterRangeValidator(maxValue, minValue) {
  return function validateCounterRange(c: FormControl) {
    let err = {
      rangeError: {
        given: c.value,
        max: maxValue,
        min: minValue
      }
    };

    return (c.value > +maxValue || c.value < +minValue) ? err : null;
  }
}

@Component({
  selector: 'mv-counter-input',
  template: `
    <button ion-button (click)="increment()">+</button>
    <button ion-button disabled round color="light">{{ counterValue }}</button>
    <button ion-button (click)="decrement()">-</button>
  `,
  providers: [
    // tells Angular that this component can be instantiate to be used as a control value accessor
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CounterInputComponent),
      multi: true
    },
    // custom validation
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CounterInputComponent),
      multi: true
    }
  ]
})
// the component must implement CVA interface
export class CounterInputComponent implements ControlValueAccessor, OnChanges {
  // init counter value if not binded to component
  @Input()
  _counterValue = 0;

  // init validator from attribute when it is defined in the component
  @Input()
  counterRangeMax;

  @Input()
  counterRangeMin;

  // init empty validation function
  validateFn: Function = () => { };

  // update validation function on init and when binded attributes change
  ngOnChanges(changes) {
    if (changes.counterRangeMin || changes.counterRangeMax) {
      this.validateFn = createCounterRangeValidator(this.counterRangeMax, this.counterRangeMin);
    }
  }

  validate(c: FormControl) {
    return this.validateFn(c);
  }


  get counterValue() {
    return this._counterValue;
  }

  set counterValue(val) {
    this._counterValue = val;
    this.propagateChange(this._counterValue);
  }

  //  model value ==> DOM value
  writeValue(value: any) {
    if (value !== undefined) {
      this.counterValue = value;
    }
  }

  //  DOM value ==> model value
  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched(): void { }

  // the method set in registerOnChange, it is just
  // a placeholder for a method that takes one parameter,
  // we use it to emit changes back to the form
  propagateChange = (_: any) => { };

  //  custom function
  increment() {
    this.counterValue++;
  }

  //  custom function
  decrement() {
    this.counterValue--;
  }
}

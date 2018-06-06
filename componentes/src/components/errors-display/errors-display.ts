import { Component, Input } from '@angular/core';
import { ControlContainer } from '@angular/forms';

/**
 * Component that displays errors from a form control if a target is set or from a form if no target were specified.
 *
 * @example
 * <mv-errors-display target="address"></mv-errors-display>
 */
@Component({
  selector: 'mv-errors-display',
  templateUrl: 'errors-display.html'
})
export class ErrorsDisplayComponent {

  /**
   * If set, specific target whose errors will be displayed
   */
  @Input()
  private target: string;

  /**
   * Form containing this container.
   * It's this form whose errors will be displayed
   */
  private group;

  /**
   * Constructor of the component
   *
   * @param cc Control container, element allowing to get the parent form
   */
  constructor(
    private cc: ControlContainer
  ) {
    this.group = this.cc.formDirective;
  }

  /**
   * Retrieves error from the target or from the full form depending on the presence or not of a target
   *
   * @returns errors Object containing the errors retrieved
   */
  get errors() {
    const errors: any = {};

    if (this.target) {
      if (this.group.control.get(this.target) && this.group.control.get(this.target).dirty && this.group.control.get(this.target).errors) {
        errors[this.target] = this.group.control.get(this.target).errors;
        errors[this.target].keys = Object.keys(this.group.control.get(this.target).errors);
      }
    } else {
      for (const control in this.group.form.controls) {
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
  }
}

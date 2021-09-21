import { Component, Host, h } from '@stencil/core';

/**
 * The form control component.
 *
 * @element frog-form-control
 * @slot default - expects input, textarea, or label slotted content.
 */
@Component({
  tag: 'frog-form-control',
  styleUrl: 'form-control.css',
  shadow: true,
})
export class frogFormControl {
  //--------------------------------------------------------------------------------------------------------------------
  //  Lifecycle
  //--------------------------------------------------------------------------------------------------------------------

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}

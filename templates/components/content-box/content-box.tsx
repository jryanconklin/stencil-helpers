import { Component, Host, h, Prop } from '@stencil/core';
import { ContentBoxVariant, ContentBoxSpacing } from './content-box.types';

/**
 * The content box component.
 *
 * @element frog-content-box
 * @slot default - content that's rendered inside a bounding, styled box.
 */
@Component({
  tag: 'frog-content-box',
  styleUrl: 'content-box.css',
  shadow: true,
})
export class FrogContentBox {
  // -------------------------------------------------------------------------------------------------------------------
  // Properties
  // -------------------------------------------------------------------------------------------------------------------

  /**
   * The content box styling to display.
   * @default shadow
   */
  @Prop({ reflect: true }) variant: ContentBoxVariant = 'shadow';

  /**
   * The y-axis padding for the content box.
   * @default null
   */
  @Prop({ reflect: true }) py: ContentBoxSpacing = null;

  /**
   * The x-axis padding for the content box.
   * @default null
   */
  @Prop({ reflect: true }) px: ContentBoxSpacing = null;

  //--------------------------------------------------------------------------------------------------------------------
  //  Lifecycle
  //--------------------------------------------------------------------------------------------------------------------

  render() {
    return (
      <Host class={`content-box content-box--${this.variant}`}>
        <slot />
      </Host>
    );
  }
}

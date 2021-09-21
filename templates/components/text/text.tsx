import { Component, Element, Host, h, Prop } from '@stencil/core';

import { TextVariant, TextTags } from './text.types';

/**
 * A text wrapping component to easily add styled text markup.
 *
 * @element frog-text
 * @slot defaultSlot - the text contents to render.
 */
@Component({
  tag: 'frog-text',
  styleUrls: {
    global: '../../global/css/components/typography.css',
    local: 'text.css'
  },
  shadow: true,
})
export class FrogText {
  // -------------------------------------------------------------------------------------------------------------------
  // Element
  // -------------------------------------------------------------------------------------------------------------------

  @Element() el: HTMLElement;

  // -------------------------------------------------------------------------------------------------------------------
  // Properties
  // -------------------------------------------------------------------------------------------------------------------

  /**
   * Select the valid HTML tag to render the text element.
   * @default div
   */
  @Prop() tag: TextTags = 'div';

  /**
   * Select the valid HTML tag to render the text element.
   * @default headline-2xl
   */
  @Prop() variant: TextVariant = 'headline-2xl';

  //--------------------------------------------------------------------------------------------------------------------
  //  Lifecycle
  //--------------------------------------------------------------------------------------------------------------------

  render() {
    const Tag = this.tag;

    return (
      <Host>
        <Tag class={this.variant}>
          <slot />
        </Tag>
      </Host>
    );
  }
}

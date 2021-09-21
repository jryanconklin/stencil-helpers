import { Component, Element, Host, h, Prop } from '@stencil/core';

import { LinkVariant, LinkState } from './link.types';
import { inheritAttributes } from '../../utils/attributes';

/**
 * The primary link component.
 *
 * @element frog-link
 * @slot defaultSlot - A default slot for link text.
 */
@Component({
  tag: 'frog-link',
  styleUrls: {
    global: '../../global/css/components/link.css',
    local: 'frog-link.css'
  },
  shadow: true,
})
export class FrogLink {
  // -------------------------------------------------------------------------------------------------------------------
  // Element
  // -------------------------------------------------------------------------------------------------------------------

  @Element() el: HTMLElement;

  // -------------------------------------------------------------------------------------------------------------------
  // Properties
  // -------------------------------------------------------------------------------------------------------------------

  /**
   * The link style to display.
   * @default link
   */
  @Prop({ reflect: true }) variant: LinkVariant = 'link';

  /**
   * The URL that the hyperlink points to.
   * @default #
   */
  @Prop() href = '#';

  /**
   * Link state active|inactive|undefined.
   * @default undefined
   */
  @Prop({ reflect: true }) state: LinkState = undefined;

  //--------------------------------------------------------------------------------------------------------------------
  //  Lifecycle
  //--------------------------------------------------------------------------------------------------------------------

  render() {
    const attributes = inheritAttributes(this.el, []);
    const stateClass = this.state !== undefined ? `${this.variant}--${this.state}` : '';

    return (
      <Host>
        <a class={`${this.variant} ${stateClass}`} {...attributes}>
          <slot />
          <slot name="icon"></slot>
        </a>
      </Host>
    );
  }
}

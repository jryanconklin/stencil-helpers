import { Component, Element, h, Host, Prop } from '@stencil/core';

import { ButtonVariant, ButtonSize } from './frog-button.types';
import { IconName } from '../icon/icon.types';
import { inheritAttributes } from "../../utils/attributes";

/**
 * The primary frog button component.
 *
 * @element frog-button
 * @slot defaultSlot - The button text to display.
 */
@Component({
  tag: 'frog-button',
  styleUrls: {
    global: '../global/example-path/button.css',
    scoped: 'button.css'
  },
  shadow: true,
})
export class FrogButton {
  // -------------------------------------------------------------------------------------------------------------------
  // Element
  // -------------------------------------------------------------------------------------------------------------------

  @Element() el: HTMLElement;

  // -------------------------------------------------------------------------------------------------------------------
  // Properties
  // -------------------------------------------------------------------------------------------------------------------

  /**
   * The button styling to display.
   * @default primary
   */
  @Prop({ reflect: true }) variant: ButtonVariant = 'solid';

  /**
   * The internal padding size. sm|md|lg
   * @default 'md'
   */
  @Prop() size: ButtonSize = 'sm';

  /**
   * An icon to display to the right of text (optional).
   * @default undefined
   */
  @Prop() icon: IconName | undefined;

  /**
   * If no url, then falls back to <button> element (optional).
   * @default null
   */
  @Prop({ reflect: true }) href: string;

  //--------------------------------------------------------------------------------------------------------------------
  //  Lifecycle
  //--------------------------------------------------------------------------------------------------------------------

  componentWillRender(): void {
    this.childElType = this.href !== undefined && this.href !== '' ? 'a' : 'button';
  }

  render() {
    const attributes = inheritAttributes(this.el, []);
    const Tag = this.childElType;

    const classes = {
      button: true,
      [`button--${this.variant}`]: this.variant,
      [`button--${this.size}`]: this.size,
    };

    return (
      <Host>
        <Tag class={classes} {...attributes}>
          <span class="button__text">
            <slot></slot>
          </span>
          {this.icon && <frog-icon class="button__icon" name={this.icon}></frog-icon>}
        </Tag>
      </Host>
    );
  }

  /**
   * The node type of the rendered child element
   * */
  private childElType?: 'a' | 'button' = 'button';
}

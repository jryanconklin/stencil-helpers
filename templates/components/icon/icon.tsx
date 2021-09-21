import { Component, Prop, h, State } from '@stencil/core';

import { IconName, IconColor, IconVariant, IconSize } from './icon.types';

import outline from './assets/icons-outline.json';
import solid from './assets/icons-solid.json';

/**
 * Design icons for frog.
 *
 * @element frog-icon
 */
@Component({
  tag: 'frog-icon',
  styleUrl: 'icon.css',
  shadow: true,
})
export class FrogIcon {
  // -------------------------------------------------------------------------------------------------------------------
  // Properties
  // -------------------------------------------------------------------------------------------------------------------
  /**
   * @description The registered icon to display.
   * @default chevron-right
   */
  @Prop() name: IconName = IconName.CHEVRON_RIGHT;

  /**
   * @description The type of icon for color styling: outline|solid
   * @default outline
   */
  @Prop({ reflect: true }) variant: IconVariant = IconVariant.OUTLINE;

  /**
   * @description The icon color to display.
   * @default brand
   */
  @Prop() color: IconColor = IconColor.CURRENT;

  /**
   * @description An optional property to add height/width to an icon.
   * @default null
   */
  @Prop() size: IconSize;

  // -------------------------------------------------------------------------------------------------------------------
  // State
  // -------------------------------------------------------------------------------------------------------------------
  @State() icons = this.variant === 'outline' ? outline : solid;

  // -------------------------------------------------------------------------------------------------------------------
  // Lifecycle
  // -------------------------------------------------------------------------------------------------------------------
  render() {
    const sizeClass = this.size !== undefined ? `icon-${this.size}` : 'icon-full';
    return <span class={`svg-icon icon-${this.variant}-${this.color} ${sizeClass}`} innerHTML={this.icons[this.name]} />;
  }
}

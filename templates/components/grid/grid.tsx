import { Component, Host, h, Prop, Element } from '@stencil/core';

import { GridVariant, GridItems } from './grid.types';

/**
 * The primary grid component.
 *
 * @element frog-grid
 * @slot one - The default named slot for grid component.
 * @slot two - A secondary slot for grid component.
 * @slot three - A tertiary slot for grid component.
 * @slot four - A quaternary slot for grid component.
 */
@Component({
  tag: 'frog-grid',
  styleUrl: 'grid.css',
  shadow: true,
})
export class FrogGrid {
  // -------------------------------------------------------------------------------------------------------------------
  // Element
  // -------------------------------------------------------------------------------------------------------------------

  @Element() el: HTMLElement;

  // -------------------------------------------------------------------------------------------------------------------
  // Properties
  // -------------------------------------------------------------------------------------------------------------------

  /**
   * The type of layout to display. Smart allows infinite items and the rest are slotted between one - four named slots.
   */
  @Prop({ reflect: true }) variant: GridVariant = '1-1';

  /**
   * The Number of Items to display for Smart Grid in Slot One: 2|3|4
   */
  @Prop({ reflect: true }) items: GridItems = undefined;

  /**
   * Evaluate if default slot exists for Smart Grid.
   */
  @Prop({ mutable: true }) hasDefaultSlot: boolean;

  /**
   * Evaluate if first slot has content.
   */
  @Prop({ mutable: true }) hasFirstSlot: boolean;

  /**
   * Evaluate if second slot has content.
   */
  @Prop({ mutable: true }) hasSecondSlot: boolean;

  /**
   * Evaluate if third slot has content.
   */
  @Prop({ mutable: true }) hasThirdSlot: boolean;

  /**
   * Evaluate if fourth slot has content.
   */
  @Prop({ mutable: true }) hasFourthSlot: boolean;

  //--------------------------------------------------------------------------------------------------------------------
  //  Lifecycle
  //--------------------------------------------------------------------------------------------------------------------

  componentWillLoad() {
    this.hasDefaultSlot = this.variant === 'smart' && this.items !== null;
    this.hasFirstSlot = this.el.querySelector('[slot="one"]') !== null && this.variant !== 'smart';
    this.hasSecondSlot = this.el.querySelector('[slot="two"]') !== null && this.variant !== 'smart';
    this.hasThirdSlot = this.el.querySelector('[slot="three"]') !== null && this.variant !== 'smart';
    this.hasFourthSlot = this.el.querySelector('[slot="four"]') !== null && this.variant !== 'smart';
  }

  render() {
    return (
      <Host>
        {this.hasDefaultSlot && <slot />}
        {this.hasFirstSlot && <slot name="one" />}
        {this.hasSecondSlot && <slot name="two" />}
        {this.hasThirdSlot && <slot name="three" />}
        {this.hasFourthSlot && <slot name="four" />}
      </Host>
    );
  }
}

import { Component, getAssetPath, h, Prop } from '@stencil/core';

import { LogoVariant } from './logo.types';

/**
 * Provide the design's logos.
 *
 * @element frog-logo
 */
@Component({
  tag: 'frog-logo',
  styleUrl: 'logo.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class FrogLogo {
  // -------------------------------------------------------------------------------------------------------------------
  // Properties
  // -------------------------------------------------------------------------------------------------------------------

  /**
   * The logo to display.
   * @default main
   */
  @Prop({ reflect: true }) variant: LogoVariant = 'main';

  //--------------------------------------------------------------------------------------------------------------------
  //  Lifecycle
  //--------------------------------------------------------------------------------------------------------------------

  render() {
    const images = {
      footer: 'footer.png',
      main: 'main.svg',
    };

    return (
      <slot name="logo">
        <img class={`logo logo--${this.variant}`} src={getAssetPath(`./assets/${images[this.variant]}`)} alt={`The ${this.variant} logo.`} />
      </slot>
    );
  }
}

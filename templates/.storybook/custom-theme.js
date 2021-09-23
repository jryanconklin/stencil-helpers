import { create } from '@storybook/theming/create';

import logo from './stories/assets/logo.svg';

import color from './../tokens/src/color.json';

export default create({
  base: 'light',
  // Brand Metadata
  brandTitle: 'REPLACE Design',
  brandUrl: 'https://www.thinkshout.com',
  brandImage: logo,
  // Base Colors
  colorPrimary: color.colors.brand.base.value,
  colorSecondary: color.colors.brand.light.value,
  // Text Colors
  textColor: color.colors.black.value,
  textInverseColor: color.colors.white.value,
  // Toolbar Colors
  barTextColor: color.colors.black.value,
  // Typography
  fontCode: 'monospace',
});

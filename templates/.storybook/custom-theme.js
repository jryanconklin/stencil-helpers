import { create } from '@storybook/theming/create';

import logo from './stories/assets/logo-primary.svg';

import color from './../../tokens/color.json';
import typography from './../../tokens/typography.json';

export default create({
  base: 'light',
  // Brand Metadata
  brandTitle: 'REPLACE Design',
  brandUrl: 'https://www.thinkshout.com',
  brandImage: logo,
  // Base Colors
  colorPrimary: color.color.brand.value,
  colorSecondary: color.color.brandAccessible.value,
  // Text Colors
  textColor: color.color.black.value,
  textInverseColor: color.color.white.value,
  // Toolbar Colors
  barTextColor: color.color.black.value,
  // Typography
  fontBase: typography.fontFamily.sans.value,
  fontCode: 'monospace',
});

import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';

import { IconName, IconColor, IconSize } from './frog-icon.types';

export default {
  title: 'Atoms/Icon',
  component: 'frog-icon',
  parameters: {
    docs: {
      source: {
        code: `<frog-icon name="chevron-right"></frog-icon>`,
      },
    },
  },
  argTypes: {
    name: {
      control: {
        type: 'select',
        options: IconName,
      },
    },
    color: {
      control: {
        type: 'select',
        options: IconColor,
      },
    },
    size: {
      control: {
        type: 'select',
        options: IconSize,
      },
    },
  },
};

const Template = ({ name, color, size }) => html`<frog-icon name="${ifDefined(name)}" color="${ifDefined(color)}" size="${ifDefined(size)}"></frog-icon>`;

export const Icon = Template.bind({});
Icon.args = {
  name: 'chevron-right',
  color: 'brand',
  size: 'base',
};

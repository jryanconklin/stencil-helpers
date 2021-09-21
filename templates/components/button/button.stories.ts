import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';

import { ButtonVariant, ButtonSize } from './button.types';
import { IconName } from '../icon/icon.types';
import { argTypeSlotContent } from '../../utils/storybook';

const buttonVariants: ButtonVariant[] = ['solid', 'tag', 'outline', 'transparent'];
const buttonSizes: ButtonSize[] = ['sm', 'md', 'lg'];

export default {
  title: 'Atoms/Button',
  component: 'frog-button',
  parameters: {
    docs: {
      source: {
        code: `<frog-button variant="solid">My Text</frog-button>`,
      },
    },
  },
  argTypes: {
    ...argTypeSlotContent,
    variant: {
      control: {
        type: 'select',
        options: buttonVariants,
      },
    },
    size: {
      control: {
        type: 'select',
        options: buttonSizes,
      },
    },
    href: {
      control: {
        type: 'text',
      },
    },
    icon: {
      control: {
        type: 'select',
        options: IconName,
      },
    },
  },
};

const Template = ({ variant, size, href, icon, defaultSlot }) =>
  html`<frog-button variant="${ifDefined(variant)}" size="${ifDefined(size)}" href="${ifDefined(href)}" icon="${ifDefined(icon)}">${defaultSlot}</frog-button>`;

export const Button = Template.bind({});
Button.args = {
  variant: 'solid',
  size: 'sm',
  defaultSlot: 'Sample Button',
};

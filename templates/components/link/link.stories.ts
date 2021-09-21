import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';

import { LinkVariant } from './frog-link.types';

const linkOptions: LinkVariant[] = ['footer-main', 'footer-sub', 'link', 'nav-sm', 'nav-lg', 'pagination', 'tag'];

export default {
  title: 'Atoms/Link',
  component: 'frog-link',
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: linkOptions,
      },
    },
    textSlot: {
      name: 'Text Slot',
      description: 'Text value for links.',
    },
    href: {
      control: {
        type: 'text',
      },
    },
    state: {
      control: {
        type: 'select',
        options: ['active', 'inactive'],
      },
    },
  },
};

const Template = ({ variant, href, state, textSlot }) =>
  html` <frog-link variant="${ifDefined(variant)}" href="${ifDefined(href)}" state="${ifDefined(state)}"> ${textSlot}</frog-link> `;

export const Link = Template.bind({});
Link.args = {
  variant: 'link',
  href: '#',
  textSlot: 'Sample Link',
};

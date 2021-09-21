import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';

import { TextVariant, TextTags } from './frog-text.types';

const tags: TextTags[] = ['p', 'div', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const styles: TextVariant[] = ['small', 'body-sm', 'body-lg', 'hallmark-sm', 'hallmark-lg', 'headline-md', 'headline-lg', 'headline-xl', 'headline-2xl'];

export default {
  title: 'Atoms/Text',
  component: 'frog-text',
  parameters: {
    docs: {
      source: {
        code: `<frog-text tag="h1" variant="heading-1" size="sm">My Text</frog-text>`,
      },
    },
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: styles,
      },
    },
    tag: {
      control: {
        type: 'select',
        options: tags,
      },
    },
  },
};

const Template = ({ tag, variant }) => html`<frog-text tag="${ifDefined(tag)}" variant="${ifDefined(variant)}">My Text</frog-text>`;

export const Text = Template.bind({});

Text.args = {
  tag: 'h1',
  variant: 'headline-2xl',
};

import { addParameters, setCustomElements } from '@storybook/web-components';
import { defineCustomElements } from '../dist/esm/loader';

import customElements from './custom-elements.json';

import '../dist/REPLACE/REPLACE.css';

defineCustomElements();
setCustomElements(customElements);

addParameters({
  actions: {
    argTypesRegex: '^on[A-Z].*',
  },
  controls: {
    expanded: true,
  },
  options: {
    storySort: {
      order: ['Introduction', 'Protons', 'Atoms', 'Molecules', 'Organisms', 'Templates', 'Pages'],
    },
  },
});

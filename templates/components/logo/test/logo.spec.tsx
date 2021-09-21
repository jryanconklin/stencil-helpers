import { newSpecPage } from '@stencil/core/testing';
import { frogLogo } from '../frog-logo';

describe('frog-logo', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [frogLogo],
      html: `<frog-logo></frog-logo>`,
    });
    expect(page.root).toEqualHtml(`
      <frog-logo variant="main">
        <mock:shadow-root>
          <slot name="logo">
            <img alt="The main logo for Jewish Federation of Cleveland." class="logo logo--main" src="/assets/main.svg">
          </slot>
        </mock:shadow-root>
      </frog-logo>
    `);
  });
});

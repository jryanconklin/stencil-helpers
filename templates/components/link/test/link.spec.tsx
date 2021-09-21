import { newSpecPage } from '@stencil/core/testing';
import { frogLink } from '../frog-link';

describe('frog-link', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [frogLink],
      html: `<frog-link></frog-link>`,
    });
    expect(page.root).toEqualHtml(`
      <frog-link variant="link">
        <mock:shadow-root>
          <a class="link" href="#">
            <slot></slot>
            <slot name="icon"></slot>
          </a>
        </mock:shadow-root>
      </frog-link>
    `);
  });
});

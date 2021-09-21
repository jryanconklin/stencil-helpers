import { newSpecPage } from '@stencil/core/testing';
import { frogButton } from '../frog-button';

describe('frog-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [frogButton],
      html: `<frog-button></frog-button>`,
    });
    expect(page.root).toEqualHtml(`
      <frog-button variant="solid">
        <mock:shadow-root>
          <button class="button button--sm button--solid">
            <span class="button__text">
              <slot></slot>
            </span>
          </button>
        </mock:shadow-root>
      </frog-button>
    `);
  });
});

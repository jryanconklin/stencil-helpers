import { newSpecPage } from '@stencil/core/testing';
import { frogText } from '../frog-text';

describe('frog-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [frogText],
      html: `<frog-text>My Text</frog-text>`,
    });
    expect(page.root).toEqualHtml(`
      <frog-text>
        <mock:shadow-root>
          <div class="headline-2xl">
            <slot></slot>
          </div>
        </mock:shadow-root>
        My Text
      </frog-text>
    `);
  });
});

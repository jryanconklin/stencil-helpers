import { newSpecPage } from '@stencil/core/testing';
import { frogContentBox } from '../frog-content-box';

describe('frog-content-box', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [frogContentBox],
      html: `<frog-content-box></frog-content-box>`,
    });
    expect(page.root).toEqualHtml(`
      <frog-content-box variant="shadow">
        <mock:shadow-root>
          <div class="content-box content-box--shadow">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </frog-content-box>
    `);
  });
});

import { newSpecPage } from '@stencil/core/testing';
import { frogGrid } from '../frog-grid';

describe('frog-grid', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [frogGrid],
      html: `<frog-grid><div slot="one"></div>My content</frog-grid>`,
    });
    expect(page.root).toEqualHtml(`
      <frog-grid variant="1-1">
        <mock:shadow-root>
          <slot name="one"></slot>
        </mock:shadow-root>
        <div slot="one"></div>
        My content
      </frog-grid>
    `);
  });
});

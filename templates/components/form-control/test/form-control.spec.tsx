import { newSpecPage } from '@stencil/core/testing';
import { frogFormControl } from '../frog-form-control';

describe('frog-form-control', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [frogFormControl],
      html: `<frog-form-control></frog-form-control>`,
    });
    expect(page.root).toEqualHtml(`
      <frog-form-control>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </frog-form-control>
    `);
  });
});

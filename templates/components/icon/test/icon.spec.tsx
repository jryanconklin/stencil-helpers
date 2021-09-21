import { newSpecPage } from '@stencil/core/testing';
import { frogIcon } from '../frog-icon';

describe('frog-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [frogIcon],
      html: `<frog-icon></frog-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <frog-icon variant="outline">
        <mock:shadow-root>
          <span class="icon-full icon-outline-current svg-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
            </svg>
          </span>
        </mock:shadow-root>
      </frog-icon>
    `);
  });
});

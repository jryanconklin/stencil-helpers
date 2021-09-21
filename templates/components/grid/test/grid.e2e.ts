import { newE2EPage } from '@stencil/core/testing';

describe('frog-grid', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<frog-grid></frog-grid>');

    const element = await page.find('frog-grid');
    expect(element).toHaveClass('hydrated');
  });
});

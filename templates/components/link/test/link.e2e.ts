import { newE2EPage } from '@stencil/core/testing';

describe('frog-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<frog-link></frog-link>');

    const element = await page.find('frog-link');
    expect(element).toHaveClass('hydrated');
  });
});

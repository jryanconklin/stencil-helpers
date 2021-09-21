import { newE2EPage } from '@stencil/core/testing';

describe('frog-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<frog-icon></frog-icon>');

    const element = await page.find('frog-icon');
    expect(element).toHaveClass('hydrated');
  });
});

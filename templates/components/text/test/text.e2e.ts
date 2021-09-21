import { newE2EPage } from '@stencil/core/testing';

describe('frog-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<frog-text></frog-text>');

    const element = await page.find('frog-text');
    expect(element).toHaveClass('hydrated');
  });
});

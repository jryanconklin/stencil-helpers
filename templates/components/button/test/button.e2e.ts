import { newE2EPage } from '@stencil/core/testing';

describe('frog-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<frog-button></frog-button>');

    const element = await page.find('frog-button');
    expect(element).toHaveClass('hydrated');
  });
});

import { newE2EPage } from '@stencil/core/testing';

describe('frog-content-box', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<frog-content-box></frog-content-box>');

    const element = await page.find('frog-content-box');
    expect(element).toHaveClass('hydrated');
  });
});

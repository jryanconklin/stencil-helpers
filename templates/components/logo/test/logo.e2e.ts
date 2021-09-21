import { newE2EPage } from '@stencil/core/testing';

describe('frog-logo', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<frog-logo></frog-logo>');

    const element = await page.find('frog-logo');
    expect(element).toHaveClass('hydrated');
  });
});

import { newE2EPage } from '@stencil/core/testing';

describe('frog-form-control', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<frog-form-control></frog-form-control>');

    const element = await page.find('frog-form-control');
    expect(element).toHaveClass('hydrated');
  });
});

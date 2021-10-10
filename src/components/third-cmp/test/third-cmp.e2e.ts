import { newE2EPage } from '@stencil/core/testing';

describe('third-cmp', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<third-cmp></third-cmp>');

    const element = await page.find('third-cmp');
    expect(element).toHaveClass('hydrated');
  });
});

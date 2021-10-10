import { newSpecPage } from '@stencil/core/testing';
import { ThirdCmp } from '../third-cmp';

describe('third-cmp', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ThirdCmp],
      html: `<third-cmp></third-cmp>`,
    });
    expect(page.root).toEqualHtml(`
      <third-cmp>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </third-cmp>
    `);
  });
});

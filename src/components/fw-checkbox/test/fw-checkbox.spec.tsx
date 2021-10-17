import { newSpecPage } from '@stencil/core/testing';
import { FwCheckbox } from '../fw-checkbox';

describe('fw-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FwCheckbox],
      html: `<fw-checkbox></fw-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <fw-checkbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fw-checkbox>
    `);
  });
});

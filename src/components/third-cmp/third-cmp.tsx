import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'third-cmp',
  styleUrl: 'third-cmp.css',
  shadow: true,
})
export class ThirdCmp {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}

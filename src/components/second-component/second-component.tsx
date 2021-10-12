import { Component, h } from '@stencil/core';
@Component({
  tag: 'second-component',
  styleUrl: 'second-component.css',
  shadow: true,
})
export class SecondComponent {

  render() {
    return (
      <div>
       This is Second component including My-Component
       <br/>
       <my-component>assd sprimary btn</my-component>
      </div>
    );
  }

}

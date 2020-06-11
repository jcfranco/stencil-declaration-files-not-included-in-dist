import { Component, Prop, h } from '@stencil/core';
import { Foo } from "../interfaces";

@Component({
  tag: 'my-component',
  shadow: true
})
export class MyComponent {
  @Prop() foo: Foo = { bar: "baz" };

  render() {
    return <div>{this.foo.bar}</div>;
  }
}

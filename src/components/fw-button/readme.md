# fw-button



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute          | Description                                                                                              | Type                                                       | Default     |
| ---------------- | ------------------ | -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ----------- |
| `color`          | `color`            | Identifier of  the theme based on which the button is styled.                                            | `"danger" \| "link" \| "primary" \| "secondary" \| "text"` | `'primary'` |
| `disabled`       | `disabled`         | Disables the button on the interface. If the attribute’s value is undefined, the value is set to false.  | `boolean`                                                  | `false`     |
| `expand`         | `expand`           | Sets the button to a full-width block. If the attribute’s value is undefined, the value is set to false. | `boolean`                                                  | `false`     |
| `modalTriggerId` | `modal-trigger-id` | Accepts the id of the fw-modal component to open it on click                                             | `string`                                                   | `''`        |
| `size`           | `size`             | Size of the button.                                                                                      | `"mini" \| "normal" \| "small"`                            | `'normal'`  |
| `throttleDelay`  | `throttle-delay`   | Sets the delay for throttle in milliseconds. Defaults to 200 milliseconds.                               | `number`                                                   | `200`       |
| `type`           | `type`             | Button type based on which actions are performed when the button is clicked.                             | `"button" \| "reset" \| "submit"`                          | `'button'`  |


## Events

| Event     | Description                                 | Type                |
| --------- | ------------------------------------------- | ------------------- |
| `fwBlur`  | Triggered when the button loses focus.      | `CustomEvent<void>` |
| `fwClick` | Triggered when the button is clicked.       | `CustomEvent<void>` |
| `fwFocus` | Triggered when the button comes into focus. | `CustomEvent<void>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

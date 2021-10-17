# fw-checkbox



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                    | Type      | Default |
| ---------- | ---------- | -------------------------------------------------------------------------------------------------------------- | --------- | ------- |
| `checked`  | `checked`  | Sets the state of the check box to selected. If the attribute’s value is undefined, the value is set to false. | `boolean` | `false` |
| `disabled` | `disabled` | Disables the check box on the interface. If the attribute’s value is undefined, the value is set to false.     | `boolean` | `false` |
| `label`    | `label`    | Label displayed on the interface, for the check box.                                                           | `string`  | `''`    |
| `name`     | `name`     | Name of the component, saved as part of form data.                                                             | `string`  | `''`    |
| `value`    | `value`    | Identifier corresponding to the component, that is saved when the form data is saved.                          | `string`  | `''`    |


## Events

| Event      | Description                                       | Type                |
| ---------- | ------------------------------------------------- | ------------------- |
| `fwBlur`   | Triggered when the check box loses focus.         | `CustomEvent<void>` |
| `fwChange` | Triggered when the check box’s value is modified. | `CustomEvent<any>`  |
| `fwFocus`  | Triggered when the check box comes into focus.    | `CustomEvent<void>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

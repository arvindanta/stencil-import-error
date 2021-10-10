/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface SecondComponent {
    }
    interface ThirdCmp {
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLSecondComponentElement extends Components.SecondComponent, HTMLStencilElement {
    }
    var HTMLSecondComponentElement: {
        prototype: HTMLSecondComponentElement;
        new (): HTMLSecondComponentElement;
    };
    interface HTMLThirdCmpElement extends Components.ThirdCmp, HTMLStencilElement {
    }
    var HTMLThirdCmpElement: {
        prototype: HTMLThirdCmpElement;
        new (): HTMLThirdCmpElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "second-component": HTMLSecondComponentElement;
        "third-cmp": HTMLThirdCmpElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface SecondComponent {
    }
    interface ThirdCmp {
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "second-component": SecondComponent;
        "third-cmp": ThirdCmp;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "second-component": LocalJSX.SecondComponent & JSXBase.HTMLAttributes<HTMLSecondComponentElement>;
            "third-cmp": LocalJSX.ThirdCmp & JSXBase.HTMLAttributes<HTMLThirdCmpElement>;
        }
    }
}

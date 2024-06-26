import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * ButtonElementProps are the props for the [`button`](https://developer.mozilla.org/docs/Web/HTML/Element/button) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/button>
 */
export interface ButtonElementProps extends GlobalAttributes {
  /** `disabled` is an attribute of the [`button`](https://developer.mozilla.org/docs/Web/HTML/Element/button) element. */
  disabled?: string | undefined;
  /** `form` is an attribute of the [`button`](https://developer.mozilla.org/docs/Web/HTML/Element/button) element. */
  form?: string | undefined;
  /** `formaction` is an attribute of the [`button`](https://developer.mozilla.org/docs/Web/HTML/Element/button) element. */
  formaction?: string | undefined;
  /** `formenctype` is an attribute of the [`button`](https://developer.mozilla.org/docs/Web/HTML/Element/button) element. */
  formenctype?: string | undefined;
  /** `formmethod` is an attribute of the [`button`](https://developer.mozilla.org/docs/Web/HTML/Element/button) element. */
  formmethod?: string | undefined;
  /** `formnovalidate` is an attribute of the [`button`](https://developer.mozilla.org/docs/Web/HTML/Element/button) element. */
  formnovalidate?: string | undefined;
  /** `formtarget` is an attribute of the [`button`](https://developer.mozilla.org/docs/Web/HTML/Element/button) element. */
  formtarget?: string | undefined;
  /** `name` is an attribute of the [`button`](https://developer.mozilla.org/docs/Web/HTML/Element/button) element. */
  name?: string | undefined;
  /** `popovertarget` is an attribute of the [`button`](https://developer.mozilla.org/docs/Web/HTML/Element/button) element. */
  popovertarget?: string | undefined;
  /** `popovertargetaction` is an attribute of the [`button`](https://developer.mozilla.org/docs/Web/HTML/Element/button) element. */
  popovertargetaction?: string | undefined;
  /** `type` is an attribute of the [`button`](https://developer.mozilla.org/docs/Web/HTML/Element/button) element. */
  type?: string | undefined;
  /** `value` is an attribute of the [`button`](https://developer.mozilla.org/docs/Web/HTML/Element/button) element. */
  value?: string | undefined;
}

/**
 * button renders the [`button`](https://developer.mozilla.org/docs/Web/HTML/Element/button) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/button>
 */
export function button(
  props?: ButtonElementProps,
  ...children: string[]
): string {
  return renderElement("button", props as AnyProps, false, children);
}

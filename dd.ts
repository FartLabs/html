import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * DdElementProps are the props for the [`dd`](https://developer.mozilla.org/docs/Web/HTML/Element/dd) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/dd>
 */
export type DdElementProps = GlobalAttributes;

/**
 * dd renders the [`dd`](https://developer.mozilla.org/docs/Web/HTML/Element/dd) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/dd>
 */
export function dd(props?: DdElementProps, ...children: string[]): string {
  return renderElement("dd", props as AnyProps, false, children);
}

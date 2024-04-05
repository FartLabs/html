import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * SpanElementProps are the props for the [`span`](https://developer.mozilla.org/docs/Web/HTML/Element/span) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/span>
 */
export type SpanElementProps = GlobalAttributes;

/**
 * span renders the [`span`](https://developer.mozilla.org/docs/Web/HTML/Element/span) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/span>
 */
export function span(props?: SpanElementProps, ...children: string[]): string {
  return renderElement("span", props as AnyProps, false, children);
}

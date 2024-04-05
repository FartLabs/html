import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * H3ElementProps are the props for the [`h3`](https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements>
 */
export type H3ElementProps = GlobalAttributes;

/**
 * h3 renders the [`h3`](https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements>
 */
export function h3(props?: H3ElementProps, ...children: string[]): string {
  return renderElement("h3", props as AnyProps, false, children);
}

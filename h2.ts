import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * H2ElementProps are the props for the [`h2`](https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements>
 */
export type H2ElementProps = GlobalAttributes;

/**
 * h2 renders the [`h2`](https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements>
 */
export function h2(props?: H2ElementProps, ...children: string[]): string {
  return renderElement("h2", props as AnyProps, false, children);
}

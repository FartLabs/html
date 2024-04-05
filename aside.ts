import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * AsideElementProps are the props for the [`aside`](https://developer.mozilla.org/docs/Web/HTML/Element/aside) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/aside>
 */
export type AsideElementProps = GlobalAttributes;

/**
 * aside renders the [`aside`](https://developer.mozilla.org/docs/Web/HTML/Element/aside) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/aside>
 */
export function aside(
  props?: AsideElementProps,
  ...children: string[]
): string {
  return renderElement("aside", props as AnyProps, false, children);
}

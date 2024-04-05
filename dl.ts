import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * DlElementProps are the props for the [`dl`](https://developer.mozilla.org/docs/Web/HTML/Element/dl) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/dl>
 */
export type DlElementProps = GlobalAttributes;

/**
 * dl renders the [`dl`](https://developer.mozilla.org/docs/Web/HTML/Element/dl) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/dl>
 */
export function dl(props?: DlElementProps, ...children: string[]): string {
  return renderElement("dl", props as AnyProps, false, children);
}

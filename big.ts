import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * big renders the [`big`](https://developer.mozilla.org/docs/Web/HTML/Element/big) element.
 * @deprecated
 */
export function big(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("big", props);
}

import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/** u renders the [`u`](https://developer.mozilla.org/docs/Web/HTML/Element/u) element. */
export function u(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("u", props);
}

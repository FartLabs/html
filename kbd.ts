import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/** kbd renders the [`kbd`](https://developer.mozilla.org/docs/Web/HTML/Element/kbd) element. */
export function kbd(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("kbd", props);
}
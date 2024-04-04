import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/** h1 renders the [`h1`](https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements) element. */
export function h1(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("h1", props);
}

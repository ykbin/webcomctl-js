import { BaseControl } from "webnetq-js"
import { DARKMODE_ATTR_NAME, DARKMODE_DEFAULT_VALUE } from "@/lib/DarkMode";
;import { ROOT_CLASS, PORT_CLASS, CSS } from "./maker.node";

export namespace DocVer1 {

export const classList = {
  ROOT_CLASS,
  PORT_CLASS,
};

export interface InitParams {
};

export function createDocument(document: HTMLDocument): HTMLDocument {
  const doc = document.implementation.createHTMLDocument();
  doc.documentElement.setAttribute(DARKMODE_ATTR_NAME, DARKMODE_DEFAULT_VALUE);
  doc.body.classList.add(ROOT_CLASS, PORT_CLASS);
  return doc;
}

export function initRules(styleSheet: CSSStyleSheet): void {
  for (const iter of CSS)
    styleSheet.insertRule(iter, styleSheet.cssRules.length);
}

export class Control extends BaseControl {
  protected _init() {
  }
}

} // namespace DocVer1

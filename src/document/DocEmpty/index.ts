import { BaseControl } from "webnetq-js"
;import { ROOT_CLASS, PORT_CLASS, RULES } from "./maker.node";

export namespace DocEmpty {

export const classList = {
  ROOT_CLASS,
  PORT_CLASS,
};

export interface InitParams {
};

export function createDocument(document: HTMLDocument): HTMLDocument {
  const doc = document.implementation.createHTMLDocument();
  doc.body.classList.add(PORT_CLASS);
  return doc;
}

export function initRules(styleSheet: CSSStyleSheet): void {
  for (const iter of RULES)
    styleSheet.insertRule(iter, styleSheet.cssRules.length);
}

export class Control extends BaseControl {
  protected _init() {
  }
}

} // namespace DocEmpty

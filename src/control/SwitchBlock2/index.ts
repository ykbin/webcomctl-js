import { SwitchBlockControl } from "@/comp/SwitchBlock/control";
import { NQDOM } from "webnetq-js";
import { ROOT_CLASS, PORT_CLASS, ROOT_HTML, CSS, NTH1_CLASS, NTH2_CLASS } from "./template.node";

export namespace SwitchBlock2 {

export const classList = {
  ROOT_CLASS,
  PORT_CLASS,
};

export function createElement(document: HTMLDocument): HTMLElement {
  return NQDOM.createElement(ROOT_HTML, document) as HTMLElement;
}

export function initRules(styleSheet: CSSStyleSheet): void {
  for (const iter of CSS)
    styleSheet.insertRule(iter, styleSheet.cssRules.length);
}

export class Control extends SwitchBlockControl {
  protected _init() {
    super._init(NTH1_CLASS, NTH2_CLASS);
  }
};

} // namespace SwitchBlock2

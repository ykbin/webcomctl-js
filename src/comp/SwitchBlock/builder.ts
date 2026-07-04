import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";

export namespace SwitchBlock {
export enum Style {
  Normal = 0,
  Flex = 1,
};

interface Template {
  ROOT_CLASS: string;
  PORT_CLASS: string;
  NTH1_CLASS: string;
  NTH2_CLASS: string;
  ROOT_HTML: string;
  CSS: string[];
};

export function template(name: string, style: Style, overflowX: boolean): Template {
  const ROOT_CLASS: string = representClassNames(name + "-ROOT_CLASS");
  const PORT_CLASS: string = representClassNames(name + "-PORT_CLASS");
  const NTH1_CLASS: string = representClassNames(name + "-NTH1_CLASS");
  const NTH2_CLASS: string = representClassNames(name + "-NTH2_CLASS");

  const ROOT_HTML = `
  <div class="${ROOT_CLASS} ${PORT_CLASS} ${NTH1_CLASS}"></div>
  `;

  const css = [];

  if (style === Style.Normal) {
    css.push(`
    .${ROOT_CLASS}
    {
      height: 100%;
      width: inherit;
      box-sizing: border-box;
    }`);
  }

  if (style === Style.Flex) {
    css.push(`
    .${ROOT_CLASS}
    {
      flex-grow: 1;
      width: inherit;
      box-sizing: border-box;
    }`);
  }

  if (overflowX) {
    css.push(`
    .${NTH2_CLASS}
    {
      overflow-x: hidden;
    }`)
  }

  css.push(`
  .${NTH1_CLASS} > *:nth-child(2),
  .${NTH2_CLASS} > *:first-child
  {
    display: none;
  }`)

  const CSS = splitCSS(css.join('\n'));

  return { ROOT_CLASS, PORT_CLASS, NTH1_CLASS, NTH2_CLASS, ROOT_HTML, CSS };
}

export function build(name: string, style: Style, overflowX: boolean) {
  const mk = new ControlMaker(name);

  const clss: any = mk.newClassNameMap([
    "ROOT_CLASS",
    "PORT_CLASS",
    "NTH1_CLASS",
    "NTH2_CLASS",
  ]);

  mk.newHTML('ROOT_HTML', `
  <div class="${clss.ROOT_CLASS} ${clss.PORT_CLASS} ${clss.NTH1_CLASS}"></div>
  `);

  const css = [];

  if (style === Style.Normal) {
    css.push(`
    .${clss.ROOT_CLASS}
    {
      height: 100%;
      width: inherit;
      box-sizing: border-box;
    }`);
  }

  if (style === Style.Flex) {
    css.push(`
    .${clss.ROOT_CLASS}
    {
      flex-grow: 1;
      width: inherit;
      box-sizing: border-box;
    }`);
  }

  if (overflowX) {
    css.push(`
    .${clss.NTH2_CLASS}
    {
      overflow-x: hidden;
    }`)
  }

  css.push(`
  .${clss.NTH1_CLASS} > *:nth-child(2),
  .${clss.NTH2_CLASS} > *:first-child
  {
    display: none;
  }`)

  mk.newCSS('CSS', css);

  return mk.buildComponent();
}

} // namespace SwitchBlock

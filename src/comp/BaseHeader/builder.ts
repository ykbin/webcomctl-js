import ControlMaker from "@/lib/ControlMaker";
import { representClassNames, splitCSS } from "@/lib/CSSHelper";
import { DARKMODE_SELECTOR_VALUE } from "@/lib/DarkMode";
import { COMMON_MOBILE_DEVICE_WIDTH } from "@/lib/WickedTheme";

export namespace BaseHeader {

interface Params {
  type: "main" | "wiki";
};

interface Template {
  ROOT_CLASS: string;
  PORT_CLASS: string;
  ROOT_HTML: string;
  CSS: string[];
};

export function template(name: string, {type}: Params): Template {
  let height = "43px";
  let paddingTopBottom = "5px";
  let paddingRightLeft = "10px";
  let borderColor: [ string, string ] = ['#c2c2c2', '#3c3c3c'];

  if (type === "wiki") {
    height = "60px";
    paddingTopBottom = "0px";
    paddingRightLeft = "20px";
    borderColor = [ '#eaedf1', '#3f3f3f' ];
  }

  const mk = new ControlMaker(name);

  const ROOT_CLASS: string = representClassNames(name + "-ROOT_CLASS");
  const PORT_CLASS: string = representClassNames(name + "-PORT_CLASS");

  const vars = mk.newCSSVariableMap({
    backgroundColor: ['#f9f9f9', '#101010',],
    borderColor,
  });

  const ROOT_HTML = `
    <header class="${ROOT_CLASS} ${PORT_CLASS}" draggable="false"></header>
  `;

  const CSS = splitCSS(`
  :root
  {
    ${vars.toString(0)};
  }

  ${DARKMODE_SELECTOR_VALUE}
  {
    ${vars.toString(1)};
  }

  .${ROOT_CLASS}
  {
    display: flex;
    height: ${height};
    padding: ${paddingTopBottom} ${paddingRightLeft};
    border-bottom: 1px solid ${vars.borderColor.asVar()};
    background-color: ${vars.backgroundColor.asVar()};
    overflow: hidden;
    user-select: none;
    box-sizing: border-box;
    flex-shrink: 0;
  }

  @media (device-width < ${COMMON_MOBILE_DEVICE_WIDTH})
  {
    .${ROOT_CLASS}
    {
      height: 130px;
    }
  }
  `);

  return { ROOT_CLASS, PORT_CLASS, ROOT_HTML, CSS };
}

export function build(name: string, {type}: Params) {
  const mk = new ControlMaker(name);

  let height = "43px";
  let paddingTopBottom = "5px";
  let paddingRightLeft = "10px";
  let borderColor: [ string, string ] = ['#c2c2c2', '#3c3c3c'];

  if (type === "wiki") {
    height = "60px";
    paddingTopBottom = "0px";
    paddingRightLeft = "20px";
    borderColor = [ '#eaedf1', '#3f3f3f' ];
  }

  const clss: any = mk.newClassNameMap([
    "ROOT_CLASS",
    "PORT_CLASS",
  ]);

  const vars = mk.newCSSVariableMap({
    backgroundColor: ['#f9f9f9', '#101010',],
    borderColor,
  });

  mk.newHTML('ROOT_HTML', `
    <header class="${clss.ROOT_CLASS} ${clss.PORT_CLASS}" draggable="false"></header>
  `);

  mk.newCSS('CSS', `
  :root
  {
    ${vars.toString(0)};
  }

  ${DARKMODE_SELECTOR_VALUE}
  {
    ${vars.toString(1)};
  }

  .${clss.ROOT_CLASS}
  {
    display: flex;
    height: ${height};
    padding: ${paddingTopBottom} ${paddingRightLeft};
    border-bottom: 1px solid ${vars.borderColor.asVar()};
    background-color: ${vars.backgroundColor.asVar()};
    overflow: hidden;
    user-select: none;
    box-sizing: border-box;
    flex-shrink: 0;
  }

  @media (device-width < ${COMMON_MOBILE_DEVICE_WIDTH})
  {
    .${clss.ROOT_CLASS}
    {
      height: 130px;
    }
  }
  `);

  return mk.buildComponent();
}

} // namespace BaseHeader

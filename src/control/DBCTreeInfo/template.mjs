import ControlMaker from '../../lib/ControlMaker.mjs';
import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
const mk = new ControlMaker('DBCTreeInfo', import.meta.url);

const vars = mk.newCSSVariableMap({
});

const clss = mk.newClassNameMap([
  "ROOT_CLASS",
  "PORT_CLASS",
  "dbc_tree_off",
  "left_on",
  "dbc_right_panel"
]);

mk.newHTML('ROOT_HTML', `
  <div class="${clss.ROOT_CLASS} ${clss.PORT_CLASS}" style="grid-template-columns: minmax(160px, 225px) 1fr;"></div>
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
  display: grid;
  grid-template-areas: 'left right';
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}

.${clss.ROOT_CLASS} *
{
  box-sizing: border-box;
}

div.${clss.dbc_tree_off} > div.${clss.ROOT_CLASS} > nav,
div.${clss.dbc_tree_off}  > div.${clss.ROOT_CLASS} > nav + div,
div.${clss.dbc_tree_off}  > div.${clss.ROOT_CLASS} > nav + div + span
{
  display: none;
}

div.${clss.dbc_tree_off}  > .${clss.dbc_right_panel} 
{
  padding: 0px 15px 15px 75px;
}

div.${clss.dbc_tree_off} 
{
  grid-template-areas: 'right right';
}

div.${clss.dbc_tree_off}  > div.${clss.left_on}
{
  display: block;
  grid-area: right;
  align-self: start;
  position: sticky;
  top: 10px;
  margin-left: 15px;
  height: 50px;
  width: 45px;
  max-height: initial;
  min-width: auto;
  max-width: initial;
}

div.${clss.dbc_tree_off}  > div.${clss.ROOT_CLASS} > s > div > div
{
  width: 35px;
  height: 30px;
  transition: width 0.250s, height 0.250s;
}

div.${clss.dbc_tree_off}  > div.${clss.left_on} > s > div
{
  width: inherit;
  height: initial;
  margin: 0;
}

div.${clss.dbc_tree_off}  div.${clss.left_on} > s > div:hover
{
  border-radius: 20px;
}

div.${clss.dbc_tree_off}  > div.${clss.left_on} > s
{
  height: inherit;
  width: inherit;
}
`);

export function buildComponent()
{
  return mk.buildComponent();
}
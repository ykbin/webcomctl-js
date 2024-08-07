import ControlMaker from '../../lib/ControlMaker.mjs';

const mk = new ControlMaker('InfoContent', import.meta.url);

export const ROOT_CLASS = mk.newClassName("Root");

export const ROOT_HTML = `
<div class="${ROOT_CLASS}">
</div>
`;

export const CSS = `
.${ROOT_CLASS}
{
  margin: 0px;
  padding: 0px;
}
`;

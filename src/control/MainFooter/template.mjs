import ControlMaker from '../../lib/ControlMaker.mjs';

import { DARKMODE_SELECTOR_VALUE } from '../../lib/DarkMode.mjs';
import { COMMON_MOBILE_DEVICE_WIDTH } from '../../lib/WickedTheme.mjs';

const mk = new ControlMaker('MainFooter', import.meta.url);
export const NAME = mk.name;

export const ROOT_CLASS = mk.newClassName("Root");
export const LIST_CLASS = mk.newClassName("List");
export const VERSION_CLASS = mk.newClassName("Version");
export const LINK_ON_CLASS = mk.newClassName("LnOn");
export const LINK_OFF_CLASS = mk.newClassName("LnOff");

const LINK_COLOR = '#5063b1';
const LINK_BG_COLOR = '#878787';
const VERSION_COLOR = LINK_BG_COLOR;

export const ROOT_HTML = `
<footer class="${ROOT_CLASS} notranslate" translate="no">
  <div class="${LIST_CLASS}">
    <div>
      <span>UTILSPOT</span>
      <div>We create websites with inspiration</div>
    </div>
    <div>
      <span>Our catalog</span>
      <a class="${LINK_ON_CLASS}" href="\${ENV:HOST_URL}" draggable="false">\${ENV:HOST}</a>
    </div>
    <div>
      <span>Contact us</span>
      <div><address>\${ENV:EMAIL}</address></div>
    </div>
  </div>
  <i class="${VERSION_CLASS}">Version<span>\${ENV:VERSION}</span></i>
</footer>
`;

export const CSS = `
:root
{
  --uic-mfooter-col: black;
  --uic-mfooter-root-bg: #fbfbfb;
  --uic-mfooter-root-border: #aab9cb;
  --uic-mfooter-clr: #4e4e4e;
}

${DARKMODE_SELECTOR_VALUE}
{
  --uic-mfooter-col: white;
  --uic-mfooter-root-bg: #2e2e2e;
  --uic-mfooter-root-border: #aab9cb8c;
  --uic-mfooter-clr: #8b8b8b;
}

.${ROOT_CLASS} *
{
  box-sizing: border-box;
}

.${ROOT_CLASS} a.${LINK_OFF_CLASS}
{
  pointer-events: none;
  color: ${LINK_BG_COLOR};
}

.${ROOT_CLASS}
{
  flex-shrink: 0;
  display: grid;
  grid-template-columns: 1fr 110px;
  height: 90px;
  width: 100%;
  padding: 15px 15px 0px 15px;
  box-sizing: border-box;
  border-top: 1px solid var(--uic-mfooter-root-border);
  color: var(--uic-mfooter-col);
  background-color: var(--uic-mfooter-root-bg);
  font-family: Helvetica, Arial, sans-serif;
  container-name: footer;
  container-type: inline-size;
}

@container footer (width < 650px)
{
  .${LIST_CLASS}
  {
    grid-template-columns: minmax(auto, auto) minmax(auto, auto);
  }
  .${LIST_CLASS} > div:nth-child(1)
  {
    display: none;
  }
}

@container footer (width < 450px)
{
  .${LIST_CLASS}
  {
    grid-template-columns: minmax(auto, auto);
  }
  .${LIST_CLASS} > div:nth-child(2)
  {
    display: none;
  }
}

.${LIST_CLASS}
{
  display: grid;
  grid-template-columns: minmax(auto,auto) minmax(auto,auto) minmax(auto,auto);
  justify-content: center;
  grid-gap: 7%;
  margin-bottom: 10px;
  font-family: "Roboto","Oxygen","Ubuntu", "Cantarell","Fira Sans","Droid Sans", "Helvetica Neue",sans-serif;
}

.${LIST_CLASS} > div
{
  font-size: 18px;
  text-align: center;
}

.${LIST_CLASS} > div span
{
  display: block;
  margin-bottom: 5px;
}

.${LIST_CLASS} > div > div
{
  display: block;
  color: var(--uic-mfooter-clr);
  font-size: 16px;
}

.${VERSION_CLASS}
{
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  padding: 0px 5px 5px 0px;
  font-family: Helvetica,Arial,sans-serif;
  font-size: 14px;
  color: ${VERSION_COLOR};
  box-sizing: border-box;
}

.${VERSION_CLASS} > span
{
  margin-left: 5px;
}

.${ROOT_CLASS} a
{
  display: block;
  color: ${LINK_COLOR};
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
}

@media (device-width < ${COMMON_MOBILE_DEVICE_WIDTH})
{
  .${ROOT_CLASS}
  {
    grid-template-columns: 1fr 150px;
    justify-content: start;
    height: 250px;
  }
  .${LIST_CLASS}
  {
    grid-template-columns: minmax(auto,auto) minmax(auto,auto);
  }
  .${LIST_CLASS} > div:nth-child(3)
  {
    grid-column: 1/3;
    justify-self: center;
  }
  .${LIST_CLASS} > div > span
  {
    text-align: center;
    font-size: 33px;
  }
  .${ROOT_CLASS} a 
  {
    font-size: 30px;
  }
  .${LIST_CLASS} > div
  {
    font-size: 25px;
  }
  .${LIST_CLASS} > div > div
  {
    font-size: 28px;
  }
  .${ROOT_CLASS} address,
  .${VERSION_CLASS}
  {
    font-size: 30px;
  }
}

@media (device-width <= 300px)
{
  .${ROOT_CLASS}
  {
    height: 250px;
  }
}
`;

import { representClassNames } from '../lib/CSSHelper.mjs';

import { COMMON_MOBILE_DEVICE_WIDTH } from '../lib/WickedTheme.mjs';

export const NAME = 'MainFooter';

const VAR = {
  LINK_COLOR: '#5063b1',
  VERSION_COLOR: '#878787',
};

export const CLASS = representClassNames({
  ROOT: 'uic-mfooter-root',
  LIST: 'uic-mfooter-list',
  VERSION: 'uic-mfooter-version',
  LINK_ON: 'uic-mfooter-lnon',
  LINK_OFF: 'uic-mfooter-lnoff',
});

export const HTML = `
<footer class="${CLASS.ROOT} notranslate" translate="no">
  <div class="${CLASS.LIST}">
    <div>
      <span>UTILSPOT</span>
      <div>We create websites with inspiration</div>
    </div>
    <div>
      <span>Our catalog</span>
      <a class="${CLASS.LINK_ON}" href="\${ENV:HOST_URL}" draggable="false">\${ENV:HOST}</a>
    </div>
    <div>
      <span>Contact us</span>
      <div><address>\${ENV:EMAIL}</address></div>
    </div>
  </div>
  <i class="${CLASS.VERSION}">Version<span>\${ENV:VERSION}</span></i>
</footer>
`;

export const CSS = `
:root
{
  --uic-mfooter-col: black;
  --uic-mfooter-root-bg: #fbfbfb;
  --uic-mfooter-root-border: #aab9cb;
  --uic-mfooter-clr: #4e4e4e;
  --footer-linkbl: #878787;
}

[data-theme="dark"]
{
  --uic-mfooter-col: white;
  --uic-mfooter-root-bg: #292929;
  --uic-mfooter-root-border: #aab9cb8c;
  --uic-mfooter-clr: #8b8b8b;
  --uic-mfooter-root-bg: #2e2e2e;
}

.${CLASS.ROOT} *
{
  box-sizing: border-box;
}

.${CLASS.ROOT} a.${CLASS.LINK_OFF}
{
  pointer-events: none;
  color: var(--footer-linkbl);
}

.${CLASS.ROOT}
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
  .${CLASS.LIST}
  {
    grid-template-columns: minmax(auto, auto) minmax(auto, auto);
  }
  .${CLASS.LIST} > div:nth-child(1)
  {
    display: none;
  }
}

@container footer (width < 450px)
{
  .${CLASS.LIST}
  {
    grid-template-columns: minmax(auto, auto);
  }
  .${CLASS.LIST} > div:nth-child(2)
  {
    display: none;
  }
}

.${CLASS.LIST}
{
  display: grid;
  grid-template-columns: minmax(auto,auto) minmax(auto,auto) minmax(auto,auto);
  justify-content: center;
  grid-gap: 7%;
  margin-bottom: 10px;
  font-family: "Roboto","Oxygen","Ubuntu", "Cantarell","Fira Sans","Droid Sans", "Helvetica Neue",sans-serif;
}

.${CLASS.LIST} > div
{
  font-size: 18px;
  text-align: center;
}

.${CLASS.LIST} > div span
{
  display: block;
  margin-bottom: 5px;
}

.${CLASS.LIST} > div > div
{
  display: block;
  color: var(--uic-mfooter-clr);
  font-size: 16px;
}

.${CLASS.VERSION}
{
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  padding: 0px 5px 5px 0px;
  font-family: Helvetica,Arial,sans-serif;
  font-size: 14px;
  color: ${VAR.VERSION_COLOR};
  box-sizing: border-box;
}

.${CLASS.VERSION} > span
{
  margin-left: 5px;
}

.${CLASS.ROOT} a
{
  display: block;
  color: ${VAR.LINK_COLOR};
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
}

@media (device-width < ${COMMON_MOBILE_DEVICE_WIDTH})
{
  .${CLASS.ROOT}
  {
    grid-template-columns: 1fr 150px;
    justify-content: start;
    height: 250px;
  }
  .${CLASS.LIST}
  {
    grid-template-columns: minmax(auto,auto) minmax(auto,auto);
  }
  .${CLASS.LIST} > div:nth-child(3)
  {
    grid-column: 1/3;
    justify-self: center;
  }
  .${CLASS.LIST} > div > span
  {
    text-align: center;
    font-size: 33px;
  }
  .${CLASS.ROOT} a 
  {
    font-size: 30px;
  }
  .${CLASS.LIST} > div
  {
    font-size: 25px;
  }
  .${CLASS.LIST} > div > div
  {
    font-size: 28px;
  }
  .${CLASS.ROOT} address,
  .${CLASS.VERSION}
  {
    font-size: 30px;
  }
}

@media (device-width <= 300px)
{
  .${CLASS.ROOT}
  {
    height: 250px;
  }
}
`;

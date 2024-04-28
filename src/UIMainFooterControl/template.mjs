export const NAME = 'MainFooter';

export const CLASS = {
  ROOT: 'uic-mfooter-root',
  LIST: 'uic-mfooter-list',
  VERSION: 'uic-mfooter-version',
};

export const HTML = `
<footer class="${CLASS.ROOT}">
  <div class="${CLASS.LIST}">
    <div>
      <span class="notranslate" translate="no">UTILSPOT</span>
      <div>We create websites with inspiration</div>
    </div>
    <div>
      <span>Our catalog</span>
      <a href="\${ENV:HOST_URL}" class="notranslate" draggable="false" translate="no">\${ENV:HOST}</a>
    </div>
    <div>
      <span>Contact us</span>
      <div class="notranslate" translate="no"><address>\${ENV:EMAIL}</address></div>
    </div>
  </div>
  <i class="${CLASS.VERSION} notranslate" translate="no">Version<span>\${ENV:VERSION}</span></i>
</footer>
`;

export const CSS = `
:root
{
  --uic-mfooter-root-us: #5063b1;
  --uic-mfooter-version: #878787;
  /*light*/
  --uic-mfooter-root-bg: #fbfbfb;
  --uic-mfooter-root-border: #aab9cb;
  --uic-mfooter-clr: #4e4e4e;
  --footer-linkbl: #878787;
}

[data-theme="dark"]
{
  --uic-mfooter-root-border: #aab9cb8c;
  --uic-mfooter-clr: #8b8b8b;
  --uic-mfooter-root-bg: #2e2e2e;
}

.${CLASS.ROOT} *
{
  box-sizing: border-box;
}

.${CLASS.ROOT} a.uic-mfooter-linkbl
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
  background-color: var(--uic-mfooter-root-bg);
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
  color: var(--uic-mfooter-version);
  box-sizing: border-box;
}

.${CLASS.VERSION} > span
{
  margin-left: 5px;
}

.${CLASS.ROOT} a
{
  display: block;
  color: var(--uic-mfooter-root-us);
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
}

@media (device-width < 550px)
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

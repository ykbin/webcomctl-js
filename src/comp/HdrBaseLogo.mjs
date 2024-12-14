import { DARKMODE_SELECTOR_VALUE } from '../lib/DarkMode.mjs';
import { HEADER_MOBILE_DEVICE_WIDTH } from '../lib/WickedTheme.mjs';

export class HdrBaseLogo {
  _favicon;
  _header;

  constructor({favicon, header})
  {
    this._favicon = favicon;
    this._header = header;
  }

  make(mk)
  {
    const clss = mk.newClassNameMap([
      "ROOT_CLASS",
    ]);

    const vars = mk.newCSSVariableMap({
      favicon: this._favicon,
      header: this._header,
    });

    mk.newHTML('ROOT_HTML', `
    <div class="${clss.ROOT_CLASS}">
      <h3></h3>
      <h2></h2>
    </div>
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

    .${clss.ROOT_CLASS} h2,
    .${clss.ROOT_CLASS} h3
    {
      margin: 0px;
      padding: 0px;
      font-size: 1em;
      font-weight: 400;
    }

    .${clss.ROOT_CLASS}
    {
      display: flex;
      height: 33px;
    }

    .${clss.ROOT_CLASS} > h3
    {
      width: 36px;
      height: 100%;
      margin-right: 7px;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      background-image: ${vars.favicon.asVar()};
      flex-shrink: 0;
    }

    .${clss.ROOT_CLASS} > h2
    {
      width: 130px;
      height: 100%;
      margin-right: 15px;
      background-size: 180px;
      background-position-y: center;
      background-position-x: left;
      background-repeat: no-repeat;
      background-image: ${vars.header.asVar()};
      flex-shrink: 0;
    }

    @media (device-width < ${HEADER_MOBILE_DEVICE_WIDTH})
    {
      .${clss.ROOT_CLASS}
      {
        height: 130px;
      }
      .${clss.ROOT_CLASS} > h3
      {
        display: none;
      }
      .${clss.ROOT_CLASS} > h2
      {
        width: 255px;
        background-size: 360px;
      }
    }
    `);
  }
}

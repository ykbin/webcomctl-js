import ControlMaker from '../../lib/ControlMaker.mjs';

import { HdrBaseLogo } from '../../comp/HdrBaseLogo.mjs';

const mk = new ControlMaker('HdrCntLogo', import.meta.url);
const comp = new HdrBaseLogo({
  favicon: [
    await mk.loadSvgAsCssUrl('./favicon1.svg'),
    await mk.loadSvgAsCssUrl('./favicon2.svg'),
  ],
  header: [
    await mk.loadSvgAsCssUrl('./header1.svg'),
    await mk.loadSvgAsCssUrl('./header2.svg'),
  ],
});

comp.make(mk);

export async function buildComponent()
{
  return mk.buildComponent();
}

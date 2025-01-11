import ControlMaker from '../../lib/ControlMaker.mjs';
import { HdrBaseLogoImg } from '../../comp/HdrBaseLogoImg.mjs';

const NAME = "HdrWsckLogoImg";

export async function buildComponent()
{
  const mk = new ControlMaker(NAME, import.meta.url);
  const comp = new HdrBaseLogoImg({
    favicon: [
      await mk.loadSvgAsCssUrl('./favicon1.svg'),
      await mk.loadSvgAsCssUrl('./favicon2.svg'),
    ],
    width: 40,
  });
  
  comp.make(mk);
  return mk.buildComponent();
}

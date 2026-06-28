import { HdrButton } from "@/comp/HdrButton/builder";

import homeDefaultSvg from "./home_default.svg";
import homeLightHoverSvg from "./home_light_hover.svg";
import homeDarkHoverSvg from "./home_dark_hover.svg";

const { ROOT_CLASS, ROOT_HTML, CSS } = HdrButton.template("HdrHomeButton", {
  type: "Link",
  url: "\${ENV:HOST_URL}",
  anchorTarget: "_self",
  text: "Home",
  mainImage: homeDefaultSvg,
  hoverImage: [ homeLightHoverSvg, homeDarkHoverSvg ],
});

export { ROOT_CLASS, ROOT_HTML, CSS };

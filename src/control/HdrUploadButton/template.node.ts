import { HdrButton } from "@/comp/HdrButton/builder";

import searchDefaultSvg from "./search_default.svg";
import searchLightHoverSvg from "./search_light_hover.svg";
import searchDarkHoverSvg from "./search_dark_hover.svg";

const { ROOT_CLASS, HIDDEN_CLASS, ROOT_HTML, CSS } = HdrButton.template("HdrUploadButton", {
  type: "FileUpload",
  text: "Upload",
  mainImage: searchDefaultSvg,
  hoverImage: [ searchLightHoverSvg, searchDarkHoverSvg ],
});

export { ROOT_CLASS, HIDDEN_CLASS, ROOT_HTML, CSS };

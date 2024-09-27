import { BaseControl } from 'webnetq-js';

export default class UIKiKodiss extends BaseControl {
};

console.log(`${project.name} ${project.version}`);

const ctlmgr = ControlManager.getInstance();

ctlmgr.addEventListener('load', () => {

  (() => {
    const kImgViewrId = "img-viewer";
    const kImgListViewId = "img-list-view";

    const imgViewerClick = event => {
      if (event.target.tagName !== "IMG") {
        const imgViewer = document.getElementById(kImgViewrId);
        if(imgViewer) {
          imgViewer.style.display = "none";
        }
      }
    };
    
    const element = document.getElementById(kImgListViewId);
    if (element) {
      for (let i = 0; i < element.children.length; i++) {
        const iter = element.children[i];
        const imgs = iter.getElementsByTagName("img");
        const src = imgs.length == 1 ? imgs[0].src : "";
        if (src) {
          iter.addEventListener("click", event => {
            const imgViewer = document.getElementById(kImgViewrId);
            if (imgViewer) {
              const imgs = imgViewer.getElementsByTagName("img");
              if (imgs.length == 1) {
                imgs[0].src = src;
                imgViewer.style.display = "";
                imgViewer.addEventListener("click", imgViewerClick);
              }
            }
          });
        }
      }
    }
  })()

});

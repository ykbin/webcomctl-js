import { BaseControl, NQDOM } from 'webnetq-js';
import { NAME, HTML, CLASS, CSS } from './template.mjs';

export const template = {
  NAME, HTML, CLASS, CSS,
};

const kThumbSizeMin = 40;

export default class UIScrollControl extends BaseControl {
  static get template() { return {
    name: NAME,
    rootHTML: HTML,
    rootClass:  CLASS.ROOT,
    portClass:  CLASS.PORT,
  } }

  _thmbSize = 0;
  _thmbEnable = null;
  _maxPosition = 0;
  _viewSize = 0;
  _thmbClickState = null;
  _factor = 0.0;

  _scrollElm;
  _scrollBarElement;
  _thmbElement;

  constructor(element) {
    super(element);

    this.registerEvent("changeposition");

    this._thmbElement = NQDOM.getElementByClassName(element, CLASS.THUMB);
    this._thmbElement && this._thmbElement.addEventListener("mousedown", event => {
      if (event.buttons === 1) {
        this._thmbClickState = { dy: event.offsetY };
        event.preventDefault();
      }
      else {
        this._thmbClickState = null;
      }
    });

    this._scrollBarElement = NQDOM.getElementByClassName(element, CLASS.BAR);
    this._scrollBarElement && this._scrollBarElement.addEventListener("mousedown", event => {
      const rect = this._thmbElement.getBoundingClientRect();
      const diff = (event.y < rect.top) ? -this._viewSize : ((event.y > rect.bottom) ? this._viewSize : 0);
      if (diff != 0) {
        const position = this.position;
        this.setPosition(position + diff, true);
      }
      event.preventDefault();
    });

    window.addEventListener("mousemove", event => {
      if (this._thmbClickState) {
        if (event.buttons === 1 && this._scrollBarElement) {
          const rect = this._scrollBarElement.getBoundingClientRect();
          const y = event.pageY - rect.top - this._thmbClickState.dy;
          const height = this._scrollBarElement.clientHeight - this._thmbSize;
          this.setFactor(y / height, true);
        }
        else {
          this._thmbClickState = null;
        }
      }
    });
    
    window.addEventListener("mouseup", event => {
      if (this._thmbClickState && event.button !== 1) {
        this._thmbClickState = null;
      }
    });

    window.addEventListener("resize", event => {
      this.updateThumb(false);
    });

    this.updateThumb(false);
  }
  
  updateThumb(notify) {
    if (!this._scrollBarElement)
      return;

    const height = this._scrollBarElement.clientHeight;
    const scale = Math.min(1, this._viewSize / this._maxPosition);
    const enable = this._viewSize <= this._maxPosition;

    this._thmbSize = Math.max(kThumbSizeMin, Math.floor(scale * height));
    this._thmbElement.style.height = this._thmbSize + "px";
    this._thmbElement.style.top = Math.round((height - this._thmbSize) * this._factor)  + "px";

    if (this._thmbEnable !== enable) {
      this._thmbEnable = enable;
      this._thmbElement.style.display = enable ? "" : "none";
    }
    
    if (notify) {
      this.dispatchEvent("changeposition", { position: this.position });
    }
  }

  setFactor(value, notify) {
    const claimFactor = Math.max(0.0, Math.min(1.0, value));
    if (this._factor !== claimFactor) {
      this._factor = claimFactor;
      this.updateThumb(notify);
    }
  }

  setPosition(value, notify) {
    this.setFactor(value > 0 ? value / (this._maxPosition - this._viewSize) : 0.0, notify);
  }

  // public
  get position() {
    return Math.round((this._maxPosition - this._viewSize) * this._factor);
  }

  set position(value) {
    this.setPosition(value, false);
  }

  get maxPosition() {
    return this._maxPosition;
  }

  set maxPosition(value) {
    if (this._maxPosition != value) {
      this._maxPosition = value;
      this.updateThumb(false);
    }
  }

  get viewSize() {
    return this._viewSize;
  }

  set viewSize(value) {
    if (this._viewSize != value) {
      this._viewSize = value;
      this.updateThumb(false);
    }
  }
};

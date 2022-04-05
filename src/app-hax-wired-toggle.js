import {
  rectangle,
  hachureEllipseFill,
  ellipse,
  svgNode,
} from 'wired-elements/lib/wired-lib.js';
import { WiredToggle } from 'wired-elements/lib/wired-toggle.js';
import { css, unsafeCSS } from 'lit';
import { store, AppHaxStore } from './AppHaxStore.js';
import {
  autorun,
  toJS,
} from 'mobx';
// need to highjack in order to alter the scale so we can fit our icon
// for states
const sun = new URL('../lib/assets/images/sun.svg', import.meta.url).href;
const moon = new URL('../lib/assets/images/moon.svg', import.meta.url).href;
export class AppHAXWiredToggle extends WiredToggle {
  constructor() {
    super();
    autorun(() => {
      this.checked = toJS(store.darkMode);
    });
  }
  // eslint-disable-next-line class-methods-use-this
  canvasSize() {
    return [100, 60];
  }

  static get tag() {
    return 'app-hax-wired-toggle';
  }

  draw(svg, size) {
    const rect = rectangle(svg, 0, 8, size[0], 40, this.seed);
    rect.classList.add('toggle-bar');
    this.knob = svgNode('g');
    this.knob.classList.add('knob');
    svg.appendChild(this.knob);
    const knobFill = hachureEllipseFill(26, 26, 40, 40, this.seed);
    knobFill.classList.add('knobfill');
    this.knob.appendChild(knobFill);
    ellipse(this.knob, 26, 26, 40, 40, this.seed);
  }

  static get properties() {
    return {
      checked: {
        type: Boolean,
        reflect: true,
      },
      disabled: {
        type: Boolean,
        reflect: true,
      },
    };
  }

  updated(changedProperties) {
    if (super.updated) {
      super.updated(changedProperties);
    }
    changedProperties.forEach((oldValue, propName) => {
      if (propName === "checked" && oldValue !== undefined) {
        store.darkMode = this[propName];
        AppHaxStore.playSound('click');
      }
    });
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host div {
          background-image: url(http://localhost:8000/lib/assets/images/sun.svg);
          background-repeat: no-repeat;
          --wired-toggle-off-color: #00e1ff;
          --wired-toggle-on-color: #00e1ff;
          background-position-x: 50px;
          width: 100px;
          display: inline-flex;
        }
        :host([checked]) div {
          background-image: url('${unsafeCSS(moon)}');
          background-position: left;
        }
        input {
          width: 100px;
          height: 60px;
          padding: 0;
          margin: 0;
      }
      `,
    ];
  }
}
customElements.define(AppHAXWiredToggle.tag, AppHAXWiredToggle);

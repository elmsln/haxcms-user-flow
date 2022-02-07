// dependencies / things imported
import { html, css } from 'lit';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';

// EXPORT (so make available to other documents that reference this file) a class, that extends LitElement
// which has the magic life-cycles and developer experience below added
export class HAXCMSSiteBars extends SimpleColors {
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return 'haxcms-site-bar';
  }

  // HTMLElement life-cycle, built in; use this for setting defaults
  constructor() {
    super();
    this.icon = 'add';
  }

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  static get properties() {
    return {
      icon: { type: String, reflect: true },
    };
  }

  // updated fires every time a property defined above changes
  // this allows you to react to variables changing and use javascript to perform logic
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'need' && this[propName] === 'joy') {
        this.classList.add('joyful');
      }
    });
  }

  // Lit life-cycle; this fires the 1st time the element is rendered on the screen
  // this is a sign it is safe to make calls to this.shadowRoot
  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
  }

  // HTMLElement life-cycle, element has been connected to the page / added or moved
  // this fires EVERY time the element is moved
  connectedCallback() {
    super.connectedCallback();
  }

  // HTMLElement life-cycle, element has been removed from the page OR moved
  // this fires every time the element moves
  disconnectedCallback() {
    super.disconnectedCallback();
  }

  // CSS - specific to Lit
  static get styles() {
    return css`
      :host {
        --main--banner--width: 500px;
        --main--banner--height: 90px;
      }

      #mainCard {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: var(--main-banner-color, blue);
        width: var(--main--banner--width);
        height: var(--main--banner--height);
      }

      #band {
        background-color: var(--hidden-band-color, green);
        display: flex;
        flex-direction: column;
        padding-left: 10px;
        transition: height 3s;
        height: 0px;
        width: var(--main--banner--width);
        overflow: hidden;
      }
      button {
        background-color: transparent;
        border: none;
      }
      simple-icon-lite {
        color: black;
        pointer-events: none;
      }
      a {
        flex: 1;
      }
      #labels {
        flex: 6;
      }
      #plus {
        --simple-icon-width: 49px;
        --simple-icon-height: 49px;
      }
      #dots {
        --simple-icon-width: 49px;
        --simple-icon-height: 49px;
      }
    `;
  }

  __clickButton() {
    const element = this.renderRoot.querySelector('#band');
    if (element.style.height === '180px') {
      element.style.height = '0px';
    } else {
      const height = getComputedStyle(element).getPropertyValue(
        '--main--banner--height'
      );
      console.log(height);
      const newHeight = this.__cssPropToNumber(height);
      element.style.height = newHeight;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  __cssPropToNumber(property) {
    let newProperty = property.slice(0, -2);
    newProperty *= 2;
    return `${newProperty}px`;
  }

  // HTML - specific to Lit
  render() {
    return html`
      <div id="mainCard">
        <a href="https://www.psu.edu"
          ><simple-icon-lite icon=${this.icon} id="plus"></simple-icon-lite
        ></a>
        <div id="labels">
          <p><slot name="heading"></slot></p>
          <p><slot name="subHeading"></slot></p>
        </div>
        <button @click=${this.__clickButton}>
          <simple-icon-lite icon="more-vert" id="dots"></simple-icon-lite>
        </button>
      </div>
      <div id="band">
        <p>hellow</p>
      </div>
    `;
  }

  // HAX specific callback
  // This teaches HAX how to edit and work with your web component
  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`../lib/rename-me.haxProperties.json`, import.meta.url).href;
  }
}

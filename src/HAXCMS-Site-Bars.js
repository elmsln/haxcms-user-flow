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
    this.opened = false;
    this.inprogress = false;
  }

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  static get properties() {
    return {
      ...super.properties,
      opened: { type: Boolean, reflect: true },
      icon: { type: String, reflect: true },
      inprogress: { type: Boolean, reflect: true },
    };
  }

  // updated fires every time a property defined above changes
  // this allows you to react to variables changing and use javascript to perform logic
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (
        propName === 'opened' &&
        this[propName] === false &&
        oldValue !== undefined
      ) {
        this.style.animationName = `fadegradientaway`;
      }
      if (propName === 'opened' && this[propName] === true) {
        this.style.animationName = undefined;
      }
    });
  }

  // CSS - specific to Lit
  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          --main-banner-width: 500px;
          --main-banner-height: 90px;
          --main-banner-color: #132279;
          --band-banner-color: #2746f8;
          display: inline-block;
          background-image: linear-gradient(
            var(--simple-colors-default-theme-accent-10) 80%,
            var(--simple-colors-default-theme-accent-6)
          );
          animation-duration: 3s;
        }

        :host([opened]) {
          transition: 3s;
          background-image: linear-gradient(
            var(--simple-colors-default-theme-accent-10),
            var(--simple-colors-default-theme-accent-9),
            var(--simple-colors-default-theme-accent-8),
            var(--simple-colors-default-theme-accent-7),
            var(--simple-colors-default-theme-accent-6)
          );
        }

        @keyframes fadegradientaway {
          0% {
            background-image: linear-gradient(
              var(--simple-colors-default-theme-accent-10) 50%,
              var(--simple-colors-default-theme-accent-6)
            );
          }

          100% {
            background-image: linear-gradient(
              var(--simple-colors-default-theme-accent-10) 90%,
              var(--simple-colors-default-theme-accent-6)
            );
          }
        }

        #mainCard {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          width: var(--main-banner-width);
          height: var(--main-banner-height);
        }

        #band {
          display: flex;
          flex-direction: column;
          transition: height 3s;
          height: 0px;
          width: var(--main-banner-width);
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
      `,
    ];
  }

  __clickButton() {
    const element = this.renderRoot.querySelector('#band');
    if (element.style.height === '180px') {
      element.style.height = '0px';
      this.opened = false;
      this.inprogress = true;
    } else {
      this.opened = true;
      this.inprogress = true;
      const height = getComputedStyle(element).getPropertyValue(
        '--main-banner-height'
      );

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
          <slot name="heading"></slot>
          <slot name="subHeading"></slot>
        </div>
        <button @click=${this.__clickButton}>
          <simple-icon-lite icon="more-vert" id="dots"></simple-icon-lite>
        </button>
      </div>
      <div id="band">
        <slot name="band"></slot>
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

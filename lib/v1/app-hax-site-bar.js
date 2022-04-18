/* eslint-disable no-console */
// dependencies / things imported
import { html, css } from 'lit';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icon-button-lite';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors.js';
import { animate } from '@lit-labs/motion';

// EXPORT (so make available to other documents that reference this file) a class, that extends LitElement
// which has the magic life-cycles and developer experience below added
export class AppHaxSiteBars extends SimpleColors {
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return 'app-hax-site-bar';
  }

  // HTMLElement life-cycle, built in; use this for setting defaults
  constructor() {
    super();
    this.icon = 'add';
    this.opened = false;
    this.inprogress = false;
    this.iconLink = 'https://www.psu.edu';
  }

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  static get properties() {
    return {
      ...super.properties,
      opened: { type: Boolean, reflect: true },
      icon: { type: String },
      inprogress: { type: Boolean, reflect: true },
      iconLink: { type: String, attribute: 'icon-link' },
    };
  }

  // updated fires every time a property defined above changes
  // this allows you to react to variables changing and use javascript to perform logic
  updated(changedProperties) {
    if (super.updated) {
      super.updated(changedProperties);
    }
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'opened') {
        this.dispatchEvent(new CustomEvent(`${propName}-changed`, {
          detail: {
            value: this[propName]
          }
        }))
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
          --main-banner-height: 80px;
          --band-banner-height: 150px;
          display: inline-block;
          background-image: linear-gradient(
            var(--simple-colors-default-theme-accent-9) 80%,
            var(--simple-colors-default-theme-accent-6)
          );
          color: var(--simple-colors-default-theme-accent-1);
        }

        :host([opened]) {
          background-image: linear-gradient(
            var(--simple-colors-default-theme-accent-12),
            var(--simple-colors-default-theme-accent-8)
          );
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
          height: 1px;
          width: var(--main-banner-width);
          visibility: none;
          overflow: hidden;
        }

        :host([opened]) #band {
          height: var(--band-banner-height);
          visibility: visible;
        }
        a {
          flex: 1;
        }
        #labels {
          flex: 6;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        #icon {
          --simple-icon-width: 49px;
          --simple-icon-height: 49px;
          color: var(--simple-colors-default-theme-accent-1);
        }
        #dots {
          --simple-icon-width: 49px;
          --simple-icon-height: 49px;
          color: var(--simple-colors-default-theme-accent-1);
        }
      `,
    ];
  }

  __clickButton() {
    this.opened = !this.opened;
  }

  // HTML - specific to Lit
  render() {
    return html`
      <div id="mainCard">
        <a href="${this.iconLink}" tabindex="-1">
          <simple-icon-button-lite icon=${this.icon} id="icon"></simple-icon-button-lite
        ></a>
        <div id="labels">
          <slot name="heading"></slot>
          <slot name="subHeading"></slot>
        </div>
        <simple-icon-button-lite icon="more-vert" id="dots" @click=${this.__clickButton}></simple-icon-button-lite>
      </div>
      <div id="band" ${animate()}>
        <slot name="band"></slot>
      </div>
    `;
  }

  // HAX specific callback
  // This teaches HAX how to edit and work with your web component
  /**
   * haxProperties integration via file reference
   */
}
customElements.define(AppHaxSiteBars.tag, AppHaxSiteBars);

// dependencies / things imported
import { html, css } from 'lit';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';
import 'wired-elements/lib/wired-button.js';

// EXPORT (so make available to other documents that reference this file) a class, that extends LitElement
// which has the magic life-cycles and developer experience below added
export class HAXCMSSiteButton extends SimpleColors {
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return 'hax-cms-site-button';
  }

  // HTMLElement life-cycle, built in; use this for setting defaults
  constructor() {
    super();
    this.label = null;
    this.disabled = false;
  }

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  static get properties() {
    return {
      label: { type: String },
      disabled: { type: Boolean, reflect: true },
    };
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

  // TODO: Use .js events to manage statefulness (hover, focus, click)
  // Try making hover into elevation scales

  // CSS - specific to Lit
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-family: 'Press Start 2P', cursive;
      }
      .haxButton {
        background-color: white;
        color: black;
        font-size: 36px;
        border: 10px;
      }
      .dialogBox {
        color: #0f460f;
      }
    `;
  }

  buttonAlert() {
    console.log(`button PRESS + ${this.disabled}`);
    if (!this.disabled) {
      alert('hey');
      this.shadowRoot.querySelector('.haxButton').blur();
    }
  }

  // HTML - specific to Lit
  render() {
    return html`
      <div>
        <wired-button
          elevation="3"
          ?disabled=${this.disabled}
          class="haxButton"
          @click="${this.buttonAlert}"
          >${this.label}</wired-button
        >
      </div>
    `;
  }

  // HAX specific callback
  // This teaches HAX how to edit and work with your web component
  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`../lib/app.haxProperties.json`, import.meta.url).href;
  }
}

// dependencies / things imported
import { html, css } from 'lit';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';
// import { WiredButton, WiredDialog } from 'wired-elements';
import 'wired-elements/lib/wired-button.js';
import 'wired-elements/lib/wired-dialog.js';

// EXPORT (so make available to other documents that reference this file) a class, that extends LitElement
// which has the magic life-cycles and developer experience below added
export class WiredElementsTest extends SimpleColors {
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return 'wired-elements-test';
  }

  // HTMLElement life-cycle, built in; use this for setting defaults
  constructor() {
    super();
    this.label = null;
  }

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  static get properties() {
    return {
      label: { type: String },
    };
  }

  // updated fires every time a property defined above changes
  // this allows you to react to variables changing and use javascript to perform logic
  //   updated(changedProperties) {
  //     changedProperties.forEach((oldValue, propName) => {
  //       if (propName === 'need' && this[propName] === 'a win') {
  //         this.classList.add('joyful');
  //       }
  //     });
  //   }

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
    // document.getElementById('openDialog').addEventListener('click', () => {
    //     document.querySelector('wired-dialog').open = true;
    // });
    // document.getElementById('closeDialog').addEventListener('click', () => {
    //     document.querySelector('wired-dialog').open = false;
    // });
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
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-family: 'Press Start 2P', cursive;
      }
      .styled {
        background-color: paleturquoise;
        color: maroon;
        font-size: 48px;
      }
      .dialogBox {
        color: #0f460f;
      }
    `;
  }

  openDialog() {
    console.log('click');
    this.shadowRoot.querySelector('wired-dialog').open = true;
  }

  closeDialog() {
    this.shadowRoot.querySelector('wired-dialog').open = false;
  }

  buttonAlert() {
    alert('hey', this);
  }

  // HTML - specific to Lit
  render() {
    return html`
      <p>
        <wired-button elevation="4" @click="${this.buttonAlert}" class="styled"
          >${this.label}</wired-button
        >
      </p>
      <p>
        <wired-button id="openDialog" @click="${this.openDialog}"
          >Show dialog</wired-button
        >
      </p>
      <wired-dialog class="dialogBox">
        <p>WOOOOOOOOOOOOO</p>
        <div style="text-align: right; padding: 30px 16px 16px;">
          <wired-button id="closeDialog" @click="${this.closeDialog}"
            >Close dialog</wired-button
          >
        </div>
      </wired-dialog>
    `;
  }
  // press start 2p

  // HAX specific callback
  // This teaches HAX how to edit and work with your web component
  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`../lib/rename-me.haxProperties.json`, import.meta.url).href;
  }
}

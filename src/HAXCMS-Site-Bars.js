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
    this.need = 'all need to succeed';
  }

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  static get properties() {
    return {
      label: { type: String, reflect: true },
      course_title: { type: String },
      icon: { type: String },
      show_details: { type: String },
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
      #mainCard {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: blue;
      }
      #hidden {
        display: flex;
        flex-direction: column;
      }
      simple-icon-lite {
        color: black;
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

  // HTML - specific to Lit
  render() {
    return html`
      <div id="mainCard">
        <a href="https://www.psu.edu"
          ><simple-icon-lite icon="add" id="plus"></simple-icon-lite
        ></a>
        <div id="labels">
          <p>Who the man</p>
          <p>I'm the man</p>
        </div>
        <a href="https://www.psu.edu"
          ><simple-icon-lite icon="more-vert" id="dots"></simple-icon-lite
        ></a>
      </div>
      <div id="hidden">
        <span>adfkdlhs</span>
        <span>fdsgsdgfsg</span>
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

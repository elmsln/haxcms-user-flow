// dependencies / things imported
import { LitElement, html, css } from 'lit';

// EXPORT (so make available to other documents that reference this file) a class, that extends LitElement
// which has the magic life-cycles and developer experience below added
export class RenameMe extends LitElement {
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return 'rename-me';
  }

  // HTMLElement life-cycle, built in; use this for setting defaults
  constructor() {
    super();
    this.need = 'all need to succeed';
  }

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  static get properties() {
    return {
      need: { type: String, reflect: true },
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
      display: block;
    }

    #mainCard {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      background-color: #66d9ff;
    }

    #hidden {
      visibility: hidden;
      background-color: #ccf2ff;
      display: flex;
      flex-direction: column;
      padding-left: 10px;
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

    #hidden {
      height: 84px;
    }
    
    .table {
      display: table;
      margin: 0 auto;
    }
    
    ul#horizontal-list {
      min-width: 696px;
      list-style: none;
      padding-top: 20px;
      }

      ul#horizontal-list li {
        display: inline;
      }

      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333333;
      }
      
      li {
        float: middle;
      }
      
      li a {
        display: block;
        color: white;
        text-align: center;
        padding: 16px;
        text-decoration: none;
      }
      
      li a:hover {
        background-color: #111111;
      }
    `;
  }

  // HTML - specific to Lit
  render() {
    return html`
      <h1>Make me awesome</h1>
      <p>Build the future we ${this.need}.</p>
      <slot></slot>
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

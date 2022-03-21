// dependencies / things imported
import { LitElement, html, css } from 'lit';

// EXPORT (so make available to other documents that reference this file) a class, that extends LitElement
// which has the magic life-cycles and developer experience below added
export class HAXCMSIntroLabel extends LitElement {
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return 'haxcms-intro-label';
  }

  constructor() {
    super();
    this.title = 'Welcome';
    this.subtitle = 'Start your journey now!';
  }

  static get properties() {
    return {
      title: { type: String, reflect: true },
      subtitle: { type: String, reflect: true },
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

  // CSS - specific to Lit
  static get styles() {
    return css`
      :host {
        font: sans-serif;
        color: white;
      }
      :root {
        --accent-color: white;
      }

      @media (prefers-color-scheme: dark) {
        :root {
          --accent-color: black;
        }
        .titles {
          -webkit-text-stroke: 0px var(--accent-color);
          -webkit-text-fill-color: white;
        }
      }

      .introLabel {
        text-align: center;
        margin: 0;
        font-size: 50px;
      }

      .title {
        -webkit-text-stroke: 1px var(--accent-color);
        -webkit-text-fill-color: white;
      }

      .bracket {
        font-size: 100px;
        font-weight: 400;
        vertical-align: middle;
        -webkit-text-stroke: 0px;
        -webkit-text-fill-color: var(--accent-color);
      }

      .title {
        display: inline;
      }
      .title ::slotted(*) {
        display: inline;
        font-size: 50px;
        vertical-align: middle;
      }
    `;
  }

  // HTML - specific to Lit
  render() {
    return html`
      <div class="introLabel">
        <h1 class="title">
          <span class="bracket">&#60;</span><slot name="title"></slot
          ><span class="bracket">&#62;</span>
        </h1>
        <h2 class="subtitle">
          <slot name="subtitle"></slot>
        </h2>
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

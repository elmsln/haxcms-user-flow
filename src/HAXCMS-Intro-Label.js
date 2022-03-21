// dependencies / things imported
import { LitElement, html, css } from 'lit';

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

  // CSS - specific to Lit
  static get styles() {
    return css`
      :host {
        font: sans-serif;
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
        font-weight: normal;
        margin-bottom: 0px;
      }

      .subtitle {
        color: var(--accent-color);
        font-weight: normal;
        margin-top: 0px;
      }

      .bracket {
        font-size: 100px;
        font-weight: 400;
        vertical-align: middle;
        -webkit-text-stroke: 0px;
        -webkit-text-fill-color: var(--accent-color);
      }

      .title ::slotted(*) {
        display: inline;
        font-size: 50px;
        vertical-align: middle;
      }

      .subtitle ::slotted(*) {
        font-size: 24px;
        vertical-align: middle;
        padding-top: 0px;
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

  static get haxProperties() {
    return new URL(`../lib/app.haxProperties.json`, import.meta.url).href;
  }
}

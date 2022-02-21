import { LitElement, css, html } from 'lit';
import 'scrollable-component';
import './HAXCMSAppRouter.js';
import './hax-app-steps.js';

export class HAXCMSApp extends LitElement {
  static get tag() {
    return 'haxcms-app';
  }

  static get properties() {
    return {
      courses: { type: Array },
    };
  }

  static get styles() {
    return [
      css`
        :host {
          display: block;
          height: 100vh;
          width: 100vh;
          border: 1px red solid;
        }
      `,
    ];
  }

  render() {
    return html`<hax-app-steps></hax-app-steps> `;
  }
}
customElements.define(HAXCMSApp.tag, HAXCMSApp);

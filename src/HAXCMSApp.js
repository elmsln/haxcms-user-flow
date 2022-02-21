import { LitElement, css, html } from 'lit';
import 'scrollable-component';
import './HAXCMSAppRouter.js';
import './HAXCMS-Create-Profolio.js';

export class HAXCMSApp extends LitElement {
  static get tag() {
    return 'haxcms-app';
  }

  constructor() {
    super();
    this.step = 1; // This is for accessing only!
    this.routes = []; // Set equal to HAXCMSCreateProfile.routes
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
    return html` <haxcms-create-profile></haxcms-create-profile> `;
  }
}
customElements.define(HAXCMSApp.tag, HAXCMSApp);

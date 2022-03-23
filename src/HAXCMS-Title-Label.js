import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';

// EXPORT (so make available to other documents that reference this file) a class, that extends LitElement
// which has the magic life-cycles and developer experience below added
export class HAXCMSTitleLabel extends SimpleColors {
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return 'haxcms-title-label';
  }

  constructor() {
    super();
    this.text = 'Welcome';
  }

  static get properties() {
    return {
      text: { type: String },
    };
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

  static get styles() {
    return css``;
  }

  render() {
    return html` <p>${this.text}</p> `;
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
customElements.define(HAXCMSTitleLabel.tag, HAXCMSTitleLabel);

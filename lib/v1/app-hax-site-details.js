// dependencies / things imported
import { LitElement, html, css } from 'lit';

// EXPORT (so make available to other documents that reference this file) a class, that extends LitElement
// which has the magic life-cycles and developer experience below added
export class AppHaxSiteDetails extends LitElement {
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return 'app-hax-site-details';
  }

  // HTMLElement life-cycle, built in; use this for setting defaults
  constructor() {
    super();
    this.need = 'all need to succeed';
    this.topRow = {
      created: '02.11.22',
      updated: '03.14.22',
      pages: 23,
      url: 'last-first',
    };
  }

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  static get properties() {
    return {
      topRow: { type: Object, reflect: true },
    };
  }

  // CSS - specific to Lit
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 12px;
        align-items: stretch;
        background-color: #f1f1f1;
        border-top: 5px;
        border-style: solid;
        border-color: #000000;
        height: 208px;
      }

      .flex-container {
        background-color: #f1f1f1;
        margin: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
      .info-group {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0px;
      }
      .info-item {
        font-size: 12px;
      }
    `;
  }

  // HTML - specific to Lit
  render() {
    return html`
      <div class="flex-container">
          <div class="info-group">
            <p class="info-item">created</p>
            <p class="info-item">${this.topRow.created}</p>
          </div>
          <div class="info-group">
            <p class="info-item">updated</p>
            <p class="info-item">${this.topRow.updated}</p>
          </div>
          <div class = info-group>
            <p class="info-item">pages</p>
            <p class="info-item">${this.topRow.pages}</p>
          </div>
          <div class = info-group>
            <p class="info-item">URL</p>
            <a href=${this.topRow.url} class="info-item">${this.topRow.url}</a>
          </div>
      </div>
        <div class="flex-container">
            <div class="info-group">
              <p class="info-item">publish</p>
              <simple-icon-button-lite icon="more-vert" id="dots" class="info-item"></simple-icon-button-lite>
            </div>
            <div class="info-group">
              <p class="info-item">copy</p>
              <simple-icon-button-lite icon="more-vert" id="dots" class="info-item"></simple-icon-button-lite>
            </div>
            <div class="info-group">
              <p class="info-item">download</p>
              <simple-icon-button-lite icon="more-vert" id="dots" class="info-item"></simple-icon-button-lite>
            </div>
            <div class="info-group">
              <p class="info-item">delete</p>
              <simple-icon-button-lite icon="more-vert" id="dots" class="info-item"></simple-icon-button-lite>
            </div>
        </div>
      </div>
    `;
  }

  // HAX specific callback
  // This teaches HAX how to edit and work with your web component
  /**
   * haxProperties integration via file reference
   */
}
customElements.define(AppHaxSiteDetails.tag, AppHaxSiteDetails);

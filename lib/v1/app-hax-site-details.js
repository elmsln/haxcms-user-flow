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
  }

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  static get properties() {
    return {
      need: { type: String, reflect: true },
    };
  }

  // CSS - specific to Lit
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: stretch;
        background-color: #f1f1f1;
        border-top: 5px;
        border-style: solid;
        border-color: #000000;
      }

      .info-group {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .info-container p {
        color: #000000;
        padding: 15px 30px;
        width: 25%;
        display: flex;
      }

      .flex-container > div {
        background-color: #f1f1f1;
        margin: 10px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        display: flex;
      }
    `;
  }

  // HTML - specific to Lit
  render() {
    return html`
      <div class="flex-container">
        <div class="info-container">
          <div class="info-group" style="border: 10px solid gray;">
            <p>created</p>
            <p>02.11.22</p>
          </div>
          <div class="info-group">
            <p>updated</p>
            <p>03.14.22</p>
          </div>
          <div class="info-group">
            <p>pages</p>
            <p>23</p>
          </div>
          <div class="info-group">
            <p>URL</p>
            <p>last-first</p>
          </div>
        </div>
      </div>

        <div class="flex-container">
          <div class="info-container">
            <div class="info-group">
              <p>publish</p>
              <simple-icon-button-lite icon="more-vert" id="dots"></simple-icon-button-lite>
            </div>
            <div class="info-group">
              <p>copy</p>
              <simple-icon-button-lite icon="more-vert" id="dots"></simple-icon-button-lite>
            </div>
            <div class="info-group">
              <p>download</p>
              <simple-icon-button-lite icon="more-vert" id="dots"></simple-icon-button-lite>
            </div>
            <div class="info-group">
              <p>delete</p>
              <simple-icon-button-lite icon="more-vert" id="dots"></simple-icon-button-lite>
            </div>
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

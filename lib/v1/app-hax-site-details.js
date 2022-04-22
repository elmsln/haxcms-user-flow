// dependencies / things imported
import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/simple-datetime/simple-datetime.js';

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
    this.toprow = {
      created: '02.11.22',
      updated: '03.14.22',
      pages: 23,
      url: 'last-first',
    };
  }

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  static get properties() {
    return {
      toprow: { type: Object, reflect: true },
    };
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    changedProperties.forEach((oldValue, propName) => {
      console.log(`${propName} : ${oldValue}`);
      if (propName === 'topRow' && oldValue === undefined) {
        // Code not running
        console.log('I changed the value');
        this.toprow = {
          created: '02.11.22',
          updated: '03.14.22',
          pages: 23,
          url: 'last-first',
        };
      }
    });
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
        /* border-top: 5px;
        border-style: solid;
        border-color: #000000; */
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
      .info-icon {
        --simple-icon-width: 49px;
        --simple-icon-height: 49px;
      }
    `;
  }

  // HTML - specific to Lit
  render() {
    return html`
      <div class="flex-container" id="infomation">
          <div class="info-group">
            <p class="info-item">created</p>
            <simple-datetime
                      format="M jS, Y"
                      timestamp="${this.toprow.created}"
                      unix
                      clas="info-item"
                  ></simple-datetime>
          </div>
          <div class="info-group">
            <p class="info-item">updated</p>
            <simple-datetime
                      format="M jS, Y"
                      timestamp="${this.toprow.updated}"
                      unix
                      clas="info-item"
                  ></simple-datetime>
          </div>
          <div class = info-group>
            <p class="info-item">pages</p>
            <p class="info-item">${this.toprow.pages}</p>
          </div>
          <div class = info-group>
            <p class="info-item">URL</p>
            <a href=${this.toprow.url} class="info-item">${this.toprow.url}</a>
          </div>
      </div>
        <div class="flex-container" id="actions">
            <div class="info-group">
              <simple-icon-button-lite icon="more-vert" id="dots" class="info-icon"></simple-icon-button-lite>
              <p class="info-item">publish</p>
            </div>
            <div class="info-group">
              <simple-icon-button-lite icon="content-copy" id="dots" class="info-icon"></simple-icon-button-lite>  
              <p class="info-item">copy</p>
            </div>
            <div class="info-group">
              <simple-icon-button-lite icon="file-download" id="dots" class="info-icon"></simple-icon-button-lite>
              <p class="info-item">download</p>
            </div>
            <div class="info-group">
              <simple-icon-button-lite icon="delete-forever" id="dots" class="info-icon"></simple-icon-button-lite>
              <p class="info-item">delete</p>
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

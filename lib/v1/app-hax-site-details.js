// dependencies / things imported
import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/simple-datetime/simple-datetime.js';
import { store } from './AppHaxStore.js';

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
      created: 1650655304,
      updated: 1650655304,
      pages: 23,
      url: 'last-first',
    };
    this.siteId = "";
  }

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  static get properties() {
    return {
      toprow: { type: Object, reflect: true },
      siteId: {type: String, reflect: true, attribute: 'site-id'}
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
          created: 1650655304,
          updated: 1650655304,
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
        flex: 1;
        background-color: #f1f1f1;
        margin: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
      }
      .info-group {
        height: 100%;
        max-width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 0px;
        flex: 1;
      }

      .info-headings {
        font-size: 12px;
      }
      .info-item {
        display: block;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .info-date {
        color: black;
        line-height: 12px;
        font-size: 12px;
      }

      .info-icon {
        --simple-icon-width: 49px;
        --simple-icon-height: 49px;
      }
      @media (max-width: 500px) {
        .btn-group button {
          padding: 4px;
          margin: 4px 0;
        }
        .flex-container > div {
          margin: 0px;
        }
      }
    `;
  }

  // HTML - specific to Lit
  render() {
    return html`
    ${console.log(`${typeof this.toprow.created} ${this.toprow.created}`)}
      <div class="flex-container" id="infomation">
          <div class="info-group">
            <div class="info-headings">created</div>
            <simple-datetime
                      format="m/j/y"
                      .timestamp="${this.toprow.created}"
                      unix
                      class="info-date"
                  ></simple-datetime>
          </div>
          <div class="info-group">
            <div class="info-headings">updated</div>
            <simple-datetime
                      format="m/j/y"
                      .timestamp="${this.toprow.created}"
                      unix
                      class="info-date"
                  ></simple-datetime>
          </div>
          <div class = info-group>
            <div class="info-headings">pages</div>
            <div class="info-item">${this.toprow.pages}</div>
          </div>
          <div class = info-group>
            <div class="info-headings">URL</div>
            <a href=${
              this.toprow.url
            } class="info-item" id="slug">${this.toprow.url
      .split('sites/')
      .pop()}</a>
          </div>
      </div>
        <div class="flex-container" id="actions">
            <div class="info-group">
              <simple-icon-button-lite data-site="${this.siteId}" data-site-operation="publish" icon="editor:publish" id="dots" class="info-icon" @click=${store.siteOperation}></simple-icon-button-lite>
              <div class="info-item">publish</div>
            </div>
            <div class="info-group">
              <simple-icon-button-lite data-site=${this.siteId} data-site-operation="copy" icon="content-copy" id="dots" class="info-icon" @click=${store.siteOperation}></simple-icon-button-lite>  
              <div class="info-item">copy</div>
            </div>
            <div class="info-group">
              <simple-icon-button-lite data-site=${this.siteId} data-site-operation="download" icon="file-download" id="dots" class="info-icon" @click=${store.siteOperation}></simple-icon-button-lite>
              <div class="info-item">download</div>
            </div>
            <div class="info-group">
              <simple-icon-button-lite data-site=${this.siteId} data-site-operation="delete" icon="delete-forever" id="dots" class="info-icon" @click=${store.siteOperation}></simple-icon-button-lite>
              <div class="info-item">delete</div>
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

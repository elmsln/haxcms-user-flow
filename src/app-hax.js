import { LitElement, css, html } from 'lit';
import '@lrnwebcomponents/rpg-character/rpg-character.js';
import { toJS, autorun } from 'mobx';
import { store } from './AppHaxStore.js';
import './AppHaxRouter.js';
import './app-hax-steps.js';
import './app-hax-site-login.js';
import './app-hax-site-details.js';
import './app-hax-label.js';
import './app-hax-top-bar.js';
import './app-hax-search-bar.js';
import './app-hax-search-results.js';

export class AppHax extends LitElement {
  static get tag() {
    return 'app-hax';
  }

  constructor() {
    super();
    this.courses = [];
    this.activeItem = {
      label: 'Welcome',
    };
    this.source = new URL('../demo/site.json', import.meta.url).href;
    // @todo need this from app deploy itself
    this.sitesBase = 'https://iam.hax.psu.edu';
    import('@lrnwebcomponents/simple-modal/simple-modal.js');
    autorun(() => {
      this.userName = toJS(store.user.name);
    });
  }

  static get properties() {
    return {
      courses: { type: Array },
      source: { type: String },
      userName: { type: String },
      activeItem: { type: Object },
    };
  }

  // eslint-disable-next-line class-methods-use-this
  getData() {
    fetch(this.source)
      .then(response => response.json())
      .then(data => {
        this.courses = [];
        data.items.forEach(item => {
          const courseInfo = {
            title: item.title,
            description: item.description,
            link: this.sitesBase.concat(item.slug),
            icon: item.metadata.theme.variables
              ? item.metadata.theme.variables.icon
              : '',
          };
          this.courses.push(courseInfo);
        });
      });
  }

  // eslint-disable-next-line class-methods-use-this
  reset() {
    localStorage.setItem('step', '');
    localStorage.setItem('darkMode', '');
    localStorage.setItem('site', '');
    window.location.reload();
  }

  // eslint-disable-next-line class-methods-use-this
  toggleUser() {
    store.isNewUser = !store.isNewUser;
  }

  // eslint-disable-next-line class-methods-use-this
  login() {
    console.log('Login BTN clicked');
    const p = document.createElement('app-hax-site-login');
    const evt = new CustomEvent('simple-modal-show', {
      bubbles: true,
      cancelable: true,
      detail: {
        title: 'Please login to get started',
        elements: { content: p },
        invokedBy: this,
      },
    });

    this.dispatchEvent(evt);
  }

  static get styles() {
    return [
      css`
        :host {
          display: block;
        }
        rpg-character {
          transform: scale(0.4, 0.4);
          margin: -36px -35px 0px 0px;
          vertical-align: text-top;
          position: fixed;
          top: 0px;
          right: 0px;
          overflow: hidden;
          height: 120px;
        }
        app-hax-top-bar {
          top: 0;
          position: sticky;
        }
        .label {
          text-align: center;
          margin-top: 48px;
        }
        app-hax-label {
          display: block;
        }
        .space-hack {
          display: inline-flex;
          width: 64px;
          height: 48px;
        }
      `,
    ];
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    autorun(() => {
      this.activeItem = toJS(store.activeItem);
    });
  }

  render() {
    return html` <app-hax-top-bar>
        <app-hax-wired-toggle slot="right"></app-hax-wired-toggle>
        <div class="space-hack" slot="right"></div>
        <rpg-character
          seed="${this.userName}"
          circle
          slot="right"
        ></rpg-character>
      </app-hax-top-bar>
      <div class="label">
        <app-hax-label
          ><span>${this.activeItem.label}</span>
          <div slot="subtitle">${this.activeItem.statement}</div></app-hax-label
        >
      </div>

      <app-hax-steps></app-hax-steps>`;
  }
}
customElements.define(AppHax.tag, AppHax);

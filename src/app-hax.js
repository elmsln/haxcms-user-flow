import { LitElement, css, html } from 'lit';
import '@lrnwebcomponents/rpg-character/rpg-character.js';
import { store } from './AppHaxStore.js';
import { toJS, autorun } from "mobx";
import './AppHaxRouter.js';
import './app-hax-steps.js';
import './app-hax-site-login.js'
import './app-hax-site-button.js';
import './app-hax-site-details.js';
import './app-hax-intro-label.js';
import './app-hax-portfolio-button.js';
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
    this.source = new URL('../demo/site.json', import.meta.url).href;
    // @todo need this from app deploy itself
    this.sitesBase = 'https://iam.hax.psu.edu';
    import('@lrnwebcomponents/simple-modal/simple-modal.js');
    autorun(() => { this.userName = toJS(store.user.name)});
  }

  static get properties() {
    return {
      courses: { type: Array },
      source: { type: String },
      userName: { type: String}
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
  login(){
    console.log("Login BTN clicked");
    const p = document.createElement("app-hax-site-login");
      const evt = new CustomEvent("simple-modal-show", {
        bubbles: true,
        cancelable: true,
        detail: {
          title: 'Please login to get started',
          elements: { content: p },
          invokedBy: this,
        }
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
          transform: scale(.4, 0.4);
          margin: -70px -35px 0px 0px;
          vertical-align: text-top;
        }
        app-hax-top-bar {
          top: 0;
          position: sticky;
        }
        .introLabel {
          text-align: center;
          font-size: 4vw;
        }
        app-hax-intro-label {
          margin-top: 200px;
          display: block;
        }
      `,
    ];
  }

  render() {
    return html`
        <app-hax-top-bar>
          <app-hax-wired-toggle slot="right"></app-hax-wired-toggle>
          <rpg-character seed="${this.userName}" circle slot="right"></rpg-character>
        </app-hax-top-bar>
        <div class="introLabel">
          <app-hax-intro-label><span>Whatever</span><div slot="subtitle">Start your journey now!</div></app-hax-intro-label>
        </div>
        <app-hax-steps></app-hax-steps>`;
  }
}
customElements.define(AppHax.tag, AppHax);

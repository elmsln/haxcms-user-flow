import { LitElement, css, html } from 'lit';
import './HAXCMSAppRouter.js';
import { store } from './HAXCMSAppStore.js';
import './hax-app-steps.js';

export class HAXCMSApp extends LitElement {
  static get tag() {
    return 'haxcms-app';
  }

  constructor() {
    super();
    this.demo = false;
  }

  static get properties() {
    return {
      courses: { type: Array },
      demo: { type: Boolean },
    };
  }

  // eslint-disable-next-line class-methods-use-this
  getData() {
    const file = new URL('../assets/site.json', import.meta.url).href;
    fetch(file)
      .then(response => response.json())
      .then(data => {
        this.courses = [];
        data.items.forEach(item => {
          const courseInfo = {
            title: item.title,
            description: item.description,
            link: 'https://oer.hax.psu.edu'.concat(item.location),
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
    localStorage.setItem('site', '');
    window.location.reload();
  }

  // eslint-disable-next-line class-methods-use-this
  toggleUser() {
    store.isNewUser = !store.isNewUser;
  }

  static get styles() {
    return [
      css`
        :host {
          display: block;
          height: 100vh;
          width: 100vh;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          justify-content: center;
        }
        #resetbtn {
          bottom: 0;
          right: 0;
          position: absolute;
          font-size: 50px;
          border: 0;
          background-color: orange;
          color: text;
          cursor: pointer;
        }
        #togglebtn {
          bottom: 0;
          left: 0;
          position: absolute;
          font-size: 50px;
          border: 0;
          background-color: orange;
          color: text;
          cursor: pointer;
        }
      `,
    ];
  }

  render() {
    return html`${this.demo
        ? html`<button id="resetbtn" @click=${this.reset}>reset app</button
            ><button id="togglebtn" @click=${this.toggleUser}>
              toggle user
            </button>`
        : ``} <hax-app-steps></hax-app-steps>`;
  }
}
customElements.define(HAXCMSApp.tag, HAXCMSApp);

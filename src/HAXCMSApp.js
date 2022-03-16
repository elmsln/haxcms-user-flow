import { LitElement, css, html } from 'lit';
import 'scrollable-component';
import './HAXCMSAppRouter.js';
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
    console.log(`reset`);
    localStorage.setItem('step', '');
    localStorage.setItem('site', '');
    window.location.reload();
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
          align-items: center;
          justify-content: center;
        }
      `,
    ];
  }

  render() {
    return this.demo
      ? html`
          <button @click=${this.reset}>reset</button>
          <hax-app-steps></hax-app-steps>
        `
      : html` <hax-app-steps></hax-app-steps> `;
  }
}
customElements.define(HAXCMSApp.tag, HAXCMSApp);

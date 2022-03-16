import { LitElement, css, html } from 'lit';
import 'scrollable-component';
import './HAXCMSAppRouter.js';
import './hax-app-steps.js';

export class HAXCMSApp extends LitElement {
  static get tag() {
    return 'haxcms-app';
  }

  static get properties() {
    return {
      courses: { type: Array },
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
    return html`<hax-app-steps></hax-app-steps>`;
  }
}
customElements.define(HAXCMSApp.tag, HAXCMSApp);

import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors.js';
import { html, css } from 'lit';
import './HAXCMS-Site-Bars.js';

export class HAXCMSSearchBar extends SimpleColors {
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return 'haxcms-search-bar';
  }

  constructor() {
    super();
    this.searchTerm = '';
    this.searchItems = [];
    this.displayItems = [];
  }

  static get properties() {
    return {
      ...super.properties,
      searchTerm: { type: String, reflect: true },
      searchItems: { type: Array },
      displayItems: { type: Array },
    };
  }

  firstUpdated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'searchItems') {
        fetch('../assets/site.json')
          .then(res => res.json())
          // eslint-disable-next-line no-return-assign
          .then(data => (this.searchItems = data.items));
      }
    });
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'searchItems') {
        this.displayItems = [...this.searchItems];
      }
      if (propName === 'searchTerm') {
        this.displayItems = this.searchItems.filter(word => {
          if (word.title.includes(this.searchTerm)) {
            return true;
          }
          return false;
        });
      }
    });
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        input {
          color: red;
        }
      `,
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  search(e) {
    const searchBar = e.target.id;
    this.searchTerm = this.shadowRoot.querySelector(`#${searchBar}`).value;
  }

  render() {
    return html`
      <p>Enter Stuff into Me</p>
      <input id="searchField" @input=${this.search} type="text" />
      <ul>
        ${this.displayItems.map(
          item =>
            html`<li>
              <haxcms-site-bar accent-color="green"
                ><p slot="heading">${item.title}</p></haxcms-site-bar
              >
            </li>`
        )}
      </ul>
    `;
  }

  static get haxProperties() {
    return new URL(`../lib/app.haxProperties.json`, import.meta.url).href;
  }
}

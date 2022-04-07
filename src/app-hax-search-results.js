/* eslint-disable no-return-assign */
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors.js';
import { html, css } from 'lit';
import { autorun, toJS } from 'mobx';
import { store } from './AppHaxStore.js';
import './app-hax-site-bars.js';

export class AppHaxSearchResults extends SimpleColors {
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return 'app-hax-search-results';
  }

  constructor() {
    super();

    autorun(() => {
      this.searchTerm = toJS(store.searchTerm);
    });

    this.searchItems = [];
    this.displayItems = [];
    this.jsonLoc = '../demo/site.json';
  }

  // Site.json is coming from

  static get properties() {
    return {
      ...super.properties,
      searchTerm: { type: String, reflect: true },
      searchItems: { type: Array },
      displayItems: { type: Array },
      jsonLoc: { type: String },
    };
  }

  firstUpdated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'searchItems') {
        fetch(this.jsonLoc)
          .then(res => res.json())
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
          if (
            word.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
            word.description
              .toLowerCase()
              .includes(this.searchTerm.toLowerCase()) ||
            word.author.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
            word.slug.toLowerCase().includes(this.searchTerm.toLowerCase())
          ) {
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
        :host {
          overflow: hidden;
        }
      `,
    ];
  }

  render() {
    return html`
      <ul id="results">
        ${this.displayItems.map(
          item =>
            html`<li>
              <app-hax-site-bar accent-color="green">
                <p slot="heading">${item.title}</p>
                <p slot="sub-heading">${item.author}</p>
                <p slot="band">${item.description}</p>
              </app-hax-site-bar>
            </li>`
        )}
      </ul>
    `;
  }
}
customElements.define(AppHaxSearchResults.tag, AppHaxSearchResults);
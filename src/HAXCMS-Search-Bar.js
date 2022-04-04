/* eslint-disable no-return-assign */
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors.js';
import { html, css } from 'lit';
import { store } from './HAXCMSAppStore.js';
import './HAXCMS-Site-Bars.js';

export class HAXCMSSearchBar extends SimpleColors {
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return 'haxcms-search-bar';
  }

  constructor() {
    super();
    this.searchTerm = '';
  }

  // Site.json is coming from

  static get properties() {
    return {
      ...super.properties,
      searchTerm: { type: String, reflect: true },
    };
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'searchItems') {
        this.displayItems = [...this.searchItems];
      }
      if (propName === 'searchTerm') {
        store.searchTerm = this.searchTerm;
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

  // eslint-disable-next-line class-methods-use-this
  search(e) {
    const searchBar = e.target.id;
    this.searchTerm = this.shadowRoot.querySelector(`#${searchBar}`).value;
  }

  render() {
    return html`
      <p>Enter Stuff into Me</p>
      <input id="searchField" @input=${this.search} type="text" />
    `;
  }
}

import { LitElement, html } from "lit";
import "@lrnwebcomponents/jwt-login/jwt-login.js";
import { store } from "./AppHaxStore.js";

// this element will manage all connectivity to the backend
// this way everything is forced to request through calls to this
// so that it doesn't get messy down below in state
export class AppHaxBackendAPI extends LitElement {
  static get tag() {
    return 'app-hax-backend-api';
  }
  constructor() {
    super();
    this.jwt = null;
    this.baseCall = '';
    this.createSiteEndpoint = '';
    this.getSitesEndpoint = '';
    this.loginEndpoint = '';
    this.refreshUrl = '';
    this.redirectUrl = '';
    this.logoutUrl = '';
    this.jwtUrl = '';
  }
  static get properties() {
    return {
      jwt: { type: String },
      baseCall: { type: String, attribute: 'base-call' },
      createSiteEndpoint: { type: String },
      getSitesEndpoint: { type: String },
      loginEndpoint: { type: String },
      refreshUrl: {
        type: String,
      },
      redirectUrl: {
        type: String,
      },
      logoutUrl: {
        type: String,
      },
      jwtUrl: {
        type: String,
      }
    }
  }

  render() {
    html`
    <jwt-login
    auto
    id="jwt"
    jwt="${this.jwt}"
    @jwt-changed="${this.jwtChanged}"
    url="${this.jwtUrl}"
    refresh-url="${this.refreshUrl}"
    redirect-url="${this.redirectUrl}"
    logout-url="${this.logoutUrl}"
  ></jwt-login>`;
  }
  // event meaning we either got or removed the jwt
  jwtChanged(e) {
    this.jwt = e.detail.value;
  }

  async makeCall(base, url, data) {
    return await fetch(`${base}/${url}`, data)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return {};
      });
  }
  async getSites(name = store.user) {
    return await this.makeCall(this.baseCall, this.getSitesEndpoint, { name: name});
  }
  async createSite(site) {
    return await this.makeCall(this.baseCall, this.createSiteEndpoint, site);
  }
  // set instance of API in store
  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    // set store refernece to this singleton
    store.AppHaxAPI = this;
  }
  updated(changedProperties) {
    if (super.updated) {
      super.updated(changedProperties);
    }
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'jwt') {
        store.jwt = this[propName];
      }
    });
  }
}


window.AppHaxAPI = window.AppHaxAPI || {};

window.AppHaxAPI.requestAvailability = () => {
  if (!window.AppHaxAPI.instance) {
    window.AppHaxAPI.instance = document.createElement(AppHaxBackendAPI.tag);
    document.body.appendChild(window.AppHaxAPI.instance);
  }
  return window.AppHaxAPI.instance;
};
export const AppHaxAPI = window.AppHaxAPI.requestAvailability();

customElements.define(AppHaxBackendAPI.tag, AppHaxBackendAPI);
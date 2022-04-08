import { LitElement, html } from "lit";
import "@lrnwebcomponents/jwt-login/jwt-login.js";
import { store } from "./AppHaxStore.js";
import { toJS, autorun } from 'mobx';

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
    this.baseAddress = '/';
    this.appEndpoints = {};
    this.lastResponse = {};
  }
  static get properties() {
    return {
      jwt: { type: String },
      baseAddress: { type: String, attribute: 'base-address' },
      appEndpoints: { type: Object },
    }
  }

  render() {
    html`
    <jwt-login
    auto
    id="jwt"
    jwt="${this.jwt}"
    @jwt-changed="${this.jwtChanged}"
    url="${this.appEndpoints.jwtUrl}"
    refresh-url="${this.appEndpoints.refreshUrl}"
    redirect-url="${this.appEndpoints.redirectUrl}"
    logout-url="${this.appEndpoints.logoutUrl}"
  ></jwt-login>`;
  }
  // event meaning we either got or removed the jwt
  jwtChanged(e) {
    this.jwt = e.detail.value;
  }

  async makeCall(call, data = {}, save = false) {
    if (this.appEndpoints && this.appEndpoints[call]) {
      const response = await fetch(`${this.baseAddress}${this.appEndpoints[call]}`, data)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          return {};
        });
      // ability to save the output if this is being done as a bg task
      // that way we can get access to the result later on
      if (save) {
        this.lastResponse[call] = response;
      }
      return response;
    }
  }
  // set instance of API in store
  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    // set store refernece to this singleton
    store.AppHaxAPI = this;
    autorun(() => {
      this.appEndpoints = toJS(store.appEndpoints);
    });
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
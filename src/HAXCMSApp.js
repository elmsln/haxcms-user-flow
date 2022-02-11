import { LitElement, css, html } from "lit";
import { animate } from '@lit-labs/motion';
import "scrollable-component";
import "./HAXCMSAppRouter.js";
import { store } from "./HAXCMSAppStore.js";
import {
  autorun,
  toJS
} from "mobx";

export class HAXCMSApp extends LitElement {
  static get tag() {
    return "haxcms-app";
  }
  constructor() {
    super();
    this.step = 1;
    this.routes = [
      { path: "step-1", component: "fake", step: 1, id: "step-1", label: "Welcome" },
      { path: "step-2", component: "fake", step: 2, id: "step-2", label: "Step 2" },
      { path: "step-3", component: "fake", step: 3, id: "step-3", label: "Select styles" },
      { path: "step-4", component: "fake", step: 4, id: "step-4", label: "Get writing!" },
    ];
  }
  firstUpdated() {
    autorun(() => {
      if (
        store.location &&
        store.location.route &&
        store.location.route.id
        ) {
        // use ID from location change to scroll into view
        this.shadowRoot.querySelector("#" + toJS(store.location.route.id)).scrollIntoView({block: "start", inline: "nearest", behavior: "smooth"});
      }
    });
    autorun(() => {
      const activeItem = toJS(store.activeItem);
      if (activeItem && activeItem.id) {
        if (activeItem.step != this.step) {
          this.step = activeItem.step;
        }
        this.shadowRoot.querySelector("#link-" + toJS(activeItem.id)).click();
      }
    });
  }
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (["step", "routes"].includes(propName)) {
        store[propName] = this[propName];
      }
    });
  }
  static get properties() {
    return {
      step: { type: Number, reflect: true},
      routes: { type: Array }
    }
  }

  static get styles() {
    return [css`
    :host {
      display: block;
    }
    scrollable-component {
      --scrollbar-width: 12px;
      --scrollbar-padding: 0;
      --content-padding: 0 0 25px 0;
      --content-row-height: 100%;
      --viewport-scroll-snap-type: x mandatory;
      background: linear-gradient(to top, #f9f8f7 12px, transparent 12px);
      overflow: hidden;
    }
    .carousel-with-snapping-track {
      display: grid;
      grid-auto-flow: column;
      grid-gap: 30px;
    }
    .carousel-with-snapping-item {
      scroll-snap-align: center;
      scroll-snap-stop: always;
      width: var(--viewport-width);
      height: 250px;
      background-color: #f9f8f7;
      font-size: 1.5rem;
      line-height: 250px;
      text-align: center;
    }
    li {
      display: inline-flex;
      margin: 4px;
    }
    li a {
      text-decoration: none;
      padding: 10px;
    }
    li a:hover,
    li a:focus {
      background-color: blue;
      color: white;
    }
    li a.active-step {
      background-color: orange;
      color: white;
      border: 1px solid black;
    }
    `];
  }
  render() {
    return html`
    <haxcms-app-router></haxcms-app-router>
    <ul>
    ${this.routes.map((item) => html`<li><a href="${item.path}" id="link-${item.id}" ${animate()} class="${this.step === item.step ? "active-step" : ""}">${item.label}</a></li>`)}
    </ul>
<scrollable-component>
  <div class="carousel-with-snapping-track">
    ${this.routes.map((item) => html`
    <div class="carousel-with-snapping-item" id="${item.id}">${item.label}</div>
    `)}
  </div>
</scrollable-component>`;
  }
}
customElements.define(HAXCMSApp.tag, HAXCMSApp);
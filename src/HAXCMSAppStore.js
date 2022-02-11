import {
    observable,
    makeObservable,
    computed,
    configure,
    autorun,
  } from "mobx";
configure({ enforceActions: false, useProxies: "ifavailable" }); // strict mode off
class Store {
  constructor() {
    this.location = null;
    this.step = 1;
    this.routes = [];
    makeObservable(this, {
      location: observable.ref, // router location in url
      step: observable, // step that we're on in our build
      routes: observable, // routes that are valid
      activeItem: computed, // active item is route
    });
  }
  get activeItem() {
    if (this.routes) {
      return this.routes.find((item) => {
        if (item.step !== this.step) {
          return false;
        }
        return true;
      });
    }
    return null;
  }
}
/**
 * Central store
 */
 export const store = new Store();
 // register globally so we can make sure there is only one
 window.HAXCMS = window.HAXCMS || {};
 // request if this exists. This helps invoke the element existing in the dom
 // as well as that there is only one of them. That way we can ensure everything
 // is rendered through the same modal
 window.HAXCMS.requestAvailability = () => {
   if (!window.HAXCMS.instance) {
     window.HAXCMS.instance = document.createElement("haxcms-app-store");
     document.body.appendChild(window.HAXCMS.instance);
   }
   return window.HAXCMS.instance;
 };
 // weird, but self appending
 export const HAXcmsStore = window.HAXCMS.requestAvailability();

 /**
 * HTMLElement
 */
export class HAXCMSAppStore extends HTMLElement {
  static get tag() {
    return "haxcms-app-store";
  }
  constructor() {
    super();
    // full on store that does the heavy lifting
    this.store = store;
    // source for reading in the store if different than default site.json
    this.source = "";
    /**
     * When location changes update activeItem
     */
    autorun(() => {
      if (
        store.location &&
        store.location.route
      ) {
        // get the id from the router
        this.store.step = store.location.route.step;
      }
    });
  }
}
customElements.define(HAXCMSAppStore.tag, HAXCMSAppStore);
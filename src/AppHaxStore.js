/* eslint-disable max-classes-per-file */
import {
  localStorageGet,
  localStorageSet,
} from '@lrnwebcomponents/utils/utils.js';
import {
  observable,
  makeObservable,
  computed,
  configure,
  autorun,
  toJS,
} from 'mobx';

configure({ enforceActions: false, useProxies: 'ifavailable' }); // strict mode off

class Store {
  constructor() {
    this.location = null;
    this.isNewUser = true;
    // If user is new, make sure they are on step 1

    if (this.isNewUser) {
      this.step = 1;
    } else {
      this.step = !localStorageGet('step') ? 1 : localStorageGet('step');
    }
    this.isLoggedIn = true;
    this.routes = [];
    this.searchTerm = '';
    this.user = {
      name: 'btopro',
    };
    this.site = !localStorageGet('site')
      ? { structure: null, type: null, theme: null }
      : localStorageGet('site');

    this.darkMode = !localStorageGet('darkMode')
      ? false
      : localStorageGet('darkMode');

    makeObservable(this, {
      location: observable.ref, // router location in url
      step: observable, // step that we're on in our build
      searchTerm: observable,
      isNewUser: observable,
      isLoggedIn: observable,
      routes: observable, // routes that are valid
      site: observable, // information about the site being created
      activeItem: computed, // active item is route
      darkMode: observable,
      user: observable,
    });
  }

  // site{ structure, type, theme } (course, portfolio, buz, colors)
  get activeItem() {
    if (this.routes.length > 0 && this.step) {
      return this.routes.find(item => {
        if (item.step !== this.step) {
          return false;
        }
        return true;
      });
    }
    // fake it if we have nothing on initial tee-up
    return null;
  }

  resetApp() {
    this.step = 1;
    this.site = { structure: null, type: null, theme: null };
  }
}
/**
 * Central store
 */
export const store = new Store();
// register globally so we can make sure there is only one
window.AppHax = window.AppHax || {};
// request if this exists. This helps invoke the element existing in the dom
// as well as that there is only one of them. That way we can ensure everything
// is rendered through the same modal
window.AppHax.requestAvailability = () => {
  if (!window.AppHax.instance) {
    window.AppHax.instance = document.createElement('app-hax-store');
    document.body.appendChild(window.AppHax.instance);
  }
  return window.AppHax.instance;
};

// weird, but self appending
export const AppHaxStore = window.AppHax.requestAvailability();

// toggle store darkmode
function darkToggle(e) {
  if (e.matches) {
    // dark mode
    store.darkMode = true;
  } else {
    // light mode
    store.darkMode = false;
  }
}

/**
 * HTMLElement
 */
export class AppHaxStoreEl extends HTMLElement {
  static get tag() {
    return 'app-hax-store';
  }

  constructor() {
    super();
    // full on store that does the heavy lifting
    this.store = store;
    // source for reading in the store if different than default site.json
    this.source = '';
    // centralized sound source to not flood sounds when playing
    this.sound = new Audio();
    /**
     * When location changes update activeItem
     */
    autorun(() => {
      if (store.location && store.location.route) {
        // get the id from the router
        const siteCopy = toJS(store.site);
        siteCopy.step = toJS(store.location.route.step);
        store.step = siteCopy.step;
        if (siteCopy.structure === null && siteCopy.step !== 1) {
          store.step = 1;
        } else if (
          siteCopy.structure !== null &&
          siteCopy.type === null &&
          siteCopy.step !== 2
        ) {
          store.step = 2;
        } else if (
          siteCopy.structure !== null &&
          siteCopy.type !== null &&
          siteCopy.theme === null &&
          siteCopy.step !== 3
        ) {
          store.step = 3;
        } else if (
          siteCopy.structure !== null &&
          siteCopy.type !== null &&
          siteCopy.theme !== null
        ) {
          store.step = 4;
        }
      }
    });

    // AutoRun block to detect to detect if site.structure is null but step == 3, set step to 2.

    autorun(() => {
      if (store.routes.length > 0 && store.location == null) {
        store.location = toJS(store.routes[0]);
      }
    });
    autorun(() => {
      localStorageSet('step', toJS(store.step));
    });
    autorun(() => {
      localStorageSet('site', toJS(store.site));
    });
    autorun(() => {
      localStorageSet('darkMode', toJS(store.darkMode));
      if (toJS(store.darkMode)) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    });
  }

  // eslint-disable-next-line class-methods-use-this
  playSound(sound) {
    switch (sound) {
      case 'click':
      case 'click2':
      case 'coin':
      case 'coin2':
      case 'hit':
      case 'success':
        this.audio = new Audio(
          new URL(`../lib/assets/sounds/${sound}.mp3`, import.meta.url).href
        );
        this.audio.play();
        break;
      default:
        this.audio = new Audio(
          new URL(`../lib/assets/sounds/hit.mp3`, import.meta.url).href
        );
        this.audio.play();
        console.warn(`${sound} is not a valid sound file yet`);
        break;
    }
  }

  connectedCallback() {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', darkToggle);
  }

  disconnectedCallback() {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .removeEventListener('change', darkToggle);
  }
}
customElements.define(AppHaxStoreEl.tag, AppHaxStoreEl);

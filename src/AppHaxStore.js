/* eslint-disable max-classes-per-file */
import {
  localStorageGet,
} from '@lrnwebcomponents/utils/utils.js';
import {
  observable,
  makeObservable,
  computed,
  configure,
} from 'mobx';
import { AppHaxAPI } from './AppHaxBackendAPI.js';

configure({ enforceActions: false, useProxies: 'ifavailable' }); // strict mode off

class Store {
  constructor() {
    this.location = null;
    this.jwt = null; // useful to know when we're logged in
    this.createSiteSteps = false;
    this.isNewUser = true;
    this.AppHaxAPI = AppHaxAPI;
    this.AppHaxAPI.baseCall = '';
    this.AppHaxAPI.getSitesEndpoint = 'demo/sites.json';
    this.newSitePromiseList = [
      () => this.AppHaxAPI.createSite(this.site),
      () => import('@lrnwebcomponents/i18n-manager/lib/I18NMixin.js'),
      () => import('@lrnwebcomponents/wc-autoload/wc-autoload.js'),
      () => import('@lrnwebcomponents/replace-tag/replace-tag.js'),
      () => import('@lrnwebcomponents/utils/utils.js'),
      () => import('@lrnwebcomponents/grid-plate/grid-plate.js'),
      () => import('mobx/dist/mobx.esm.js'),
      () => import('@lrnwebcomponents/simple-fields/simple-fields.js'),
      () => import('@lrnwebcomponents/h-a-x/h-a-x.js'),
    ];
    this.appEl = null;
    this.appReady = false;
    this.soundStatus = localStorageGet('app-hax-soundStatus', true);
    // If user is new, make sure they are on step 1

    if (this.isNewUser) {
      this.step = 1;
    }
    this.routes = [];
    this.searchTerm = '';
    this.user = {
      name: '',
    };
    this.site = !localStorageGet('app-hax-site')
      ? { structure: null, type: null, theme: null }
      : localStorageGet('app-hax-site');

    this.darkMode = !localStorageGet('app-hax-darkMode')
      ? false
      : localStorageGet('app-hax-darkMode');

    makeObservable(this, {
      // internal state for routing
      location: observable.ref, // router location in url
      routes: observable, // routes that are valid
      activeItem: computed, // active item is route
      // internal state requirements
      appReady: observable, // all ready to paint
      createSiteSteps: observable, // if we're making a site or in another part of app
        step: observable, // step that we're on in our build
        site: observable, // information about the site being created
        newSitePromiseList: observable,
      // user related data
      jwt: observable,
      user: observable, // user object like name after login
      isNewUser: observable, // if they are new so we can auto kick to createSiteSteps if needed
      isLoggedIn: computed, // basic bool for logged in
      // user preferences
      searchTerm: observable, // current search term for filtering own list of sites
      darkMode: observable, // dark mode pref
      soundStatus: observable, // toggle sounds on and off
    });
  }

  get isLoggedIn() {
    return (this.jwt !== 'null' && this.jwt);
  }

  // site{ structure, type, theme } (course, portfolio, buz, colors)
  get activeItem() {
    if (this.routes.length > 0 && this.location && this.location.route) {
      return this.location.route;
    }
    // fake it if we have nothing on initial tee-up
    return {};
  }
  // centralize toast messages
  toast(msg, duration = 3000, extras = {}) {
    window.dispatchEvent(new CustomEvent("rpg-character-toast-show", {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: {
        text: msg,
        duration: duration,
        ...extras
      },
    }));
  }
}
/**
 * Central store
 */
export const store = new Store();
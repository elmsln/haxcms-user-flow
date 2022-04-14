import { autorun, toJS } from 'mobx';
import { store } from './AppHaxStore.js';
import { WiredDarkmodeToggle } from '../wired-darkmode-toggle/wired-darkmode-toggle.js';

export class AppHAXWiredToggle extends WiredDarkmodeToggle {
  constructor() {
    super();
    autorun(() => {
      this.checked = toJS(store.darkMode);
    });
  }

  static get tag() {
    return 'app-hax-wired-toggle';
  }

  updated(changedProperties) {
    if (super.updated) {
      super.updated(changedProperties);
    }
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'checked' && oldValue !== undefined) {
        store.darkMode = this[propName];
        store.appEl.playSound('click');
      }
    });
  }
}
customElements.define(AppHAXWiredToggle.tag, AppHAXWiredToggle);

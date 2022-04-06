import { LitElement, css, html } from 'lit';
import { localStorageSet, localStorageGet } from '@lrnwebcomponents/utils/utils.js';
import '@lrnwebcomponents/rpg-character/rpg-character.js';
import { toJS, autorun } from 'mobx';
import { store } from './AppHaxStore.js';
import './AppHaxRouter.js';
import './app-hax-steps.js';
import './app-hax-site-login.js';
import './app-hax-site-details.js';
import './app-hax-label.js';
import './app-hax-top-bar.js';
import './app-hax-search-bar.js';
import './app-hax-search-results.js';

const haxLogo = new URL('../lib/assets/images/HAXLogo.svg', import.meta.url).href;
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

export class AppHax extends LitElement {
  static get tag() {
    return 'app-hax';
  }

  // eslint-disable-next-line class-methods-use-this
  playSound(sound) {
    if (store.soundStatus) {
      try {
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
      catch(e) {
        console.warn(e);
      }
    }
  }

  connectedCallback() {
    super.connectedCallback();
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', darkToggle);
  }

  disconnectedCallback() {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .removeEventListener('change', darkToggle);
    super.disconnectedCallback();
  }

  constructor() {
    super();
    this.courses = [];
    this.activeItem = {
      label: 'Welcome',
    };
    this.soundIcon = '';
    // full on store that does the heavy lifting
    this.store = store;
    // source for reading in the store if different than default site.json
    this.source = '';
    // centralized sound source to not flood sounds when playing
    this.sound = new Audio();
    this.source = new URL('../demo/site.json', import.meta.url).href;
    // @todo need this from app deploy itself
    this.sitesBase = 'https://iam.hax.psu.edu';
    import('@lrnwebcomponents/simple-modal/simple-modal.js');
    autorun(() => {
      this.userName = toJS(store.user.name);
    });
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
      localStorageSet('app-hax-step', toJS(store.step));
    });
    autorun(() => {
      localStorageSet('app-hax-site', toJS(store.site));
    });
    // manage dark mode
    // only set this initially if we don't have an app state of our own
    if (localStorageGet('app-hax-darkMode', null) === null) {
      store.darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    autorun(() => {
      localStorageSet('app-hax-darkMode', toJS(store.darkMode));
      if (toJS(store.darkMode)) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    });
  }

  static get properties() {
    return {
      courses: { type: Array },
      source: { type: String },
      userName: { type: String },
      activeItem: { type: Object },
      soundIcon: { type: String },
    };
  }

  // eslint-disable-next-line class-methods-use-this
  getData() {
    fetch(this.source)
      .then(response => response.json())
      .then(data => {
        this.courses = [];
        data.items.forEach(item => {
          const courseInfo = {
            title: item.title,
            description: item.description,
            link: this.sitesBase.concat(item.slug),
            icon: item.metadata.theme.variables
              ? item.metadata.theme.variables.icon
              : '',
          };
          this.courses.push(courseInfo);
        });
      });
  }

  // eslint-disable-next-line class-methods-use-this
  reset() {
    // localStorage possible to be blocked by permission of system
    try {
      window.localStorage.removeItem('app-hax-step');
      window.localStorage.removeItem('app-hax-darkMode');
      window.localStorage.removeItem('app-hax-soundStatus');
      window.localStorage.removeItem('app-hax-site');
      window.location.reload();
    }
    catch(e) {
      console.log(e);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  toggleUser() {
    store.isNewUser = !store.isNewUser;
  }

  // eslint-disable-next-line class-methods-use-this
  login() {
    const p = document.createElement('app-hax-site-login');
    const evt = new CustomEvent('simple-modal-show', {
      bubbles: true,
      cancelable: true,
      detail: {
        title: 'Login to start your quest',
        elements: { content: p },
        invokedBy: this,
      },
    });

    this.dispatchEvent(evt);
  }

  static get styles() {
    return [
      css`
        :host {
          display: block;
        }
        rpg-character {
          transform: scale(0.4, 0.4);
          margin: -36px -35px 0px 0px;
          vertical-align: text-top;
          position: fixed;
          top: 0px;
          right: 0px;
          overflow: hidden;
          height: 120px;
        }
        app-hax-top-bar {
          top: 0;
          position: sticky;
        }
        .label {
          text-align: center;
          margin-top: 48px;
        }
        app-hax-label {
          display: block;
        }
        app-hax-label h1 {
          font-weight: normal;
          font-size: 4vw;
          margin: 0;
          padding: 0;
        }
        .haxLogo {
          height: 40px;
          width: 40px;
          background-color: white;
          margin: 4px;
        }
        .space-hack {
          display: inline-flex;
          width: 64px;
          height: 48px;
        }
        .soundToggle {
          margin-right: 16px;
          position: relative;
          display: inline-flex;
          vertical-align: top;
        }
        .soundToggle img {
          width: 24px;
          height: 24px;
        }
        app-hax-search-bar {
          vertical-align: middle;
          display: inline-flex;
        }
      `,
    ];
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    store.appEl = this;
    autorun(() => {
      this.activeItem = toJS(store.activeItem);
    });
    autorun(() => {
      this.soundIcon = toJS(store.soundStatus) ? new URL('../lib/assets/images/FullVolume.svg',import.meta.url).href : new URL('../lib/assets/images/Silence.svg',import.meta.url).href;
    });
  }

  soundToggle(e) {
    store.soundStatus = !toJS(store.soundStatus);
    localStorageSet('app-hax-soundStatus', toJS(store.soundStatus));
  }

  render() {
    return html`
    <header>
      <app-hax-top-bar>
        <img class="haxLogo" src="${haxLogo}" slot="left"  alt="" loading="lazy" decoding="async" />
        <app-hax-search-bar slot="center"></app-hax-search-bar>
        <wired-button
          elevation="1"
          slot="right"
          class="soundToggle"
          @click="${this.soundToggle}"
        >
        <img src="${this.soundIcon}" alt="" loading="lazy" decoding="async" />
      </wired-button>
        <app-hax-wired-toggle slot="right"></app-hax-wired-toggle>
        <div class="space-hack" slot="right"></div>
        <rpg-character
          seed="${this.userName}"
          circle
          slot="right"
        ></rpg-character>
      </app-hax-top-bar>
    </header>
    <main>
    <div class="label">
      <app-hax-label
        ><h1>${this.activeItem.label}</h1>
        <div slot="subtitle">${this.activeItem.statement}</div></app-hax-label
      >
    </div>
    <section>
      <app-hax-steps></app-hax-steps>
    </section>
    </main>`;
  }
}
customElements.define(AppHax.tag, AppHax);

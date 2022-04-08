import { LitElement, css, html } from 'lit';
import { localStorageSet, localStorageGet } from '@lrnwebcomponents/utils/utils.js';
import { toJS, autorun } from 'mobx';
import { store } from './AppHaxStore.js';
import "./AppHaxRouter.js";
import './AppHaxRouter.js';
import './app-hax-steps.js';
import './app-hax-label.js';
import './app-hax-top-bar.js';
import './app-hax-site-button.js';


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
    this.activeItem = {};
    this.isNewUser = true;
    this.routes = [
      {
        path: 'createSite-step-1',
        component: 'fake',
        step: 1,
        id: 'step-1',
        label: 'Welcome',
        statement: "Let's start a new journey!",
      },
      {
        path: 'createSite-step-2',
        component: 'fake',
        step: 2,
        id: 'step-2',
        label: 'Pick type',
        statement: 'What are we making?',
      },
      {
        path: 'createSite-step-3',
        component: 'fake',
        step: 3,
        id: 'step-3',
        label: 'Style Select',
        statement: "What's it feel like?",
      },
      {
        path: 'createSite-step-4',
        component: 'fake',
        step: 4,
        id: 'step-4',
        label: 'Loading',
        statement: "Let's get writing!",
      },
      {
        path: '/',
        component: 'fake', 
        name: 'home', 
        label: 'Welcome',
        statement: "Let's get building!",
      },
      {
        path: '/search',
        component: 'fake-search-e', 
        name: 'search', 
        label: 'Search',
        statement: "Find a past adventure",
      },
      { 
        path: '/(.*)', 
        component: 'fake', 
        name: '404', 
        label: '404 :[',
        statement: "it's not you.. it's me",
      },
    ];
    this.appRoutine = 'home';
    this.soundIcon = '';
    // full on store that does the heavy lifting
    this.store = store;
    // source for reading in the store if different than default site.json
    this.source = '';
    // centralized sound source to not flood sounds when playing
    this.sound = new Audio();
    this.source = new URL('../demo/sites.json', import.meta.url).href;
    // @todo need this from app deploy itself
    this.sitesBase = 'https://iam.hax.psu.edu';
    import('@lrnwebcomponents/simple-modal/simple-modal.js');
    autorun(() => {
      this.isNewUser = toJS(store.isNewUser);
    });
    autorun(() => {
      this.userName = toJS(store.user.name);
    });
    /**
     * When location changes update activeItem / mode of app
     */
    autorun(() => {
      if (store.location && store.location.route) {
        // get the id from the router
        const location = toJS(store.location);
        // verify this is a step vs other operations
        if (!location.route.step) {
          if (location.route.name == "404") {
            store.createSiteSteps = false;
            this.appRoutine = "404"
            setTimeout(() => {
              store.toast('the page miss.. it burns!!!', 3000, {fire: true, walking: true});              
            }, 500);
          }
          else if (location.route.name == "home" || location.route.name == "search") {
            store.AppHaxAPI.getSites();
            this.appRoutine = "home"
          }
          else {
            console.warn(location.route);
          }
        }
        else {
          this.appRoutine = "create";
          store.createSiteSteps = true;
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
      routes: { type: Array },
      appRoutine: { type: String } // minor context of what we're doing in the app for rendering
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
      window.location = '/';
    }
    catch(e) {
      console.warn(e);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  login() {
    import('./app-hax-site-login.js').then(() => {
      const p = document.createElement('app-hax-site-login');
      if (this.querySelector('[slot="externalproviders"]')) {
        const cloneSlot = this.querySelector('[slot="externalproviders"]').cloneNode(true);
        p.appendChild(cloneSlot);
      }
      const evt = new CustomEvent('simple-modal-show', {
        bubbles: true,
        cancelable: true,
        detail: {
          title: 'Character select',
          elements: { content: p },
          invokedBy: this,
          styles: {
            "--simple-modal-titlebar-background": "orange",
            "--simple-modal-titlebar-color": "black",
            "--simple-modal-width": "25vw",
            "--simple-modal-min-width": "300px",
            "--simple-modal-z-index": "100000000",
            "--simple-modal-height": "40vh",
            "--simple-modal-min-height": "400px",
          },
        },
      });

      this.dispatchEvent(evt);
    });
  }

  static get styles() {
    return [
      css`
        :host {
          display: block;
        }
        .topbar-character {
          transform: scale(0.4, 0.4);
          margin: -36px -35px 0px 0px;
          vertical-align: text-top;
          position: fixed;
          top: 0px;
          right: 0px;
          overflow: hidden;
          height: 120px;
        }
        .content {
          text-align: center;
          margin-top: 50px;
        }
        .four04-character {
          margin-top: 100px;
          transform: scale(2);
        }
        .start-journey {
          display: flex;
          justify-content: center;
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
          animation: .8s ease-in-out 0s scrollin;
          -webkit-animation: .8s ease-in-out 0s scrollin;
          display: block;
        }
        @media (prefers-reduced-motion: reduce) {
          app-hax-label {
            animation: none;
            -webkit-animation: none;
          }
        }
        app-hax-label h1 {
          font-weight: normal;
          font-size: 4vw;
          margin: 0;
          padding: 0;
        }
        @keyframes scrollin {
          from {
            margin-top: -240px;
            margin-bottom: 240px;
          }
          to {
            margin-top: 0;
            margin-bottom: 0;
          }
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
  updated(changedProperties) {
    if (super.updated) {
      super.updated(changedProperties);
    }
    // update the store for step when it changes internal to our step flow
    changedProperties.forEach((oldValue, propName) => {
      if (['routes'].includes(propName)) {
        store[propName] = this[propName];
      }
    });
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    import('@lrnwebcomponents/rpg-character/rpg-character.js');
    import('wired-elements/lib/wired-button.js');
    import('./rpg-character-toast.js');
    import('./app-hax-wired-toggle.js');
    import('./app-hax-search-bar.js');
    import('./app-hax-search-results.js');
    this.dispatchEvent(new CustomEvent('app-hax-loaded', {composed: true, bubbles: true, cancelable: false, detail: true}));
    store.appReady = true;
    autorun(() => {
      if (toJS(store.appReady)) {
        document.body.classList.add('app-loaded');
      } else {
        document.body.classList.remove('app-loaded');
      }
    });
    // play sound when we animate the banner in
    this.shadowRoot.querySelector('app-hax-label').addEventListener("animationend", (e) => {
      if (e.animationName == "scrollin") {
        store.appEl.playSound('coin2');
      }
    });
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
    return html`<app-hax-router></app-hax-router>
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
          class="topbar-character"
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
      <section class="content">
        ${this.appBody(this.appRoutine)}
      </section>
    </main>`;
  }

  appBody(routine) {
    switch(routine) {
      case 'home':
      case 'search':
          return this.templateHome();
      break;
      case 'create':
        return this.templateCreate();
      break;
      case '404':
      default:
        return this.template404();
      break;
    }
  }

  templateHome() {
    return html`
      <a href="createSite-step-1" class="start-journey" @click="${this.startJourney}" tabindex="-1">
      <app-hax-site-button
        label="> Start another journey"
      ></app-hax-site-button>
      </a>
      <app-hax-search-results></app-hax-search-results>`;
  }
  templateCreate() {
    return html`<app-hax-steps></app-hax-steps>`;
  }
  template404() {
    return html`
    <div class="four04">
      <a href="createSite-step-1" class="start-journey" @click="${this.startJourney}" tabindex="-1">
      <app-hax-site-button
        label="> Start a new journey"
      ></app-hax-site-button>
      </a>
      <rpg-character
          class="four04-character"
          fire
          walking
          seed="${this.userName}"
        ></rpg-character>
    </div>`;
  }
  startJourney(e) {
    this.appRoutine = "create"; 
  }
}
customElements.define(AppHax.tag, AppHax);

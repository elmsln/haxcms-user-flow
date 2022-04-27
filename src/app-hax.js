import { css, html, unsafeCSS } from 'lit';
import { toJS, autorun } from 'mobx';
import { localStorageSet, localStorageGet } from '@lrnwebcomponents/utils/utils.js';
import "@lrnwebcomponents/simple-tooltip/simple-tooltip.js";
import { SimpleColors } from "@lrnwebcomponents/simple-colors/simple-colors.js";
import { store } from '../lib/v1/AppHaxStore.js';
import { AppHaxAPI } from '../lib/v1/AppHaxBackendAPI.js';
import "../lib/v1/AppHaxRouter.js";
import '../lib/v1/app-hax-label.js';
import '../lib/v1/app-hax-top-bar.js';


const haxLogo = new URL('../lib/assets/images/HAXLogo.svg', import.meta.url).href;
const logoutBtn = new URL('../lib/assets/images/Logout.svg', import.meta.url).href;
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

function soundToggle() {
  store.soundStatus = !toJS(store.soundStatus);
  localStorageSet('app-hax-soundStatus', toJS(store.soundStatus));
  store.appEl.playSound('click');
}

export class AppHax extends SimpleColors {
  static get tag() {
    return 'app-hax';
  }

  // eslint-disable-next-line class-methods-use-this
  playSound(sound) {
    if (store.soundStatus && store.appReady) {
      let playSound = ['click','click2','coin','coin2','hit','success'].includes(sound) ? sound : 'hit'; 
      this.audio = new Audio(
        new URL(`../lib/assets/sounds/${playSound}.mp3`, import.meta.url).href
      );
      this.audio.play();
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
    autorun(() => {
      this.siteReady = toJS(store.siteReady);
    });
    autorun(() => {
      const badDevice = toJS(store.badDevice);
      if (badDevice === false) {
        import('@lrnwebcomponents/rpg-character/rpg-character.js');
        import('../lib/random-word/random-word.js');            
      }
      else if (badDevice === true) {
        document.body.classList.add('bad-device');
      }
    });
    this.userMenuOpen = false;
    this.courses = [];
    this.activeItem = {};
    this.phrases = {
      new: ["What's ya name?", 'HAX to the moon', 'Welcome to the Jungle', 'We like to party', 'Build something awesome', 'Everything is awesome!', 'Everything is cool when you\'re part of the team', 'When you\'re living our dream'],
      return: ['Welcome back, take 2?', "That wasn't very long", 'Sup?', 'You again? Awesome!', 'Let\'s do this', 'There can only be one ring...', 'There is another', 'Fancy that, I love HAX and you show up'],
    };
    this.isNewUser = null;
    this.routes = [
      {
        path: 'createSite-step-1',
        component: 'fake',
        step: 1,
        id: 'step-1',
        label: 'New Journey',
        statement: "What sort of journey is it?",
      },
      {
        path: 'createSite-step-2',
        component: 'fake',
        step: 2,
        id: 'step-2',
        label: 'Structure',
        statement: 'How is this organized?',
      },
      {
        path: 'createSite-step-3',
        component: 'fake',
        step: 3,
        id: 'step-3',
        label: 'Theme select',
        statement: "What your journey feels like?",
      },
      {
        path: 'createSite-step-4',
        component: 'fake',
        step: 4,
        id: 'step-4',
        label: 'Journey Name',
        statement: "What do you want to call your journey?",
      },
      {
        path: 'createSite-step-5',
        component: 'fake',
        step: 5,
        id: 'step-5',
        label: 'Building..',
        statement: "Getting your journey ready to launch",
      },
      {
        path: '/',
        component: 'fake', 
        name: 'welcome', 
        label: 'Welcome',
        statement: "Let's build something awesome together!",
      },
      {
        path: '/home',
        component: 'fake', 
        name: 'home', 
        label: 'Welcome back',
        statement: "Let's go on a HAX Journey",
      },
      {
        path: '/search',
        component: 'fake-search-e', 
        name: 'search', 
        label: 'Search',
        statement: "Discover active adventures",
      },
      { 
        path: '/(.*)', 
        component: 'fake', 
        name: '404', 
        label: '404 :[',
        statement: "it's not you.. it's me",
      },
    ];
    this.searchTerm = '';
    this.appMode = '';
    this.soundIcon = '';
    // full on store that does the heavy lifting
    this.store = store;
    // source for reading in the store if different than default site.json
    this.source = '';
    // centralized sound source to not flood sounds when playing
    this.sound = new Audio();
    this.source = new URL('../demo/sites.json', import.meta.url).href;
    // @todo need this from app deploy itself
    autorun(() => {
      this.isNewUser = toJS(store.isNewUser);
      if (this.isNewUser && toJS(store.appMode) !== 'create') {
        store.appMode = "create";
        setTimeout(() => {
          store.createSiteSteps = true;            
        }, 0);
      }
    });
    autorun(() => {
      this.userName = toJS(store.user.name);
    });
    autorun(() => {
      this.appMode = toJS(store.appMode);
    });
    autorun(() => {
      this.searchTerm = toJS(store.searchTerm);
    });
   
    
    /**
     * When location changes update activeItem / mode of app
     */
    autorun(async () => {
      if (store.location && store.location.route) {
        // get the id from the router
        const location = toJS(store.location);
        // verify this is a step vs other operations
        if (!location.route.step) {
          if (location.route.name === "404") {
            store.createSiteSteps = false;
            store.appMode = "404"
            setTimeout(() => {
              store.toast('the page miss.. it burns!!!', 3000, {fire: true, walking: true});              
            }, 500);
          }
          else if (location.route.name === "home" || location.route.name === "search") {
            store.appMode = "home";
            store.createSiteSteps = false;
          }
          else {
            //console.warn(location.route);
          }
        }
        else {
          store.appMode = "create";
          setTimeout(() => {
            store.createSiteSteps = true;            
          }, 0);
        }
      }
    });

    autorun(() => {
      if (store.routes.length > 0 && store.location === null) {
        store.location = toJS(store.routes[0]);
      }
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
        store.toast("I'm ascared of the dark", 2000, { fire: true});
        this.dark = true;
      } else {
        document.body.classList.remove('dark-mode');
        store.toast("Sunny day it is", 2000, { hat: 'random'});
        this.dark = false;
      }
    });
    autorun(() => {
      const mode = toJS(store.appMode);
      if (mode) {
        document.body.classList.remove('app-hax-search');
        document.body.classList.remove('app-hax-create');
        document.body.classList.remove('app-hax-404');
        document.body.classList.remove('app-hax-home');
        document.body.classList.add(`app-hax-${mode}`);
      }
    });

    autorun(() => {
      if(localStorageGet('jwt') !== "" && localStorageGet('jwt') !== "null" && localStorageGet('jwt') !== null){
        store.jwt= localStorageGet('jwt');
      }
    })

    // App is ready and the user is Logged in
    autorun(async () => {
      if (toJS(store.appReady) && toJS(store.isLoggedIn) && toJS(store.appSettings)){
        // Need this for the auto run when testing new user
        // if we get new data source, trigger a rebuild of the site list
        const results = await AppHaxAPI.makeCall('getSitesList');
        store.manifest = results.data;
      } else if (toJS(store.appReady) && !toJS(store.isLoggedIn)){
        this.login();
      }
    })
  }

  static get properties() {
    return {
      ...super.properties,
      courses: { type: Array },
      source: { type: String },
      userName: { type: String },
      activeItem: { type: Object },
      soundIcon: { type: String },
      routes: { type: Array },
      searchTerm: { type: String },
      appMode: { type: String }, // minor context of what we're doing in the app for rendering
      isNewUser: { type: Boolean },
      phrases: { type: Object },
      userMenuOpen: { type: Boolean },
      siteReady: { type: Boolean },
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
            link: toJS(store.sitesBase).concat(item.slug),
            icon: item.metadata.theme.variables
              ? item.metadata.theme.variables.icon
              : '',
          };
          this.courses.push(courseInfo);
        });
      });
  }

  // eslint-disable-next-line class-methods-use-this
  reset(reload = true) {
    // localStorage possible to be blocked by permission of system
    try {
      window.localStorage.removeItem('app-hax-step');
      window.localStorage.removeItem('app-hax-darkMode');
      window.localStorage.removeItem('app-hax-soundStatus');
      window.localStorage.removeItem('app-hax-site');
      if (reload) {
        // should always be a base tag for a SPA but just checking
        if (document.querySelector('base')) {
          window.location = document.querySelector('base').href;
        }
        else {
          window.location.reload();
        }
      }
    }
    catch(e) {
      //console.warn(e);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  async logout(){
    const results = await AppHaxAPI.makeCall('logout');
    // localStorage possible to be blocked by permission of system
    try {
      window.localStorage.removeItem('jwt');
    }
    catch(e) {
      // do nothing, this is a framed in / secure context
    }
    store.jwt = "";
    this.reset();
  }

  // eslint-disable-next-line class-methods-use-this
  login() {
    import('../lib/v1/app-hax-site-login.js').then(() => {
      const p = document.createElement('app-hax-site-login');
      if (this.querySelector('[slot="externalproviders"]')) {
        const cloneSlot = this.querySelector('[slot="externalproviders"]').cloneNode(true);
        p.appendChild(cloneSlot);
      }
      import('@lrnwebcomponents/simple-modal/simple-modal.js').then(() => {
        setTimeout(() => {
          this.dispatchEvent(new CustomEvent('simple-modal-show', {
            bubbles: true,
            cancelable: true,
            composed: true,
            detail: {
              title: 'User login',
              elements: { content: p },
              modal: true,
              styles: {
                "--simple-modal-titlebar-background": "orange",
                "--simple-modal-titlebar-color": "black",
                "--simple-modal-width": "25vw",
                "--simple-modal-min-width": "300px",
                "--simple-modal-z-index": "100000000",
                "--simple-modal-height": "40vh",
                "--simple-modal-min-height": "400px",
                "--simple-modal-titlebar-height": "40px",
              },
            },
          }));
        }, 0);
      });
    });
  }

  static get styles() {
    return [...super.styles,
      css`
        :host {
          display: block;
          --app-hax-background-color-active: var(--app-hax-accent-color);
        }
        .wired-button-label {
          clip: rect(0 0 0 0); 
          clip-path: inset(50%);
          height: 1px;
          overflow: hidden;
          position: absolute;
          white-space: nowrap; 
          width: 1px;
        }
        .topbar-character {
          cursor: pointer;
          display: inline-block;
          border: none;
          border-radius: 0px;
          background-color: transparent;
        }
        .topbar-character:hover,
        .topbar-character:focus {
          background-color: var(--simple-colors-default-theme-light-blue-4);
          outline: var(--haxcms-color) solid 3px;
          outline-offset: -3px;
          height: 48px;
        }
        .topbar-character rpg-character {
          margin: -4px -14px 0px -10px;
          height: 52px;
          width: 64px;      
          display: inline-block;
        }
        .content {
          text-align: center;
          margin-top: 24px;
        }
        .four04-character {
          margin-top: 16px;
        }
        .start-journey {
          display: flex;
          padding-top: 40px;
          justify-content: center;
        }
        app-hax-site-button {
          max-width: 60vw;
          justify-content: center;
        }
        app-hax-top-bar {
          top: 0;
          z-index: 1000;
          right: 0;
          left: 0;
          position: fixed;
        }
        @media (max-width: 780px) {
          app-hax-top-bar::part(top-bar) {
            grid-template-columns: 20% 20% 60%;
          }
        }
        @media (max-width: 600px) {
          app-hax-top-bar::part(top-bar) {
            grid-template-columns: 10% 30% 60%;
          }
        }
        .label {
          text-align: center;
        }
        app-hax-label {
          animation: .8s ease-in-out 0s scrollin;
          -webkit-animation: .8s ease-in-out 0s scrollin;
          display: block;
          overflow: hidden;
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
          --simple-icon-height: 40px;
          --simple-icon-width: 40px;
          margin: 4px;
          color: var(--simple-colors-default-theme-grey-12);
          cursor: pointer;
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
        main {
          padding-top: 80px;
        }
        @media (max-width: 900px) {
          main {
            padding-top: 64px;
          }
        }
        .user-menu {
          display:none;
        }
        .user-menu.open {
          display: block;
          top: 48px;
          right: 0px;
          position: absolute;
          border: 1px solid var(--app-hax-accent-color);
          background-color: var(--app-hax-background-color);
        }
        .user-menu.open button {
          display: block;
          width: 100%;
          margin: 0;
          padding: 8px;
          font-size: 16px;
          text-align: left;
          font-family: 'Press Start 2P', sans-serif;
          color: var(--app-hax-accent-color);
          background-color: var(--app-hax-background-color);
        }
        .user-menu.open button:hover,
        .user-menu.open button:active,
        .user-menu.open button:focus {
          background-color: var(--app-hax-background-color-active);
          color: var(--app-hax-background-color);
        }
        .user-menu button {
          cursor: pointer;
        }
        .user-menu button simple-icon-lite {
          padding-right: 16px;
        }
        .user-menu.open > .logout {
          background-image: url('${unsafeCSS(logoutBtn)}');
          background-repeat: no-repeat;
          background-position: center;
          text-align: center;
        }
        random-word:not(:defined) {
          display: none;
        }
        random-word {
          transform: rotate(25deg);
          position: absolute;
          right: 10px;
          top: 120px;
          padding: 12px;
          font-size: 12px;
          border: 4px solid var(--simple-colors-default-theme-grey-12);
          background-color: var(--simple-colors-default-theme-yellow-5);
          color: var(--simple-colors-default-theme-grey-12);
          width: 100px;
          word-wrap: break-word;
          text-align: center;
          cursor: pointer;
          user-select: none;
          opacity: 1;
          visibility: visible;
          transition: all .3s ease-in-out;
        }
        @media (max-width: 800px) {
          app-hax-site-button {
            width: 320px;
            max-width: 60vw;
            --app-hax-site-button-font-size: 16px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          app-hax-label {
            animation: none;
            -webkit-animation: none;
          }
        }
        @media (max-width: 680px) {
          random-word {
            visibility: none;
            opacity: 0;
          }
        }
        @media (max-height: 700px) {
          .content { 
            margin-top: 4px;
          }
          random-word {
            visibility: none;
            opacity: 0;
          }
          .start-journey {
            padding-top: 0;
          }
        }
        @media (max-height: 500px) {
          app-hax-label h1 {
            font-family: monospace;
            font-weight: normal;
            font-size: 4vw;
            margin: 0;
            padding: 0;
          }
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
      if (propName === 'routes') {
        store[propName] = this[propName];
      }
    });
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    import('../lib/v1/app-hax-steps.js');
    import('../lib/v1/app-hax-site-button.js');
    import('wired-elements/lib/wired-button.js');
    import('../lib/v1/app-hax-toast.js');
    import('../lib/v1/app-hax-wired-toggle.js');
    import('../lib/v1/app-hax-search-bar.js');
    import('../lib/v1/app-hax-search-results.js');
    this.dispatchEvent(new CustomEvent('app-hax-loaded', {composed: true, bubbles: true, cancelable: false, detail: true}));
    store.appReady = true;
    autorun(() => {
      if (toJS(store.appReady)) {
        document.body.classList.add('app-loaded');
      } else {
        document.body.classList.remove('app-loaded');
      }
    });
    store.appEl = this;
    autorun(() => {
      if (store.activeItem) {
        this.activeItem = toJS(store.activeItem);
      }
    });
    autorun(() => {
      this.soundIcon = toJS(store.soundStatus) ? new URL('../lib/assets/images/FullVolume.svg',import.meta.url).href : new URL('../lib/assets/images/Silence.svg',import.meta.url).href;
      if (!toJS(store.soundStatus)) {
        store.toast("Sound off.. hey! HELLO!?!", 2000, { fire: true});
      }
      else {
        store.toast("You can hear me now? Good.", 2000,{ hat: 'random'});
      }
    });
  }
  
  toggleMenu() {
    this.userMenuOpen = !this.userMenuOpen;
    store.appEl.playSound('click');
  }
  
  closeMenu() {
    if (this.userMenuOpen) {
      this.userMenuOpen = !this.userMenuOpen;
    }
  }

  render() {
    return html`<app-hax-router></app-hax-router>
    <header>
      <app-hax-top-bar>
        <a href="home" tabindex="-1" slot="left">
          <simple-icon-lite id="hlogo" src="${haxLogo}" tabindex="0" class="haxLogo" title="Home"></simple-icon-lite>     
        </a>
        <simple-tooltip for="hlogo" position="bottom" slot="left">Home</simple-tooltip>
        <app-hax-search-bar slot="center" ?disabled="${this.isNewUser}"></app-hax-search-bar>
        <wired-button
          elevation="1"
          slot="right"
          class="soundToggle"
          id="soundtb"
          @click="${soundToggle}"
        >
          <span class="wired-button-label">Toggle sound effects</span>
          <simple-icon-lite src="${this.soundIcon}" loading="lazy" decoding="async"></simple-icon-lite>
        </wired-button>
        <simple-tooltip for="soundtb" position="bottom" slot="right">Toggle sound</simple-tooltip>
        <app-hax-wired-toggle id="wt" slot="right"></app-hax-wired-toggle>
        <simple-tooltip for="wt" position="bottom" slot="right">Toggle dark mode</simple-tooltip>
        <button class="topbar-character" @click="${this.toggleMenu}" slot="right" id="tbchar">
          <rpg-character
            seed="${this.userName}"
            width="68"
            height="68"
            aria-label="System menu"
            title="System menu"
            hat="${this.userMenuOpen ? 'edit' : 'none'}"
          ></rpg-character>
        </button>
        ${this.userMenuOpen ? html`<div slot="right" class="user-menu ${this.userMenuOpen ? 'open' : ''}">
          <button>
          <simple-icon-lite icon="face"></simple-icon-lite>Account info</button>
          <button @click=${this.logout} class="logout">log out</button>
        </div>
` : html`        <simple-tooltip for="tbchar" position="bottom" slot="right">System menu</simple-tooltip>
`}
      </app-hax-top-bar>
    </header>lbh
    <main @click="${this.closeMenu}">
      <div class="label">
        <app-hax-label>
        ${this.activeItem && !this.siteReady ? html`
        <h1>${this.activeItem.label}</h1>
          <div slot="subtitle">${this.activeItem.statement}</div>
        ` : ``}
        ${this.activeItem && this.siteReady ? html`
        <h1>${toJS(store.site.name)}</h1>
          <div slot="subtitle">Is all ready, are you ready to build?</div>
        ` : ``}
          </app-hax-label>
      </div>
      <random-word
        key="${this.isNewUser ? `new` : `return`}"
        .phrases="${this.phrases}"
        @click="${this.getNewWord}"
      ></random-word>
      <section class="content">
        ${this.appBody(this.appMode)}
      </section>
    </main>`;
  }

  getNewWord() {
    this.shadowRoot.querySelector('random-word').getNewWord();
    store.appEl.playSound('click');
  }

  appBody(routine) {
    let template = html``;
    switch(routine) {
      case 'home':
      case 'search':
        template = this.templateHome();
      break;
      case 'create':
        template = this.templateCreate();
      break;
      case '404':
      default:
        template = this.template404();
      break;
    }
    return template;
  }

  templateHome() {
    return html`
      ${!this.searchTerm ? html`
      <div class="start-journey">
        <a href="createSite-step-1" @click="${this.startJourney}" tabindex="-1">
        <app-hax-site-button
          label="&gt; Start new journey"
        ></app-hax-site-button>
        </a>
      </div>`: ``}
      
      <app-hax-search-results></app-hax-search-results>`;
  }
  
  // eslint-disable-next-line class-methods-use-this
  templateCreate() {
    return html`<app-hax-steps @promise-progress-finished="${this.siteReadyToGo}"></app-hax-steps>`;
  }

  siteReadyToGo(e) {
    if (e.detail) {
      store.siteReady = true;
    }
  }

  template404() {
    return html`
    <div class="four04">
      <a href="createSite-step-1" class="start-journey" @click="${this.startJourney}" tabindex="-1">
      <app-hax-site-button
        label="&gt; Start a new journey"
      ></app-hax-site-button>
      </a>
      <rpg-character
          class="four04-character"
          fire
          walking
          width="200"
          id="char404"
          height="200"
          seed="${this.userName}"
        ></rpg-character>
        <simple-tooltip for="char404" position="left">This</simple-tooltip>
        <simple-tooltip for="char404" position="right">fine</simple-tooltip>
        <simple-tooltip for="char404" position="bottom">is</simple-tooltip>
    </div>`;
  }
  
  // ensure internal data is unset for store
  startJourney(e) {
    store.createSiteSteps = false;
    store.siteReady = false;
    store.site.structure = null;
    store.site.type = null;
    store.site.theme = null;            
    store.site.name = null;
    store.appMode = "create";
    store.appEl.playSound('click2');
  }
}
customElements.define(AppHax.tag, AppHax);

window.AppHax = window.AppHax || {};

window.AppHax.requestAvailability = () => {
  if (!window.AppHax.instance) {
    window.AppHax.instance = document.querySelector(AppHax.tag);
  }
  return window.AppHax.instance;
};
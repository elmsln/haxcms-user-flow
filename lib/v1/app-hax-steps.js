/* eslint-disable lit/attribute-value-entities */
/* eslint-disable lit/binding-positions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable class-methods-use-this */
import { html, css, unsafeCSS } from 'lit';
import './AppHaxRouter.js';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors.js';
import { autorun, toJS } from 'mobx';
import { store } from './AppHaxStore.js';
import { localStorageSet } from '@lrnwebcomponents/utils/utils.js';
import 'scrollable-component/index.js';
import "@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js";
import './app-hax-site-button.js';
import './app-hax-hat-progress.js';
import './app-hax-button.js';

const homeIcon = new URL('../assets/images/Home.svg', import.meta.url).href;
const disabledCircle = new URL('../assets/images/DisabledCircle.svg', import.meta.url).href;
const transparentCircle = new URL('../assets/images/TransparentCircle.svg', import.meta.url).href;
const enabledCircle = new URL('../assets/images/EnabledCircle.svg', import.meta.url).href;

const themeContext = {
  portfolio: ['haxor-slevin', 'bootstrap-theme'],
  course: ['clean-one','clean-two','learn-two-theme'],
  website: ['bootstrap-theme','outline-player', 'haxor-slevin'],
}
export class AppHaxSteps extends SimpleColors {
  static get tag() {
    return 'app-hax-steps';
  }

  constructor() {
    super();
    this.nameTyped = '';
    this.stepRoutes = [];
    this._progressReady = false;
    this.step = null;
    this.loaded = false;
    this.themeNames = [];
    this.appSettings = {};
    autorun(() => {
      this.appSettings = toJS(store.appSettings);
      const contextKey = toJS(store.site.structure);
      this.themeNames = Object.keys(this.appSettings.themes).filter(value => contextKey && themeContext[contextKey] && themeContext[contextKey].includes(value));
    });
    autorun(() => {
      this.dark = toJS(store.darkMode);
    });
    autorun(() => {
      localStorageSet('app-hax-step', toJS(store.step));
    });
    autorun(() => {
      localStorageSet('app-hax-site', toJS(store.site));
      this.step = store.stepTest(this.step);
    });
    autorun(() => {
      if (toJS(store.createSiteSteps) && toJS(store.location)) {
        this.step = store.stepTest(this.step);
      }
    });
    // routes, but only the ones that have a step property
    autorun(() => {
      const routes = toJS(store.routes);
      this.stepRoutes = routes.filter((item => item.step));
    });
  }

  static get properties() {
    return {
      ...super.properties,
      step: { type: Number, reflect: true },
      stepRoutes: { type: Array },
      themeNames: { type: Array },
      loaded: { type: Boolean, reflect: true },
      appSettings: { type: Object},
      nameTyped: { type: String}
    };
  }

  // step 1
  chooseStructure(e) {
    if (!e.target.comingSoon) {
      const { value } = e.target;
      store.site.structure = value;
      store.appEl.playSound('click2');
    }
  }

  // step 2
  chooseType(e) {
    if (!e.target.comingSoon) {
      const { value } = e.target;
      store.site.type = value;
      store.appEl.playSound('click2');
    }
  }
  
  // step 3
  chooseTheme(e) {
    if (!e.target.comingSoon) {
      const { value } = e.target;
      store.site.theme = value;
      store.appEl.playSound('click2');
    }
  }

  // step 4
  chooseName() {
    if (this.nameTyped !== '') {
      const value = this.shadowRoot.querySelector("#sitename").value;
      store.site.name = value;
      store.appEl.playSound('click2');
    }
  }

  progressReady(e) {
    if (e.detail) {
      this._progressReady = true;
      if (this.step === 5) {
        setTimeout(() => {
          this.shadowRoot.querySelector('app-hax-hat-progress').process();
        }, 300);
      }
    }
  }

  updated(changedProperties) {
    if (super.updated) {
      super.updated(changedProperties);
    }
    changedProperties.forEach((oldValue, propName) => {
      // set input field to whats in store if we have it
      if (
        this.step === 4 &&
        propName === 'step' &&
        this.shadowRoot
      ) {
        this.shadowRoot.querySelector('#sitename').value = toJS(store.site.name);
      }
      // progress
      if (
        this.step === 5 &&
        propName === 'step' &&
        this.shadowRoot &&
        this._progressReady
      ) {
        setTimeout(() => {
          this.shadowRoot.querySelector('app-hax-hat-progress').process();
        }, 600);
      }
      // update the store for step when it changes internal to our step flow
      if (propName === 'step') {
        store.step = this.step;
      }
    });
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this.maintainScroll.bind(this));
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this.maintainScroll.bind(this));
    super.disconnectedCallback();
  }

  // account for resizing

  maintainScroll() {
    if (this.shadowRoot && this.step) {
      this.scrollToThing(`#step-${this.step}`, {
        behavior: 'instant',
        block: 'start',
        inline: 'nearest'
      });
      // account for an animated window drag... stupid.
      setTimeout(() => {
        this.scrollToThing(`#step-${this.step}`, {
          behavior: 'instant',
          block: 'start',
          inline: 'nearest'
        });
      }, 100);
    }
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    setTimeout(() => {
      // ensure paint issues not a factor for null step
      if (this.step === null) {
        this.step = 1;
      }
      this.scrollToThing(`#step-${this.step}`, {
        behavior: 'instant',
        block: 'start',
        inline: 'nearest'
      });
    }, 100);

    autorun(() => {
      // verify we are in the site creation process
      if (toJS(store.createSiteSteps) && toJS(store.appReady)) {
        const location = toJS(store.location);
        if (location.route && location.route.step && location.route.id) {
          // account for an animated window drag... stupid.
          setTimeout(() => {
            this.scrollToThing('#'.concat(location.route.id), {
              behavior: 'smooth',
              block: 'start',
              inline: 'nearest',
            });
            /// just for step 4 since it has an input
            if (location.route.step === 4) {
              setTimeout(() => {
                this.shadowRoot.querySelector('#sitename').focus();
                this.scrollToThing(`#step-4`, {
                  behavior: 'instant',
                  block: 'start',
                  inline: 'nearest'
                });
              }, 800);
            }
          }, 300); // this delay helps w/ initial paint timing but also user perception
          // there's a desire to have a delay especialy when tapping things of
          // about 300ms
        }
      }
    });
    autorun(() => {
      if (this.shadowRoot && toJS(store.createSiteSteps) && toJS(store.appReady)) {
        const activeItem = toJS(store.activeItem);
        if (activeItem && activeItem.id && activeItem.step && !this.__overrideProgression) {
          this.shadowRoot
          .querySelector('#link-'.concat(activeItem.id)).click();
        }
      }
    });
  }

  /**
   * Yet another reason Apple doesn't let us have nice things.
   * This detects the NONSTANDARD BS VERSION OF SCROLLINTOVIEW
   * and then ensures that it incorrectly calls to scroll into view
   * WITHOUT the wonderful params that ALL OTHER BROWSERS ACCEPT
   * AND MAKE OUR LIVES SO WONDERFUL TO SCROLL TO THINGS SMOOTHLY
   */
  scrollToThing(sel, props) {
    const isSafari = window.safari !== undefined;
    if(this.shadowRoot.querySelector('.carousel-with-snapping-item.active-step')) {
      this.shadowRoot.querySelector('.carousel-with-snapping-item.active-step').classList.remove('active-step');
    }
    if (isSafari) {
      this.shadowRoot.querySelector(sel).scrollIntoView();
    } else {
      this.shadowRoot.querySelector(sel).scrollIntoView(props);
    }
    this.shadowRoot.querySelector(sel).classList.add('active-step');
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: block;
        }
        scrollable-component {
          --scrollbar-width: 0px;
          --scrollbar-height: 0px;
          --scrollbar-padding: 0;
          --viewport-overflow-x: hidden;
          overflow: hidden;
        }
        #grid-container {
          display: grid;
          grid-template-columns: 200px 200px;
          background: transparent;
        }
        .carousel-with-snapping-track {
          display: grid;
          grid-auto-flow: column;
          grid-gap: 30px;
        }
        .carousel-with-snapping-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: normal;
          scroll-snap-align: center;
          scroll-snap-stop: always;
          scrollbar-gutter: stable;
          width: var(--viewport-width);
          font-size: 1.5rem;
          text-align: center;
          overflow-x: hidden;
          max-height: 60vh;
          padding-top: 1vh;
        }
        #step-links {
          padding: 0;
          margin: 0;
        }
        ul,li {
          list-style: none;
        }
        li {
          vertical-align: middle;
          display: inline-flex;
          margin: 5px;
        }
        li.step {
          border-radius: 50%;
          background-color: transparent
        }
        li a {
          font-size: 12px;
          color: var(--simple-colors-default-theme-grey-12, white);
          text-decoration: none;
          padding: 5px;
          width: 20px;
          height: 20px;
          line-height: 20px;
          margin: 0;
          display: block;
          border: 0;
          border-radius: 50%;
          background-repeat: no-repeat;
          background-size: 30px 30px;
          background-color: var(--simple-colors-default-theme-grey-1, white);
          background-image: url('${unsafeCSS(enabledCircle)}');
          transition: .3s ease-in-out background,.3s ease-in-out color;
          transition-delay: .6s, .3s;
        }
        li a[disabled] {
          background-image: url('${unsafeCSS(disabledCircle)}');
          pointer-events: none;
          color: var(--simple-colors-default-theme-grey-7, grey);
          user-select: none;
        }
        li[disabled] {
          background-color: grey
        }
        li.active-step a {
          background-color: orange;
          background-image: url('${unsafeCSS(transparentCircle)}');
        }
        app-hax-button {
          padding: 10px 0px 10px 0px;
          background: transparent;
        }
        #theme-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
        }
        img {
          pointer-events: none;
        }
        #themeContainer {
          width: 70vw;
          height: 55vh;
        }
        .theme-button {
          background-color: transparent;
          color: var(--simple-colors-default-theme-grey-12, white);
          border: none;
          margin: 8px;
          padding: 8px;
          width: 245px;
        }
        
        .theme-button div {
          font-family: 'Press Start 2P', sans-serif;
          font-size: 14px;
          margin-top: 12px;
        }
        .theme-button:focus,
        .theme-button:hover {
          outline: 4px solid var(--app-hax-accent-color, var(--accent-color));
          outline-offset: 4px;
          background-color: transparent;
          border: none;
          cursor: pointer;
        }
        #sitename {
          font-family: 'Press Start 2P', sans-serif;
          font-size: 40px;
          padding: 8px;
          width: 40vw;
        }
        #homebtn {
          --simple-icon-height: 30px;
          --simple-icon-width: 30px;
          border-radius: 50%;
          cursor: pointer;
          background-color: var(--simple-colors-default-theme-grey-1, white);
        }
        .homelnk {
          background-image: none;
          display: flex;
          padding: 0;
          margin: 0;
          height: 30px;
          width: 30px;
        }
        app-hax-site-button {
          justify-content: center;
          --app-hax-site-button-width: 30vw;
          --app-hax-site-button-min-width: 240px;
        }
        app-hax-hat-progress {
          height: 400px;
          width: 400px;
          display: block;
        }

        @media (max-width: 800px) {
          .theme-button {
            width: unset;
            padding: 0;
          }
          .theme-button div {
            font-size: 12px;
            margin-top: 8px;
          }
          .theme-button img {
            height: 70px;
          }
          app-hax-site-button {
            width: 320px;
            max-width: 60vw;
            --app-hax-site-button-font-size: 2.5vw;
          }
          #sitename {
            width: 70vw;
            font-size: 20px;
          }
          #grid-container {
            grid-template-columns: 150px 150px;
          }
        }
        @media (max-height: 600px) {
          .carousel-with-snapping-item {
            padding-top: 4px;
            max-height: 57vh;
          }
          #sitename {
            width: 40vw;
            font-size: 14px;
          }
          app-hax-hat-progress {
            transform: scale(.5);
            margin-top: -18vh;
          }
        }
        @media (max-width: 500px) {
          app-hax-hat-progress {
            transform: scale(.5);
            margin-top: -15vh;
          }
        }
        @media (max-height: 400px) {
          .carousel-with-snapping-item {
            padding-top: 4px;
            max-height: 40vh;
          }
          app-hax-hat-progress {
            transform: scale(.3);
          }
          .carousel-with-snapping-item.active-step app-hax-hat-progress {
            position: fixed;
            top: 20%;
            left: 20%;
          }
        }
      `,
    ];
  }

  progressFinished(e) {
    if (e.detail) {
      this.loaded = true;
      store.appEl.playSound('success');
      // focus the button for going to the site
      e.target.shadowRoot.querySelector('.game').focus();
      this.scrollToThing(`#step-${this.step}`, {
        behavior: 'instant',
        block: 'start',
        inline: 'nearest'
      });
    }
  }

  typeKey() {
    this.nameTyped = this.shadowRoot.querySelector("#sitename").value;
  }
  keydown(e) {
    // some trapping for common characters that make us sad
    if ([' ', '/', '\\', '&', '#', '?', '+', '=', "{", "}", "|", "^", "~", "[", "]","`", '"',"'"].includes(e.key)) {
      store.appEl.playSound('error');
      store.toast(`"${e.key}" not allowed in names`);
      e.preventDefault();
    }
    else if (e.key === "Enter") {
      this.chooseName();
    }
    else {
      store.appEl.playSound('click');
    }
  }

  stepLinkClick(e) {
    const clickedStep = parseInt(e.target.getAttribute("data-step"), 10);
    if (this.step < clickedStep) {
      e.preventDefault();
    }
    else if (e.target.getAttribute("data-step") === null) {
      store.createSiteSteps = false;
      store.appMode = "home";
      this.nameTyped = '';
      store.siteReady = false;
      store.site.structure = null;
      store.site.type = null;
      store.site.theme = null;            
      store.site.name = null;
    }
    // means user went backwards
    else if (this.step > clickedStep) {
      this.nameTyped = '';
      store.siteReady = false;
      if (clickedStep === 1) {
        store.site.structure = null;
        store.site.type = null;
        store.site.theme = null;            
        store.site.name = null;
      }
      else if (clickedStep === 2) {
        store.site.type = null;
        store.site.theme = null;
        store.site.name = null;
      }
      else if (clickedStep === 3) {
        store.site.theme = null;
        store.site.name = null;
      }
      else if (clickedStep === 4) {
        store.site.name = null;
      }
      this.step = clickedStep;
    }
  }

  renderTypes(step) {
    const structure = toJS(store.site.structure);
    var template = html``;
    switch(structure) {
      case 'portfolio':
        template = html`
        <app-hax-button
          tabindex="${step !== 2 ? '-1' : ''}"
          @click=${this.chooseType}
        ></app-hax-button>
        <app-hax-button
          tabindex="${step !== 2 ? '-1' : ''}"
          @click=${this.chooseType}
          type="Technology"
          coming-soon
        ></app-hax-button>
        <app-hax-button
          tabindex="${step !== 2 ? '-1' : ''}"
          @click=${this.chooseType}
          type="Business"
          coming-soon
        ></app-hax-button>
        <app-hax-button
          tabindex="${step !== 2 ? '-1' : ''}"
          @click=${this.chooseType}
          type="Art"
          coming-soon
        ></app-hax-button>`
      break;
      default:
      case 'course':
        template = html`
        <app-hax-button
          tabindex="${step !== 2 ? '-1' : ''}"
          @click=${this.chooseType}
        ></app-hax-button>
        <app-hax-button
          tabindex="${step !== 2 ? '-1' : ''}"
          @click=${this.chooseType}
          type="15w"
          coming-soon
        ></app-hax-button>
        <app-hax-button
          tabindex="${step !== 2 ? '-1' : ''}"
          @click=${this.chooseType}
          type="6w"
          coming-soon
        ></app-hax-button>
        <app-hax-button
          tabindex="${step !== 2 ? '-1' : ''}"
          @click=${this.chooseType}
          type="training"
          coming-soon
        ></app-hax-button>`;
      break;
      case 'website':
        template = html`
        <app-hax-button
          tabindex="${step !== 2 ? '-1' : ''}"
          @click=${this.chooseType}
          type="Blog"
        ></app-hax-button>
        <app-hax-button
          tabindex="${step !== 2 ? '-1' : ''}"
          @click=${this.chooseType}
          coming-soon
        ></app-hax-button>`;
      break;
    }
    return template;
  }

  render() {
    return html`
      <div id="container">
        <ul id="step-links">
          <li>
          ${!toJS(store.isNewUser) ? html `
            <a href="home" class="homelnk" tabindex="-1">
            <simple-icon-lite tabindex="0" src="${homeIcon}" id="homebtn" title="Site list" @click="${this.stepLinkClick}"></simple-icon-lite>
            </a>
            <simple-tooltip for="homebtn" position="bottom">Site list</simple-tooltip>
            ` : html ``}
          </li>
          ${this.stepRoutes.map(
            (item, index) =>
              html`<li
              ?disabled="${this.step < item.step || this.step === 5 ? true : false}"
              class="step ${this.step === item.step ? 'active-step' : ''}">
                <a href="${item.path}"
                ?disabled="${this.step < item.step || this.step === 5 ? true : false}"
                  tabindex="${this.step <= item.step ? "-1" : "0"}"
                  @click="${this.stepLinkClick}"
                  id="link-${item.id}"
                  title="Step ${index+1}: ${item.label}"
                  data-step="${item.step}"
                  >${index+1}</a>
                  <simple-tooltip for="link-${item.id}" position="bottom">Step ${index+1}: ${item.label}</simple-tooltip>
              </li>`
          )}
        </ul>
       
        <scrollable-component>
          <div class="carousel-with-snapping-track">
            <div class="carousel-with-snapping-item" id="step-1">
              <div class="step-wrapper">
                <app-hax-site-button
                  tabindex="${this.step !== 1 ? '-1' : ''}"
                  label="&gt; Course"
                  value="course"
                  @click=${this.chooseStructure}
                ></app-hax-site-button>
                <app-hax-site-button
                  tabindex="${this.step !== 1 ? '-1' : ''}"
                  label="&gt; Portfolio"
                  value="portfolio"
                  @click=${this.chooseStructure}
                ></app-hax-site-button>
                <app-hax-site-button
                  tabindex="${this.step !== 1 ? '-1' : ''}"
                  label="&gt; Website"
                  value="website"
                  @click=${this.chooseStructure}
                  coming-soon
                ></app-hax-site-button>
              </div>
            </div>
            <div class="carousel-with-snapping-item" id="step-2">
              <div id="grid-container">
                ${this.renderTypes(this.step)}
              </div>
          </div>
          <div class="carousel-with-snapping-item" id="step-3">
              <div id="themeContainer">
                ${this.appSettings && this.appSettings.themes ? this.themeNames.map((themeKey) => html`
                <button
                  aria-label="${this.appSettings.themes[themeKey].name} theme"
                  value="${themeKey}"
                  class="theme-button"
                  @click=${this.chooseTheme}
                  tabindex="${this.step !== 3 ? '-1' : ''}"
                >
                  <img class="theme-img" src="${this.appSettings.themes[themeKey].thumbnail}" alt="" loading="lazy" decoding="async" />
                  <div>${this.appSettings.themes[themeKey].name}</div>
                </button>
                `) : ``}
              </div>
            </div>
            <div class="carousel-with-snapping-item" id="step-4">
              <input id="sitename"
                @input="${this.typeKey}"
                @keydown="${this.keydown}"
                maxlength="30"
                placeholder="journey name.."
                tabindex="${this.step !== 4 ? '-1' : ''}" />
              <app-hax-site-button
                  class="sitenamebtn"
                  tabindex="${this.step !== 4 ? '-1' : ''}"
                  label="&gt; Create journey"
                  @click=${this.chooseName}
                  ?disabled="${this.nameTyped === ''}"
                ></app-hax-site-button>
            </div>
            <div class="carousel-with-snapping-item" id="step-5">
              <app-hax-hat-progress
                @progress-ready="${this.progressReady}"
                @promise-progress-finished="${this.progressFinished}"
                tabindex="${this.step !== 5 ? '-1' : ''}"
              ></app-hax-hat-progress>
            </div>
        </scrollable-component>
      </div>
    `;
  }
}
customElements.define(AppHaxSteps.tag, AppHaxSteps);

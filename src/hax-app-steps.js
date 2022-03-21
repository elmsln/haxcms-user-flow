/* eslint-disable lit/attribute-value-entities */
/* eslint-disable lit/binding-positions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable class-methods-use-this */
import { html, css } from 'lit';
import 'scrollable-component';
import { autorun, toJS } from 'mobx';
import './HAXCMSAppRouter.js';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';
import { store } from './HAXCMSAppStore.js';
import './random-word.js';

export class HAXAppSteps extends SimpleColors {
  static get tag() {
    return 'hax-app-steps';
  }

  constructor() {
    super();
    this.step = 1;

    this.routes = [
      {
        path: 'step-1',
        component: 'fake',
        step: 1,
        id: 'step-1',
        label: 'Welcome',
      },
      {
        path: 'step-2',
        component: 'fake',
        step: 2,
        id: 'step-2',
        label: 'Step 2',
      },
      {
        path: 'step-3',
        component: 'fake',
        step: 3,
        id: 'step-3',
        label: 'Select styles',
      },
      {
        path: 'step-4',
        component: 'fake',
        step: 4,
        id: 'step-4',
        label: 'Get writing!',
      },
    ];
    this.phrases = {
      new: ["What's ya name?", 'Dogecoin to the moon', 'Welcome to the Jungle'],
      return: ['Welcome back, take 2?', "That wasn't very long", 'Sup man'],
    };
    autorun(() => {
      this.step = toJS(store.step);
    });
  }

  static get properties() {
    return {
      step: { type: Number, reflect: true },
      routes: { type: Array },
      phrases: { type: Object },
    };
  }

  // eslint-disable-next-line class-methods-use-this
  playSound() {
    const audio = new Audio(
      new URL(`../assets/Hork.mp3`, import.meta.url).href
    );
    audio.play();
  }

  chooseStructure(e) {
    const { value } = e.target;
    store.site.structure = value;
    this.playSound();
  }

  chooseType(e) {
    const { value } = e.target;
    store.site.type = value;
    this.step = 2;
    this.playSound();
  }

  chooseTheme(e) {
    const { value } = e.target;
    store.site.theme = value;
    this.step = 3;
    this.playSound();
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (this.step !== 1 && oldValue === undefined && propName === 'step') {
        setTimeout(() => {
          this.shadowRoot.querySelector(`#step-${this.step}`).scrollIntoView();
        }, 0);
        import('./HAXCMS-btopro-Progress.js').then(() => {
          // We will actually need to hit the HAXCMS endpoint to generate the promises
          // These are just placeholders for now
          const ary = [
            () => import('@lrnwebcomponents/simple-colors/simple-colors.js'),
            () => import('@lrnwebcomponents/i18n-manager/lib/I18NMixin.js'),
            () => import('@lrnwebcomponents/wc-autoload/wc-autoload.js'),
            () => import('@lrnwebcomponents/replace-tag/replace-tag.js'),
            () => import('@lrnwebcomponents/utils/utils.js'),
            () => import('mobx/dist/mobx.esm.js'),
            () => import('@lrnwebcomponents/grid-plate/grid-plate.js'),
            () => import('@lrnwebcomponents/simple-fields/simple-fields.js'),
            () => import('@lrnwebcomponents/h-a-x/h-a-x.js'),
          ];
          this.shadowRoot.querySelector('#testProg').promises = ary;
        });
      }
      if (['step', 'routes'].includes(propName)) {
        store[propName] = this[propName];
      }
      if (this.step === 4 && propName === 'step') {
        setTimeout(() => {
          this.shadowRoot.querySelector('#testProg').process();
        }, 100);
      }
    });
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    autorun(() => {
      if (store.location && store.location.route && store.location.route.id) {
        // use ID from location change to scroll into view
        setTimeout(() => {
          this.shadowRoot
            .querySelector('#'.concat(toJS(store.location.route.id)))
            .scrollIntoView({
              block: 'nearest',
              inline: 'nearest',
              behavior: 'smooth',
            });
        }, 300); // this delay helps w/ initial paint timing but also user perception
        // there's a desire to have a delay especialy when tapping things of
        // about 300ms
      }
    });
    autorun(() => {
      const activeItem = toJS(store.activeItem);
      if (activeItem && activeItem.id) {
        if (activeItem.step !== this.step) {
          this.step = activeItem.step;
        }
        this.shadowRoot
          .querySelector('#link-'.concat(toJS(activeItem.id)))
          .click();
      } else {
        this.shadowRoot.querySelector('#link-step-1').click();
      }
    });
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        scrollable-component {
          --scrollbar-width: 0px;
          --scrollbar-height: 0px;
          --scrollbar-padding: 0;
          --viewport-overflow-x: hidden;
          overflow: hidden;
          width: 100%;
          border: 3px solid red;
        }
        #hide-my-butt {
          visibility: hidden;
          width: 0;
          height: 0;
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
          justify-content: center;
          scroll-snap-align: center;
          scroll-snap-stop: always;
          width: var(--viewport-width);
          height: 500px;

          font-size: 1.5rem;
          line-height: 10vh;
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
        }
      `,
    ];
  }

  getNewWord() {
    this.shadowRoot.querySelector('random-word').getNewWord();
  }

  render() {
    return html`
      <haxcms-app-router></haxcms-app-router>
      <random-word
        key="new"
        .phrases="${this.phrases}"
        @click="${this.getNewWord}"
      ></random-word>
      <ul id="hide-my-butt">
        ${this.routes.map(
          item =>
            html`<li>
              <a
                href="${item.path}"
                id="link-${item.id}"
                class="${this.step === item.step ? 'active-step' : ''}"
                >${item.label}</a
              >
            </li>`
        )}
      </ul>
      <scrollable-component>
        <div class="carousel-with-snapping-track">
          <div class="carousel-with-snapping-item" id="step-1">
            <div class="step-wrapper">
              <haxcms-site-button
                label="> Course"
                value="course"
                @click=${this.chooseStructure}
              ></haxcms-site-button>
              <haxcms-site-button
                label="> Portfolio"
                value="portfolio"
                @click=${this.chooseStructure}
              ></haxcms-site-button>
            </div>
          </div>
          <div class="carousel-with-snapping-item" id="step-2">
            <haxcms-site-button
              label="business"
              value="business"
              @click=${this.chooseType}
            ></haxcms-site-button>
            <haxcms-site-button
              label="Technology"
              value="technology"
              @click=${this.chooseType}
            ></haxcms-site-button>
          </div>
          <div class="carousel-with-snapping-item" id="step-3">
            <haxcms-site-button
              label="Theme1"
              value="theme1"
              @click=${this.chooseTheme}
            ></haxcms-site-button>
            <haxcms-site-button
              label="theme2"
              value="theme2"
              @click=${this.chooseTheme}
            ></haxcms-site-button>
          </div>
          <div class="carousel-with-snapping-item" id="step-4">
            <haxcms-btopro-progress id="testProg"></haxcms-btopro-progress>
          </div>
        </div>
      </scrollable-component>
    `;
  }
}

customElements.define(HAXAppSteps.tag, HAXAppSteps);

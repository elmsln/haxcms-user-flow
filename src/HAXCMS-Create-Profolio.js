import { html, css } from 'lit';
import 'scrollable-component';
import { autorun, toJS } from 'mobx';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';
import { store } from './HAXCMSAppStore.js';

export class HAXCMSCreateProfile extends SimpleColors {
  static get tag() {
    return 'haxcms-create-profile';
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
  }

  static get properties() {
    return {
      routes: { type: Array },
      step: { type: Number, reflect: true },
    };
  }

  increaseStep() {
    console.log();
    if (this.step === this.routes.length) return;
    this.step += 1;
  }

  // eslint-disable-next-line class-methods-use-this
  decreaseStep() {
    if (this.step === 1) return;
    this.step -= 1;
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (['step', 'routes'].includes(propName)) {
        store[propName] = this[propName];
      }
    });
  }

  firstUpdated() {
    autorun(() => {
      if (store.location && store.location.route && store.location.route.id) {
        // use ID from location change to scroll into view
        this.shadowRoot
          .querySelector('#'.concat(toJS(store.location.route.id)))
          .scrollIntoView({
            block: 'start',
            inline: 'nearest',
            behavior: 'smooth',
          });
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
          border: 1px yellow solid;

          background: linear-gradient(to top, #f9f8f7 12px, transparent 12px);
          overflow: hidden;
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
          scroll-snap-align: center;
          scroll-snap-stop: always;
          width: var(--viewport-width);
          height: 250px;
          background-color: #f9f8f7;
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
          border: 1px solid black;
        }
      `,
    ];
  }

  render() {
    return html`
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
      <button @click=${this.increaseStep}>Next Step</button>
      <button @click=${this.decreaseStep}>Prev Step</button>
      <scrollable-component>
        <div class="carousel-with-snapping-track">
          <div class="carousel-with-snapping-item" id="step-1">
            <p>Welcome</p>
          </div>
          <div class="carousel-with-snapping-item" id="step-2">
            <p>To</p>
          </div>
          <div class="carousel-with-snapping-item" id="step-3">
            <p>HAX</p>
          </div>
          <div class="carousel-with-snapping-item" id="step-4">
            <p>CAMP</p>
          </div>
        </div>
      </scrollable-component>
    `;
  }
}
customElements.define(HAXCMSCreateProfile.tag, HAXCMSCreateProfile);

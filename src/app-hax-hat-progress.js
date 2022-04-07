import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors.js';
import '@lrnwebcomponents/promise-progress/promise-progress.js';

export class AppHaxHatProgress extends SimpleColors {
  static get tag() {
    return 'app-hax-hat-progress';
  }

  constructor() {
    super();
    this.promises = [];
    this.max = 100;
  }

  static get properties() {
    return {
      ...super.properties,
      promises: { type: Array },
    };
  }

  process() {
    this.shadowRoot.querySelector('#progress2').process();
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    this.dispatchEvent(new CustomEvent('progress-ready', { detail: true }));

    setTimeout(() => {
      this.shadowRoot
        .querySelector('#progress2')
        .addEventListener('value-changed', e => {
          this.shadowRoot.querySelector('#value').textContent = e.detail.value;
        });
      this.shadowRoot
        .querySelector('#progress2')
        .addEventListener('max-changed', e => {
          this.max = e.detail.value;
        });
      this.shadowRoot
        .querySelector('#progress2')
        .addEventListener('promise-progress-finished', e => {
          if (e.detail.value) {
            this.dispatchEvent(
              new CustomEvent('promise-progress-finished', {
                detail: true,
              })
            );
            const text = document.createElement('button');
            this.shadowRoot.querySelector('#value').textContent = this.max;
            text.textContent = "Let's go!";
            text.classList.add('game');
            text.addEventListener('click', () => {
              alert('go do something');
            });
            this.shadowRoot
              .querySelector('#progress2')
              .parentNode.appendChild(text);
            // show you saying you got this!
            window.dispatchEvent(new CustomEvent("rpg-character-toast-show", {
              bubbles: true,
              cancelable: true,
              composed: true,
              detail: {
                text: `W00t!`,
                duration: 3000,
              },
            }));
          }
        });
    }, 0);
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: block;
          height: 400px;
          width: 400px;
        }
        img {
          width: 400px;
          height: 400px;
          pointer-events: none;
        }
        .progress {
          margin: -148px 0 0 10px;
          z-index: -1;
        }
        .progress::part(progress) {
          height: 100px;
          width: 338px;
          margin-top: -1px 0 0 -4px;
        }

        .progress::part(progress)::-moz-progress-bar {
          background-color: red;
          height: 50px;
          margin: 24px 0 0 0;
          border: none;
        }

        .count {
          color: var(--simple-colors-default-theme-grey-1, white);
          font-family: 'Press Start 2P', sans-serif;
          width: 350px;
          text-align: center;
          position: relative;
          display: block;
          font-size: 30px;
          margin-top: -250px;
          margin-left: 30px;
        }
        .game {
          font-family: 'Press Start 2P', sans-serif;
          font-size: 28px;
          font-weight: bold;
          text-align: center;
          width: 310px;
          background-color: var(--simple-colors-default-theme-red-7, red);
          color: var(--simple-colors-default-theme-grey-1, white);
          border: 0px;
          height: 54px;
          display: block;
          position: relative;
          margin: 138px 0px 0px 52px;
          padding: 0;
          box-sizing: border-box;
        }
        .game:focus,
        .game:hover {
          cursor: pointer;
          background-color: var(--simple-colors-default-theme-red-8);
          color: var(--simple-colors-default-theme-grey-2);
        }
        .game:active {
          cursor: progress;
          background-color: var(--simple-colors-default-theme-red-10);
          color: var(--simple-colors-default-theme-grey-5);
        }
      `,
    ];
  }

  render() {
    return html`
      <img
        src="${new URL('../lib/assets/images/HatBlank.svg', import.meta.url)
          .href}"
        alt=""
      />
      <promise-progress
        id="progress2"
        accent-color="red"
        class="progress"
        .list=${this.promises}
      ></promise-progress>
      <div class="count"><span id="value">0</span>%</div>
    `;
  }
}
customElements.define(AppHaxHatProgress.tag, AppHaxHatProgress);

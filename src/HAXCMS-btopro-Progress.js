import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';

export class HAXCMSbtoproProgress extends SimpleColors {
  static get tag() {
    return 'haxcms-btopro-progress';
  }

  constructor() {
    super();
    this.promises = [];
  }

  static get properties() {
    return {
      promises: { type: Array },
    };
  }

  process() {
    console.log('Start Process');
    this.shadowRoot.querySelector('#progress2').process();
    console.log('Done');
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }

    setTimeout(() => {
      this.shadowRoot
        .querySelector('#progress2')
        .addEventListener('value-changed', e => {
          this.shadowRoot.querySelector('#value').textContent = e.detail.value;
        });
      this.shadowRoot
        .querySelector('#progress2')
        .addEventListener('max-changed', e => {
          this.shadowRoot.querySelector('#max').textContent = e.detail.value;
        });
      this.shadowRoot
        .querySelector('#progress2')
        .addEventListener('promise-progress-finished', e => {
          if (e.detail.value) {
            const text = document.createElement('button');
            this.shadowRoot.querySelector('#value').textContent =
              this.shadowRoot.querySelector('#max').textContent;
            text.textContent = 'All loaded';
            text.classList.add('game');
            text.addEventListener('click', () => {
              alert('go do something');
            });
            this.shadowRoot
              .querySelector('#progress2')
              .parentNode.appendChild(text);
          }
        });
    }, 0);
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        .count {
          position: absolute;
          margin-top: 100px;
          margin-left: 30px;
          font-size: 30px;
          color: var(--simple-colors-default-theme-grey-1, white);
          font-family: 'Press Start 2P', cursive;
          width: 350px;
          text-align: center;
        }
        img {
          width: 400px;
          height: 400px;
          pointer-events: none;
        }
        .progress {
          margin-top: -150px;
          margin-left: 30px;
          z-index: -1;
        }
        .progress::part(progress) {
          height: 100px;
          width: 350px;
        }
        .game {
          font-family: 'Press Start 2P', cursive;
          font-size: 30px;
          font-weight: bold;
          text-align: center;
          width: 333px;
          background-color: var(--simple-colors-default-theme-red-7, red);
          color: var(--simple-colors-default-theme-grey-1, white);
          border: 0;
          z-index: 1;
          position: absolute;
          height: 70px;
          left: 680px;
          bottom: 40px;
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
      <div class="count">
        <span id="value">0</span>/<span id="max">100</span>
      </div>
      <img
        src="${new URL('../assets/HatBlank.svg', import.meta.url).href}"
        alt=""
      />
      <promise-progress
        id="progress2"
        accent-color="red"
        class="progress"
        .list=${this.promises}
      ></promise-progress>
    `;
  }
}
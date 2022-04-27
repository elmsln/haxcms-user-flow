// TODO: Create app-hax-user-menu-button to be tossed into this
// TODO: Create prefix and suffix sections for sound/light toggles and other shtuff

// dependencies / things imported
import { LitElement, html, css } from 'lit';

export class AppHaxUserMenu extends LitElement {
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return 'app-hax-user-menu';
  }

  constructor() {
    super();
    this.isOpen = true;
    this.icon = 'account-circle';
  }

  static get properties() {
    return {
      isOpen: { type: Boolean, reflect: true },
      icon: { type: String, reflect: true },
    };
  }

  // TODO: If scaling is weird with font-sizes, try using clamp() (https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/)
  static get styles() {
    return css`
      :host {
        font-family: 'Press Start 2P', sans-serif;
        text-align: center;
        width: var(--simple-icon-width);
        height: var(--simple-icon-height);
      }

      .menuToggle {
        --simple-icon-width: 60px;
        --simple-icon-height: 60px;
        cursor: pointer;
        display: inline-block;
        margin-left: 12px;
      }
      /* 
      .user-menu {
        display: none;
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
        background-color: var(--app-hax-background-color-active, red);
        color: var(--app-hax-background-color);
      }
      .user-menu button {
        cursor: pointer;
      }
      .user-menu button simple-icon-lite {
        padding-right: 16px;
      }
      .user-menu.open > .logout {
        background-image: url('../lib/assets/images/Logout.svg');
        background-repeat: no-repeat;
        background-position: center;
        text-align: center;
      } */

      /* Slotted stuff  */
      .user-menu {
        display: none;
      }
      .user-menu.open {
        display: block;
        top: 48px;
        right: 0px;
        position: absolute;
        border: 1px solid var(--app-hax-accent-color, blue);
        background-color: var(--app-hax-background-color, green);
      }
      .user-menu.open ::slotted(button) {
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
      .user-menu.open ::slotted(*:hover),
      .user-menu.open ::slotted(*:active),
      .user-menu.open ::slotted(*:focus) {
        background-color: var(
          --app-hax-background-color-active,
          red
        ); /* TODO: delete red later */
        color: var(--app-hax-background-color);
      }
      .user-menu ::slotted(button) {
        cursor: pointer;
      }
      .user-menu ::slotted(*) simple-icon-lite {
        padding-right: 16px;
      }
      .user-menu.open > .logout {
        background-image: url('../lib/assets/images/Logout.svg');
        background-repeat: no-repeat;
        background-position: center;
        text-align: center;
      }
    `;
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  render() {
    return html`
      <div class="entireComponent">
        <div
          class="menuToggle"
          part="menuToggle"
          @click="${this.toggleMenu}"
          @keydown="${this.toggleMenu}"
        >
          <slot name="menuButton"
            ><simple-icon-lite icon="${this.icon}"></simple-icon-lite
          ></slot>
        </div>

        <div class="user-menu ${this.isOpen ? 'open' : ''}">
          <div class="pre-menu">
            <slot name="pre-menu"></slot>
          </div>
          <div class="main-menu">
            <slot name="main-menu"></slot>
          </div>
          <div class="post-menu">
            <slot name="post-menu"></slot>
          </div>
          <!-- <button>
            <simple-icon-lite icon="settings"></simple-icon-lite>Site settings
          </button>
          <button>
            <simple-icon-lite icon="hax:site-map"></simple-icon-lite>Site outline
          </button>
          <button>
            <simple-icon-lite icon="add"></simple-icon-lite>New Journey
          </button>
          <button>
            <simple-icon-lite icon="face"></simple-icon-lite>Account info
          </button>
          <button class="logout">log out</button> -->
        </div>
      </div>
    `;
  }
}
customElements.define(AppHaxUserMenu.tag, AppHaxUserMenu);

/* <button class="menuToggle" @click="${this.toggleMenu}">
            <slot name="button"><simple-icon-lite icon="${this.icon}"></simple-icon-lite></slot>
          </button> */

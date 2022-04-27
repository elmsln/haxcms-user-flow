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
    this.isOpen = false;
    this.icon = 'account-circle';
  }

  static get properties() {
    return {
      isOpen: { type: Boolean, reflect: true },
      icon: { type: String, reflect: true },
    };
  }

  static get styles() {
    return css`
      :host {
        font-family: 'Press Start 2P', sans-serif;
        text-align: center;
        display: inline-block;
        margin: 0px;
        padding: 0px;
      }

      .menuToggle {
        --simple-icon-width: 60px;
        --simple-icon-height: 60px;
        cursor: pointer;
      }

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

      .user-menu.open ::slotted(*) {
        display: block;
        width: 100%;
        margin: 0;
        font-size: 16px;
        text-align: left;
        font-family: 'Press Start 2P', sans-serif;
        color: var(--app-hax-accent-color);
        background-color: var(--app-hax-background-color);
      }

      .user-menu.open ::slotted(*:hover),
      .user-menu.open ::slotted(*:active),
      .user-menu.open ::slotted(*:focus) {
        background-color: var(--app-hax-background-color-active);
        color: var(--app-hax-background-color);
      }

      .user-menu ::slotted(button) {
        cursor: pointer;
      }

      .user-menu ::slotted(*) simple-icon-lite {
        padding-right: 16px;
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
        </div>
      </div>
    `;
  }
}
customElements.define(AppHaxUserMenu.tag, AppHaxUserMenu);


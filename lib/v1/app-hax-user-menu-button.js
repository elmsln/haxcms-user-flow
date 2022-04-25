// TODO: Text-overflow-ellipses

// dependencies / things imported
import { LitElement, html, css } from 'lit';

export class AppHaxUserMenuButton extends LitElement {
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return 'app-hax-user-menu-button';
  }

  constructor() {
    super();
    this.icon = "account-circle";
    this.label = "sample";
  }

  static get properties() {
    return {
      icon: { type: String, reflect: true },
      label: { type: String, reflect: true }
    };
  }

  static get styles() {
    return css`
      :host {
        font-family: 'Press Start 2P', sans-serif;
        text-align: center;
        width: 100%;
        --background-color: var(--app-hax-background-color, white);
        --accent-color: var(--app-hax-accent-color, black);
      }
      
      .menu-button {
        display: block;
        border: 2px solid var(--accent-color);
        margin: 0;
        padding: 8px;
        font-size: 16px;
        text-align: left;
        color: var(--accent-color);
        background-color: var(--background-color);
        cursor: pointer;
      }
      .menu-button:hover,
      .menu-button:active,
      .menu-button:focus {
        background-color: var(--accent-color);
        color: var(--background-color);
      }
      .icon {
        padding-right: 16px;
      }
      .menu-button::part('.logout') {
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
      <div class="menu-button">

      <simple-icon-lite class="icon" icon="${this.icon}"></simple-icon-lite>${this.label}
        <!-- <div class="icon">
            <slot name="icon"><simple-icon-lite icon="${this.icon}"></simple-icon-lite></slot>
        </div>
        <div class="label">
            <slot name="label">${this.label}</slot>
        </div> -->

        <!-- <div class="icon">
            <simple-icon-lite icon="${this.icon}"></simple-icon-lite>
            ${this.label}
        </div>
        <div class="label">
            ${this.label}
        </div> -->
      </div>
    `;
  }
}
customElements.define(AppHaxUserMenuButton.tag, AppHaxUserMenuButton);

/* <button class="menuToggle" @click="${this.toggleMenu}">
            <slot name="button"><simple-icon-lite icon="${this.icon}"></simple-icon-lite></slot>
          </button> */

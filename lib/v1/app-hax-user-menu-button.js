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
    this.label = "Default";
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
        --background-color: var(--app-hax-background-color);
        --accent-color: var(--app-hax-accent-color);
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

    `;
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  render() {
    return html`
      <div class="menu-button" part="menu-button">
        <simple-icon-lite class="icon" icon="${this.icon}"></simple-icon-lite>${this.label}
      </div>
    `;
  }
}
customElements.define(AppHaxUserMenuButton.tag, AppHaxUserMenuButton);

/* <button class="menuToggle" @click="${this.toggleMenu}">
            <slot name="button"><simple-icon-lite icon="${this.icon}"></simple-icon-lite></slot>
          </button> */
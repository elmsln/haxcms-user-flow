// dependencies / things imported
import { LitElement, html, css } from 'lit';
import './app-hax-wired-toggle.js';

// top bar of the UI
export class AppHaxTopBar extends LitElement {
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return 'app-hax-top-bar';
  }

  // constructor() {
  //   super();
  // }

  // static get properties() {
  //   return {
  //   };
  // }

  static get styles() {
    return css`
      :host {
        --bg-color: orange;
        --accent-color: white;
        --top-bar-height: 48px;
        display: block;
      }

      /* @media (prefers-color-scheme: dark) {
        :root {
          --accent-color: white;
          color: var(--accent-color);
          
        }

        :host {
          background-color: black;
        } 
      } */

      .topBar {
        overflow: hidden;
        background-color: var(--bg-color);
        color: var(--accent-color);
        height: var(--top-bar-height);
        border-bottom: 2px var(--accent-color) solid;
        text-align: center;
        vertical-align: middle;
        font-size: 2vw;

        display: grid;
        grid-template-columns: 25% 50% 25%;
      }

      /* .topBar > div {
        background-color: rgba(255, 255, 255, 0.8);
        border: 1px solid black;
      } */

      .topBar .left {
        text-align: left;
      }

      .topBar .center {
        text-align: center;
      }

      .topBar .right {
        text-align: right;
      }

      .left ::slotted(*) {
        color: red;
      }
    `;
  }

  render() {
    return html`
      <div class="topBar">
        <div class="left" part="left">
          <slot name="left"></slot>
        </div>
        <div class="center" part="center">
          <slot name="center"></slot>
        </div>
        <div class="right" part="right">
          <slot name="right"></slot>
        </div>
      </div>
    `;
  }
}
customElements.define(AppHaxTopBar.tag, AppHaxTopBar);

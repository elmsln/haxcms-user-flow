// dependencies / things imported
import { LitElement, html, css } from 'lit';

export class HAXCMSTopBar extends LitElement {
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return 'haxcms-top-bar';
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
        --bg-color: black;
        --accent-color: white;
        --top-bar-height: 50px;
        --logo-height: calc(var(--top-bar-height) * 0.88);
        --logo-padding: calc((var(--top-bar-height) - var(--logo-height)) / 2);
        display: inline-block;
      }

      :root {
        font: sans-serif;
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
        background-color: var(--bg-color);
        color: var(--accent-color);
        width: 100vw;
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

      .topBar .itemsLeft {
        text-align: left;
      }

      .topBar .itemsCenter {
        text-align: center;
      }

      .topBar .itemsRight {
        text-align: right;
      }

      .itemsLeft ::slotted(*) {
        color: red;
      }
      .itemsCenter ::slotted(img) {
        height: var(--logo-height);
        padding-top: var(--logo-padding);
      }
      .itemsRight ::slotted(*) {
        background-color: blue;
      }
    `;
  }

  render() {
    return html`
      <div class="topBar">
        <div class="itemsLeft" part="itemsLeft">
          <slot name="itemsLeft"></slot>
        </div>
        <div class="itemsCenter" part="itemsCenter">
          <slot name="itemsCenter"></slot>
        </div>
        <div class="itemsRight" part="itemsRight">
          <slot name="itemsRight"></slot>
        </div>
      </div>
    `;
  }
}

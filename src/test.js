import { LitElement, css, html } from "lit";
import { animate } from '@lit-labs/motion';

class MyElement extends LitElement {
    constructor() {
        super();
        this.another = false;
        this.shifted = false;
    }
    static get tag() {
        return "my-element";
    }
  static get properties() {
      return {
        shifted: { type: Boolean, reflect: true},
        another: { type: Boolean, reflect: true}
    }
  }
  static get styles() {
    return [css`
        :host {
            display: block;
        }
        .box {
            position: absolute;
            width: 100px;
            height: 100px;
            background-color: steelblue;
            left: 550px;
            top: 50px;
        }
        :host([shifted]) .box {
            background-color: orange;
            margin: 10px;
            top: 400px;
            padding: 50px;
        }
        :host([another]) .box {
            background-color: purple;
            left: 250px;
            padding: 100px;
        }
    `];
  }

  render() {
    return html`
      <button @click=${this._toggle}>Move</button>
      <button @click=${this._another}>another</button>
      <div class="box" ${animate()}></div>
    `;
  }

  _toggle() {
    this.shifted = !this.shifted;
  }
  _another() {
    this.another = !this.another;
  }
}
customElements.define(MyElement.tag, MyElement);
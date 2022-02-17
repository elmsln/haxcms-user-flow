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
  async task() {
    return new Promise(res => {
      setTimeout(res, Math.random() * 10000);
    })
  }
  firstUpdated() {
    this.loadingBar = this.shadowRoot.querySelector("#loadingBar");
    (async() => {
      let current = 1;
      const promises = new Array(100)
        .fill(0)
        .map(() => this.task().then(() => this.loadingBarStatus(current++, 100)));

      await Promise.all(promises);
      this.loadingBar.textContent = `Loading Finished`;
    })();
  }
  static get properties() {
      return {
        shifted: { type: Boolean, reflect: true},
        another: { type: Boolean, reflect: true}
    }
  }
  loadingBarStatus(current, max) {
    this.loadingBar.value = current;
    this.loadingBar.textContent = `Loading ${current} of ${max}`;
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
      <progress id="loadingBar" max="100" value="0"></progress>

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
import { html, css } from 'lit';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors.js';

export class AppHaxSiteLogin extends SimpleColors {
    // a convention I enjoy so you can change the tag name in 1 place
    static get tag() {
      return 'app-hax-site-login';
    }
  
    // HTMLElement life-cycle, built in; use this for setting defaults
    constructor() {
      super();
        this.username='';
        this.password='';
        this.errorMSG='Invalid Username'
        this.hidePassword = true;
    }
  
    // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
    static get properties() {
      return {
        ...super.properties,
        username: {type: String},
        password: {type: String},
        errorMSG: {type: String},
        hidePassword: {type: Boolean}
      };
    }
  
    // updated fires every time a property defined above changes
    // this allows you to react to variables changing and use javascript to perform logic
    // updated(changedProperties) {
    //   changedProperties.forEach((oldValue, propName) => {
    //   });
    // }
  
    // CSS - specific to Lit
    static get styles() {
      return [
        ...super.styles,
        css`
        :host {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        };
        #inputContainer{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        a{
            color: red;
        }

        // This does not work
        #errorText > p {
            visibility: hidden;
            background-color: lightblue;
            color: red;
            font-weight: bold;
        }
        `,
    ];
  }

    // eslint-disable-next-line class-methods-use-this
    checkUsername(){
        // eslint-disable-next-line prefer-destructuring
        const value = this.shadowRoot.querySelector("#username").value;
        if(value.includes('@psu.edu')) {
            this.hidePassword = false;
            this.errorMSG = 'Invalid Password';
            this.username = value;
        } else{
            // This does not work;
            this.shadowRoot.querySelector('#errorText').style.visibility = "show";
        }
    }

    // eslint-disable-next-line class-methods-use-this
    checkPassword() {
        // eslint-disable-next-line prefer-destructuring
        const value = this.shadowRoot.querySelector("#password").value;
        if(value === "1234"){
            const evt = new CustomEvent("simple-modal-hide", {
                bubbles: true,
                cancelable: true,
                detail: {
                  title: 'Close Modal',
                  invokedBy: this,
                }
              });
        
            this.dispatchEvent(evt);
        } else {
            alert('invalid password');
            this.errorMSG = "Invalid Password";
        }
    }

    // eslint-disable-next-line class-methods-use-this
    reset(){
        this.errorMSG = 'Invalid Password'
        this.username='';
        this.hidePassword = true;
    }

    render() {
        return html`
        <p>AppHax Login</p>
        <rpg-character circle></rpg-character> 

        <div id="inputContainer">
            ${this.hidePassword
            ? html `<input id="username" type="text" placeholder="abc123@psu.edu"/>  <button @click=${this.checkUsername}>next</button>`
            : html `<p> Hey ${this.username}! <a @click=${this.reset}>not you?</a></p><input id="password" type="text" placeholder="insert password here"/>   <button @click=${this.checkPassword}>Login</button>`
            }
        </div>
        <p id="errorText">${this.errorMSG}</p>
        `;
    }
}
customElements.define(AppHaxSiteLogin.tag, AppHaxSiteLogin);
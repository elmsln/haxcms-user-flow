import{S as e,r as t,a as s,b as r,$ as i}from"./38e3f26b.js";import"./3289419c.js";class o extends e{static get tag(){return"app-hax-site-login"}constructor(){super(),this.username="",this.password="",this.errorMSG="Enter User name",this.hidePassword=!0}static get properties(){return{...super.properties,username:{type:String},password:{type:String},errorMSG:{type:String},hidePassword:{type:Boolean}}}firstUpdated(){super.firstUpdated(),setTimeout((()=>{this.shadowRoot.querySelector("input").focus()}),0)}static get styles(){return[...super.styles,t`
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
        rpg-character {
          display: block;
          margin: 50px;
        }
        .external {
          text-align: center;
        }
        `]}checkUsername(){const e=this.shadowRoot.querySelector("#username").value;e.includes("@psu.edu")?(this.hidePassword=!1,this.errorMSG="Invalid Password",this.username=e,setTimeout((()=>{this.shadowRoot.querySelector("input").focus()}),0)):this.shadowRoot.querySelector("#errorText").style.visibility="show"}checkPassword(){"1234"===this.shadowRoot.querySelector("#password").value?(s((()=>{r.user={name:this.username}})),this.dispatchEvent(new CustomEvent("simple-modal-hide",{bubbles:!0,cancelable:!0,detail:{}})),r.toast(`Welcome ${this.username}!`,5e3)):(alert("invalid password"),this.errorMSG="Invalid Password")}reset(){this.errorMSG="",this.username="",this.hidePassword=!0}nameChange(e){this.username=this.shadowRoot.querySelector("#username").value}render(){return i` <rpg-character circle seed="${this.username}"></rpg-character> <div id="inputContainer"> ${this.hidePassword?i`<input id="username" type="text" placeholder="abc123@psu.edu" @input="${this.nameChange}"> <button @click="${this.checkUsername}">next</button>`:i`<p> Hey ${this.username}! <a @click="${this.reset}">not you?</a></p><input id="password" type="text" placeholder="insert password here"> <button @click="${this.checkPassword}">Login</button>`} <div class="external"> <slot name="externalproviders"></slot> </div> </div> <p id="errorText">${this.errorMSG}</p> `}}customElements.define(o.tag,o);export{o as AppHaxSiteLogin};

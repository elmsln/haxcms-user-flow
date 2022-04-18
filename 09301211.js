import{S as e,r as t,A as s,a as r,b as o,$ as i}from"./6cf7fdd1.js";import"./6ce443c8.js";class a extends e{static get tag(){return"app-hax-site-login"}constructor(){super(),this.username="",this.password="",this.errorMSG="Enter User name",this.hidePassword=!0}static get properties(){return{...super.properties,username:{type:String},password:{type:String},errorMSG:{type:String},hidePassword:{type:Boolean}}}firstUpdated(){super.firstUpdated(),setTimeout((()=>{this.shadowRoot.querySelector("input").focus()}),0)}static get styles(){return[...super.styles,t`:host{display:flex;flex-direction:column;justify-content:center;align-items:center}#inputcontainer{display:flex;flex-direction:column;justify-content:center;align-items:center}a{color:red}// This does not work #errorText>p{visibility:hidden;background-color:#add8e6;color:red;font-weight:700}rpg-character{display:block;margin:10px}.external{text-align:center}`]}checkUsername(){const e=this.shadowRoot.querySelector("#username").value;this.hidePassword=!1,this.errorMSG="",this.username=e,setTimeout((()=>{this.shadowRoot.querySelector("input").focus()}),0)}async checkPassword(){console.log("Clicked Login Button");const e=this.shadowRoot.querySelector("#password").value,t=await s.makeCall("jwtUrl",{username:this.username,password:e});console.log(t),200!==t.status_code?(this.hidePassword=!0,this.errorMSG="Invalid Username or Password"):(console.log("Successful Response"),r((()=>{o.user={name:this.username}})),o.jwt=t.jwt,this.dispatchEvent(new CustomEvent("simple-modal-hide",{bubbles:!0,cancelable:!0,detail:{}})),o.toast(`Welcome ${this.username}! Let's build!`,5e3,{hat:"construction"}))}reset(){this.errorMSG="",this.username="",this.hidePassword=!0}nameChange(e){this.username=this.shadowRoot.querySelector("#username").value}render(){return i` <rpg-character circle seed="${this.username}"></rpg-character> <div id="inputcontainer"> ${this.hidePassword?i`<input id="username" type="text" placeholder="abc123@psu.edu" @input="${this.nameChange}"> <button @click="${this.checkUsername}">next</button>`:i`<p> Hey ${this.username}! <a @click="${this.reset}">not you?</a></p><input id="password" type="text" placeholder="insert password here"> <button @click="${this.checkPassword}">Login</button>`} <div class="external"> <slot name="externalproviders"></slot> </div> </div> <p id="errorText">${this.errorMSG}</p> `}}customElements.define(a.tag,a);export{a as AppHaxSiteLogin};
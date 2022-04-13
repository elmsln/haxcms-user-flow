import{S as e,r as t,A as s,l as r,a as o,b as i,$ as a}from"./fb42866b.js";import"./cafe3b3e.js";class n extends e{static get tag(){return"app-hax-site-login"}constructor(){super(),this.username="",this.password="",this.errorMSG="Enter User name",this.hidePassword=!0}static get properties(){return{...super.properties,username:{type:String},password:{type:String},errorMSG:{type:String},hidePassword:{type:Boolean}}}firstUpdated(){super.firstUpdated(),setTimeout((()=>{this.shadowRoot.querySelector("input").focus()}),0)}static get styles(){return[...super.styles,t`:host{display:flex;flex-direction:column;justify-content:center;align-items:center}#inputcontainer{display:flex;flex-direction:column;justify-content:center;align-items:center}a{color:red}// This does not work #errorText>p{visibility:hidden;background-color:#add8e6;color:red;font-weight:700}rpg-character{display:block;margin:10px}.external{text-align:center}`]}checkUsername(){const e=this.shadowRoot.querySelector("#username").value;this.hidePassword=!1,this.errorMSG="",this.username=e,setTimeout((()=>{this.shadowRoot.querySelector("input").focus()}),0)}async checkPassword(){console.log("Clicked Login Button");const e=this.shadowRoot.querySelector("#password").value,t=await s.makeCall("login",{username:this.username,password:e});console.log(t),200!==t.status_code?(this.hidePassword=!0,this.errorMSG="Invalid Username or Password"):(console.log("Successful Response"),r("jwt",t.jwt),o((()=>{i.user={name:this.username}})),i.jwt=t.jwt,this.dispatchEvent(new CustomEvent("simple-modal-hide",{bubbles:!0,cancelable:!0,detail:{}})),i.toast(`Welcome ${this.username}! Let's build!`,5e3,{hat:"construction"}))}reset(){this.errorMSG="",this.username="",this.hidePassword=!0}nameChange(e){this.username=this.shadowRoot.querySelector("#username").value}render(){return a` <rpg-character seed="${this.username}"></rpg-character> <div id="inputcontainer"> ${this.hidePassword?a`<input id="username" type="text" placeholder="abc123@psu.edu" @input="${this.nameChange}"> <button @click="${this.checkUsername}">next</button>`:a`<p> Hey ${this.username}! <a @click="${this.reset}">not you?</a></p><input id="password" type="text" placeholder="insert password here"> <button @click="${this.checkPassword}">Login</button>`} <div class="external"> <slot name="externalproviders"></slot> </div> </div> <p id="errorText">${this.errorMSG}</p> `}}customElements.define(n.tag,n);export{n as AppHaxSiteLogin};

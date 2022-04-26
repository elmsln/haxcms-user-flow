import{S as e,r as t,a as s,A as r,l as a,b as o,$ as i}from"./1a95873b.js";import"./c8892087.js";import"./34670000.js";class n extends e{static get tag(){return"app-hax-site-login"}constructor(){super(),this.username="",this.password="",this.errorMSG="Enter User name",this.hidePassword=!0}static get properties(){return{...super.properties,username:{type:String},password:{type:String},errorMSG:{type:String},hidePassword:{type:Boolean}}}firstUpdated(){super.firstUpdated(),setTimeout((()=>{this.shadowRoot.querySelector("input").focus()}),0)}static get styles(){return[...super.styles,t`:host{display:flex;flex-direction:column;justify-content:center;align-items:center}#inputcontainer{display:flex;flex-direction:column;justify-content:center;align-items:center}a{color:red}// This does not work #errorText>p{visibility:hidden;background-color:#add8e6;color:red;font-weight:700}rpg-character{display:block;margin:10px}.external{text-align:center}`]}checkUsername(){const e=this.shadowRoot.querySelector("#username").value;this.hidePassword=!1,this.errorMSG="",this.username=e,s.appEl.playSound("click2"),setTimeout((()=>{this.shadowRoot.querySelector("input").focus()}),0)}async checkPassword(){s.appEl.playSound("click2");const e=this.shadowRoot.querySelector("#password").value,t=await r.makeCall("login",{username:this.username,password:e});200!==t.status?(this.hidePassword=!0,this.errorMSG="Invalid Username or Password",s.appEl.playSound("error")):(a("jwt",t.jwt),o((()=>{s.user={name:this.username}})),s.appEl.playSound("success"),s.jwt=t.jwt,this.dispatchEvent(new CustomEvent("simple-modal-hide",{bubbles:!0,cancelable:!0,detail:{}})),s.toast(`Welcome ${this.username}! Let's go!`,5e3,{hat:"construction"}))}reset(){this.errorMSG="",this.username="",this.hidePassword=!0}nameChange(){this.username=this.shadowRoot.querySelector("#username").value}render(){return i` <rpg-character seed="${this.username}"></rpg-character> <div id="inputcontainer"> ${this.hidePassword?i`<input id="username" type="text" placeholder="abc123@hax.camp" @input="${this.nameChange}"> <button @click="${this.checkUsername}">next</button>`:i`<p> Hey ${this.username}! <a @click="${this.reset}">not you?</a></p><input id="password" type="password" placeholder="enter password"> <button @click="${this.checkPassword}">Login</button>`} <div class="external"> <slot name="externalproviders"></slot> </div> </div> <p id="errorText">${this.errorMSG}</p> `}}customElements.define(n.tag,n);export{n as AppHaxSiteLogin};

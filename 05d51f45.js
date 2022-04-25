import{S as e,r as t,a as s,A as r,l as a,b as i,$ as o}from"./61d850e7.js";import"./5d5d2dbe.js";import"./27a4f054.js";class n extends e{static get tag(){return"app-hax-site-login"}constructor(){super(),this.username="",this.password="",this.errorMSG="Enter User name",this.hidePassword=!0}static get properties(){return{...super.properties,username:{type:String},password:{type:String},errorMSG:{type:String},hidePassword:{type:Boolean}}}firstUpdated(){super.firstUpdated(),setTimeout((()=>{this.shadowRoot.querySelector("input").focus()}),0)}static get styles(){return[...super.styles,t`:host{display:flex;flex-direction:column;justify-content:center;align-items:center}#inputcontainer{display:flex;flex-direction:column;justify-content:center;align-items:center}a{color:red}// This does not work #errorText>p{visibility:hidden;background-color:#add8e6;color:red;font-weight:700}rpg-character{display:block;margin:10px}.external{text-align:center}`]}checkUsername(){const e=this.shadowRoot.querySelector("#username").value;this.hidePassword=!1,this.errorMSG="",this.username=e,s.appEl.playSound("click2"),setTimeout((()=>{this.shadowRoot.querySelector("input").focus()}),0)}async checkPassword(){s.appEl.playSound("click2");const e=this.shadowRoot.querySelector("#password").value,t=await r.makeCall("login",{username:this.username,password:e});200!==t.status?(this.hidePassword=!0,this.errorMSG="Invalid Username or Password",s.appEl.playSound("error")):(a("jwt",t.jwt),i((()=>{s.user={name:this.username}})),s.appEl.playSound("success"),s.jwt=t.jwt,this.dispatchEvent(new CustomEvent("simple-modal-hide",{bubbles:!0,cancelable:!0,detail:{}})),s.toast(`Welcome ${this.username}! Let's go!`,5e3,{hat:"construction"}))}reset(){this.errorMSG="",this.username="",this.hidePassword=!0}nameChange(){s.appEl.playSound("click"),this.username=this.shadowRoot.querySelector("#username").value}render(){return o` <rpg-character seed="${this.username}"></rpg-character> <div id="inputcontainer"> ${this.hidePassword?o`<input id="username" type="text" placeholder="abc123@psu.edu" @input="${this.nameChange}"> <button @click="${this.checkUsername}">next</button>`:o`<p> Hey ${this.username}! <a @click="${this.reset}">not you?</a></p><input id="password" type="text" placeholder="insert password here"> <button @click="${this.checkPassword}">Login</button>`} <div class="external"> <slot name="externalproviders"></slot> </div> </div> <p id="errorText">${this.errorMSG}</p> `}}customElements.define(n.tag,n);export{n as AppHaxSiteLogin};

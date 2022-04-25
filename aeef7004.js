import{a as t,r as e,o as a,$ as i,t as s,b as r}from"./38e3f26b.js";import{S as l}from"./fb2167b0.js";import"./3289419c.js";const o=new URL(new URL("a9b70fee.svg",import.meta.url).href,import.meta.url).href,n=new URL(new URL("c143da4c.svg",import.meta.url).href,import.meta.url).href,d=new URL(new URL("188f816b.svg",import.meta.url).href,import.meta.url).href;class h extends l{static get tag(){return"rpg-character-toast"}constructor(){super(),this.setDefaultToast(),this.key=null,this.phrases={},this.fire=!1,this.walking=!1,this.word=null,this.addEventListener("click",(()=>{this.opened=!1})),t((()=>{this.userName=s(r.user.name)})),t((()=>{this.darkMode=s(r.darkMode)}))}static get styles(){return[...super.styles,e`:host([opened]){display:block}:host([hidden]){display:none}:host{height:142px;display:none;width:var(--simple-toast-width,auto);color:var(--simple-toast-color,var(--simple-colors-default-theme-accent-12,#000));background-color:transparent;top:var(--simple-toast-top);margin:var(--simple-toast-margin,8px);padding:var(--simple-toast-padding,16px);bottom:var(--simple-toast-bottom,36px);right:var(--simple-toast-right,0);border:var(--simple-toast-border);z-index:var(--simple-toast-z-index,10000000);font-size:var(--simple-toast-font-size,40px);font-family:'Press Start 2P',sans-serif;font-size:24px;font-weight:700;text-align:center;vertical-align:middle}.bubble{height:142px;display:inline-flex}.mid{line-height:142px;background-repeat:repeat-x;background-image:url(${a(n)})}.leftedge{background-image:url(${a(o)});width:40px}.rightedge{background-image:url(${a(d)});width:75px}:host([dark-mode]) .leftedge,:host([dark-mode]) .mid,:host([dark-mode]) .rightedge{filter:invert(1)}`]}static get properties(){return{...super.properties,darkMode:{type:Boolean,reflect:!0,attribute:"dark-mode"},fire:{type:Boolean},walking:{type:Boolean},opened:{type:Boolean,reflect:!0},text:{type:String},classStyle:{type:String,attribute:"class-style"},duration:{type:Number},eventCallback:{type:String,attribute:"event-callback"}}}render(){return i` <div class="bubble"> <span class="bubble leftedge"></span> <span class="bubble mid">${this.text}</span> <slot></slot> <span class="bubble rightedge"></span> <rpg-character seed="${this.userName}" ?fire="${this.fire}" ?walking="${this.walking}"></rpg-character> </div>`}connectedCallback(){super.connectedCallback(),window.addEventListener("rpg-character-toast-hide",this.hideSimpleToast.bind(this)),window.addEventListener("rpg-character-toast-show",this.showSimpleToast.bind(this))}disconnectedCallback(){window.removeEventListener("rpg-character-toast-hide",this.hideSimpleToast.bind(this)),window.removeEventListener("rpg-character-toast-show",this.showSimpleToast.bind(this)),super.disconnectedCallback()}hideSimpleToast(t){this.hide()}openedChanged(t){this.opened=t.detail.value}setDefaultToast(){for(this.opened=!1,this.text="Saved",this.classStyle="",this.duration=3e3,this.accentColor="grey",this.dark=!1,this.eventCallback=null;null!==this.firstChild;)this.removeChild(this.firstChild)}showSimpleToast(t){this.setDefaultToast(),t.detail.duration&&(this.duration=t.detail.duration),t.detail.fire&&(this.fire=t.detail.fire),t.detail.walking&&(this.walking=t.detail.walking),t.detail.text&&(this.text=t.detail.text),t.detail.classStyle&&(this.classStyle=t.detail.classStyle),t.detail.eventCallback&&(this.eventCallback=t.detail.eventCallback),t.detail.slot&&this.appendChild(t.detail.slot),t.detail.accentColor&&(this.accentColor=t.detail.accentColor),t.detail.dark&&(this.dark=t.detail.dark),this.show()}show(t){this.opened=!0}hide(t){if(this.fire=!1,this.walking=!1,this.eventCallback){const t=new CustomEvent(this.eventCallback,{bubbles:!0,cancelable:!0,detail:!0,composed:!0});this.dispatchEvent(t)}this.opened=!1}}customElements.define(h.tag,h),window.RPGToast=window.RPGToast||{},window.RPGToast.requestAvailability=()=>(window.RPGToast.instance||(window.RPGToast.instance=document.createElement(h.tag),document.body.appendChild(window.RPGToast.instance)),window.RPGToast.instance);const c=window.RPGToast.requestAvailability();export{h as RPGCharacterToast,c as RPGToast};
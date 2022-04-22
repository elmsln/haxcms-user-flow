import{r as t,o as e,$ as a,a as i,t as s,b as o}from"./65b33a5a.js";import{S as r}from"./64142abc.js";import"./e22be509.js";const n=new URL(new URL("a9b70fee.svg",import.meta.url).href,import.meta.url).href,l=new URL(new URL("c143da4c.svg",import.meta.url).href,import.meta.url).href,d=new URL(new URL("7a506f44.svg",import.meta.url).href,import.meta.url).href;class h extends r{static get tag(){return"rpg-character-toast"}constructor(){super(),this.setDefaultToast(),this.key=null,this.phrases={},this.fire=!1,this.hat="coffee",this.walking=!1,this.word=null,this.addEventListener("click",(()=>{this.opened=!1}))}static get styles(){return[...super.styles,t`:host([opened]){display:block}:host([hidden]){display:none}:host{--simple-toast-bottom:0px;height:142px;display:none;width:var(--simple-toast-width,auto);color:var(--simple-toast-color,var(--simple-colors-default-theme-accent-12,#000));background-color:transparent;top:var(--simple-toast-top);margin:var(--simple-toast-margin,4px);padding:var(--simple-toast-padding,4px);bottom:var(--simple-toast-bottom,36px);right:var(--simple-toast-right,0);border:var(--simple-toast-border);z-index:var(--simple-toast-z-index,10000000);font-size:var(--simple-toast-font-size,40px);font-family:'Press Start 2P',sans-serif;font-size:24px;font-weight:700;text-align:center;vertical-align:middle}.bubble{height:142px;display:inline-flex}.mid{line-height:142px;background-color:#fff;background-repeat:repeat-x;background-image:url(${e(l)})}.leftedge{background-image:url(${e(n)});width:24px;background-color:#fff}.rightedge{background-image:url(${e(d)});width:54px;background-color:#fff}:host([dark-mode]) .leftedge,:host([dark-mode]) .mid,:host([dark-mode]) .rightedge{filter:invert(1)}`]}static get properties(){return{...super.properties,darkMode:{type:Boolean,reflect:!0,attribute:"dark-mode"},fire:{type:Boolean},hat:{type:String},walking:{type:Boolean},opened:{type:Boolean,reflect:!0},text:{type:String},classStyle:{type:String,attribute:"class-style"},duration:{type:Number},eventCallback:{type:String,attribute:"event-callback"}}}render(){return a` <div class="bubble"> <span class="bubble leftedge"></span> <span class="bubble mid">${this.text}</span> <slot></slot> <span class="bubble rightedge"></span> <rpg-character seed="${this.userName}" ?fire="${this.fire}" hat="${this.hat}" ?walking="${this.walking}"></rpg-character> </div>`}connectedCallback(){super.connectedCallback(),window.addEventListener("rpg-character-toast-hide",this.hideSimpleToast.bind(this)),window.addEventListener("rpg-character-toast-show",this.showSimpleToast.bind(this))}disconnectedCallback(){window.removeEventListener("rpg-character-toast-hide",this.hideSimpleToast.bind(this)),window.removeEventListener("rpg-character-toast-show",this.showSimpleToast.bind(this)),super.disconnectedCallback()}hideSimpleToast(){this.hide()}openedChanged(t){this.opened=t.detail.value}setDefaultToast(){for(this.opened=!1,this.text="Saved",this.classStyle="",this.duration=3e3,this.accentColor="grey",this.dark=!1,this.eventCallback=null;null!==this.firstChild;)this.removeChild(this.firstChild)}showSimpleToast(t){this.hideSimpleToast(),this.setDefaultToast(),t.detail.duration&&(this.duration=t.detail.duration),t.detail.fire&&(this.fire=t.detail.fire),t.detail.hat&&(this.hat=t.detail.hat),t.detail.walking&&(this.walking=t.detail.walking),t.detail.text&&(this.text=t.detail.text),t.detail.classStyle&&(this.classStyle=t.detail.classStyle),t.detail.eventCallback&&(this.eventCallback=t.detail.eventCallback),t.detail.slot&&this.appendChild(t.detail.slot),t.detail.accentColor&&(this.accentColor=t.detail.accentColor),t.detail.dark&&(this.dark=t.detail.dark),this.show()}show(){this.opened=!0}hide(){if(this.duration=0,this.fire=!1,this.hat="coffee",this.walking=!1,this.eventCallback){const t=new CustomEvent(this.eventCallback,{bubbles:!0,cancelable:!0,detail:!0,composed:!0});this.dispatchEvent(t)}this.opened=!1}}customElements.define(h.tag,h);class p extends h{static get tag(){return"app-hax-toast"}constructor(){super(),i((()=>{this.userName=s(o.user.name)})),i((()=>{this.darkMode=s(o.darkMode)}))}connectedCallback(){super.connectedCallback(),window.addEventListener("app-hax-toast-hide",this.hideSimpleToast.bind(this)),window.addEventListener("app-hax-toast-show",this.showSimpleToast.bind(this))}disconnectedCallback(){window.removeEventListener("app-hax-toast-hide",this.hideSimpleToast.bind(this)),window.removeEventListener("app-hax-toast-show",this.showSimpleToast.bind(this)),super.disconnectedCallback()}}customElements.define(p.tag,p),window.AppHaxToast=window.AppHaxToast||{},window.AppHaxToast.requestAvailability=()=>(window.AppHaxToast.instance||(window.AppHaxToast.instance=document.createElement(p.tag),document.body.appendChild(window.AppHaxToast.instance)),window.AppHaxToast.instance);const c=window.AppHaxToast.requestAvailability();export{p as AppHaxToast,c as AppHaxToastInstance};

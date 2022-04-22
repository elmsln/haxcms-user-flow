import{S as t,r as e,$ as s}from"./02471d06.js";class o extends t{static get tag(){return"simple-toast-el"}static get styles(){return[...super.styles,e`:host{display:none;justify-content:center;position:fixed;min-width:100px;text-align:center;color:var(--simple-colors-default-theme-accent-1,#fff);background-color:var(--simple-colors-default-theme-accent-12,#000);border-radius:var(--simple-toast-border-radius,2px);border:var(--simple-toast-border,none);font-size:var(--simple-toast-font-size,1em);font-family:var(--simple-toast-font-family,sans-serif)}:host(.show){display:flex}@-webkit-keyframes fadein{from{bottom:0;opacity:0}to{bottom:var(--simple-toast-bottom,40px);opacity:1}}@keyframes fadein{from{bottom:0;opacity:0}to{bottom:var(--simple-toast-bottom,40px);opacity:1}}@-webkit-keyframes fadeout{from{bottom:var(--simple-toast-bottom,40px);opacity:1}to{bottom:0;opacity:0}}@keyframes fadeout{from{bottom:var(--simple-toast-bottom,40px);opacity:1}to{bottom:0;opacity:0}}`]}static get properties(){return{...super.properties,text:{type:String},duration:{type:Number},opened:{type:Boolean}}}constructor(){super(),this.text="",this.duration=3e3,this.opened=!1,this.addEventListener("animationend",(t=>{"fadeout"==t.animationName&&(this.opened=!1)}))}updated(t){super.updated(t),t.forEach(((t,e)=>{"opened"===e&&void 0!==t&&(this.dispatchEvent(new CustomEvent("opened-changed",{detail:{value:this[e]}})),this[e]?this.show(this.text):this.hide()),"duration"===e&&this[e]&&(this.style.animation="fadein 0.2s, fadeout 0.2s "+this[e]/1e3+"s")}))}render(){return s`<span><span>${this.text}</span><slot></slot></span>`}firstUpdated(t){super.updated(t),this.style.setProperty("aria-live","assertive"),this.style.setProperty("role","alert"),this.style.setProperty("aria-atomic","true"),this.style.setProperty("aria-relevant","all")}hide(){this.classList.remove("show")}show(t=""){this.text=t,this.classList.add("show")}}customElements.define(o.tag,o);export{o as S};

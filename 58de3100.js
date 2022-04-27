import{S as t,r as e,$ as a}from"./c1639913.js";import"./3bee14fc.js";import"./392deaf2.js";class i extends t{static get tag(){return"app-hax-site-button"}constructor(){super(),this.label=null,this.value=null,this.disabled=!1,this.elevation="3",this.active=!1,this.addEventListener("click",this._handleClick),this.addEventListener("focus",this._handleFocus),this.addEventListener("blur",this._handleBlur),this.addEventListener("mouseover",this._handleFocus),this.addEventListener("mouseout",this._handleBlur)}static get properties(){return{label:{type:String},value:{type:String},disabled:{type:Boolean,reflect:!0},elevation:{type:Number},active:{type:Boolean,reflect:!0}}}static get styles(){return e`:host{--background-color:transparent;--background-color-active:white;display:flex;flex-direction:row;justify-content:space-between;align-items:center;font-family:'Press Start 2P',sans-serif;width:fit-content;margin:20px 0}@media (max-width:800px){:host{width:320px}}:host([active]) .haxButton{color:var(--app-hax-background-color,var(--background-color-active));background-color:var(--app-hax-accent-color,var(--accent-color))}.haxButton{background-color:var(--app-hax-background-color,var(--background-color));color:var(--app-hax-accent-color,var(--accent-color));font-size:var(--app-hax-site-button-font-size,26px)}.label{width:var(--app-hax-site-button-width,auto);min-width:var(--app-hax-site-button-min-width,auto);height:var(--app-hax-site-button-height,auto);display:inline-flex}`}_handleFocus(){this.disabled||(this.active=!0,this.elevation="5")}_handleBlur(){this.disabled||(this.active=!1,this.elevation="3")}_handleClick(){this.disabled||this.shadowRoot.querySelector(".haxButton").blur()}render(){return a` <wired-button elevation="${this.elevation}" ?disabled="${this.disabled}" class="haxButton" @click="${this._handleClick}"><span class="label">${this.label}</span></wired-button> `}}customElements.define(i.tag,i);export{i as AppHaxSiteButton};

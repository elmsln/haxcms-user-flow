import{S as t,r as e,$ as o}from"./d378c638.js";import"./f06f17a4.js";import"./298001ea.js";const i=new URL(new URL("fc080813.svg",import.meta.url).href,import.meta.url).href;class a extends t{static get tag(){return"app-hax-site-button"}constructor(){super(),this.label=null,this.value=null,this.disabled=!1,this.elevation="3",this.active=!1,this.comingSoon=!1,this.addEventListener("click",this._handleClick),this.addEventListener("focus",this._handleFocus),this.addEventListener("blur",this._handleBlur),this.addEventListener("mouseover",this._handleFocus),this.addEventListener("mouseout",this._handleBlur)}static get properties(){return{label:{type:String},value:{type:String},disabled:{type:Boolean,reflect:!0},elevation:{type:Number},active:{type:Boolean,reflect:!0},comingSoon:{type:Boolean,reflect:!0,attribute:"coming-soon"}}}static get styles(){return e`:host{--background-color:transparent;--background-color-active:white;display:flex;flex-direction:row;justify-content:space-between;align-items:center;font-family:'Press Start 2P',sans-serif;width:fit-content;margin:20px 0}:host([coming-soon]) .haxButton{pointer-events:none;background-color:var(--simple-colors-default-theme-grey-6)}@media (max-width:800px){:host{width:320px}}:host([active]) .haxButton{color:var(--app-hax-background-color,var(--background-color-active));background-color:var(--app-hax-accent-color,var(--accent-color))}.haxButton{background-color:var(--app-hax-background-color,var(--background-color));color:var(--app-hax-accent-color,var(--accent-color));font-size:var(--app-hax-site-button-font-size,26px)}.contents{display:flex;justify-content:right}.label{width:var(--app-hax-site-button-width,auto);min-width:var(--app-hax-site-button-min-width,auto);height:var(--app-hax-site-button-height,auto);display:inline-flex}.coming-soon{display:block;height:114px;width:140px;z-index:1;position:absolute;margin-right:-54px;margin-top:-10px}`}_handleFocus(){this.disabled||this.comingSoon||(this.active=!0,this.elevation="5")}_handleBlur(){this.disabled||this.comingSoon||(this.active=!1,this.elevation="3")}_handleClick(){this.disabled||this.comingSoon||this.shadowRoot.querySelector(".haxButton").blur()}render(){return o` <wired-button elevation="${this.elevation}" ?disabled="${this.disabled||this.comingSoon}" class="haxButton" @click="${this._handleClick}"> <div class="contents"> <span class="label"> ${this.label} </span> ${this.comingSoon?o`<img src="${i}" loading="lazy" decoding="async" fetchpriority="low" alt="Feature coming soon" class="coming-soon">`:""} </div> </wired-button> `}}customElements.define(a.tag,a);export{a as AppHaxSiteButton};

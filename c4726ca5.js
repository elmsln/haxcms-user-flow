import{w as t,S as e,r as i,$ as s,s as n,a as o,v as r,t as a,b as l}from"./d6b5e494.js";import"./6ec5d328.js";import{i as h,t as d,e as c}from"./92722af5.js";import{r as p}from"./9493ea65.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u=(t,e)=>{var i,s;const n=t._$AN;if(void 0===n)return!1;for(const t of n)null===(s=(i=t)._$AO)||void 0===s||s.call(i,e,!1),u(t,e);return!0},m=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===(null==i?void 0:i.size))},f=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),b(e)}};function v(t){void 0!==this._$AN?(m(this),this._$AM=t,f(this)):this._$AM=t}function g(t,e=!1,i=0){const s=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(s))for(let t=i;t<s.length;t++)u(s[t],!1),m(s[t]);else null!=s&&(u(s,!1),m(s));else u(this,t)}const b=t=>{var e,i,s,n;t.type==d.CHILD&&(null!==(e=(s=t)._$AP)&&void 0!==e||(s._$AP=g),null!==(i=(n=t)._$AQ)&&void 0!==i||(n._$AQ=v))};class y extends h{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),f(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,s;t!==this.isConnected&&(this.isConnected=t,t?null===(i=this.reconnected)||void 0===i||i.call(this):null===(s=this.disconnected)||void 0===s||s.call(this)),e&&(u(this,t),m(this))}setValue(t){if(p(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const w=new WeakMap;let x=0;const A=new Map,$=new WeakSet,C=()=>new Promise((t=>requestAnimationFrame(t))),k=(t,e)=>{const i=t-e;return 0===i?void 0:i},_=(t,e)=>{const i=t/e;return 1===i?void 0:i},S={left:(t,e)=>{const i=k(t,e);return{value:i,transform:i&&`translateX(${i}px)`}},top:(t,e)=>{const i=k(t,e);return{value:i,transform:i&&`translateY(${i}px)`}},width:(t,e)=>{const i=_(t,e);return{value:i,transform:i&&`scaleX(${i})`}},height:(t,e)=>{const i=_(t,e);return{value:i,transform:i&&`scaleY(${i})`}}},O={duration:333,easing:"ease-in-out"},I=["left","top","width","height","opacity","color","background"],L=new WeakMap;const N=c(class extends y{constructor(t){if(super(t),this.t=null,this.i=null,this.o=!0,this.shouldLog=!1,t.type===d.CHILD)throw Error("The `animate` directive must be used in attribute position.");this.createFinished()}createFinished(){var t;null===(t=this.resolveFinished)||void 0===t||t.call(this),this.finished=new Promise((t=>{this.h=t}))}async resolveFinished(){var t;null===(t=this.h)||void 0===t||t.call(this),this.h=void 0}render(e){return t}getController(){return w.get(this.l)}isDisabled(){var t;return this.options.disabled||(null===(t=this.getController())||void 0===t?void 0:t.disabled)}update(t,[e]){var i;const s=void 0===this.l;return s&&(this.l=null===(i=t.options)||void 0===i?void 0:i.host,this.l.addController(this),this.element=t.element,L.set(this.element,this)),this.optionsOrCallback=e,(s||"function"!=typeof e)&&this.u(e),this.render(e)}u(t){var e,i;t=null!=t?t:{};const s=this.getController();void 0!==s&&((t={...s.defaultOptions,...t}).keyframeOptions={...s.defaultOptions.keyframeOptions,...t.keyframeOptions}),null!==(e=(i=t).properties)&&void 0!==e||(i.properties=I),this.options=t}v(){const t={},e=this.element.getBoundingClientRect(),i=getComputedStyle(this.element);return this.options.properties.forEach((s=>{var n;const o=null!==(n=e[s])&&void 0!==n?n:S[s]?void 0:i[s],r=Number(o);t[s]=isNaN(r)?o+"":r})),t}p(){let t,e=!0;return this.options.guard&&(t=this.options.guard(),e=((t,e)=>{if(Array.isArray(t)){if(Array.isArray(e)&&e.length===t.length&&t.every(((t,i)=>t===e[i])))return!1}else if(e===t)return!1;return!0})(t,this.m)),this.o=this.l.hasUpdated&&!this.isDisabled()&&!this.isAnimating()&&e&&this.element.isConnected,this.o&&(this.m=Array.isArray(t)?Array.from(t):t),this.o}hostUpdate(){var t;"function"==typeof this.optionsOrCallback&&this.u(this.optionsOrCallback()),this.p()&&(this.g=this.v(),this.t=null!==(t=this.t)&&void 0!==t?t:this.element.parentNode,this.i=this.element.nextSibling)}async hostUpdated(){if(!this.o||!this.element.isConnected||this.options.skipInitial&&!this.isHostRendered)return;let t;this.prepare(),await C;const e=this.A(),i=this._(this.options.keyframeOptions,e),s=this.v();if(void 0!==this.g){const{from:i,to:n}=this.j(this.g,s,e);this.log("measured",[this.g,s,i,n]),t=this.calculateKeyframes(i,n)}else{const i=A.get(this.options.inId);if(i){A.delete(this.options.inId);const{from:n,to:o}=this.j(i,s,e);t=this.calculateKeyframes(n,o),t=this.options.in?[{...this.options.in[0],...t[0]},...this.options.in.slice(1),t[1]]:t,x++,t.forEach((t=>t.zIndex=x))}else this.options.in&&(t=[...this.options.in,{}])}this.animate(t,i)}resetStyles(){var t;void 0!==this.S&&(this.element.setAttribute("style",null!==(t=this.S)&&void 0!==t?t:""),this.S=void 0)}commitStyles(){var t,e;this.S=this.element.getAttribute("style"),null===(t=this.webAnimation)||void 0===t||t.commitStyles(),null===(e=this.webAnimation)||void 0===e||e.cancel()}reconnected(){}async disconnected(){var t;if(!this.o)return;if(void 0!==this.options.id&&A.set(this.options.id,this.g),void 0===this.options.out)return;if(this.prepare(),await C(),null===(t=this.t)||void 0===t?void 0:t.isConnected){const t=this.i&&this.i.parentNode===this.t?this.i:null;if(this.t.insertBefore(this.element,t),this.options.stabilizeOut){const t=this.v();this.log("stabilizing out");const e=this.g.left-t.left,i=this.g.top-t.top;!("static"===getComputedStyle(this.element).position)||0===e&&0===i||(this.element.style.position="relative"),0!==e&&(this.element.style.left=e+"px"),0!==i&&(this.element.style.top=i+"px")}}const e=this._(this.options.keyframeOptions);await this.animate(this.options.out,e),this.element.remove()}prepare(){this.createFinished()}start(){var t,e;null===(e=(t=this.options).onStart)||void 0===e||e.call(t,this)}didFinish(t){var e,i;t&&(null===(i=(e=this.options).onComplete)||void 0===i||i.call(e,this)),this.g=void 0,this.animatingProperties=void 0,this.frames=void 0,this.resolveFinished()}A(){const t=[];for(let e=this.element.parentNode;e;e=null==e?void 0:e.parentNode){const i=L.get(e);i&&!i.isDisabled()&&i&&t.push(i)}return t}get isHostRendered(){const t=$.has(this.l);return t||this.l.updateComplete.then((()=>{$.add(this.l)})),t}_(t,e=this.A()){const i={...O};return e.forEach((t=>Object.assign(i,t.options.keyframeOptions))),Object.assign(i,t),i}j(t,e,i){t={...t},e={...e};const s=i.map((t=>t.animatingProperties)).filter((t=>void 0!==t));let n=1,o=1;return void 0!==s&&(s.forEach((t=>{t.width&&(n/=t.width),t.height&&(o/=t.height)})),void 0!==t.left&&void 0!==e.left&&(t.left=n*t.left,e.left=n*e.left),void 0!==t.top&&void 0!==e.top&&(t.top=o*t.top,e.top=o*e.top)),{from:t,to:e}}calculateKeyframes(t,e,i=!1){var s;const n={},o={};let r=!1;const a={};for(const i in e){const l=t[i],h=e[i];if(i in S){const t=S[i];if(void 0===l||void 0===h)continue;const e=t(l,h);void 0!==e.transform&&(a[i]=e.value,r=!0,n.transform=`${null!==(s=n.transform)&&void 0!==s?s:""} ${e.transform}`)}else l!==h&&void 0!==l&&void 0!==h&&(r=!0,n[i]=l,o[i]=h)}return n.transformOrigin=o.transformOrigin=i?"center center":"top left",this.animatingProperties=a,r?[n,o]:void 0}async animate(t,e=this.options.keyframeOptions){this.start(),this.frames=t;let i=!1;if(!this.isAnimating()&&!this.isDisabled()&&(this.options.onFrames&&(this.frames=t=this.options.onFrames(this),this.log("modified frames",t)),void 0!==t)){this.log("animate",[t,e]),i=!0,this.webAnimation=this.element.animate(t,e);const s=this.getController();null==s||s.add(this);try{await this.webAnimation.finished}catch(t){}null==s||s.remove(this)}return this.didFinish(i),i}isAnimating(){var t,e;return"running"===(null===(t=this.webAnimation)||void 0===t?void 0:t.playState)||(null===(e=this.webAnimation)||void 0===e?void 0:e.pending)}log(t,e){this.shouldLog&&!this.isDisabled()&&console.log(t,this.options.id,e)}});class j extends e{static get tag(){return"app-hax-site-bar"}constructor(){super(),this.icon="add",this.opened=!1,this.inprogress=!1,this.iconLink="https://www.psu.edu"}static get properties(){return{...super.properties,opened:{type:Boolean,reflect:!0},icon:{type:String},inprogress:{type:Boolean,reflect:!0},iconLink:{type:String,attribute:"icon-link"}}}updated(t){super.updated&&super.updated(t),t.forEach(((t,e)=>{"opened"===e&&this.dispatchEvent(new CustomEvent(`${e}-changed`,{detail:{value:this[e]}}))}))}static get styles(){return[...super.styles,i`:host{--main-banner-width:500px;--main-banner-height:90px;--band-banner-height:180px;display:inline-block;background-image:linear-gradient(var(--simple-colors-default-theme-accent-9) 80%,var(--simple-colors-default-theme-accent-6));color:var(--simple-colors-default-theme-accent-1)}:host([opened]){background-image:linear-gradient(var(--simple-colors-default-theme-accent-12),var(--simple-colors-default-theme-accent-8))}#mainCard{display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:var(--main-banner-width);height:var(--main-banner-height)}#band{display:flex;flex-direction:column;height:1px;width:var(--main-banner-width);visibility:none;overflow:hidden}:host([opened]) #band{height:var(--band-banner-height);visibility:visible}a{flex:1}#labels{flex:6}#icon{--simple-icon-width:49px;--simple-icon-height:49px;color:var(--simple-colors-default-theme-accent-1)}#dots{--simple-icon-width:49px;--simple-icon-height:49px;color:var(--simple-colors-default-theme-accent-1)}`]}__clickButton(){this.opened=!this.opened}render(){return s` <div id="mainCard"> <a href="${this.iconLink}" tabindex="-1"> <simple-icon-button-lite icon="${this.icon}" id="icon"></simple-icon-button-lite></a> <div id="labels"> <slot name="heading"></slot> <slot name="subHeading"></slot> </div> <simple-icon-button-lite icon="more-vert" id="dots" @click="${this.__clickButton}"></simple-icon-button-lite> </div> <div id="band" ${N()}> <slot name="band"></slot> </div> `}}customElements.define(j.tag,j);class E extends n{static get tag(){return"app-hax-site-details"}constructor(){super(),this.need="all need to succeed"}static get properties(){return{need:{type:String,reflect:!0}}}static get styles(){return i`:host{display:flex;flex-direction:column;justify-content:center;align-items:stretch}.btn-group button{background-color:#3c7ff7;border:1px solid #3c7ff7;color:#fff;padding:15px 30px;cursor:pointer;width:25%;display:flex}.btn-group:after{content:'';clear:both;display:table}.btn-group button:not(:last-child){border-right:none}.btn-group button:hover{background-color:#02286d}.flex-container>div{background-color:#f1f1f1;margin:10px;flex-direction:row;justify-content:space-around;align-items:center;display:flex;border:4px solid red}`}render(){return s` <div class="flex-container"> <div class="btn-group"> <button>created</button> <button>updated</button> <button>pages</button> <button>URL</button> </div> </div> <div class="flex-container"> <div class="btn-group"> <button>publish</button> <button>copy</button> <button>download</button> <button>delete</button> </div> </div> `}}customElements.define(E.tag,E);class T extends e{static get tag(){return"app-hax-search-results"}constructor(){super(),this.searchItems=[],this.displayItems=[],this.searchTerm="",this.dark=!1,o((()=>{this.searchTerm=a(l.searchTerm)})),o((()=>{this.dark=a(l.darkMode)})),o((()=>{const t=a(l.manifest);t&&t.items&&(this.searchItems=a(l.manifest.items),this.displayItems=[...this.searchItems])}))}static get properties(){return{...super.properties,searchTerm:{type:String,reflect:!0},searchItems:{type:Array},displayItems:{type:Array}}}updated(t){super.updated&&super.updated(t),t.forEach(((t,e)=>{"searchTerm"===e&&(this.displayItems=this.searchItems.filter((t=>!!(t.title.toLowerCase().includes(this.searchTerm.toLowerCase())||t.description.toLowerCase().includes(this.searchTerm.toLowerCase())||t.author.toLowerCase().includes(this.searchTerm.toLowerCase())||t.slug.toLowerCase().includes(this.searchTerm.toLowerCase())))))}))}static get styles(){return[...super.styles,i`:host{overflow:hidden}ul{margin:0;padding:0}`]}render(){return s` <ul id="results"> ${this.displayItems.map((t=>s`<li> <app-hax-site-bar @opened-changed="${this.openedChanged}" ?dark="${this.dark}" accent-color="${r(t,"metadata.theme.variables.cssVariable","orange").replace("--simple-colors-default-theme-","").replace("-7","")}" icon="${r(t,"metadata.theme.variables.icon","icons:home")}" icon-link="${"https://iam.hax.psu.edu"+t.slug}"> <p slot="heading">${t.title}</p> <p slot="subHeading">${t.author}</p> <p slot="band">${t.description}</p> <app-hax-site-details slot="band"></app-hax-site-details> </app-hax-site-bar> </li>`))} </ul> `}openedChanged(t){t.detail.value?this.shadowRoot.querySelector("app-hax-site-details").removeAttribute("tabindex"):this.shadowRoot.querySelector("app-hax-site-details").setAttribute("tabindex","-1")}}customElements.define(T.tag,T);export{T as AppHaxSearchResults};

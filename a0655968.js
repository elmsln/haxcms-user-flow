import{w as t,S as i,r as e,$ as s}from"./38e3f26b.js";import"./7468af7d.js";import{i as n,t as o,e as r}from"./92722af5.js";import{r as a}from"./815f35f6.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=(t,i)=>{var e,s;const n=t._$AN;if(void 0===n)return!1;for(const t of n)null===(s=(e=t)._$AO)||void 0===s||s.call(e,i,!1),l(t,i);return!0},h=t=>{let i,e;do{if(void 0===(i=t._$AM))break;e=i._$AN,e.delete(t),t=i}while(0===(null==e?void 0:e.size))},d=t=>{for(let i;i=t._$AM;t=i){let e=i._$AN;if(void 0===e)i._$AN=e=new Set;else if(e.has(t))break;e.add(t),m(i)}};function c(t){void 0!==this._$AN?(h(this),this._$AM=t,d(this)):this._$AM=t}function p(t,i=!1,e=0){const s=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(i)if(Array.isArray(s))for(let t=e;t<s.length;t++)l(s[t],!1),h(s[t]);else null!=s&&(l(s,!1),h(s));else l(this,t)}const m=t=>{var i,e,s,n;t.type==o.CHILD&&(null!==(i=(s=t)._$AP)&&void 0!==i||(s._$AP=p),null!==(e=(n=t)._$AQ)&&void 0!==e||(n._$AQ=c))};class u extends n{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,e){super._$AT(t,i,e),d(this),this.isConnected=t._$AU}_$AO(t,i=!0){var e,s;t!==this.isConnected&&(this.isConnected=t,t?null===(e=this.reconnected)||void 0===e||e.call(this):null===(s=this.disconnected)||void 0===s||s.call(this)),i&&(l(this,t),h(this))}setValue(t){if(a(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}const f=new WeakMap;let v=0;const g=new Map,b=new WeakSet,y=()=>new Promise((t=>requestAnimationFrame(t))),A=(t,i)=>{const e=t-i;return 0===e?void 0:e},$=(t,i)=>{const e=t/i;return 1===e?void 0:e},w={left:(t,i)=>{const e=A(t,i);return{value:e,transform:e&&`translateX(${e}px)`}},top:(t,i)=>{const e=A(t,i);return{value:e,transform:e&&`translateY(${e}px)`}},width:(t,i)=>{const e=$(t,i);return{value:e,transform:e&&`scaleX(${e})`}},height:(t,i)=>{const e=$(t,i);return{value:e,transform:e&&`scaleY(${e})`}}},_={duration:333,easing:"ease-in-out"},C=["left","top","width","height","opacity","color","background"],k=new WeakMap;const x=r(class extends u{constructor(t){if(super(t),this.t=null,this.i=null,this.o=!0,this.shouldLog=!1,t.type===o.CHILD)throw Error("The `animate` directive must be used in attribute position.");this.createFinished()}createFinished(){var t;null===(t=this.resolveFinished)||void 0===t||t.call(this),this.finished=new Promise((t=>{this.h=t}))}async resolveFinished(){var t;null===(t=this.h)||void 0===t||t.call(this),this.h=void 0}render(i){return t}getController(){return f.get(this.l)}isDisabled(){var t;return this.options.disabled||(null===(t=this.getController())||void 0===t?void 0:t.disabled)}update(t,[i]){var e;const s=void 0===this.l;return s&&(this.l=null===(e=t.options)||void 0===e?void 0:e.host,this.l.addController(this),this.element=t.element,k.set(this.element,this)),this.optionsOrCallback=i,(s||"function"!=typeof i)&&this.u(i),this.render(i)}u(t){var i,e;t=null!=t?t:{};const s=this.getController();void 0!==s&&((t={...s.defaultOptions,...t}).keyframeOptions={...s.defaultOptions.keyframeOptions,...t.keyframeOptions}),null!==(i=(e=t).properties)&&void 0!==i||(e.properties=C),this.options=t}v(){const t={},i=this.element.getBoundingClientRect(),e=getComputedStyle(this.element);return this.options.properties.forEach((s=>{var n;const o=null!==(n=i[s])&&void 0!==n?n:w[s]?void 0:e[s],r=Number(o);t[s]=isNaN(r)?o+"":r})),t}p(){let t,i=!0;return this.options.guard&&(t=this.options.guard(),i=((t,i)=>{if(Array.isArray(t)){if(Array.isArray(i)&&i.length===t.length&&t.every(((t,e)=>t===i[e])))return!1}else if(i===t)return!1;return!0})(t,this.m)),this.o=this.l.hasUpdated&&!this.isDisabled()&&!this.isAnimating()&&i&&this.element.isConnected,this.o&&(this.m=Array.isArray(t)?Array.from(t):t),this.o}hostUpdate(){var t;"function"==typeof this.optionsOrCallback&&this.u(this.optionsOrCallback()),this.p()&&(this.g=this.v(),this.t=null!==(t=this.t)&&void 0!==t?t:this.element.parentNode,this.i=this.element.nextSibling)}async hostUpdated(){if(!this.o||!this.element.isConnected||this.options.skipInitial&&!this.isHostRendered)return;let t;this.prepare(),await y;const i=this.A(),e=this._(this.options.keyframeOptions,i),s=this.v();if(void 0!==this.g){const{from:e,to:n}=this.j(this.g,s,i);this.log("measured",[this.g,s,e,n]),t=this.calculateKeyframes(e,n)}else{const e=g.get(this.options.inId);if(e){g.delete(this.options.inId);const{from:n,to:o}=this.j(e,s,i);t=this.calculateKeyframes(n,o),t=this.options.in?[{...this.options.in[0],...t[0]},...this.options.in.slice(1),t[1]]:t,v++,t.forEach((t=>t.zIndex=v))}else this.options.in&&(t=[...this.options.in,{}])}this.animate(t,e)}resetStyles(){var t;void 0!==this.S&&(this.element.setAttribute("style",null!==(t=this.S)&&void 0!==t?t:""),this.S=void 0)}commitStyles(){var t,i;this.S=this.element.getAttribute("style"),null===(t=this.webAnimation)||void 0===t||t.commitStyles(),null===(i=this.webAnimation)||void 0===i||i.cancel()}reconnected(){}async disconnected(){var t;if(!this.o)return;if(void 0!==this.options.id&&g.set(this.options.id,this.g),void 0===this.options.out)return;if(this.prepare(),await y(),null===(t=this.t)||void 0===t?void 0:t.isConnected){const t=this.i&&this.i.parentNode===this.t?this.i:null;if(this.t.insertBefore(this.element,t),this.options.stabilizeOut){const t=this.v();this.log("stabilizing out");const i=this.g.left-t.left,e=this.g.top-t.top;!("static"===getComputedStyle(this.element).position)||0===i&&0===e||(this.element.style.position="relative"),0!==i&&(this.element.style.left=i+"px"),0!==e&&(this.element.style.top=e+"px")}}const i=this._(this.options.keyframeOptions);await this.animate(this.options.out,i),this.element.remove()}prepare(){this.createFinished()}start(){var t,i;null===(i=(t=this.options).onStart)||void 0===i||i.call(t,this)}didFinish(t){var i,e;t&&(null===(e=(i=this.options).onComplete)||void 0===e||e.call(i,this)),this.g=void 0,this.animatingProperties=void 0,this.frames=void 0,this.resolveFinished()}A(){const t=[];for(let i=this.element.parentNode;i;i=null==i?void 0:i.parentNode){const e=k.get(i);e&&!e.isDisabled()&&e&&t.push(e)}return t}get isHostRendered(){const t=b.has(this.l);return t||this.l.updateComplete.then((()=>{b.add(this.l)})),t}_(t,i=this.A()){const e={..._};return i.forEach((t=>Object.assign(e,t.options.keyframeOptions))),Object.assign(e,t),e}j(t,i,e){t={...t},i={...i};const s=e.map((t=>t.animatingProperties)).filter((t=>void 0!==t));let n=1,o=1;return void 0!==s&&(s.forEach((t=>{t.width&&(n/=t.width),t.height&&(o/=t.height)})),void 0!==t.left&&void 0!==i.left&&(t.left=n*t.left,i.left=n*i.left),void 0!==t.top&&void 0!==i.top&&(t.top=o*t.top,i.top=o*i.top)),{from:t,to:i}}calculateKeyframes(t,i,e=!1){var s;const n={},o={};let r=!1;const a={};for(const e in i){const l=t[e],h=i[e];if(e in w){const t=w[e];if(void 0===l||void 0===h)continue;const i=t(l,h);void 0!==i.transform&&(a[e]=i.value,r=!0,n.transform=`${null!==(s=n.transform)&&void 0!==s?s:""} ${i.transform}`)}else l!==h&&void 0!==l&&void 0!==h&&(r=!0,n[e]=l,o[e]=h)}return n.transformOrigin=o.transformOrigin=e?"center center":"top left",this.animatingProperties=a,r?[n,o]:void 0}async animate(t,i=this.options.keyframeOptions){this.start(),this.frames=t;let e=!1;if(!this.isAnimating()&&!this.isDisabled()&&(this.options.onFrames&&(this.frames=t=this.options.onFrames(this),this.log("modified frames",t)),void 0!==t)){this.log("animate",[t,i]),e=!0,this.webAnimation=this.element.animate(t,i);const s=this.getController();null==s||s.add(this);try{await this.webAnimation.finished}catch(t){}null==s||s.remove(this)}return this.didFinish(e),e}isAnimating(){var t,i;return"running"===(null===(t=this.webAnimation)||void 0===t?void 0:t.playState)||(null===(i=this.webAnimation)||void 0===i?void 0:i.pending)}log(t,i){this.shouldLog&&!this.isDisabled()&&console.log(t,this.options.id,i)}});class O extends i{static get tag(){return"app-hax-site-bar"}constructor(){super(),this.icon="add",this.opened=!1,this.inprogress=!1,this.iconLink="https://www.psu.edu"}static get properties(){return{...super.properties,opened:{type:Boolean,reflect:!0},icon:{type:String},inprogress:{type:Boolean,reflect:!0},iconLink:{type:String,attribute:"icon-link"}}}updated(t){t.forEach(((t,i)=>{"opened"===i&&!1===this[i]&&void 0!==t&&(this.style.animationName="fadegradientclosed"),"opened"===i&&!0===this[i]&&(this.style.animationName="fadegradientopen")}))}static get styles(){return[...super.styles,e`:host{--main-banner-width:500px;--main-banner-height:90px;--band-banner-height:180px;display:inline-block;background-image:linear-gradient(var(--simple-colors-default-theme-accent-10) 80%,var(--simple-colors-default-theme-accent-6));color:var(--simple-colors-default-theme-accent-1)}:host([opened]){background-image:linear-gradient(var(--simple-colors-default-theme-accent-10),var(--simple-colors-default-theme-accent-6))}#mainCard{display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:var(--main-banner-width);height:var(--main-banner-height)}#band{display:flex;flex-direction:column;height:0;width:var(--main-banner-width);overflow:hidden}:host([opened]) #band{display:flex;flex-direction:column;width:var(--main-banner-width);height:var(--band-banner-height)}a{flex:1}#labels{flex:6}#icon{--simple-icon-width:49px;--simple-icon-height:49px;color:var(--simple-colors-default-theme-accent-1)}#dots{--simple-icon-width:49px;--simple-icon-height:49px;color:var(--simple-colors-default-theme-accent-1)}`]}__clickButton(){this.opened=!this.opened}_toggleDetails(t){console.log(`${this} , ${t}`)}render(){return s` <div id="mainCard"> <a href="${this.iconLink}" tabindex="-1"> <simple-icon-button-lite icon="${this.icon}" id="icon"></simple-icon-button-lite></a> <div id="labels"> <slot name="heading"></slot> <slot name="subHeading"></slot> </div> <simple-icon-button-lite icon="more-vert" id="dots" @click="${this.__clickButton}"></simple-icon-button-lite> </div> <div id="band" ${x()}> <slot name="band"></slot> </div> `}}customElements.define(O.tag,O);

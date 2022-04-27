import{w as t,S as e,r as i,o as s,$ as o,s as n,a,t as r,b as l,v as d}from"./ee2e4b43.js";import"./ab789d53.js";import"./9b486e60.js";import{i as h,t as c,e as p}from"./92722af5.js";import{r as u}from"./fb6278be.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const m=(t,e)=>{var i,s;const o=t._$AN;if(void 0===o)return!1;for(const t of o)null===(s=(i=t)._$AO)||void 0===s||s.call(i,e,!1),m(t,e);return!0},f=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===(null==i?void 0:i.size))},v=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),y(e)}};function g(t){void 0!==this._$AN?(f(this),this._$AM=t,v(this)):this._$AM=t}function b(t,e=!1,i=0){const s=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size)if(e)if(Array.isArray(s))for(let t=i;t<s.length;t++)m(s[t],!1),f(s[t]);else null!=s&&(m(s,!1),f(s));else m(this,t)}const y=t=>{var e,i,s,o;t.type==c.CHILD&&(null!==(e=(s=t)._$AP)&&void 0!==e||(s._$AP=b),null!==(i=(o=t)._$AQ)&&void 0!==i||(o._$AQ=g))};class x extends h{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),v(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,s;t!==this.isConnected&&(this.isConnected=t,t?null===(i=this.reconnected)||void 0===i||i.call(this):null===(s=this.disconnected)||void 0===s||s.call(this)),e&&(m(this,t),f(this))}setValue(t){if(u(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const w=new WeakMap;let $=0;const A=new Map,k=new WeakSet,C=()=>new Promise((t=>requestAnimationFrame(t))),D=(t,e)=>{const i=t-e;return 0===i?void 0:i},M=(t,e)=>{const i=t/e;return 1===i?void 0:i},S={left:(t,e)=>{const i=D(t,e);return{value:i,transform:i&&`translateX(${i}px)`}},top:(t,e)=>{const i=D(t,e);return{value:i,transform:i&&`translateY(${i}px)`}},width:(t,e)=>{const i=M(t,e);return{value:i,transform:i&&`scaleX(${i})`}},height:(t,e)=>{const i=M(t,e);return{value:i,transform:i&&`scaleY(${i})`}}},O={duration:333,easing:"ease-in-out"},_=["left","top","width","height","opacity","color","background"],T=new WeakMap;const I=p(class extends x{constructor(t){if(super(t),this.t=null,this.i=null,this.o=!0,this.shouldLog=!1,t.type===c.CHILD)throw Error("The `animate` directive must be used in attribute position.");this.createFinished()}createFinished(){var t;null===(t=this.resolveFinished)||void 0===t||t.call(this),this.finished=new Promise((t=>{this.h=t}))}async resolveFinished(){var t;null===(t=this.h)||void 0===t||t.call(this),this.h=void 0}render(e){return t}getController(){return w.get(this.l)}isDisabled(){var t;return this.options.disabled||(null===(t=this.getController())||void 0===t?void 0:t.disabled)}update(t,[e]){var i;const s=void 0===this.l;return s&&(this.l=null===(i=t.options)||void 0===i?void 0:i.host,this.l.addController(this),this.element=t.element,T.set(this.element,this)),this.optionsOrCallback=e,(s||"function"!=typeof e)&&this.u(e),this.render(e)}u(t){var e,i;t=null!=t?t:{};const s=this.getController();void 0!==s&&((t={...s.defaultOptions,...t}).keyframeOptions={...s.defaultOptions.keyframeOptions,...t.keyframeOptions}),null!==(e=(i=t).properties)&&void 0!==e||(i.properties=_),this.options=t}v(){const t={},e=this.element.getBoundingClientRect(),i=getComputedStyle(this.element);return this.options.properties.forEach((s=>{var o;const n=null!==(o=e[s])&&void 0!==o?o:S[s]?void 0:i[s],a=Number(n);t[s]=isNaN(a)?n+"":a})),t}p(){let t,e=!0;return this.options.guard&&(t=this.options.guard(),e=((t,e)=>{if(Array.isArray(t)){if(Array.isArray(e)&&e.length===t.length&&t.every(((t,i)=>t===e[i])))return!1}else if(e===t)return!1;return!0})(t,this.m)),this.o=this.l.hasUpdated&&!this.isDisabled()&&!this.isAnimating()&&e&&this.element.isConnected,this.o&&(this.m=Array.isArray(t)?Array.from(t):t),this.o}hostUpdate(){var t;"function"==typeof this.optionsOrCallback&&this.u(this.optionsOrCallback()),this.p()&&(this.g=this.v(),this.t=null!==(t=this.t)&&void 0!==t?t:this.element.parentNode,this.i=this.element.nextSibling)}async hostUpdated(){if(!this.o||!this.element.isConnected||this.options.skipInitial&&!this.isHostRendered)return;let t;this.prepare(),await C;const e=this.A(),i=this._(this.options.keyframeOptions,e),s=this.v();if(void 0!==this.g){const{from:i,to:o}=this.j(this.g,s,e);this.log("measured",[this.g,s,i,o]),t=this.calculateKeyframes(i,o)}else{const i=A.get(this.options.inId);if(i){A.delete(this.options.inId);const{from:o,to:n}=this.j(i,s,e);t=this.calculateKeyframes(o,n),t=this.options.in?[{...this.options.in[0],...t[0]},...this.options.in.slice(1),t[1]]:t,$++,t.forEach((t=>t.zIndex=$))}else this.options.in&&(t=[...this.options.in,{}])}this.animate(t,i)}resetStyles(){var t;void 0!==this.S&&(this.element.setAttribute("style",null!==(t=this.S)&&void 0!==t?t:""),this.S=void 0)}commitStyles(){var t,e;this.S=this.element.getAttribute("style"),null===(t=this.webAnimation)||void 0===t||t.commitStyles(),null===(e=this.webAnimation)||void 0===e||e.cancel()}reconnected(){}async disconnected(){var t;if(!this.o)return;if(void 0!==this.options.id&&A.set(this.options.id,this.g),void 0===this.options.out)return;if(this.prepare(),await C(),null===(t=this.t)||void 0===t?void 0:t.isConnected){const t=this.i&&this.i.parentNode===this.t?this.i:null;if(this.t.insertBefore(this.element,t),this.options.stabilizeOut){const t=this.v();this.log("stabilizing out");const e=this.g.left-t.left,i=this.g.top-t.top;!("static"===getComputedStyle(this.element).position)||0===e&&0===i||(this.element.style.position="relative"),0!==e&&(this.element.style.left=e+"px"),0!==i&&(this.element.style.top=i+"px")}}const e=this._(this.options.keyframeOptions);await this.animate(this.options.out,e),this.element.remove()}prepare(){this.createFinished()}start(){var t,e;null===(e=(t=this.options).onStart)||void 0===e||e.call(t,this)}didFinish(t){var e,i;t&&(null===(i=(e=this.options).onComplete)||void 0===i||i.call(e,this)),this.g=void 0,this.animatingProperties=void 0,this.frames=void 0,this.resolveFinished()}A(){const t=[];for(let e=this.element.parentNode;e;e=null==e?void 0:e.parentNode){const i=T.get(e);i&&!i.isDisabled()&&i&&t.push(i)}return t}get isHostRendered(){const t=k.has(this.l);return t||this.l.updateComplete.then((()=>{k.add(this.l)})),t}_(t,e=this.A()){const i={...O};return e.forEach((t=>Object.assign(i,t.options.keyframeOptions))),Object.assign(i,t),i}j(t,e,i){t={...t},e={...e};const s=i.map((t=>t.animatingProperties)).filter((t=>void 0!==t));let o=1,n=1;return void 0!==s&&(s.forEach((t=>{t.width&&(o/=t.width),t.height&&(n/=t.height)})),void 0!==t.left&&void 0!==e.left&&(t.left=o*t.left,e.left=o*e.left),void 0!==t.top&&void 0!==e.top&&(t.top=n*t.top,e.top=n*e.top)),{from:t,to:e}}calculateKeyframes(t,e,i=!1){var s;const o={},n={};let a=!1;const r={};for(const i in e){const l=t[i],d=e[i];if(i in S){const t=S[i];if(void 0===l||void 0===d)continue;const e=t(l,d);void 0!==e.transform&&(r[i]=e.value,a=!0,o.transform=`${null!==(s=o.transform)&&void 0!==s?s:""} ${e.transform}`)}else l!==d&&void 0!==l&&void 0!==d&&(a=!0,o[i]=l,n[i]=d)}return o.transformOrigin=n.transformOrigin=i?"center center":"top left",this.animatingProperties=r,a?[o,n]:void 0}async animate(t,e=this.options.keyframeOptions){this.start(),this.frames=t;let i=!1;if(!this.isAnimating()&&!this.isDisabled()&&(this.options.onFrames&&(this.frames=t=this.options.onFrames(this),this.log("modified frames",t)),void 0!==t)){this.log("animate",[t,e]),i=!0,this.webAnimation=this.element.animate(t,e);const s=this.getController();null==s||s.add(this);try{await this.webAnimation.finished}catch(t){}null==s||s.remove(this)}return this.didFinish(i),i}isAnimating(){var t,e;return"running"===(null===(t=this.webAnimation)||void 0===t?void 0:t.playState)||(null===(e=this.webAnimation)||void 0===e?void 0:e.pending)}log(t,e){this.shouldLog&&!this.isDisabled()&&console.log(t,this.options.id,e)}}),E=new URL(new URL("5346b42e.svg",import.meta.url).href,import.meta.url);class F extends e{static get tag(){return"app-hax-site-bar"}constructor(){super(),this.icon="link",this.opened=!1,this.inprogress=!1,this.iconLink="/",this.textInfo={},this.siteId=""}static get properties(){return{...super.properties,opened:{type:Boolean,reflect:!0},icon:{type:String},inprogress:{type:Boolean,reflect:!0},iconLink:{type:String,attribute:"icon-link"},textInfo:{type:Object},siteId:{type:String,reflect:!0,attribute:"site-id"}}}updated(t){super.updated&&super.updated(t),t.forEach(((t,e)=>{"opened"===e&&void 0!==t&&this.dispatchEvent(new CustomEvent(`${e}-changed`,{detail:{value:this[e]}}))}))}static get styles(){return[...super.styles,i`:host{--main-banner-width:513px;--main-banner-height:60px;--band-banner-height:208px;display:inline-block;background-color:var(--simple-colors-default-theme-accent-3);color:var(--simple-colors-default-theme-grey-12);border-color:var(--simple-colors-default-theme-accent-4);border-style:solid;border-width:5px 10px 5px 10px}#labels{display:block;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}#labels ::slotted(*){font-family:'Press Start 2P',sans-serif;font-size:25px}#labels ::slotted(a){color:var(--simple-colors-default-theme-accent-11);padding:8px 0;display:block}#labels ::slotted(a:focus),#labels ::slotted(a:hover){color:var(--simple-colors-default-theme-accent-3);background-color:var(--simple-colors-default-theme-accent-11)}:host([opened]){background-color:var(--simple-colors-default-theme-accent-3)}#mainCard{display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:var(--main-banner-width);height:var(--main-banner-height);padding:2px 4px}#band-container{display:block;visibility:hidden;height:1px;width:var(--main-banner-width)}:host([opened]) #band-container{height:var(--band-banner-height);visibility:visible}a{flex:1}#labels{flex:6;overflow:hidden;text-overflow:ellipsis}#icon{--simple-icon-width:49px;--simple-icon-height:49px;color:var(--simple-colors-default-theme-accent-11)}#icon:active,#icon:focus,#icon:hover{color:var(--simple-colors-default-theme-accent-3);background-color:var(--simple-colors-default-theme-accent-11)}#dots{--simple-icon-width:49px;--simple-icon-height:49px;color:var(--simple-colors-default-theme-grey-12);background-image:url(${s(E)});background-repeat:no-repeat;background-position:center}`]}__clickButton(){this.opened=!this.opened}render(){return o` <div id="mainCard"> <a href="${this.iconLink}" tabindex="-1" id="icon"> <simple-icon-button-lite icon="${this.icon}"></simple-icon-button-lite> </a> <div id="labels"> <slot name="heading"></slot> </div> <simple-icon-button-lite icon="more-vert" id="dots" @click="${this.__clickButton}"></simple-icon-button-lite> </div> <div id="band-container" ${I()}> <slot name="band"></slot> </div> <simple-tooltip for="icon" position="left">Access site</simple-tooltip> <simple-tooltip for="dots" position="right">More options</simple-tooltip> `}}customElements.define(F.tag,F),function(){Date.shortMonths=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Date.longMonths=["January","February","March","April","May","June","July","August","September","October","November","December"],Date.shortDays=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],Date.longDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];var t={d:function(){var t=this.getDate();return(t<10?"0":"")+t},D:function(){return Date.shortDays[this.getDay()]},j:function(){return this.getDate()},l:function(){return Date.longDays[this.getDay()]},N:function(){var t=this.getDay();return 0===t?7:t},S:function(){var t=this.getDate();return t%10==1&&11!==t?"st":t%10==2&&12!==t?"nd":t%10==3&&13!==t?"rd":"th"},w:function(){return this.getDay()},z:function(){var t=new Date(this.getFullYear(),0,1);return Math.ceil((this-t)/864e5)},W:function(){var t=new Date(this.valueOf()),e=(this.getDay()+6)%7;t.setDate(t.getDate()-e+3);var i=t.valueOf();t.setMonth(0,1),4!==t.getDay()&&t.setMonth(0,1+(4-t.getDay()+7)%7);var s=1+Math.ceil((i-t)/6048e5);return s<10?"0"+s:s},F:function(){return Date.longMonths[this.getMonth()]},m:function(){var t=this.getMonth();return(t<9?"0":"")+(t+1)},M:function(){return Date.shortMonths[this.getMonth()]},n:function(){return this.getMonth()+1},t:function(){var t=this.getFullYear(),e=this.getMonth()+1;return 12===e&&(t=t++,e=0),new Date(t,e,0).getDate()},L:function(){var t=this.getFullYear();return t%400==0||t%100!=0&&t%4==0},o:function(){var t=new Date(this.valueOf());return t.setDate(t.getDate()-(this.getDay()+6)%7+3),t.getFullYear()},Y:function(){return this.getFullYear()},y:function(){return(""+this.getFullYear()).substr(2)},a:function(){return this.getHours()<12?"am":"pm"},A:function(){return this.getHours()<12?"AM":"PM"},B:function(){return Math.floor(1e3*((this.getUTCHours()+1)%24+this.getUTCMinutes()/60+this.getUTCSeconds()/3600)/24)},g:function(){return this.getHours()%12||12},G:function(){return this.getHours()},h:function(){var t=this.getHours();return((t%12||12)<10?"0":"")+(t%12||12)},H:function(){var t=this.getHours();return(t<10?"0":"")+t},i:function(){var t=this.getMinutes();return(t<10?"0":"")+t},s:function(){var t=this.getSeconds();return(t<10?"0":"")+t},v:function(){var t=this.getMilliseconds();return(t<10?"00":t<100?"0":"")+t},e:function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},I:function(){for(var t=null,e=0;e<12;++e){var i=new Date(this.getFullYear(),e,1).getTimezoneOffset();if(null===t)t=i;else{if(i<t){t=i;break}if(i>t)break}}return this.getTimezoneOffset()===t|0},O:function(){var t=this.getTimezoneOffset();return(-t<0?"-":"+")+(Math.abs(t/60)<10?"0":"")+Math.floor(Math.abs(t/60))+(0===Math.abs(t%60)?"00":(Math.abs(t%60)<10?"0":"")+Math.abs(t%60))},P:function(){var t=this.getTimezoneOffset();return(-t<0?"-":"+")+(Math.abs(t/60)<10?"0":"")+Math.floor(Math.abs(t/60))+":"+(0===Math.abs(t%60)?"00":(Math.abs(t%60)<10?"0":"")+Math.abs(t%60))},T:function(){var t=this.toLocaleTimeString(navigator.language,{timeZoneName:"short"}).split(" ");return t[t.length-1]},Z:function(){return 60*-this.getTimezoneOffset()},c:function(){return this.format("Y-m-d\\TH:i:sP")},r:function(){return this.toString()},U:function(){return Math.floor(this.getTime()/1e3)}};Date.prototype.format=function(e){var i=this;return e.replace(/(\\?)(.)/g,(function(e,s,o){return""===s&&t[o]?t[o].call(i):o}))}}.call(void 0);class j extends n{constructor(){super(),this.format="M jS, Y",this.unix=!1}static get styles(){return[i`:host{display:block;font-size:14px;color:#b3b3b1;line-height:30px}`]}render(){return o` <time datetime="${this.date}">${this.date}</time> `}static get tag(){return"simple-datetime"}static get properties(){return{timestamp:{type:Number},format:{type:String},date:{type:String},unix:{type:Boolean}}}updated(t){t.forEach(((t,e)=>{["timestamp","format","unix"].includes(e)&&(this.date=this.formatDate(this.timestamp,this.format,this.unix))}))}formatDate(t,e,i){return i&&(t*=1e3),new Date(t).format(e)}}window.customElements.define(j.tag,j);class L extends e{static get tag(){return"app-hax-site-details"}constructor(){super(),this.need="all need to succeed",this.details={},this.siteId=""}static get properties(){return{...super.properties,details:{type:Object},siteId:{type:String,attribute:"site-id"}}}static get styles(){return[...super.styles,i`:host{display:flex;flex-direction:column;justify-content:center;font-size:12px;align-items:stretch;background-color:var(--simple-colors-default-theme-grey-2);height:208px}.flex-container{flex:1;background-color:var(--simple-colors-default-theme-grey-2);margin:10px;display:flex;flex-direction:row;justify-content:space-around;align-items:center}.info-group{height:100%;max-width:25%;display:flex;flex-direction:column;justify-content:space-around;align-items:center;padding:0;flex:1}simple-icon-button-lite:active,simple-icon-button-lite:focus,simple-icon-button-lite:hover{background-color:var(--simple-colors-default-theme-grey-4,#eee);outline:2px solid var(--simple-colors-default-theme-grey-12);outline-offset:1px}.info-headings{font-size:12px}.info-item{font-family:'Press Start 2P',sans-serif;display:block;text-overflow:ellipsis;overflow:hidden;color:var(--simple-colors-default-theme-grey-12);line-height:16px;max-width:100%}.pre ::slotted(*){padding:12px;overflow:hidden;text-overflow:ellipsis;max-width:50%;display:inline-flex}a{text-decoration:underline}.info-date{color:var(--simple-colors-default-theme-grey-12);line-height:12px;font-size:12px}.info-icon{--simple-icon-width:49px;--simple-icon-height:49px;--simple-icon-button-border-radius:0px;--simple-icon-button-border:0px;outline:0;border:2px solid var(--simple-colors-default-theme-grey-12);border-radius:4px;padding:4px;width:80%}.info-icon::part(button){outline:0}@media (max-width:500px){.btn-group button{padding:4px;margin:4px 0}.flex-container>div{margin:0}}`]}siteOperation(t){a.appEl.playSound("click");const e=t.target,i=document.createElement("div"),s=e.getAttribute("data-site-operation"),o=e.getAttribute("data-site");a.activeSiteOp=s,a.activeSiteId=o,import("./b67bbbf7.js").then((()=>{setTimeout((()=>{const t=r(a.manifest.items.filter((t=>t.id===o)).pop());i.appendChild(document.createTextNode(`Are you sure you want to ${s} ${t.metadata.site.name}?`));const n=document.createElement("div"),l=document.createElement("button");l.innerText="Confirm",l.addEventListener("click",this.confirmOperation.bind(this)),n.appendChild(l);const d=document.createElement("button");d.innerText="Cancel",d.addEventListener("click",this.cancelOperation.bind(this)),n.appendChild(d),this.dispatchEvent(new CustomEvent("simple-modal-show",{bubbles:!0,cancelable:!0,composed:!0,detail:{title:`${s}`,elements:{content:i,buttons:n},invokedBy:e,styles:{"--simple-modal-titlebar-background":"orange","--simple-modal-titlebar-color":"black","--simple-modal-width":"20vw","--simple-modal-min-width":"300px","--simple-modal-z-index":"100000000","--simple-modal-height":"20vh","--simple-modal-min-height":"400px","--simple-modal-titlebar-height":"60px"}}}))}),0)}))}cancelOperation(){a.activeSiteOp="",a.activeSiteId=null,window.dispatchEvent(new CustomEvent("simple-modal-hide")),a.appEl.playSound("error")}async confirmOperation(){const t=r(a.activeSiteOp),e=r(a.activeSite);await a.AppHaxAPI.makeCall(t,{site:{name:e.name}}),window.dispatchEvent(new CustomEvent("simple-modal-hide")),a.appEl.playSound("success"),a.toast(`${e.metadata.site.name} ${t} successful!`,3e3,{hat:"random"})}render(){return o` <div class="pre"><slot name="pre"></slot></div> <div class="flex-container" id="infomation"> <div class="info-group"> <div class="info-headings">created</div> <simple-datetime format="m/j/y" .timestamp="${this.details.created}" unix class="info-date"></simple-datetime> </div> <div class="info-group"> <div class="info-headings">updated</div> <simple-datetime format="m/j/y" .timestamp="${this.details.updated}" unix class="info-date"></simple-datetime> </div> <div class="info-group"> <div class="info-headings">pages</div> <div class="info-item">${this.details.pages}</div> </div> <div class="info-group"> <div class="info-headings">URL</div> <a href="${this.details.url}" class="info-item" id="slug">${function(t){let e="site";if(t){let i=t.split("sites/");i.length>1&&(e=i.pop().replace("/",""))}return e}(this.details.url)}</a> </div> </div> <div class="flex-container" id="actions"> <div class="info-group"> <simple-icon-button-lite data-site="${this.siteId}" data-site-operation="publish" icon="editor:publish" id="pub" class="info-icon" @click="${this.siteOperation}"> <div class="info-item">publish</div> </simple-icon-button-lite> <simple-tooltip for="pub" position="bottom">Publish site</simple-tooltip> </div> <div class="info-group"> <simple-icon-button-lite data-site="${this.siteId}" data-site-operation="copy" icon="content-copy" id="cp" class="info-icon" @click="${this.siteOperation}"> <div class="info-item">copy</div> </simple-icon-button-lite> <simple-tooltip for="cp" position="bottom">Copy site</simple-tooltip> </div> <div class="info-group"> <simple-icon-button-lite data-site="${this.siteId}" data-site-operation="download" icon="file-download" id="dl" class="info-icon" @click="${this.siteOperation}"> <div class="info-item">download</div> </simple-icon-button-lite> <simple-tooltip for="dl" position="bottom">Download site</simple-tooltip> </div> <div class="info-group"> <simple-icon-button-lite data-site="${this.siteId}" data-site-operation="delete" icon="delete-forever" id="del" class="info-icon" @click="${this.siteOperation}"> <div class="info-item">delete</div> </simple-icon-button-lite> <simple-tooltip for="del" position="bottom">Delete site</simple-tooltip> </div> </div> `}}customElements.define(L.tag,L);class N extends e{static get tag(){return"app-hax-search-results"}constructor(){super(),this.searchItems=[],this.displayItems=[],this.searchTerm="",this.dark=!1,l((()=>{this.searchTerm=r(a.searchTerm)})),l((()=>{this.dark=r(a.darkMode)})),l((()=>{const t=r(a.manifest);t&&t.items&&(this.searchItems=r(a.manifest.items),this.displayItems=[...this.searchItems])}))}static get properties(){return{...super.properties,searchTerm:{type:String,reflect:!0},searchItems:{type:Array},displayItems:{type:Array}}}updated(t){super.updated&&super.updated(t),t.forEach(((t,e)=>{"searchTerm"===e&&(this.displayItems=this.searchItems.filter((t=>!!(t.title.toLowerCase().includes(this.searchTerm.toLowerCase())||t.description.toLowerCase().includes(this.searchTerm.toLowerCase())||t.author.toLowerCase().includes(this.searchTerm.toLowerCase())||t.slug.toLowerCase().includes(this.searchTerm.toLowerCase())))))}))}static get styles(){return[...super.styles,i`:host{overflow:hidden}li,ul{margin:0;padding:0;list-style:none}app-hax-site-bar{margin:8px 0}@media (max-width:800px){app-hax-site-bar{--main-banner-width:60vw}}@media (max-width:400px){app-hax-site-bar{--main-banner-width:90vw}}span[slot=band]{height:48px;overflow:hidden;text-overflow:ellipsis;margin-bottom:8px}:host([dark]) #noResult{color:var(--simple-colors-default-theme-grey-12,#000)}`]}render(){return o` <ul id="results"> ${this.displayItems.length>0?this.displayItems.map((t=>o` <li> <app-hax-site-bar @opened-changed="${this.openedChanged}" ?dark="${this.dark}" accent-color="${d(t,"metadata.theme.variables.cssVariable","orange").replace("--simple-colors-default-theme-","").replace("-7","")}" icon-link="${t.slug}" icon="${d(t,"metadata.theme.variables.icon","link")}"> <a href="${t.slug}" slot="heading">${t.title}</a> <span slot="subHeading">${t.author}</span> <app-hax-site-details slot="band" .details="${{created:t.metadata.site.created,updated:t.metadata.site.updated,pages:t.metadata.pageCount,url:t.slug}}" site-id="${t.id}"> <div slot="pre">${t.description}</div> </app-hax-site-details> </app-hax-site-bar> </li>`)):o`<div id="noResult">No results for ${""!==this.searchTerm?o`<strong>"${this.searchTerm}"</strong>`:"your account, try starting a new journey!"}.</div>`} </ul> `}openedChanged(t){a.appEl.playSound("click"),t.detail.value?this.shadowRoot.querySelector("app-hax-site-details").removeAttribute("tabindex"):this.shadowRoot.querySelector("app-hax-site-details").setAttribute("tabindex","-1")}}customElements.define(N.tag,N);export{N as AppHaxSearchResults};

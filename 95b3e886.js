import{a as t,x as a,b as i,r as e,$ as n}from"./68bab227.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var o,l;class s extends t{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,a;const i=super.createRenderRoot();return null!==(t=(a=this.renderOptions).renderBefore)&&void 0!==t||(a.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=a(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return i}}s.finalized=!0,s._$litElement$=!0,null===(o=globalThis.litElementHydrateSupport)||void 0===o||o.call(globalThis,{LitElement:s});const c=globalThis.litElementPolyfillSupport;null==c||c({LitElement:s}),(null!==(l=globalThis.litElementVersions)&&void 0!==l?l:globalThis.litElementVersions=[]).push("3.0.1");
/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
class h extends HTMLElement{get html(){return"\n<style>\n:host {\n  display: inline-flex;\n  position: relative;\n  height: 36px;\n  width: 36px;\n}\n\n:host div,\n:host div:before,\n:host div:after {\n background-color: var(--hexagon-color, orange);\n}\n\ndiv {\n  width: var(--hexagon-width, 30px);\n  height: var(--hexagon-height, 18px);\n  margin: 9px 3px;\n  position: absolute;\n  color: var(--hexagon-color, orange);\n}\ndiv:before, div:after {\n  content: '';\n  position: absolute;\n  width: var(--hexagon-width, 30px);\n  height: var(--hexagon-height, 18px);\n}\ndiv:before {\n  -webkit-transform: rotate(60deg);\n          transform: rotate(60deg);\n}\ndiv:after {\n  -webkit-transform: rotate(-60deg);\n          transform: rotate(-60deg);\n}\n</style>\n    <div></div>"}static get tag(){return"hex-a-gon"}constructor(t=!1){super(),this.tag=h.tag,this._queue=[],this.template=document.createElement("template"),this.attachShadow({mode:"open"}),t||this.render()}connectedCallback(){window.ShadyCSS&&window.ShadyCSS.styleElement(this),this._queue.length&&this._processQueue()}_copyAttribute(t,a){const i=this.shadowRoot.querySelectorAll(a),e=this.getAttribute(t),n=null==e?"removeAttribute":"setAttribute";for(const a of i)a[n](t,e)}_queueAction(t){this._queue.push(t)}_processQueue(){this._queue.forEach((t=>{this[`_${t.type}`](t.data)})),this._queue=[]}_setProperty({name:t,value:a}){this[t]=a}render(){this.shadowRoot.innerHTML=null,this.template.innerHTML=this.html,window.ShadyCSS&&window.ShadyCSS.prepareTemplate(this.template,this.tag),this.shadowRoot.appendChild(this.template.content.cloneNode(!0))}}window.customElements.define(h.tag,h);
/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
class r extends s{static get styles(){return[e`:host{display:none}:host([hidden]){display:none}:host([loading]){display:flex;flex-direction:column;align-items:stretch;justify-content:center;margin:0 auto;padding:0!important;width:var(--hexagon-loader-width,255px);height:var(--hexagon-loader-height,232.5px)}:host([size=small]){width:calc(.5 * var(--hexagon-loader-width,255px));height:calc(.5 * var(--hexagon-loader-height,232.5px))}:host([size=large]){width:calc(1.25 * var(--hexagon-loader-width,255px));height:calc(1.25 * var(--hexagon-loader-height,232.5px))}:host([size=epic]){width:calc(2.5 * var(--hexagon-loader-width,255px));height:calc(2.5 * var(--hexagon-loader-height,232.5px))}div{position:relative;margin:0 auto;flex:1 1 100%;width:100%}hex-a-gon{display:none;position:absolute;top:9px;left:15px;width:var(--hexagon-width,30px);height:var(--hexagon-height,18px);color:#9fb475;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:0 0;transform-origin:0 0}:host([size=small]) hex-a-gon{--hexagon-width:calc(0.5 * 30px);--hexagon-height:calc(0.5 * 18px);top:calc(.1 * 9px);left:calc(.5 * 15px)}:host([size=large]) hex-a-gon{--hexagon-width:calc(1.25 * 30px);--hexagon-height:calc(1.25 * 18px);top:calc(1.5 * 9px);left:calc(1.25 * 15px)}:host([size=epic]) hex-a-gon{--hexagon-width:calc(2.5 * 30px);--hexagon-height:calc(2.5 * 18px);top:calc(4 * 9px);left:calc(2.5 * 15px)}hex-a-gon:nth-of-type(1){display:block;margin-left:calc(100% * 1.5 / 7);margin-top:0;-webkit-animation:scaleIt 1.5s ease-in-out infinite both;animation:scaleIt 1.5s ease-in-out infinite both;-webkit-animation-delay:0s;animation-delay:0s}hex-a-gon:nth-of-type(2){display:block;margin-left:calc(100% * 2.5 / 7);margin-top:0;-webkit-animation:scaleIt 1.5s ease-in-out infinite both;animation:scaleIt 1.5s ease-in-out infinite both;-webkit-animation-delay:50ms;animation-delay:50ms}hex-a-gon:nth-of-type(3){display:block;margin-left:calc(100% * 3.5 / 7);margin-top:0;-webkit-animation:scaleIt 1.5s ease-in-out infinite both;animation:scaleIt 1.5s ease-in-out infinite both;-webkit-animation-delay:.1s;animation-delay:.1s}hex-a-gon:nth-of-type(4){display:block;margin-left:calc(100% * 4.5 / 7);margin-top:0;-webkit-animation:scaleIt 1.5s ease-in-out infinite both;animation:scaleIt 1.5s ease-in-out infinite both;-webkit-animation-delay:.15s;animation-delay:.15s}hex-a-gon:nth-of-type(5){display:block;margin-left:calc(100% * 1 / 7);margin-top:calc(100% * 1 / 7);-webkit-animation:scaleIt 1.5s ease-in-out infinite both;animation:scaleIt 1.5s ease-in-out infinite both;-webkit-animation-delay:0s;animation-delay:0s}hex-a-gon:nth-of-type(6){display:block;margin-left:calc(100% * 2 / 7);margin-top:calc(100% * 1 / 7);-webkit-animation:scaleIt 1.5s ease-in-out infinite both;animation:scaleIt 1.5s ease-in-out infinite both;-webkit-animation-delay:50ms;animation-delay:50ms}hex-a-gon:nth-of-type(7){display:block;margin-left:var(--hexagon-margin-left,calc(100% * 3 / 7));margin-top:calc(100% * 1 / 7);-webkit-animation:scaleIt 1.5s ease-in-out infinite both;animation:scaleIt 1.5s ease-in-out infinite both;-webkit-animation-delay:.1s;animation-delay:.1s}hex-a-gon:nth-of-type(8){display:block;margin-left:var(--hexagon-margin-left,calc(100% * 4 / 7));margin-top:calc(100% * 1 / 7);-webkit-animation:scaleIt 1.5s ease-in-out infinite both;animation:scaleIt 1.5s ease-in-out infinite both;-webkit-animation-delay:.15s;animation-delay:.15s}hex-a-gon:nth-of-type(9){display:block;margin-left:var(--hexagon-margin-left,calc(100% * 5 / 7));margin-top:calc(100% * 1 / 7);-webkit-animation:scaleIt 1.5s ease-in-out infinite both;animation:scaleIt 1.5s ease-in-out infinite both;-webkit-animation-delay:.2s;animation-delay:.2s}hex-a-gon:nth-of-type(10){display:block;margin-left:var(--hexagon-margin-left,calc(100% * .5 / 7));margin-top:calc(100% * 2 / 7);-webkit-animation:scaleIt 1.5s ease-in-out infinite both;animation:scaleIt 1.5s ease-in-out infinite both;-webkit-animation-delay:0s;animation-delay:0s}hex-a-gon:nth-of-type(11){display:block;margin-left:var(--hexagon-margin-left,calc(100% * 1.5 / 7));margin-top:calc(100% * 2 / 7);-webkit-animation:scaleIt 1.5s ease-in-out infinite both;animation:scaleIt 1.5s ease-in-out infinite both;-webkit-animation-delay:50ms;animation-delay:50ms}hex-a-gon:nth-of-type(12){display:block;margin-left:var(--hexagon-margin-left,calc(100% * 2.5 / 7));margin-top:calc(100% * 2 / 7);-webkit-animation:scaleIt 1.5s ease-in-out infinite both;animation:scaleIt 1.5s ease-in-out infinite both;-webkit-animation-delay:.1s;animation-delay:.1s}hex-a-gon:nth-of-type(13){display:block;margin-left:var(--hexagon-margin-left,calc(100% * 3.5 / 7));margin-top:calc(100% * 2 / 7);-webkit-animation:scaleIt 1.5s ease-in-out infinite both;animation:scaleIt 1.5s ease-in-out infinite both;-webkit-animation-delay:.15s;animation-delay:.15s}hex-a-gon:nth-of-type(14){display:block;margin-left:var(--hexagon-margin-left,calc(100% * 4.5 / 7));margin-top:calc(100% * 2 / 7);-webkit-animation:scaleIt 1.5s ease-in-out infinite both;animation:scaleIt 1.5s ease-in-out infinite both;-webkit-animation-delay:.2s;animation-delay:.2s}hex-a-gon:nth-of-type(15){display:block;margin-left:var(--hexagon-margin-left,calc(100% * 5.5 / 7));margin-top:calc(100% * 2 / 7);-webkit-animation:scaleIt 1.5s ease-in-out infinite both;animation:scaleIt 1.5s ease-in-out infinite both;-webkit-animation-delay:.25s;animation-delay:.25s}hex-a-gon:nth-of-type(16){display:block;margin-left:0;margin-top:calc(100% * 3 / 7);-webkit-animation:scaleIt 1.5s ease-in-out infinite both;animation:scaleIt 1.5s ease-in-out infinite both;-webkit-animation-delay:0s;animation-delay:0s}hex-a-gon:nth-of-type(17){display:block;margin-left:var(--hexagon-margin-left,calc(100% * 1 / 7));margin-top:calc(100% * 3 / 7);-webkit-animation:scaleIt 1.5s ease-in-out infinite both;animation:scaleIt 1.5s ease-in-out infinite both;-webkit-animation-delay:50ms;animation-delay:50ms}hex-a-gon:nth-of-type(18){display:block;margin-left:var(--hexagon-margin-left,calc(100% * 2 / 7));margin-top:calc(100% * 3 / 7);-webkit-animation:scaleIt 1.5s ease-in-out infinite both;animation:scaleIt 1.5s ease-in-out infinite both;-webkit-animation-delay:.1s;animation-delay:.1s}hex-a-gon:nth-of-type(19){display:block;margin-left:var(--hexagon-margin-left,calc(100% * 3 / 7));margin-top:calc(100% * 3 / 7);-webkit-animation:scaleIt 1.5s ease-in-out infinite both;animation:scaleIt 1.5s ease-in-out infinite both;-webkit-animation-delay:.15s;animation-delay:.15s}hex-a-gon:nth-of-type(20){display:block;margin-left:var(--hexagon-margin-left,calc(100% * 4 / 7));margin-top:calc(100% * 3 / 7);-webkit-animation:scaleIt 1.5s ease-in-out infinite both;animation:scaleIt 1.5s ease-in-out infinite both;-webkit-animation-delay:.2s;animation-delay:.2s}hex-a-gon:nth-of-type(21){display:block;margin-left:var(--hexagon-margin-left,calc(100% * 5 / 7));margin-top:calc(100% * 3 / 7);-webkit-animation:scaleIt 1.5s ease-in-out infinite both;animation:scaleIt 1.5s ease-in-out infinite both;-webkit-animation-delay:.25s;animation-delay:.25s}hex-a-gon:nth-of-type(22){display:block;margin-left:var(--hexagon-margin-left,calc(100% * 6 / 7));margin-top:calc(100% * 3 / 7);-webkit-animation:scaleIt 1.5s ease-in-out infinite both;animation:scaleIt 1.5s ease-in-out infinite both;-webkit-animation-delay:.3s;animation-delay:.3s}hex-a-gon:nth-of-type(23){display:block;margin-left:var(--hexagon-margin-left,calc(100% * .5 / 7));margin-top:calc(100% * 4 / 7);-webkit-animation:scaleIt 1.5s ease-in-out infinite both;animation:scaleIt 1.5s ease-in-out infinite both;-webkit-animation-delay:0s;animation-delay:0s}hex-a-gon:nth-of-type(24){display:block;margin-left:var(--hexagon-margin-left,calc(100% * 1.5 / 7));margin-top:calc(100% * 4 / 7);-webkit-animation:scaleIt 1.5s ease-in-out infinite both;animation:scaleIt 1.5s ease-in-out infinite both;-webkit-animation-delay:50ms;animation-delay:50ms}hex-a-gon:nth-of-type(25){display:block;margin-left:var(--hexagon-margin-left,calc(100% * 2.5 / 7));margin-top:calc(100% * 4 / 7);-webkit-animation:scaleIt 1.5s ease-in-out infinite both;animation:scaleIt 1.5s ease-in-out infinite both;-webkit-animation-delay:.1s;animation-delay:.1s}hex-a-gon:nth-of-type(26){display:block;margin-left:var(--hexagon-margin-left,calc(100% * 3.5 / 7));margin-top:calc(100% * 4 / 7);-webkit-animation:scaleIt 1.5s ease-in-out infinite both;animation:scaleIt 1.5s ease-in-out infinite both;-webkit-animation-delay:.15s;animation-delay:.15s}hex-a-gon:nth-of-type(27){display:block;margin-left:var(--hexagon-margin-left,calc(100% * 4.5 / 7));margin-top:calc(100% * 4 / 7);-webkit-animation:scaleIt 1.5s ease-in-out infinite both;animation:scaleIt 1.5s ease-in-out infinite both;-webkit-animation-delay:.2s;animation-delay:.2s}hex-a-gon:nth-of-type(28){display:block;margin-left:var(--hexagon-margin-left,calc(100% * 5.5 / 7));margin-top:calc(100% * 4 / 7);-webkit-animation:scaleIt 1.5s ease-in-out infinite both;animation:scaleIt 1.5s ease-in-out infinite both;-webkit-animation-delay:.25s;animation-delay:.25s}hex-a-gon:nth-of-type(29){display:block;margin-left:var(--hexagon-margin-left,calc(100% * 1 / 7));margin-top:calc(100% * 5 / 7);-webkit-animation:scaleIt 1.5s ease-in-out infinite both;animation:scaleIt 1.5s ease-in-out infinite both;-webkit-animation-delay:0s;animation-delay:0s}hex-a-gon:nth-of-type(30){display:block;margin-left:var(--hexagon-margin-left,calc(100% * 2 / 7));margin-top:calc(100% * 5 / 7);-webkit-animation:scaleIt 1.5s ease-in-out infinite both;animation:scaleIt 1.5s ease-in-out infinite both;-webkit-animation-delay:50ms;animation-delay:50ms}hex-a-gon:nth-of-type(31){display:block;margin-left:var(--hexagon-margin-left,calc(100% * 3 / 7));margin-top:calc(100% * 5 / 7);-webkit-animation:scaleIt 1.5s ease-in-out infinite both;animation:scaleIt 1.5s ease-in-out infinite both;-webkit-animation-delay:.1s;animation-delay:.1s}hex-a-gon:nth-of-type(32){display:block;margin-left:var(--hexagon-margin-left,calc(100% * 4 / 7));margin-top:calc(100% * 5 / 7);-webkit-animation:scaleIt 1.5s ease-in-out infinite both;animation:scaleIt 1.5s ease-in-out infinite both;-webkit-animation-delay:.15s;animation-delay:.15s}hex-a-gon:nth-of-type(33){display:block;margin-left:var(--hexagon-margin-left,calc(100% * 5 / 7));margin-top:calc(100% * 5 / 7);-webkit-animation:scaleIt 1.5s ease-in-out infinite both;animation:scaleIt 1.5s ease-in-out infinite both;-webkit-animation-delay:.2s;animation-delay:.2s}hex-a-gon:nth-of-type(34){display:block;margin-left:var(--hexagon-margin-left,calc(100% * 1.5 / 7));margin-top:calc(100% * 6 / 7);-webkit-animation:scaleIt 1.5s ease-in-out infinite both;animation:scaleIt 1.5s ease-in-out infinite both;-webkit-animation-delay:0s;animation-delay:0s}hex-a-gon:nth-of-type(35){display:block;margin-left:var(--hexagon-margin-left,calc(100% * 2.5 / 7));margin-top:calc(100% * 6 / 7);-webkit-animation:scaleIt 1.5s ease-in-out infinite both;animation:scaleIt 1.5s ease-in-out infinite both;-webkit-animation-delay:50ms;animation-delay:50ms}hex-a-gon:nth-of-type(36){display:block;margin-left:var(--hexagon-margin-left,calc(100% * 3.5 / 7));margin-top:calc(100% * 6 / 7);-webkit-animation:scaleIt 1.5s ease-in-out infinite both;animation:scaleIt 1.5s ease-in-out infinite both;-webkit-animation-delay:.1s;animation-delay:.1s}hex-a-gon:nth-of-type(37){display:block;margin-left:var(--hexagon-margin-left,calc(100% * 4.5 / 7));margin-top:calc(100% * 6 / 7);-webkit-animation:scaleIt 1.5s ease-in-out infinite both;animation:scaleIt 1.5s ease-in-out infinite both;-webkit-animation-delay:.15s;animation-delay:.15s}:host([item-count="1"]) hex-a-gon:nth-of-type(1),:host([item-count="3"]) hex-a-gon:nth-of-type(2){margin-left:calc(100% * 3 / 7)}:host([item-count="2"]) hex-a-gon:nth-of-type(1){margin-left:calc(100% * 2.5 / 7)}:host([item-count="2"]) hex-a-gon:nth-of-type(2){margin-left:calc(100% * 3.5 / 7)}:host([item-count="3"]) hex-a-gon:nth-of-type(1){margin-left:calc(100% * 2 / 7)}:host([item-count="3"]) hex-a-gon:nth-of-type(3){margin-left:calc(100% * 4 / 7)}@-webkit-keyframes scaleIt{100%,25%{-webkit-transform:scale(1) translate(-50%,-50%);transform:scale(1) translate(-50%,-50%)}50%{-webkit-transform:scale(0) translate(-50%,-50%);transform:scale(0) translate(-50%,-50%)}}@keyframes scaleIt{100%,25%{-webkit-transform:scale(1) translate(-50%,-50%);transform:scale(1) translate(-50%,-50%)}50%{-webkit-transform:scale(0) translate(-50%,-50%);transform:scale(0) translate(-50%,-50%)}}`]}render(){return n` <div> ${this.items.map((t=>n`<hex-a-gon></hex-a-gon>`))} </div>`}static get properties(){return{...super.properties,color:{name:"color",type:String,reflect:!0},size:{name:"size",type:String,reflect:!0},loading:{name:"loading",type:Boolean,reflect:!0},items:{name:"items",type:Array},itemCount:{name:"itemCount",type:Number,reflect:!0,attribute:"item-count"}}}static get tag(){return"hexagon-loader"}constructor(){super(),this.itemCount=37,this.items=[]}updated(t){t.forEach(((t,a)=>{if("color"==a&&this._colorChanged(this[a],t),"itemCount"==a){this.items=[];for(let t=0;t<this[a];t++)this.items.push("");let t=-4,i=255/7,e=0;[4,5,6,7,6,5,4].forEach(((a,n)=>{t+=a,this.itemCount>=t&&(e=i*(n+1),this.itemCount)})),this.style.setProperty("--hexagon-loader-height",`${e}px`)}}))}_colorChanged(t,a){t&&window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,{"--hexagon-color":t})}}window.customElements.define(r.tag,r);export{r as HexagonLoader};
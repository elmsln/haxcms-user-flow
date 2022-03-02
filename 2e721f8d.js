import{a as e,x as t,b as n,$ as i}from"./68bab227.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var r,o;class s extends e{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=n.firstChild),n}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=t(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!1)}render(){return n}}s.finalized=!0,s._$litElement$=!0,null===(r=globalThis.litElementHydrateSupport)||void 0===r||r.call(globalThis,{LitElement:s});const a=globalThis.litElementPolyfillSupport;null==a||a({LitElement:s}),(null!==(o=globalThis.litElementVersions)&&void 0!==o?o:globalThis.litElementVersions=[]).push("3.0.1");var c,l=[],d="ResizeObserver loop completed with undelivered notifications.";!function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"}(c||(c={}));var u,h=function(e){return Object.freeze(e)},v=function(e,t){this.inlineSize=e,this.blockSize=t,h(this)},p=function(){function e(e,t,n,i){return this.x=e,this.y=t,this.width=n,this.height=i,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,h(this)}return e.prototype.toJSON=function(){var e=this;return{x:e.x,y:e.y,top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.width,height:e.height}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),f=function(e){return e instanceof SVGElement&&"getBBox"in e},b=function(e){if(f(e)){var t=e.getBBox(),n=t.width,i=t.height;return!n&&!i}var r=e,o=r.offsetWidth,s=r.offsetHeight;return!(o||s||e.getClientRects().length)},g=function(e){var t,n;if(e instanceof Element)return!0;var i=null===(n=null===(t=e)||void 0===t?void 0:t.ownerDocument)||void 0===n?void 0:n.defaultView;return!!(i&&e instanceof i.Element)},w="undefined"!=typeof window?window:{},m=new WeakMap,E=/auto|scroll/,y=/^tb|vertical/,x=/msie|trident/i.test(w.navigator&&w.navigator.userAgent),T=function(e){return parseFloat(e||"0")},R=function(e,t,n){return void 0===e&&(e=0),void 0===t&&(t=0),void 0===n&&(n=!1),new v((n?t:e)||0,(n?e:t)||0)},z=h({devicePixelContentBoxSize:R(),borderBoxSize:R(),contentBoxSize:R(),contentRect:new p(0,0,0,0)}),S=function(e,t){if(void 0===t&&(t=!1),m.has(e)&&!t)return m.get(e);if(b(e))return m.set(e,z),z;var n=getComputedStyle(e),i=f(e)&&e.ownerSVGElement&&e.getBBox(),r=!x&&"border-box"===n.boxSizing,o=y.test(n.writingMode||""),s=!i&&E.test(n.overflowY||""),a=!i&&E.test(n.overflowX||""),c=i?0:T(n.paddingTop),l=i?0:T(n.paddingRight),d=i?0:T(n.paddingBottom),u=i?0:T(n.paddingLeft),v=i?0:T(n.borderTopWidth),g=i?0:T(n.borderRightWidth),w=i?0:T(n.borderBottomWidth),S=u+l,B=c+d,O=(i?0:T(n.borderLeftWidth))+g,C=v+w,k=a?e.offsetHeight-C-e.clientHeight:0,_=s?e.offsetWidth-O-e.clientWidth:0,D=r?S+O:0,A=r?B+C:0,L=i?i.width:T(n.width)-D-_,N=i?i.height:T(n.height)-A-k,U=L+S+_+O,M=N+B+k+C,P=h({devicePixelContentBoxSize:R(Math.round(L*devicePixelRatio),Math.round(N*devicePixelRatio),o),borderBoxSize:R(U,M,o),contentBoxSize:R(L,N,o),contentRect:new p(u,c,L,N)});return m.set(e,P),P},B=function(e,t,n){var i=S(e,n),r=i.borderBoxSize,o=i.contentBoxSize,s=i.devicePixelContentBoxSize;switch(t){case c.DEVICE_PIXEL_CONTENT_BOX:return s;case c.BORDER_BOX:return r;default:return o}},O=function(e){var t=S(e);this.target=e,this.contentRect=t.contentRect,this.borderBoxSize=h([t.borderBoxSize]),this.contentBoxSize=h([t.contentBoxSize]),this.devicePixelContentBoxSize=h([t.devicePixelContentBoxSize])},C=function(e){if(b(e))return 1/0;for(var t=0,n=e.parentNode;n;)t+=1,n=n.parentNode;return t},k=function(){var e=1/0,t=[];l.forEach((function(n){if(0!==n.activeTargets.length){var i=[];n.activeTargets.forEach((function(t){var n=new O(t.target),r=C(t.target);i.push(n),t.lastReportedSize=B(t.target,t.observedBox),r<e&&(e=r)})),t.push((function(){n.callback.call(n.observer,i,n.observer)})),n.activeTargets.splice(0,n.activeTargets.length)}}));for(var n=0,i=t;n<i.length;n++){(0,i[n])()}return e},_=function(e){l.forEach((function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach((function(n){n.isActive()&&(C(n.target)>e?t.activeTargets.push(n):t.skippedTargets.push(n))}))}))},D=function(){var e,t=0;for(_(t);l.some((function(e){return e.activeTargets.length>0}));)t=k(),_(t);return l.some((function(e){return e.skippedTargets.length>0}))&&("function"==typeof ErrorEvent?e=new ErrorEvent("error",{message:d}):((e=document.createEvent("Event")).initEvent("error",!1,!1),e.message=d),window.dispatchEvent(e)),t>0},A=[],L=function(e){if(!u){var t=0,n=document.createTextNode("");new MutationObserver((function(){return A.splice(0).forEach((function(e){return e()}))})).observe(n,{characterData:!0}),u=function(){n.textContent=""+(t?t--:t++)}}A.push(e),u()},N=0,U={attributes:!0,characterData:!0,childList:!0,subtree:!0},M=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],P=function(e){return void 0===e&&(e=0),Date.now()+e},W=!1,F=new(function(){function e(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return e.prototype.run=function(e){var t=this;if(void 0===e&&(e=250),!W){W=!0;var n,i=P(e);n=function(){var n=!1;try{n=D()}finally{if(W=!1,e=i-P(),!N)return;n?t.run(1e3):e>0?t.run(e):t.start()}},L((function(){requestAnimationFrame(n)}))}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var e=this,t=function(){return e.observer&&e.observer.observe(document.body,U)};document.body?t():w.addEventListener("DOMContentLoaded",t)},e.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),M.forEach((function(t){return w.addEventListener(t,e.listener,!0)})))},e.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),M.forEach((function(t){return w.removeEventListener(t,e.listener,!0)})),this.stopped=!0)},e}()),I=function(e){!N&&e>0&&F.start(),!(N+=e)&&F.stop()},V=function(){function e(e,t){this.target=e,this.observedBox=t||c.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var e,t=B(this.target,this.observedBox,!0);return e=this.target,f(e)||function(e){switch(e.tagName){case"INPUT":if("image"!==e.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1}(e)||"inline"!==getComputedStyle(e).display||(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),X=function(e,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=t},$=new WeakMap,q=function(e,t){for(var n=0;n<e.length;n+=1)if(e[n].target===t)return n;return-1},H=function(){function e(){}return e.connect=function(e,t){var n=new X(e,t);$.set(e,n)},e.observe=function(e,t,n){var i=$.get(e),r=0===i.observationTargets.length;q(i.observationTargets,t)<0&&(r&&l.push(i),i.observationTargets.push(new V(t,n&&n.box)),I(1),F.schedule())},e.unobserve=function(e,t){var n=$.get(e),i=q(n.observationTargets,t),r=1===n.observationTargets.length;i>=0&&(r&&l.splice(l.indexOf(n),1),n.observationTargets.splice(i,1),I(-1))},e.disconnect=function(e){var t=this,n=$.get(e);n.observationTargets.slice().forEach((function(n){return t.unobserve(e,n.target)})),n.activeTargets.splice(0,n.activeTargets.length)},e}(),G=function(){function e(e){if(0===arguments.length)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!=typeof e)throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");H.connect(this,e)}return e.prototype.observe=function(e,t){if(0===arguments.length)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!g(e))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");H.observe(this,e,t)},e.prototype.unobserve=function(e){if(0===arguments.length)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!g(e))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");H.unobserve(this,e)},e.prototype.disconnect=function(){H.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();window.ResponsiveUtility={},window.ResponsiveUtility.instance=null;class j extends s{render(){return i` <slot></slot> `}static get tag(){return"responsive-utility"}connectedCallback(){super.connectedCallback(),window.addEventListener("responsive-element",this.responiveElementEvent.bind(this)),window.addEventListener("delete-responsive-element",this.deleteResponiveElementEvent.bind(this))}disconnectedCallback(){window.removeEventListener("responsive-element",this.responiveElementEvent.bind(this)),window.removeEventListener("delete-responsive-element",this.deleteResponiveElementEvent.bind(this)),super.disconnectedCallback()}responiveElementEvent(e){let t={element:e.detail.element,attribute:e.detail.attribute||"responsive-size",sm:e.detail.sm||900,md:e.detail.md||1200,lg:e.detail.lg||1500,xl:e.detail.xl||1800,custom:e.detail.custom||"responsive-width"};t.observer=this._getObserver(t),t.observer.observe(t.element),this.details.push(t),window.ResponsiveUtility.setSize(t)}_getObserver(e){return new G((t=>t.forEach((t=>window.ResponsiveUtility.setSize(e,t.contentBoxSize||t.borderBoxSize||t.contentRect||t.target?t.target.offsetWidth:0)))))}deleteResponiveElementEvent(e){this.details=this.details.filter((t=>e.detail!==t))}constructor(){super(),this.details=[],null==window.ResponsiveUtility.instance&&(window.ResponsiveUtility.instance=this)}}window.customElements.define(j.tag,j),window.ResponsiveUtility.requestAvailability=()=>{null==window.ResponsiveUtility.instance&&(window.ResponsiveUtility.instance=document.createElement("responsive-utility")),document.body.appendChild(window.ResponsiveUtility.instance)},window.ResponsiveUtility.setSize=(e,t=0)=>{let n,i=e.element,r=e.attribute,o=e.custom;n=t<e.sm?"xs":t<e.md?"sm":t<e.lg?"md":t<e.xl?"lg":"xl",i.getAttribute(o)&&t===i.getAttribute(o)||i.setAttribute(o,t),i.getAttribute(r)&&n===i.getAttribute(r)||i.setAttribute(r,n)};

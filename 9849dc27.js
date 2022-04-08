import{s as e,$ as t}from"./aa091c9b.js";var i,n=[],r="ResizeObserver loop completed with undelivered notifications.";!function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"}(i||(i={}));var o,s=function(e){return Object.freeze(e)},a=function(e,t){this.inlineSize=e,this.blockSize=t,s(this)},c=function(){function e(e,t,i,n){return this.x=e,this.y=t,this.width=i,this.height=n,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,s(this)}return e.prototype.toJSON=function(){var e=this;return{x:e.x,y:e.y,top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.width,height:e.height}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),u=function(e){return e instanceof SVGElement&&"getBBox"in e},d=function(e){if(u(e)){var t=e.getBBox(),i=t.width,n=t.height;return!i&&!n}var r=e,o=r.offsetWidth,s=r.offsetHeight;return!(o||s||e.getClientRects().length)},l=function(e){var t,i;if(e instanceof Element)return!0;var n=null===(i=null===(t=e)||void 0===t?void 0:t.ownerDocument)||void 0===i?void 0:i.defaultView;return!!(n&&e instanceof n.Element)},h="undefined"!=typeof window?window:{},v=new WeakMap,p=/auto|scroll/,f=/^tb|vertical/,b=/msie|trident/i.test(h.navigator&&h.navigator.userAgent),g=function(e){return parseFloat(e||"0")},w=function(e,t,i){return void 0===e&&(e=0),void 0===t&&(t=0),void 0===i&&(i=!1),new a((i?t:e)||0,(i?e:t)||0)},m=s({devicePixelContentBoxSize:w(),borderBoxSize:w(),contentBoxSize:w(),contentRect:new c(0,0,0,0)}),E=function(e,t){if(void 0===t&&(t=!1),v.has(e)&&!t)return v.get(e);if(d(e))return v.set(e,m),m;var i=getComputedStyle(e),n=u(e)&&e.ownerSVGElement&&e.getBBox(),r=!b&&"border-box"===i.boxSizing,o=f.test(i.writingMode||""),a=!n&&p.test(i.overflowY||""),l=!n&&p.test(i.overflowX||""),h=n?0:g(i.paddingTop),E=n?0:g(i.paddingRight),x=n?0:g(i.paddingBottom),y=n?0:g(i.paddingLeft),z=n?0:g(i.borderTopWidth),T=n?0:g(i.borderRightWidth),R=n?0:g(i.borderBottomWidth),S=y+E,B=h+x,O=(n?0:g(i.borderLeftWidth))+T,C=z+R,k=l?e.offsetHeight-C-e.clientHeight:0,A=a?e.offsetWidth-O-e.clientWidth:0,N=r?S+O:0,L=r?B+C:0,U=n?n.width:g(i.width)-N-A,D=n?n.height:g(i.height)-L-k,_=U+S+A+O,M=D+B+k+C,P=s({devicePixelContentBoxSize:w(Math.round(U*devicePixelRatio),Math.round(D*devicePixelRatio),o),borderBoxSize:w(_,M,o),contentBoxSize:w(U,D,o),contentRect:new c(y,h,U,D)});return v.set(e,P),P},x=function(e,t,n){var r=E(e,n),o=r.borderBoxSize,s=r.contentBoxSize,a=r.devicePixelContentBoxSize;switch(t){case i.DEVICE_PIXEL_CONTENT_BOX:return a;case i.BORDER_BOX:return o;default:return s}},y=function(e){var t=E(e);this.target=e,this.contentRect=t.contentRect,this.borderBoxSize=s([t.borderBoxSize]),this.contentBoxSize=s([t.contentBoxSize]),this.devicePixelContentBoxSize=s([t.devicePixelContentBoxSize])},z=function(e){if(d(e))return 1/0;for(var t=0,i=e.parentNode;i;)t+=1,i=i.parentNode;return t},T=function(){var e=1/0,t=[];n.forEach((function(i){if(0!==i.activeTargets.length){var n=[];i.activeTargets.forEach((function(t){var i=new y(t.target),r=z(t.target);n.push(i),t.lastReportedSize=x(t.target,t.observedBox),r<e&&(e=r)})),t.push((function(){i.callback.call(i.observer,n,i.observer)})),i.activeTargets.splice(0,i.activeTargets.length)}}));for(var i=0,r=t;i<r.length;i++){(0,r[i])()}return e},R=function(e){n.forEach((function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach((function(i){i.isActive()&&(z(i.target)>e?t.activeTargets.push(i):t.skippedTargets.push(i))}))}))},S=function(){var e,t=0;for(R(t);n.some((function(e){return e.activeTargets.length>0}));)t=T(),R(t);return n.some((function(e){return e.skippedTargets.length>0}))&&("function"==typeof ErrorEvent?e=new ErrorEvent("error",{message:r}):((e=document.createEvent("Event")).initEvent("error",!1,!1),e.message=r),window.dispatchEvent(e)),t>0},B=[],O=function(e){if(!o){var t=0,i=document.createTextNode("");new MutationObserver((function(){return B.splice(0).forEach((function(e){return e()}))})).observe(i,{characterData:!0}),o=function(){i.textContent=""+(t?t--:t++)}}B.push(e),o()},C=0,k={attributes:!0,characterData:!0,childList:!0,subtree:!0},A=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],N=function(e){return void 0===e&&(e=0),Date.now()+e},L=!1,U=new(function(){function e(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return e.prototype.run=function(e){var t=this;if(void 0===e&&(e=250),!L){L=!0;var i,n=N(e);i=function(){var i=!1;try{i=S()}finally{if(L=!1,e=n-N(),!C)return;i?t.run(1e3):e>0?t.run(e):t.start()}},O((function(){requestAnimationFrame(i)}))}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var e=this,t=function(){return e.observer&&e.observer.observe(document.body,k)};document.body?t():h.addEventListener("DOMContentLoaded",t)},e.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),A.forEach((function(t){return h.addEventListener(t,e.listener,!0)})))},e.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),A.forEach((function(t){return h.removeEventListener(t,e.listener,!0)})),this.stopped=!0)},e}()),D=function(e){!C&&e>0&&U.start(),!(C+=e)&&U.stop()},_=function(){function e(e,t){this.target=e,this.observedBox=t||i.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var e,t=x(this.target,this.observedBox,!0);return e=this.target,u(e)||function(e){switch(e.tagName){case"INPUT":if("image"!==e.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1}(e)||"inline"!==getComputedStyle(e).display||(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),M=function(e,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=t},P=new WeakMap,W=function(e,t){for(var i=0;i<e.length;i+=1)if(e[i].target===t)return i;return-1},F=function(){function e(){}return e.connect=function(e,t){var i=new M(e,t);P.set(e,i)},e.observe=function(e,t,i){var r=P.get(e),o=0===r.observationTargets.length;W(r.observationTargets,t)<0&&(o&&n.push(r),r.observationTargets.push(new _(t,i&&i.box)),D(1),U.schedule())},e.unobserve=function(e,t){var i=P.get(e),r=W(i.observationTargets,t),o=1===i.observationTargets.length;r>=0&&(o&&n.splice(n.indexOf(i),1),i.observationTargets.splice(r,1),D(-1))},e.disconnect=function(e){var t=this,i=P.get(e);i.observationTargets.slice().forEach((function(i){return t.unobserve(e,i.target)})),i.activeTargets.splice(0,i.activeTargets.length)},e}(),I=function(){function e(e){if(0===arguments.length)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!=typeof e)throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");F.connect(this,e)}return e.prototype.observe=function(e,t){if(0===arguments.length)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!l(e))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");F.observe(this,e,t)},e.prototype.unobserve=function(e){if(0===arguments.length)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!l(e))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");F.unobserve(this,e)},e.prototype.disconnect=function(){F.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();window.ResponsiveUtility={},window.ResponsiveUtility.instance=null;class X extends e{render(){return t` <slot></slot> `}static get tag(){return"responsive-utility"}connectedCallback(){super.connectedCallback(),window.addEventListener("responsive-element",this.responiveElementEvent.bind(this)),window.addEventListener("delete-responsive-element",this.deleteResponiveElementEvent.bind(this))}disconnectedCallback(){window.removeEventListener("responsive-element",this.responiveElementEvent.bind(this)),window.removeEventListener("delete-responsive-element",this.deleteResponiveElementEvent.bind(this)),super.disconnectedCallback()}responiveElementEvent(e){let t={element:e.detail.element,attribute:e.detail.attribute||"responsive-size",sm:e.detail.sm||900,md:e.detail.md||1200,lg:e.detail.lg||1500,xl:e.detail.xl||1800,custom:e.detail.custom||"responsive-width"};t.observer=this._getObserver(t),t.observer.observe(t.element),this.details.push(t),window.ResponsiveUtility.setSize(t)}_getObserver(e){return new I((t=>t.forEach((t=>window.ResponsiveUtility.setSize(e,t.contentBoxSize||t.borderBoxSize||t.contentRect||t.target?t.target.offsetWidth:0)))))}deleteResponiveElementEvent(e){this.details=this.details.filter((t=>e.detail!==t))}constructor(){super(),this.details=[],null==window.ResponsiveUtility.instance&&(window.ResponsiveUtility.instance=this)}}window.customElements.define(X.tag,X),window.ResponsiveUtility.requestAvailability=()=>{null==window.ResponsiveUtility.instance&&(window.ResponsiveUtility.instance=document.createElement("responsive-utility")),document.body.appendChild(window.ResponsiveUtility.instance)},window.ResponsiveUtility.setSize=(e,t=0)=>{let i,n=e.element,r=e.attribute,o=e.custom;i=t<e.sm?"xs":t<e.md?"sm":t<e.lg?"md":t<e.xl?"lg":"xl",n.getAttribute(o)&&t===n.getAttribute(o)||n.setAttribute(o,t),n.getAttribute(r)&&i===n.getAttribute(r)||n.setAttribute(r,i)};

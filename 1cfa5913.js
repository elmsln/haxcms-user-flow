import{s as e,r as t,$ as i}from"./1a95873b.js";import"./c8892087.js";import"./20951f9c.js";function o(e,t,i,s=20,a=0){let n=[];if(a>=s)return n;const l=e=>{const n=e.assignedNodes().filter((e=>1===e.nodeType));return n.length>0?o(n[0].parentElement,t,i,s,a+1):[]},d=Array.from(e.children||[]);for(const e of d)t(e)||(i(e)&&n.push(e),null!=e.shadowRoot?n.push(...o(e.shadowRoot,t,i,s,a+1)):"SLOT"===e.tagName?n.push(...l(e)):n.push(...o(e,t,i,s,a+1)));return n}function s(e){return e.hasAttribute("hidden")||e.hasAttribute("aria-hidden")&&"false"!==e.getAttribute("aria-hidden")||"none"===e.style.display||"0"===e.style.opacity||"hidden"===e.style.visibility||"collapse"===e.style.visibility}function a(e){return"-1"!==e.getAttribute("tabindex")&&!s(e)&&!function(e){return e.hasAttribute("disabled")||e.hasAttribute("aria-disabled")&&"false"!==e.getAttribute("aria-disabled")}(e)&&(e.hasAttribute("tabindex")||(e instanceof HTMLAnchorElement||e instanceof HTMLAreaElement)&&e.hasAttribute("href")||e instanceof HTMLButtonElement||e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement||e instanceof HTMLIFrameElement)}const n=new Map;const l=document.createElement("template");l.innerHTML='\n\t<div id="start"></div>\n\t<div id="backup"></div>\n\t<slot></slot>\n\t<div id="end"></div>\n';class d extends HTMLElement{constructor(){super(),this.debounceId=Math.random().toString(),this._focused=!1;const e=this.attachShadow({mode:"open"});e.appendChild(l.content.cloneNode(!0)),this.$backup=e.querySelector("#backup"),this.$start=e.querySelector("#start"),this.$end=e.querySelector("#end"),this.focusLastElement=this.focusLastElement.bind(this),this.focusFirstElement=this.focusFirstElement.bind(this),this.onFocusIn=this.onFocusIn.bind(this),this.onFocusOut=this.onFocusOut.bind(this)}static get observedAttributes(){return["inactive"]}get inactive(){return this.hasAttribute("inactive")}set inactive(e){e?this.setAttribute("inactive",""):this.removeAttribute("inactive")}get focused(){return this._focused}connectedCallback(){this.$start.addEventListener("focus",this.focusLastElement),this.$end.addEventListener("focus",this.focusFirstElement),this.addEventListener("focusin",this.onFocusIn),this.addEventListener("focusout",this.onFocusOut),this.render()}disconnectedCallback(){this.$start.removeEventListener("focus",this.focusLastElement),this.$end.removeEventListener("focus",this.focusFirstElement),this.removeEventListener("focusin",this.onFocusIn),this.removeEventListener("focusout",this.onFocusOut)}attributeChangedCallback(){this.render()}focusFirstElement(){this.trapFocus()}focusLastElement(){this.trapFocus(!0)}getFocusableElements(){return o(this,s,a)}trapFocus(e){if(this.inactive)return;let t=this.getFocusableElements();t.length>0?(e?t[t.length-1].focus():t[0].focus(),this.$backup.setAttribute("tabindex","-1")):(this.$backup.setAttribute("tabindex","0"),this.$backup.focus())}onFocusIn(){this.updateFocused(!0)}onFocusOut(){this.updateFocused(!1)}updateFocused(e){!function(e,t,i){const o=n.get(i);null!=o&&window.clearTimeout(o),n.set(i,window.setTimeout((()=>{e(),n.delete(i)}),t))}((()=>{this.focused!==e&&(this._focused=e,this.render())}),0,this.debounceId)}render(){this.$start.setAttribute("tabindex",!this.focused||this.inactive?"-1":"0"),this.$end.setAttribute("tabindex",!this.focused||this.inactive?"-1":"0"),this.focused?this.setAttribute("focused",""):this.removeAttribute("focused")}}function r(e){return Number(e.getAttribute("data-dialog-count"))||0}function c(e,t){e.setAttribute("data-dialog-count",t.toString())}function h(e=document.activeElement){return null!=e&&null!=e.shadowRoot&&null!=e.shadowRoot.activeElement?h(e.shadowRoot.activeElement):e}window.customElements.define("focus-trap",d);const m=document.createElement("template");m.innerHTML='\n  <style>*{box-sizing:border-box}:host{padding:var(--dialog-container-padding,5vw 24px);z-index:var(--dialog-z-index,12345678);outline:none}#backdrop,:host{position:fixed;top:0;left:0;bottom:0;right:0}:host,:host([center]) #dialog{overflow-x:var(--dialog-overflow-x,hidden);overflow-y:var(--dialog-overflow-y,auto);overscroll-behavior:contain;-webkit-overflow-scrolling:touch}:host([center]){display:flex;align-items:center;justify-content:center;overflow:hidden}:host([center]) #dialog{max-height:var(--dialog-max-height,100%)}:host(:not(:defined)),:host(:not([open])){display:none}#backdrop{background:var(--dialog-backdrop-bg,rgba(0,0,0,.6));animation:fadeIn var(--dialog-animation-duration,.1s) var(--dialog-animation-easing,ease-out);z-index:-1}#dialog{animation:scaleIn var(--dialog-animation-duration,.1s) var(--dialog-animation-easing,ease-out);border-radius:var(--dialog-border-radius,12px);box-shadow:var(--dialog-box-shadow,0 2px 10px -5px rgba(0,0,0,.6));max-width:var(--dialog-max-width,700px);width:var(--dialog-width,100%);padding:var(--dialog-padding,24px);max-height:var(--dialog-max-height,unset);height:var(--dialog-height,auto);color:var(--dialog-color,currentColor);background:var(--dialog-bg,#fff);z-index:1;position:relative;display:flex;flex-direction:column;margin:0 auto;border:none}::slotted(article),article{flex-grow:1;overflow-y:auto;-webkit-overflow-scrolling:touch}::slotted(footer),::slotted(header),footer,header{flex-shrink:0}@keyframes scaleIn{0%{transform:scale(.9) translateY(30px);opacity:0}to{transform:scale(1) translateY(0);opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}</style>\n  <div id="backdrop" part="backdrop"></div>\n  <focus-trap id="dialog" part="dialog">\n    <slot></slot>\n  </focus-trap>\n';class p extends HTMLElement{constructor(){super(),this.$scrollContainer=document.documentElement,this.$previousActiveElement=null;const e=this.attachShadow({mode:"open"});e.appendChild(m.content.cloneNode(!0)),this.$dialog=e.querySelector("#dialog"),this.$backdrop=e.querySelector("#backdrop"),this.onBackdropClick=this.onBackdropClick.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.setAttribute("aria-modal","true"),this.$dialog.setAttribute("role","alertdialog")}static get observedAttributes(){return["open","center"]}get open(){return this.hasAttribute("open")}set open(e){e?this.setAttribute("open",""):this.removeAttribute("open")}get center(){return this.hasAttribute("center")}set center(e){e?this.setAttribute("center",""):this.removeAttribute("center")}connectedCallback(){this.$backdrop.addEventListener("click",this.onBackdropClick)}disconnectedCallback(){this.$backdrop.removeEventListener("click",this.onBackdropClick),this.open&&this.didClose()}show(){this.open=!0}close(e){this.result=e,this.open=!1}onBackdropClick(){this.assertClosing()&&this.close()}onKeyDown(e){if("Escape"===e.code)this.assertClosing()&&(this.close(),e.stopImmediatePropagation())}assertClosing(){return this.dispatchEvent(new CustomEvent("closing",{cancelable:!0}))}didOpen(){this.$previousActiveElement=h(document.activeElement),requestAnimationFrame((()=>{this.$dialog.focusFirstElement()})),this.tabIndex=0,this.$scrollContainer.style.overflow="hidden",this.addEventListener("keydown",this.onKeyDown,{capture:!0,passive:!0}),c(this.$scrollContainer,r(this.$scrollContainer)+1),this.dispatchEvent(new CustomEvent("open"))}didClose(){this.removeEventListener("keydown",this.onKeyDown,{capture:!0}),c(this.$scrollContainer,Math.max(0,r(this.$scrollContainer)-1)),r(this.$scrollContainer)<=0&&(this.$scrollContainer.style.overflow=""),this.tabIndex=-1,null!=this.$previousActiveElement&&(this.$previousActiveElement.focus(),this.$previousActiveElement=null),this.dispatchEvent(new CustomEvent("close",{detail:this.result}))}attributeChangedCallback(e,t,i){if("open"===e)this.open?this.didOpen():this.didClose()}}customElements.define("web-dialog",p);
/**
 * Copyright 2019 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
const u=["--simple-modal-resize","--simple-modal-width","--simple-modal-z-index","--simple-modal-height","--simple-modal-min-width","--simple-modal-min-height","--simple-modal-max-width","--simple-modal-max-height","--simple-modal-titlebar-color","--simple-modal-titlebar-height","--simple-modal-titlebar-line-height","--simple-modal-titlebar-background","--simple-modal-titlebar-padding","--simple-modal-header-color","--simple-modal-header-background","--simple-modal-header-padding","--simple-modal-content-container-color","--simple-modal-content-container-background","--simple-modal-content-padding","--simple-modal-buttons-color","--simple-modal-buttons-background","--simple-modal-buttons-padding","--simple-modal-button-color","--simple-modal-button-background"];class b extends e{static get styles(){return[t`:host{display:block}:host([hidden]){display:none}:host web-dialog ::slotted(*){font-size:14px}#titlebar{margin-top:0;padding:var(--simple-modal-titlebar-padding,0 16px);display:flex;align-items:center;justify-content:space-between;color:var(--simple-modal-titlebar-color,#444);background-color:var(--simple-modal-titlebar-background,#ddd);border-radius:0;height:var(--simple-modal-titlebar-height,unset);line-height:var(--simple-modal-titlebar-line-height,unset)}#headerbar{margin:0;padding:var(--simple-modal-header-padding,0 16px);color:var(--simple-modal-header-color,#222);background-color:var(--simple-modal-header-background,#ccc)}h2{margin-right:8px;padding:0;margin:0;flex:auto;font-size:18px;line-height:18px}#close{top:0;border:var(--simple-modal-titlebar-button-border,none);padding:var(--simple-modal-titlebar-button-padding,10px 0);min-width:unset;text-transform:none;color:var(--simple-modal-titlebar-color,#444);background-color:transparent}#close:focus{opacity:.7;outline:var(--simple-modal-titlebar-button-outline,2px dotted grey);outline-offset:var(--simple-modal-titlebar-button-outline-offset,2px)}#close simple-icon-lite{--simple-icon-height:var(--simple-modal-titlebar-icon-height, 16px);--simple-icon-width:var(--simple-modal-titlebar-icon-width, 16px);color:var(--simple-modal-titlebar-color,#444)}#simple-modal-content{flex-grow:1;padding:var(--simple-modal-content-padding,8px 16px);margin:0;color:var(--simple-modal-content-container-color,#222);background-color:var(--simple-modal-content-container-background,#fff)}.buttons{padding:0;padding:var(--simple-modal-buttons-padding,0);margin:0;color:var(--simple-modal-buttons-color,#00f);background-color:var(--simple-modal-buttons-background,#fff)}.buttons ::slotted(*){padding:0;margin:0;color:var(--simple-modal-button-color,--simple-modal-buttons-color);background-color:var(--simple-modal-button-background,--simple-modal-buttons-background)}web-dialog{--dialog-border-radius:var(--simple-modal-border-radius, 2px);z-index:var(--simple-modal-z-index,1)!important;padding:0}web-dialog::part(dialog){border:1px solid var(--simple-modal-border-color,#222);min-height:var(--simple-modal-min-height,unset);min-width:var(--simple-modal-min-width,unset);z-index:var(--simple-modal-z-index,1000);resize:var(--simple-modal-resize,unset);padding:0;--dialog-height:var(--simple-modal-height, auto);--dialog-width:var(--simple-modal-width, 75vw);--dialog-max-width:var(--simple-modal-max-width, 100vw);--dialog-max-height:var(--simple-modal-max-height, 100vh)}web-dialog.style-scope.simple-modal{display:none!important}web-dialog[open].style-scope.simple-modal{display:flex!important;position:fixed!important;margin:auto}:host([resize=horizontal]) web-dialog[open].style-scope.simple-modal,:host([resize=none]) web-dialog[open].style-scope.simple-modal{top:calc(50% - var(--simple-modal-height,auto)/ 2)}:host([resize=none]) web-dialog[open].style-scope.simple-modal,:host([resize=vertical]) web-dialog[open].style-scope.simple-modal{left:calc(50% - var(--simple-modal-width,75vw)/ 2)}`]}render(){return i` <web-dialog id="dialog" center role="dialog" part="dialog" aria-describedby="simple-modal-content" aria-label="${this._getAriaLabel(this.title)}" aria-labelledby="${this._getAriaLabelledby(this.title)}" aria-modal="true" ?open="${this.opened}" @open="${this.open}" @close="${this.close}"> <div id="titlebar" part="titlebar"> <h2 id="simple-modal-title" ?hidden="${!this.title}" part="title"> ${this.title} </h2> <div></div> ${this.modal?"":i`<simple-icon-button-lite id="close" dark icon="${this.closeIcon}" @click="${this.close}" label="${this.closeLabel}" part="close"> </simple-icon-button-lite>`} </div> <div id="headerbar" part="headerbar"><slot name="header"></slot></div> <div id="simple-modal-content" part="content"> <slot name="content"></slot> </div> <slot name="custom" part="custom"></slot> <div class="buttons" part="buttons"> <slot name="buttons"></slot> </div> </web-dialog>`}static get properties(){return{...super.properties,title:{type:String},opened:{type:Boolean,reflect:!0},closeLabel:{attribute:"close-label",type:String},closeIcon:{type:String,attribute:"close-icon"},invokedBy:{type:Object},modal:{type:Boolean},mode:{type:String,reflect:!0}}}static get tag(){return"simple-modal"}constructor(){super(),this.title="",this.opened=!1,this.closeLabel="Close",this.closeIcon="close",this.modal=!1}updated(e){e.forEach(((e,t)=>{"opened"==t&&this._openedChanged(this[t])}))}connectedCallback(){super.connectedCallback(),setTimeout((()=>{window.addEventListener("simple-modal-hide",this.close.bind(this)),window.addEventListener("simple-modal-show",this.showEvent.bind(this))}),0)}disconnectedCallback(){window.removeEventListener("simple-modal-hide",this.close.bind(this)),window.removeEventListener("simple-modal-show",this.showEvent.bind(this)),super.disconnectedCallback()}showEvent(e){window.dispatchEvent(new CustomEvent("simple-toast-hide",{bubbles:!0,composed:!0,cancelable:!1,detail:!1})),this.opened?(this.innerHTML="",setTimeout((()=>{this.show(e.detail.title,e.detail.mode,e.detail.elements,e.detail.invokedBy,e.detail.id,e.detail.modalClass,e.detail.styles,e.detail.clone,e.detail.modal)}),0)):this.show(e.detail.title,e.detail.mode,e.detail.elements,e.detail.invokedBy,e.detail.id,e.detail.modalClass,e.detail.styles,e.detail.clone,e.detail.modal)}show(e,t,i,o,s=null,a=null,n=null,l=!1,d=!1){let r;this.invokedBy=o,this.modal=d,this.title=e,this.mode=t;let c=["header","content","buttons","custom"];for(var h in s?this.setAttribute("id",s):this.removeAttribute("id"),this.setAttribute("style",""),n&&u.forEach((e=>{this.style.setProperty(e,n[e]||"inherit")})),a?this.setAttribute("class",a):this.removeAttribute("class"),c)i[c[h]]&&(r=l?i[c[h]].cloneNode(!0):i[c[h]],r.setAttribute("slot",c[h]),this.appendChild(r));this.opened=!0}close(){this.opened=!1,window.ShadyCSS&&!window.ShadyCSS.nativeShadow&&(this.shadowRoot.querySelector("web-dialog").shadowRoot.querySelector("#backdrop").style.position="relative")}open(){this.opened=!0;const e=this.shadowRoot.querySelector("web-dialog");this.modal?(e.$backdrop.removeEventListener("click",e.onBackdropClick),e.removeEventListener("keydown",e.onKeyDown,{capture:!0})):(e.$backdrop.addEventListener("click",e.onBackdropClick),e.addEventListener("keydown",e.onKeyDown,{capture:!0,passive:!0}),console.log("?")),window.ShadyCSS&&!window.ShadyCSS.nativeShadow&&(this.shadowRoot.querySelector("web-dialog").shadowRoot.querySelector("#backdrop").style.position="fixed",this.shadowRoot.querySelector("web-dialog").shadowRoot.querySelector("#backdrop").style.top=0,this.shadowRoot.querySelector("web-dialog").shadowRoot.querySelector("#backdrop").style.bottom=0,this.shadowRoot.querySelector("web-dialog").shadowRoot.querySelector("#backdrop").style.left=0,this.shadowRoot.querySelector("web-dialog").shadowRoot.querySelector("#backdrop").style.right=0)}_openedChanged(e){if(void 0===e||e){if(e){this.querySelectorAll("[dialog-dismiss]").forEach((e=>{e.addEventListener("click",(e=>{const t=new CustomEvent("simple-modal-dismissed",{bubbles:!0,composed:!0,cancelable:!0,detail:{opened:!1,invokedBy:this.invokedBy}});this.dispatchEvent(t),this.close()}))})),this.querySelectorAll("[dialog-confirm]").forEach((e=>{e.addEventListener("click",(e=>{const t=new CustomEvent("simple-modal-confirmed",{composed:!0,bubbles:!0,cancelable:!0,detail:{opened:!1,invokedBy:this.invokedBy}});this.dispatchEvent(t),this.close()}))}));const e=new CustomEvent("simple-modal-opened",{bubbles:!0,composed:!0,cancelable:!0,detail:{opened:!0,invokedBy:this.invokedBy}});this.dispatchEvent(e)}}else{for(this.title="";null!==this.firstChild;)this.removeChild(this.firstChild);this.invokedBy&&setTimeout((()=>{this.invokedBy.focus()}),500);const e=new CustomEvent("simple-modal-closed",{bubbles:!0,cancelable:!0,detail:{opened:!1,invokedBy:this.invokedBy}});this.dispatchEvent(e)}}_getAriaLabelledby(e){return e?"simple-modal-title":null}_getAriaLabel(e){return e?null:"Modal Dialog"}}window.customElements.define(b.tag,b),window.SimpleModal=window.SimpleModal||{},window.SimpleModal.requestAvailability=()=>(window.SimpleModal.instance||(window.SimpleModal.instance=document.createElement("simple-modal"),document.body.appendChild(window.SimpleModal.instance)),window.SimpleModal.instance);const v=window.SimpleModal.requestAvailability();export{b as SimpleModal,u as SimpleModalCssVars,v as SimpleModalStore};
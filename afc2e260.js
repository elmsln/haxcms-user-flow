import{r as t,$ as e}from"./108590be.js";import{s as i,H as o}from"./e9391c82.js";import"./55f88d6a.js";import"./b78a3bce.js";import"./322d1da1.js";import"./29b617f1.js";class a extends i{constructor(){super()}static get styles(){return[t`:host{display:flex;flex-direction:column;align-items:stretch;justify-content:space-evenly;height:100%}button{font-size:var(--hax-ui-font-size-xs);margin:0;padding:0;display:flex;flex-direction:column;align-items:stretch;border-radius:0;border:none;width:100%;outline:1px solid var(--hax-toolbar-border-color);opacity:.8;background-color:var(--hax-toolbar-button-bg);transition:.2s opacity ease-in-out,.2s outline-color ease-in-out;flex:1 0 auto}button:active,button:focus,button:hover{outline-color:var(--hax-tray-accent-color);outline-width:4px;outline-style:solid;opacity:1}.detail-wrapper{flex:1 0 auto;max-height:30px;overflow:hidden;text-align:center;text-overflow:ellipsis}.image{flex:0 0 auto;width:100%;background-color:var(--hax-toolbar-border-color)}@media screen and (max-width:1000px){:host{width:100%}.title{font-size:12px}}`]}render(){return e` <button draggable="true" @click="${this._itemSelected}" @dragstart="${this._dragStart}" @dragend="${this._dragEnd}" title="${this.details}"> <img loading="lazy" class="image" src="${this.image}"> <div class="detail-wrapper">${this.title.substr(0,40)}</div> </button> `}static get tag(){return"hax-app-search-result"}static get properties(){return{image:{type:String},title:{type:String},details:{type:String},map:{type:Object},type:{type:String}}}_dragStart(t){let e=this.cloneNode(!0);o.__dragTarget=e,t.dataTransfer&&(this.crt=e,this.crt.style.position="absolute",this.crt.style.top="-1000px",this.crt.style.right="-1000px",this.crt.style.transform="scale(0.25)",this.crt.style.opacity=".8",t.dataTransfer.effectAllowed="move",t.dataTransfer.dropEffect="move",document.body.appendChild(this.crt),t.dataTransfer.setDragImage(this.crt,0,0)),t.stopPropagation(),t.stopImmediatePropagation()}_dragEnd(t){this.crt.remove(),setTimeout((()=>{this._itemSelected(t)}),0)}_itemSelected(t){var e=this.map,i=this.type;i&&null!=i&&""!=i&&"undefined"!=i||!e.source||(i=o.guessGizmoType(e));let a=o.guessGizmo(i,e,!1,!0);a.length>0?1===a.length?void 0!==a[0].tag&&(a[0].nextToActive=!0,this.dispatchEvent(new CustomEvent("hax-insert-content",{bubbles:!0,cancelable:!0,composed:!0,detail:a[0]}))):o.haxAppPicker.presentOptions(a,i,"How would you like to display this "+i+"?","gizmo"):o.toast("Sorry, HAX can't handle that link yet.")}}window.customElements.define(a.tag,a);export{a as HaxAppSearchResult};

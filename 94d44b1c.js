import{$ as t,r as e}from"./108590be.js";import{R as i,s as r,b as s,c as o,d as n}from"./5e7fc4be.js";import"./55f88d6a.js";import"./e9391c82.js";import"./b78a3bce.js";import"./29b617f1.js";import"./322d1da1.js";import"./b9bb5cf7.js";import"./f12c4254.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class a extends(i(r)){static get tag(){return"rich-text-editor-toolbar-mini"}static get styles(){return[...super.baseStyles,...super.miniStyles]}render(){return t` ${super.miniTemplate} `}constructor(){super(),this.sticky=!1,this.config=this.miniConfig}updated(t){super.updated(t),t.forEach(((t,e)=>{"sticky"===e&&this.sticky&&(this.sticky=!1)}))}}window.customElements.define(a.tag,a);
/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
class l extends(s(r)){static get tag(){return"rich-text-editor-breadcrumbs"}static get properties(){return{controls:{type:String},hidden:{type:Boolean,attribute:"hidden",reflect:!0},label:{type:String},sticky:{type:Boolean,reflect:!0},selectionAncestors:{type:Array}}}constructor(){super(),this.hidden=!0,this.sticky=!1,this.label="Select"}_handleClick(t){t.selectAll?this.selectNodeContents(t.selectAll):this.selectNode(t),this.editor&&this.editor.focus()}render(){return t` ${this.label}: ${this.selectionAncestors?(this.selectionAncestors||[]).map(((e,i)=>t` <button class="${e.selectAll?"":"selectnode"}" controls="${this.controls}" @click="${t=>this._handleClick(e)}" tabindex="0"> ${e.nodeName.toLowerCase()} </button> ${i+1>=(this.selectionAncestors||[]).length?"":t` <span class="divider"> &gt; </span> `} `)):""} `}static get styles(){return[...o,e`
        :host {
          display: block;
          background-color: var(--rich-text-editor-bg, #ffffff);
          color: var(--rich-text-editor-button-color #444);
          border: var(--rich-text-editor-border-width, 1px) solid var(--rich-text-editor-border-color, #ddd);
          padding: 3px 10px;
        }
        :host([sticky]) {
          position: sticky;
          bottom: 0;
        }
        .selectednode {
          background-color: var(--rich-text-editor-button-bg, #ffffff);
        }
        button {
          display: inline-block;
          text-align: center;
          min-width: 25px;
          margin: 0;
          padding: 2px 5px;
        }
        .selectNode {
          font-family: monospace;
        }
      `]}}window.customElements.define(l.tag,l);
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */
class c extends(i(r)){static get tag(){return"rich-text-editor-toolbar-full"}static get styles(){return[...super.baseStyles,...super.stickyStyles]}render(){return super.render()}static get properties(){return{...super.properties}}constructor(){super()}get hasBreadcrumbs(){return!0}}window.customElements.define(c.tag,c);
/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
const d=function(i){return class extends i{static get styles(){return[...n,e`:host{display:block}:host([hidden]){display:none}:host([disabled]){cursor:not-allowed}:host(:empty){opacity:.7}:host(:focus){outline:0}:host(.heightmax[contenteditable=true]){max-height:calc(100vh - 200px);overflow-y:scroll}#container,#wysiwyg{display:block;width:100%}#source,#wysiwyg{margin:0;padding:0;min-height:var(--rich-text-editor-min-height,20px);cursor:pointer;outline:0;flex:1 1 100%;width:100%}:host(:empty){min-height:20px}:host(:empty)::after{display:block;content:attr(aria-placeholder)}:host(:focus-within),:host(:hover){opacity:1;outline:var(--rich-text-editor-border-width,1px) dotted var(--rich-text-editor-focus-color,currentColor)}:host([disabled]),:host([view-source]){outline:0!important}#source:focus-within,#source:hover{outline:var(--rich-text-editor-border-width,1px) dotted var(--rich-text-editor-focus-color,currentColor)}:host([contenteditable=true][view-source]) #container{display:flex;align-items:stretch;justify-content:space-between;width:100%}:host([contenteditable=true][view-source]) #source,:host([contenteditable=true][view-source]) #wysiwyg{resize:horizontal;overflow:auto;flex:1 1 auto;width:50%}:host([contenteditable=true][view-source]) #source{min-width:300px}:host([contenteditable=true][view-source]) #wysiwyg{cursor:not-allowed;margin-right:10px;width:calc(50% - 10px)}::slotted(:first-child){margin-top:0}::slotted(:last-child){margin-bottom:0}`]}render(){return t` <div id="container" @focus="${t=>this.__focused=!0}" @blur="${t=>this.__focused=!1}" @mouseover="${t=>this.__hovered=!0}" @mouseout="${t=>this.__hovered=!1}"> <slot></slot> </div>`}static get properties(){return{...super.properties,id:{name:"id",type:String,reflect:!0,attribute:"id"},contenteditable:{name:"contenteditable",type:Boolean,reflect:!0,attribute:"contenteditable"},disabled:{name:"disabled",type:Boolean,attribute:"disabled",reflect:!0},disableHover:{name:"disableHover",type:Boolean,attribute:"disable-hover"},placeholder:{name:"placeholder",type:String,reflect:!0,attribute:"aria-placeholder"},toolbarId:{name:"toolbarId",type:String,reflect:!0,attribute:"toolbar-id"},range:{name:"range",type:Object,attribute:"range"},rawhtml:{type:String,attribute:"rawhtml"},type:{name:"type",type:String,reflect:!0,attribute:"type"},viewSource:{type:Boolean,attribute:"view-source",reflect:!0},__codeEditorValue:{type:String},__needsUpdate:{type:Boolean},__focused:{type:Boolean},__hovered:{type:Boolean}}}static get tag(){return"rich-text-editor"}constructor(){super(),this.placeholder="Click to edit",this.toolbarId="",this.type="rich-text-editor-toolbar",this.id="",this.range=void 0,this.disabled=!1,this.__focused=!1,this.__hovered=!1,this.editing=!1,this.contenteditable=!1,this.setAttribute("tabindex",1),this.addEventListener("click",this._handleClick)}get isEmpty(){return!this.innerHTML||""==this.innerHTML.replace(/<!--[^(-->)]*-->/g,"").replace(/[\s\t\r\n]/gim,"")}firstUpdated(){super.firstUpdated&&super.firstUpdated(),this.isEmpty&&this.rawhtml?this.innerHTML=this.rawhtml.trim():this.isEmpty&&(this.innerHTML="")}updated(t){super.updated(t),t.forEach(((t,e)=>{"rawhtml"===e&&this.rawhtml&&(this.innerHTML=this.rawhtml.trim()),"contenteditable"===e&&this._contenteditableChange()})),this.innerHTML||(this.innerHTML="")}focus(){this.disabled||(this.__focused=!0),this.dispatchEvent(new CustomEvent("focus",{bubbles:!0,composed:!0,cancelable:!0,detail:this.querySelector("*")}))}makeSticky(t=!0){t?this.classList.remove("heightmax"):this.classList.add("heightmax")}_contenteditableChange(){this.dispatchEvent(new CustomEvent("contenteditable-change",{bubbles:!0,composed:!0,cancelable:!0,detail:this}))}_handleClick(t){if(t.preventDefault(),!this.disabled&&!this.contenteditable&&!this.__toolbar){let t,e=this.toolbarId?(window.RichTextEditorToolbars||[]).filter((t=>t.id===this.toolbarId)):[];0===e.length&&(e=this.type?(window.RichTextEditorToolbars||[]).filter((t=>t.type===this.type)):[]),0===e.length&&(e=window.RichTextEditorToolbars),e[0]?t=e[0]:0===e.length&&(t=document.createElement(this.type||"rich-text-editor-toolbar")),this.__toolbar=t,this.disabled||this.__toolbar.setTarget(this)}}}};class h extends(d(r)){}window.customElements.define(h.tag,h);export{h as RichTextEditor,d as RichTextEditorBehaviors};
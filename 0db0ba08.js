import{r as e,$ as t}from"./f9a63054.js";import{s as i,b as o,t as a,H as n}from"./d7fd6eb5.js";import{H as s,a as r}from"./201b7bb0.js";import"./c0469ffa.js";import{I18NMixin as l}from"./29b617f1.js";import"./b78a3bce.js";import"./a40c9b2a.js";import"./b9bb5cf7.js";import"./f12c4254.js";class d extends(s(i)){constructor(){super(),this.action=!1,this.eventName="button",this.inputMethod=null,this.propertyToBind=null,this.slotToBind=null,this.value=""}static get tag(){return"hax-context-item-textop"}static get properties(){return{...super.properties,value:{type:String},action:{type:Boolean},eventName:{type:String,reflect:!0,attribute:"event-name"},inputMethod:{type:String,reflect:!0,attribute:"input-method"},propertyToBind:{type:String,reflect:!0,attribute:"property-to-bind"},slotToBind:{type:String,reflect:!0,attribute:"slot-to-bind"},description:{type:String,reflect:!0}}}_handleKeys(e){"Enter"==e.key&&this._fireEvent()}_handleMousedown(e){this.disabled||this.dispatchEvent(new CustomEvent("hax-context-item-selected",{bubbles:!0,cancelable:!0,composed:!0,detail:{target:this,eventName:this.eventName,value:this.value}}))}}window.customElements.define(d.tag,d);class c extends(l(r(i))){static get styles(){return[...super.styles,e`.group,.group>*{flex:1 1 auto}`]}constructor(){super(),this.t={modifyHTMLSource:"Modify HTML source",bulledList:"Bulleted list",numberedList:"Numbered list",indent:"Indent",outdent:"Outdent",bold:"Bold",italic:"Italic",link:"Link",removeLink:"Remove link",removeFormat:"Remove format",addElementToSelection:"Add element to selection",subscript:"Subscript",superscript:"Superscript",underline:"Underline",crossOut:"Cross out",insertItemAbove:"Insert item above",insertItemAboveOrBelow:"Insert item above or below",insertItemBelow:"Insert item below"},this.registerLocalization({context:this,namespace:"hax"}),this.sourceView=!1,this.haxUIElement=!0,this.tourName="hax",setTimeout((()=>{this.addEventListener("hax-context-item-selected",this._haxContextOperation.bind(this)),window.addEventListener("hax-context-item-selected",this._haxInMenuContextOperation.bind(this))}),0),this.formattingList=[{value:"p",icon:"hax:paragraph",text:"Paragraph"},{value:"ul",icon:"editor:format-list-bulleted",text:"Bulleted list"},{value:"ol",icon:"editor:format-list-numbered",text:"Numbered list"},{value:"h2",icon:"hax:h2",text:"Title"},{value:"h3",icon:"hax:h3",text:"Content heading"},{value:"h4",icon:"hax:h4",text:"Subheading"},{value:"h5",icon:"hax:h5",text:"Deep subheading"},{value:"blockquote",icon:"editor:format-quote",text:"Blockquote"},{value:"code",icon:"icons:code",text:"Code"}],this.realSelectedValue="p",this.isSafari=this._isSafari(),o((()=>{this.hasSelectedText=a(n.haxSelectedText).length>0})),o((()=>{a(n.editMode);const e=a(n.activeNode);if(this.viewSource=!1,e&&e.tagName){let t=n.haxSchemaFromTag(e.tagName);this.sourceView=t.canEditSource}this.shadowRoot&&this.shadowRoot.querySelector("#textformat")&&(this.shadowRoot.querySelector("#textformat").collapsed=!0),e&&n.isTextElement(e)&&this.shadowRoot.querySelector('button[event-name="'+e.tagName.toLowerCase()+'"]')?this.updateTextIconSelection(e.tagName.toLowerCase()):e&&"LI"===e.tagName&&e.parentNode&&e.parentNode.tagName&&this.shadowRoot.querySelector('button[event-name="'+e.parentNode.tagName.toLowerCase()+'"]')&&this.updateTextIconSelection(e.parentNode.tagName.toLowerCase())}))}get textFormatLookup(){let e={};return this.formattingList.forEach((t=>{e[t.value]=t.icon})),e}render(){return t` <div id="toolbar"> <hax-toolbar always-expanded> <div class="group"> <hax-toolbar-menu id="textformat" icon="${this._formatIcon(this.realSelectedValue)}" label="Format" show-text-label data-simple-tour-stop data-stop-title="Format" ?disabled="${this.viewSource}"> ${this.formattingList.map((e=>t` <simple-toolbar-menu-item slot="menuitem"> <hax-context-item-textop action align-horizontal="left" role="menuitem" icon="${e.icon}" label="${e.text}" show-text-label ?hidden="${!this.sourceView}" event-name="${e.value}" show-text-label ?disabled="${this.viewSource}" @click="${t=>this.textFormatChanged(e.value)}"></hax-context-item-textop> </simple-toolbar-menu-item>`))} <div slot="tour" data-stop-content> Change how the text is structured and visualized in the page. </div> </hax-toolbar-menu> <slot name="primary"></slot> <hax-context-item-textop mini action icon="editor:format-list-bulleted" event-name="text-tag-ul" label="${this.t.bulledList}" ?hidden="${!this._showLists}" ?disabled="${this.viewSource}"></hax-context-item-textop> <hax-context-item-textop mini action icon="editor:format-list-numbered" label="${this.t.numberedList}" event-name="text-tag-ol" ?hidden="${!this._showLists}" ?disabled="${this.viewSource}"></hax-context-item-textop> <hax-context-item-textop mini action icon="editor:format-indent-decrease" label="${this.t.outdent}" event-name="text-outdent" ?hidden="${!this._showIndent}" ?disabled="${this.viewSource}"></hax-context-item-textop> <hax-context-item-textop mini action icon="editor:format-indent-increase" label="${this.t.indent}" event-name="text-indent" ?hidden="${!this._showIndent}" ?disabled="${this.viewSource}"></hax-context-item-textop> </div> <div class="group" ?hidden="${!this.hasSelectedText}"> <hax-context-item-textop mini action icon="editor:format-bold" label="${this.t.bold}" class="selected-buttons" event-name="text-bold" ?hidden="${!this.hasSelectedText}" ?disabled="${this.viewSource}"></hax-context-item-textop> <hax-context-item-textop mini action icon="editor:format-italic" label="${this.t.italic}" class="selected-buttons" event-name="text-italic" ?hidden="${!this.hasSelectedText}" ?disabled="${this.viewSource}"></hax-context-item-textop> </div> <div class="group" ?hidden="${!this.hasSelectedText}"> <hax-context-item-textop mini action icon="editor:insert-link" label="${this.t.link}" class="selected-buttons" event-name="text-link" ?hidden="${!this.hasSelectedText}" ?disabled="${this.viewSource}"></hax-context-item-textop> <hax-context-item-textop mini action icon="mdextra:unlink" label="${this.t.removeLink}" class="selected-buttons" event-name="text-unlink" ?hidden="${!this.hasSelectedText}" ?disabled="${this.viewSource}"></hax-context-item-textop> </div> <div class="group" ?hidden="${!this.hasSelectedText}"> <hax-context-item-textop mini action icon="editor:format-clear" label="${this.t.removeFormat}" class="selected-buttons" event-name="text-remove-format" ?hidden="${!this.hasSelectedText}" ?disabled="${this.viewSource}"></hax-context-item-textop> <slot name="secondary"></slot> </div> <div class="group" ?hidden="${!this.hasSelectedText}"> <hax-context-item-textop action menu icon="editor:format-underlined" label="${this.t.underline}" event-name="text-underline" ?hidden="${!this.hasSelectedText}" ?disabled="${this.viewSource}"></hax-context-item-textop> <hax-context-item-textop action menu icon="editor:format-strikethrough" event-name="text-strikethrough" ?hidden="${!this.hasSelectedText}" ?disabled="${this.viewSource}" label="${this.t.crossOut}"></hax-context-item-textop> <slot name="more"></slot> </div> <div class="group" ?hidden="${!this.hasSelectedText}"> <hax-context-item-textop action menu icon="mdextra:subscript" event-name="text-subscript" ?hidden="${!this.hasSelectedText}" ?disabled="${this.viewSource}" label="${this.t.subscript}"></hax-context-item-textop> <hax-context-item-textop action menu icon="mdextra:superscript" event-name="text-superscript" ?hidden="${!this.hasSelectedText}" ?disabled="${this.viewSource}" label="${this.t.superscript}"></hax-context-item-textop> </div> <div class="group" ?hidden="${!this.hasSelectedText}"> <hax-context-item mini action icon="hax:add-brick" label="${this.t.addElementToSelection}" class="selected-buttons" event-name="insert-inline-gizmo" ?hidden="${this.isSafari||!this.hasSelectedText}" ?disabled="${this.viewSource}"></hax-context-item> <hax-context-item-textop mini action icon="hax:add-brick" label="${this.t.addElementToSelection}" class="selected-buttons" event-name="insert-inline-gizmo" ?hidden="${!this.isSafari||!this.hasSelectedText}" ?disabled="${this.viewSource}"></hax-context-item-textop> </div> <div class="group"> <hax-context-item action icon="icons:code" label="${this.t.modifyHTMLSource}" ?hidden="${!this.sourceView}" event-name="hax-source-view-toggle" toggles ?toggled="${this.viewSource}"></hax-context-item> </div> <div class="group"> <hax-toolbar-menu icon="add" label="${this.t.insertItemAboveOrBelow}"> <simple-toolbar-menu-item slot="menuitem"> <hax-context-item action align-horizontal="left" role="menuitem" show-text-label icon="hardware:keyboard-arrow-up" event-name="insert-above-active" label="${this.t.insertItemAbove}" ?disabled="${this.viewSource}"></hax-context-item> </simple-toolbar-menu-item> <simple-toolbar-menu-item slot="menuitem"> <hax-context-item action align-horizontal="left" role="menuitem" show-text-label icon="hardware:keyboard-arrow-down" event-name="insert-below-active" label="${this.t.insertItemBelow}" ?disabled="${this.viewSource}"></hax-context-item> </simple-toolbar-menu-item> </hax-toolbar-menu> </div> </hax-toolbar> </div> `}static get tag(){return"hax-text-context"}static get properties(){return{...super.properties,_showIndent:{type:Boolean},_showLists:{type:Boolean},realSelectedValue:{type:String},sourceView:{type:Boolean},formattingList:{type:Array},hasSelectedText:{type:Boolean,attribute:"has-selected-text",reflect:!0},formatIcon:{type:String,attribute:"format-icon"},isSafari:{type:Boolean,attribute:"is-safari"}}}textFormatChanged(e){this.shadowRoot.querySelector("#textformat").collapsed=!0,this.updateTextIconSelection(e),this.dispatchEvent(new CustomEvent("hax-context-item-selected",{bubbles:!0,cancelable:!0,composed:!0,detail:{eventName:"text-tag",value:this.realSelectedValue}}))}updateTextIconSelection(e){this.realSelectedValue=e;let t=this.shadowRoot.querySelector('button[event-name="'+this.realSelectedValue+'"]');t&&(this.formatIcon=t.icon)}_formatIcon(e=this.realSelectedValue||"p"){return this.textFormatLookup[e]||"hax:paragraph"}updated(e){e.forEach(((e,t)=>{"realSelectedValue"==t&&(this._showIndent=this._computeShowIndent(this.realSelectedValue),"p"==this.realSelectedValue?this._showLists=!0:this._showLists=!1),"hasSelectedText"==t&&this.dispatchEvent(new CustomEvent("hax-context-menu-changed",{bubbles:!0,cancelable:!0,composed:!0,detail:this}))}))}firstUpdated(e){super.firstUpdated&&super.firstUpdated(e),a(n.activeNode)&&a(n.activeNode).tagName&&this.updateTextIconSelection(a(n.activeNode).tagName.toLowerCase())}_computeShowIndent(e){return!(!n.computePolyfillSafe()||"li"!=e&&"ol"!=e&&"ul"!=e)}_haxInMenuContextOperation(e){let t=!1;switch(e.detail.eventName){case"insert-above-active":case"insert-below-active":this.shadowRoot.querySelector("simple-popover-selection")&&(this.shadowRoot.querySelector("simple-popover-selection").opened=!1);break;case"text-underline":document.execCommand("underline"),t=!0;break;case"text-subscript":document.execCommand("subscript"),t=!0;break;case"text-superscript":document.execCommand("superscript"),t=!0;break;case"text-strikethrough":document.execCommand("strikeThrough"),t=!0}t&&(this.shadowRoot.querySelector("simple-popover-selection")&&this.shadowRoot.querySelector("simple-popover-selection").opened&&(this.shadowRoot.querySelector("simple-popover-selection").opened=!1),e.preventDefault(),e.stopPropagation())}_haxContextOperation(e){let t=e.detail,i=n.getSelection(),o=!1;switch(t.eventName){case"insert-inline-gizmo":if(n._tmpSelection&&n.editMode)try{"HAX-BODY"!==n._tmpRange.startContainer.parentNode.parentNode.tagName&&"HAX-BODY"!==n._tmpRange.startContainer.parentNode.parentNode.parentNode.tagName||(n.activePlaceHolder=n._tmpRange)}catch(e){}if(null!=n.activePlaceHolder){let e={text:n.activePlaceHolder.toString()},t="inline",i=n.guessGizmo(t,e);i.length>0&&n.haxAppPicker.presentOptions(i,t,"Transform selected text to..","gizmo")}break;case"text-bold":document.execCommand("bold"),o=!0;break;case"text-italic":document.execCommand("italic"),o=!0;break;case"text-remove-format":document.execCommand("removeFormat"),o=!0;break;case"text-link":var a="";i&&i.focusNode&&i.focusNode.parentNode&&void 0!==i.focusNode.parentNode.href&&(a=i.focusNode.parentNode.href);let e=prompt("Enter a URL:",a);e&&(document.execCommand("createLink",!1,e),i.focusNode.parentNode&&(i.focusNode.parentNode.setAttribute("contenteditable",!0),i.focusNode.parentNode.removeEventListener("click",(e=>{e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation()})),i.focusNode.parentNode.addEventListener("click",(e=>{e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation()}))),o=!0);break;case"text-unlink":document.execCommand("unlink"),o=!0;break;case"text-indent":n.activeHaxBody.__indentTrap=!0,document.execCommand("indent"),o=!0;break;case"text-outdent":n.activeHaxBody.__indentTrap=!0,document.execCommand("outdent"),o=!0}o&&(e.preventDefault(),e.stopPropagation())}_isSafari(){let e=navigator.userAgent.toLowerCase();return!(-1==e.indexOf("safari")||e.indexOf("chrome")>-1)}}window.customElements.define(c.tag,c);export{c as HaxTextContext};

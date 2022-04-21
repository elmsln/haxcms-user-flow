import{s as t}from"./77e5801b.js";import{R as e}from"./cd056ee6.js";import"./365399a5.js";import"./92722af5.js";import"./53ca7947.js";import"./8a8bbad4.js";import"./81aad9e9.js";import"./ba687360.js";import"./5c68dd7f.js";import"./3b342371.js";import"./35d5b9a8.js";import"./21442d59.js";import"./7ec3f7d1.js";import"./a3c0da10.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class a extends(e(t)){static get tag(){return"rich-text-editor-heading-picker"}static get styles(){return[...super.styles]}render(){return super.render()}constructor(){super(),this.allowNull=!0,this.hideNullOption=!0,this.blocks=[{label:"Paragraph",tag:"p"},{label:"Heading 1",tag:"h1"},{label:"Heading 2",tag:"h2"},{label:"Heading 3",tag:"h3"},{label:"Heading 4",tag:"h4"},{label:"Heading 5",tag:"h5"},{label:"Heading 6",tag:"h6"},{label:"Preformatted",tag:"pre"}],this.command="formatBlock",this.icon=void 0,this.label="Block format",this.tagsList="p,h1,h2,h3,h4,h5,h6,div,address,blockquote,pre",this.titleAsHtml=void 0}get labelVisibleClass(){return"hide"}updated(t){super.updated(t),t.forEach(((t,e)=>{"blocks"===e&&this._setOptions()}))}_setRangeValue(){let t=this.rangeOrMatchingAncestor(),e=(t?t.tagName:"").toLowerCase();this.shadowRoot&&(this.tagsArray.includes(e)?this.shadowRoot.querySelector("#button").value=e:this.range&&!this.range.collapsed||(this.shadowRoot.querySelector("#button").value=void 0))}static get properties(){let t=super.properties;return delete t.block,{...t,blocks:{name:"blocks",type:Array}}}_setOptions(){this.tagsList=this.blocks.map((t=>t.tag)).join(","),this.options=[[{alt:this.label,value:null}],...this.blocks.map((t=>[{alt:t.label,value:t.tag}]))]}}window.customElements.define(a.tag,a);export{a as RichTextEditorHeadingPicker};

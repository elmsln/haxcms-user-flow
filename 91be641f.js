import{s as t}from"./02471d06.js";import{R as e}from"./d4f82640.js";import"./dbbfaad3.js";import"./92722af5.js";import"./738c8cea.js";import"./5bde8eb9.js";import"./77cd7a20.js";import"./00af8e59.js";import"./5c68dd7f.js";import"./08d1f21a.js";import"./9f91468d.js";import"./68cf9cf0.js";import"./5a56c38d.js";import"./bc1afbd1.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class s extends(e(t)){static get tag(){return"rich-text-editor-heading-picker"}static get styles(){return[...super.styles]}render(){return super.render()}constructor(){super(),this.allowNull=!0,this.hideNullOption=!0,this.blocks=[{label:"Paragraph",tag:"p"},{label:"Heading 1",tag:"h1"},{label:"Heading 2",tag:"h2"},{label:"Heading 3",tag:"h3"},{label:"Heading 4",tag:"h4"},{label:"Heading 5",tag:"h5"},{label:"Heading 6",tag:"h6"},{label:"Preformatted",tag:"pre"}],this.command="formatBlock",this.icon=void 0,this.label="Block format",this.tagsList="p,h1,h2,h3,h4,h5,h6,div,address,blockquote,pre",this.titleAsHtml=void 0}get labelVisibleClass(){return"hide"}updated(t){super.updated(t),t.forEach(((t,e)=>{"blocks"===e&&this._setOptions()}))}_setRangeValue(){let t=this.rangeOrMatchingAncestor(),e=(t?t.tagName:"").toLowerCase();this.shadowRoot&&(this.tagsArray.includes(e)?this.shadowRoot.querySelector("#button").value=e:this.range&&!this.range.collapsed||(this.shadowRoot.querySelector("#button").value=void 0))}static get properties(){let t=super.properties;return delete t.block,{...t,blocks:{name:"blocks",type:Array}}}_setOptions(){this.tagsList=this.blocks.map((t=>t.tag)).join(","),this.options=[[{alt:this.label,value:null}],...this.blocks.map((t=>[{alt:t.label,value:t.tag}]))]}}window.customElements.define(s.tag,s);export{s as RichTextEditorHeadingPicker};

import{s as t}from"./c1639913.js";import{f as e}from"./c07305b8.js";import"./92722af5.js";import"./44568b7d.js";import"./3bee14fc.js";import"./59a6b6ea.js";import"./1eeb05f7.js";import"./5c68dd7f.js";import"./b33f6ec2.js";import"./ffb85f28.js";import"./1f9bff86.js";import"./7e0b456f.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class i extends(e(t)){static get tag(){return"rich-text-editor-image"}render(){return super.render()}static get properties(){return{...super.properties}}constructor(){super(),this.fields=[{property:"src",title:"Image URL",description:"The image URL. (Leave blank to remove.)",inputMethod:"textfield"},{property:"alt",title:"Alt Text",inputMethod:"textfield"},{property:"width",title:"Width",inputMethod:"textfield",inline:!0},{property:"height",title:"Height",inputMethod:"textfield",inline:!0}],this.command="insertHTML",this.label="Insert Inline Image",this.icon="editor:insert-photo",this.tagsList="img",this.value={}}get isToggled(){return this.toggled}get promptCommandVal(){let t=this.getPropValue("alt"),e=this.getPropValue("src"),i=this.getPropValue("width"),r=this.getPropValue("height");return e?`<img src="${e}"${t?` alt="${t}"`:""}${i?` width="${i}"`:""}${r?` width="${r}"`:""}>`:""}getValue(){return this.targetedNode?{alt:this.targetedNode?this.targetedNode.getAttribute("alt"):void 0,src:this.targetedNode?this.targetedNode.getAttribute("src"):void 0,width:this.targetedNode?this.targetedNode.getAttribute("width"):void 0,height:this.targetedNode?this.targetedNode.getAttribute("height"):void 0}:void 0}setToggled(){this.toggled=!!this.value}}window.customElements.define(i.tag,i);export{i as RichTextEditorImage};

import{s as e}from"./c1639913.js";import{f as t}from"./c07305b8.js";import"./92722af5.js";import"./44568b7d.js";import"./3bee14fc.js";import"./59a6b6ea.js";import"./1eeb05f7.js";import"./5c68dd7f.js";import"./b33f6ec2.js";import"./ffb85f28.js";import"./1f9bff86.js";import"./7e0b456f.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class r extends(t(e)){static get tag(){return"rich-text-editor-underline"}render(){return super.render()}static get properties(){return{...super.properties}}constructor(){super(),this.fields=[{property:"confirm",title:"Underline (not recommended)",description:"Underlines can be confused with links. Use italics instead.",inputMethod:"boolean"}],this.tagsList="u",this.icon="editor:format-underlined",this.label="Underline (not recommended)",this.toggles=!0,this.command="underline",this.shortcutKeys="ctrl+u",this.value={confirm:!1}}get promptCommandVal(){this.commandVal=void 0}getValue(){return{confirm:!!this.toggled}}setToggled(){this.toggled=!!this.getPropValue("confirm")}}window.customElements.define(r.tag,r);export{r as RichTextEditorUnderline};

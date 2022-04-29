import{s as t}from"./c4528793.js";import{f as e}from"./f87c0d27.js";import"./92722af5.js";import"./2bd7d1ba.js";import"./ab9d1734.js";import"./2f17ad1b.js";import"./1c9e145f.js";import"./5c68dd7f.js";import"./4b6088db.js";import"./af8f7c97.js";import"./7013f218.js";import"./c85ca4cd.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class r extends(e(t)){static get tag(){return"rich-text-editor-underline"}render(){return super.render()}static get properties(){return{...super.properties}}constructor(){super(),this.fields=[{property:"confirm",title:"Underline (not recommended)",description:"Underlines can be confused with links. Use italics instead.",inputMethod:"boolean"}],this.tagsList="u",this.icon="editor:format-underlined",this.label="Underline (not recommended)",this.toggles=!0,this.command="underline",this.shortcutKeys="ctrl+u",this.value={confirm:!1}}get promptCommandVal(){this.commandVal=void 0}getValue(){return{confirm:!!this.toggled}}setToggled(){this.toggled=!!this.getPropValue("confirm")}}window.customElements.define(r.tag,r);export{r as RichTextEditorUnderline};
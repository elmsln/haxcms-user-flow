import{s as e}from"./b5ede26c.js";import{f as t}from"./e87c66b9.js";import"./697cf60c.js";import"./7613a8bb.js";import"./e2b73a5e.js";import"./5c68dd7f.js";import"./c1208c2e.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class r extends(t(e)){static get tag(){return"rich-text-editor-underline"}render(){return super.render()}static get properties(){return{...super.properties}}constructor(){super(),this.fields=[{property:"confirm",title:"Underline (not recommended)",description:"Underlines can be confused with links. Use italics instead.",inputMethod:"boolean"}],this.tagsList="u",this.icon="editor:format-underlined",this.label="Underline (not recommended)",this.toggles=!0,this.command="underline",this.shortcutKeys="ctrl+u",this.value={confirm:!1}}get promptCommandVal(){this.commandVal=void 0}getValue(){return{confirm:!!this.toggled}}setToggled(){this.toggled=!!this.getPropValue("confirm")}}window.customElements.define(r.tag,r);export{r as RichTextEditorUnderline};
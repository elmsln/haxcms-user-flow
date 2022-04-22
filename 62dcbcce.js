import{s as e}from"./515cd7a2.js";import{f as t}from"./118942cd.js";import"./671c9912.js";import"./1c8eb46b.js";import"./5c68dd7f.js";import"./262c3545.js";import"./cc96aa96.js";import"./f099135d.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class r extends(t(e)){static get tag(){return"rich-text-editor-underline"}render(){return super.render()}static get properties(){return{...super.properties}}constructor(){super(),this.fields=[{property:"confirm",title:"Underline (not recommended)",description:"Underlines can be confused with links. Use italics instead.",inputMethod:"boolean"}],this.tagsList="u",this.icon="editor:format-underlined",this.label="Underline (not recommended)",this.toggles=!0,this.command="underline",this.shortcutKeys="ctrl+u",this.value={confirm:!1}}get promptCommandVal(){this.commandVal=void 0}getValue(){return{confirm:!!this.toggled}}setToggled(){this.toggled=!!this.getPropValue("confirm")}}window.customElements.define(r.tag,r);export{r as RichTextEditorUnderline};

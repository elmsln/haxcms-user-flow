import{s as t}from"./030fe872.js";import{f as e}from"./3c29fe1d.js";import"./92722af5.js";import"./389ba782.js";import"./c6bbac32.js";import"./6233536b.js";import"./5c68dd7f.js";import"./534c56b6.js";import"./20fb55ab.js";import"./bf743f71.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class r extends(e(t)){static get tag(){return"rich-text-editor-underline"}render(){return super.render()}static get properties(){return{...super.properties}}constructor(){super(),this.fields=[{property:"confirm",title:"Underline (not recommended)",description:"Underlines can be confused with links. Use italics instead.",inputMethod:"boolean"}],this.tagsList="u",this.icon="editor:format-underlined",this.label="Underline (not recommended)",this.toggles=!0,this.command="underline",this.shortcutKeys="ctrl+u",this.value={confirm:!1}}get promptCommandVal(){this.commandVal=void 0}getValue(){return{confirm:!!this.toggled}}setToggled(){this.toggled=!!this.getPropValue("confirm")}}window.customElements.define(r.tag,r);export{r as RichTextEditorUnderline};

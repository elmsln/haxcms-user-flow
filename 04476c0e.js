import{s as t}from"./9e6d0aef.js";import{f as e}from"./11566341.js";import"./92722af5.js";import"./c1632780.js";import"./08d5ef22.js";import"./248d2478.js";import"./7c951fdc.js";import"./5c68dd7f.js";import"./76ccf376.js";import"./f089a98c.js";import"./143636b1.js";import"./8b4c1d81.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class r extends(e(t)){static get tag(){return"rich-text-editor-underline"}render(){return super.render()}static get properties(){return{...super.properties}}constructor(){super(),this.fields=[{property:"confirm",title:"Underline (not recommended)",description:"Underlines can be confused with links. Use italics instead.",inputMethod:"boolean"}],this.tagsList="u",this.icon="editor:format-underlined",this.label="Underline (not recommended)",this.toggles=!0,this.command="underline",this.shortcutKeys="ctrl+u",this.value={confirm:!1}}get promptCommandVal(){this.commandVal=void 0}getValue(){return{confirm:!!this.toggled}}setToggled(){this.toggled=!!this.getPropValue("confirm")}}window.customElements.define(r.tag,r);export{r as RichTextEditorUnderline};
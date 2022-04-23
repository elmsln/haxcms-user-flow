import{s as t}from"./99c164ed.js";import{e}from"./2c11a37b.js";import"./92722af5.js";import"./75758d56.js";import"./ceab02a3.js";import"./6a9a4f3b.js";import"./ae09c0af.js";import"./5c68dd7f.js";import"./26620eae.js";import"./b2eccf56.js";import"./9d272040.js";import"./7dc230ea.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class r extends(e(t)){static get tag(){return"rich-text-editor-unlink"}render(){return super.render()}static get properties(){return{...super.properties}}constructor(){super(),this.command="unlink",this.icon="mdextra:unlink",this.label="Remove Link",this.tagsList="a",this.shortcutKeys="ctrl+k"}updated(t){super.updated&&super.updated(t),t.forEach(((t,e)=>{"range"===e&&(this.commandIsToggled?this.setAttribute("disabeld","disabled"):this.removeAttribute("disabeld"))}))}}window.customElements.define(r.tag,r);export{r as RichTextEditorUnlink};

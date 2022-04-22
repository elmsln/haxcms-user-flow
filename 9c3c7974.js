import{s as t}from"./02471d06.js";import{e}from"./dbbfaad3.js";import"./92722af5.js";import"./738c8cea.js";import"./5bde8eb9.js";import"./77cd7a20.js";import"./00af8e59.js";import"./5c68dd7f.js";import"./08d1f21a.js";import"./9f91468d.js";import"./68cf9cf0.js";import"./5a56c38d.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class r extends(e(t)){static get tag(){return"rich-text-editor-unlink"}render(){return super.render()}static get properties(){return{...super.properties}}constructor(){super(),this.command="unlink",this.icon="mdextra:unlink",this.label="Remove Link",this.tagsList="a",this.shortcutKeys="ctrl+k"}updated(t){super.updated&&super.updated(t),t.forEach(((t,e)=>{"range"===e&&(this.commandIsToggled?this.setAttribute("disabeld","disabled"):this.removeAttribute("disabeld"))}))}}window.customElements.define(r.tag,r);export{r as RichTextEditorUnlink};

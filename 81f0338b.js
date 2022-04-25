import{s as t}from"./c9b8891d.js";import{e}from"./78065618.js";import"./92722af5.js";import"./712e7688.js";import"./4318206b.js";import"./cc3b11db.js";import"./5179cad8.js";import"./5c68dd7f.js";import"./90d8195a.js";import"./b94e1671.js";import"./e3678b60.js";import"./97a3a9f4.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class r extends(e(t)){static get tag(){return"rich-text-editor-unlink"}render(){return super.render()}static get properties(){return{...super.properties}}constructor(){super(),this.command="unlink",this.icon="mdextra:unlink",this.label="Remove Link",this.tagsList="a",this.shortcutKeys="ctrl+k"}updated(t){super.updated&&super.updated(t),t.forEach(((t,e)=>{"range"===e&&(this.commandIsToggled?this.setAttribute("disabeld","disabled"):this.removeAttribute("disabeld"))}))}}window.customElements.define(r.tag,r);export{r as RichTextEditorUnlink};

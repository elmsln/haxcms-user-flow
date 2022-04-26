import{s as t}from"./477b72a2.js";import{e}from"./738d39b0.js";import"./92722af5.js";import"./c37097da.js";import"./4f0ded3c.js";import"./915d5b3c.js";import"./020b781d.js";import"./5c68dd7f.js";import"./ab3992b4.js";import"./065b6c65.js";import"./afcd1277.js";import"./e81c8aad.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class r extends(e(t)){static get tag(){return"rich-text-editor-unlink"}render(){return super.render()}static get properties(){return{...super.properties}}constructor(){super(),this.command="unlink",this.icon="mdextra:unlink",this.label="Remove Link",this.tagsList="a",this.shortcutKeys="ctrl+k"}updated(t){super.updated&&super.updated(t),t.forEach(((t,e)=>{"range"===e&&(this.commandIsToggled?this.setAttribute("disabeld","disabled"):this.removeAttribute("disabeld"))}))}}window.customElements.define(r.tag,r);export{r as RichTextEditorUnlink};

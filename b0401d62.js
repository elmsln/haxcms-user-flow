import{s as t}from"./2ae1595f.js";import{e}from"./a5c3ac8c.js";import"./92722af5.js";import"./3c262d28.js";import"./745aa4ed.js";import"./ad3c8620.js";import"./5c68dd7f.js";import"./cf769d61.js";import"./e45430bf.js";import"./120aa880.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class r extends(e(t)){static get tag(){return"rich-text-editor-unlink"}render(){return super.render()}static get properties(){return{...super.properties}}constructor(){super(),this.command="unlink",this.icon="mdextra:unlink",this.label="Remove Link",this.tagsList="a",this.shortcutKeys="ctrl+k"}updated(t){super.updated&&super.updated(t),t.forEach(((t,e)=>{"range"===e&&(this.commandIsToggled?this.setAttribute("disabeld","disabled"):this.removeAttribute("disabeld"))}))}}window.customElements.define(r.tag,r);export{r as RichTextEditorUnlink};

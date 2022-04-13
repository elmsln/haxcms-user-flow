import{s as t}from"./7ac8fc58.js";import{e}from"./c5f9d599.js";import"./92722af5.js";import"./da05cd4f.js";import"./b7a97ae5.js";import"./bb691c97.js";import"./5c68dd7f.js";import"./8c4ae06b.js";import"./1e3c72fc.js";import"./ba5cc019.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class r extends(e(t)){static get tag(){return"rich-text-editor-unlink"}render(){return super.render()}static get properties(){return{...super.properties}}constructor(){super(),this.command="unlink",this.icon="mdextra:unlink",this.label="Remove Link",this.tagsList="a",this.shortcutKeys="ctrl+k"}updated(t){super.updated&&super.updated(t),t.forEach(((t,e)=>{"range"===e&&(this.commandIsToggled?this.setAttribute("disabeld","disabled"):this.removeAttribute("disabeld"))}))}}window.customElements.define(r.tag,r);export{r as RichTextEditorUnlink};

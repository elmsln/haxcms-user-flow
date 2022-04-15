import{s as t}from"./7c98f20e.js";import{e}from"./722bb02e.js";import"./92722af5.js";import"./f0b5850b.js";import"./7de817a4.js";import"./aad22f9d.js";import"./5c68dd7f.js";import"./a188c3b8.js";import"./f4f42a71.js";import"./3c0f2ee0.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class r extends(e(t)){static get tag(){return"rich-text-editor-unlink"}render(){return super.render()}static get properties(){return{...super.properties}}constructor(){super(),this.command="unlink",this.icon="mdextra:unlink",this.label="Remove Link",this.tagsList="a",this.shortcutKeys="ctrl+k"}updated(t){super.updated&&super.updated(t),t.forEach(((t,e)=>{"range"===e&&(this.commandIsToggled?this.setAttribute("disabeld","disabled"):this.removeAttribute("disabeld"))}))}}window.customElements.define(r.tag,r);export{r as RichTextEditorUnlink};

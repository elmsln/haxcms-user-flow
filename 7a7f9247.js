import{s as t}from"./c1639913.js";import{e}from"./c07305b8.js";import"./92722af5.js";import"./44568b7d.js";import"./3bee14fc.js";import"./59a6b6ea.js";import"./1eeb05f7.js";import"./5c68dd7f.js";import"./b33f6ec2.js";import"./ffb85f28.js";import"./1f9bff86.js";import"./7e0b456f.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class r extends(e(t)){static get tag(){return"rich-text-editor-unlink"}render(){return super.render()}static get properties(){return{...super.properties}}constructor(){super(),this.command="unlink",this.icon="mdextra:unlink",this.label="Remove Link",this.tagsList="a",this.shortcutKeys="ctrl+k"}updated(t){super.updated&&super.updated(t),t.forEach(((t,e)=>{"range"===e&&(this.commandIsToggled?this.setAttribute("disabeld","disabled"):this.removeAttribute("disabeld"))}))}}window.customElements.define(r.tag,r);export{r as RichTextEditorUnlink};

import{s as t}from"./c4528793.js";import{e}from"./f87c0d27.js";import"./92722af5.js";import"./2bd7d1ba.js";import"./ab9d1734.js";import"./2f17ad1b.js";import"./1c9e145f.js";import"./5c68dd7f.js";import"./4b6088db.js";import"./af8f7c97.js";import"./7013f218.js";import"./c85ca4cd.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class r extends(e(t)){static get tag(){return"rich-text-editor-unlink"}render(){return super.render()}static get properties(){return{...super.properties}}constructor(){super(),this.command="unlink",this.icon="mdextra:unlink",this.label="Remove Link",this.tagsList="a",this.shortcutKeys="ctrl+k"}updated(t){super.updated&&super.updated(t),t.forEach(((t,e)=>{"range"===e&&(this.commandIsToggled?this.setAttribute("disabeld","disabled"):this.removeAttribute("disabeld"))}))}}window.customElements.define(r.tag,r);export{r as RichTextEditorUnlink};

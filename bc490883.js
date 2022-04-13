import{s as t}from"./d6b5e494.js";import{e}from"./7b5e7fbd.js";import"./92722af5.js";import"./b0aa39de.js";import"./ead1bcc6.js";import"./6ec5d328.js";import"./5c68dd7f.js";import"./29898f7d.js";import"./8fe1563c.js";import"./25c53f33.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class r extends(e(t)){static get tag(){return"rich-text-editor-unlink"}render(){return super.render()}static get properties(){return{...super.properties}}constructor(){super(),this.command="unlink",this.icon="mdextra:unlink",this.label="Remove Link",this.tagsList="a",this.shortcutKeys="ctrl+k"}updated(t){super.updated&&super.updated(t),t.forEach(((t,e)=>{"range"===e&&(this.commandIsToggled?this.setAttribute("disabeld","disabled"):this.removeAttribute("disabeld"))}))}}window.customElements.define(r.tag,r);export{r as RichTextEditorUnlink};

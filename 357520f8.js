import{s as t}from"./437a4af0.js";import{e}from"./bce6f67c.js";import"./92722af5.js";import"./00fa1200.js";import"./45e7875f.js";import"./f174c91b.js";import"./f319bf41.js";import"./5c68dd7f.js";import"./7859ae3f.js";import"./62a85e4b.js";import"./33b00380.js";import"./6120cc9a.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class r extends(e(t)){static get tag(){return"rich-text-editor-unlink"}render(){return super.render()}static get properties(){return{...super.properties}}constructor(){super(),this.command="unlink",this.icon="mdextra:unlink",this.label="Remove Link",this.tagsList="a",this.shortcutKeys="ctrl+k"}updated(t){super.updated&&super.updated(t),t.forEach(((t,e)=>{"range"===e&&(this.commandIsToggled?this.setAttribute("disabeld","disabled"):this.removeAttribute("disabeld"))}))}}window.customElements.define(r.tag,r);export{r as RichTextEditorUnlink};

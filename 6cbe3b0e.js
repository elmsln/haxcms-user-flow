import{s as t}from"./be43f46a.js";import{e}from"./2c373cd2.js";import"./92722af5.js";import"./20b1304d.js";import"./00bd97c0.js";import"./e62d60f4.js";import"./cadd00cd.js";import"./5c68dd7f.js";import"./fc09da33.js";import"./7ded6ef0.js";import"./6fd03cc8.js";import"./71dcab7b.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class r extends(e(t)){static get tag(){return"rich-text-editor-unlink"}render(){return super.render()}static get properties(){return{...super.properties}}constructor(){super(),this.command="unlink",this.icon="mdextra:unlink",this.label="Remove Link",this.tagsList="a",this.shortcutKeys="ctrl+k"}updated(t){super.updated&&super.updated(t),t.forEach(((t,e)=>{"range"===e&&(this.commandIsToggled?this.setAttribute("disabeld","disabled"):this.removeAttribute("disabeld"))}))}}window.customElements.define(r.tag,r);export{r as RichTextEditorUnlink};

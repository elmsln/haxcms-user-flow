import{s as t}from"./1a95873b.js";import{e}from"./b8fad567.js";import"./92722af5.js";import"./aa089f20.js";import"./c8892087.js";import"./19eac8be.js";import"./20951f9c.js";import"./5c68dd7f.js";import"./5a3ca35f.js";import"./73931be7.js";import"./5ed35efb.js";import"./1cfa5913.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class r extends(e(t)){static get tag(){return"rich-text-editor-unlink"}render(){return super.render()}static get properties(){return{...super.properties}}constructor(){super(),this.command="unlink",this.icon="mdextra:unlink",this.label="Remove Link",this.tagsList="a",this.shortcutKeys="ctrl+k"}updated(t){super.updated&&super.updated(t),t.forEach(((t,e)=>{"range"===e&&(this.commandIsToggled?this.setAttribute("disabeld","disabled"):this.removeAttribute("disabeld"))}))}}window.customElements.define(r.tag,r);export{r as RichTextEditorUnlink};

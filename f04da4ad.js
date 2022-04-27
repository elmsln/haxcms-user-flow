import{s as t}from"./ee2e4b43.js";import{e}from"./5c350767.js";import"./92722af5.js";import"./ce02021a.js";import"./ab789d53.js";import"./9dc0d619.js";import"./9b486e60.js";import"./5c68dd7f.js";import"./6b4f021e.js";import"./c369954b.js";import"./a387e1c6.js";import"./b67bbbf7.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class r extends(e(t)){static get tag(){return"rich-text-editor-unlink"}render(){return super.render()}static get properties(){return{...super.properties}}constructor(){super(),this.command="unlink",this.icon="mdextra:unlink",this.label="Remove Link",this.tagsList="a",this.shortcutKeys="ctrl+k"}updated(t){super.updated&&super.updated(t),t.forEach(((t,e)=>{"range"===e&&(this.commandIsToggled?this.setAttribute("disabeld","disabled"):this.removeAttribute("disabeld"))}))}}window.customElements.define(r.tag,r);export{r as RichTextEditorUnlink};

import{s as t}from"./77e5801b.js";import{e}from"./365399a5.js";import"./92722af5.js";import"./53ca7947.js";import"./8a8bbad4.js";import"./81aad9e9.js";import"./ba687360.js";import"./5c68dd7f.js";import"./3b342371.js";import"./35d5b9a8.js";import"./21442d59.js";import"./7ec3f7d1.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class r extends(e(t)){static get tag(){return"rich-text-editor-unlink"}render(){return super.render()}static get properties(){return{...super.properties}}constructor(){super(),this.command="unlink",this.icon="mdextra:unlink",this.label="Remove Link",this.tagsList="a",this.shortcutKeys="ctrl+k"}updated(t){super.updated&&super.updated(t),t.forEach(((t,e)=>{"range"===e&&(this.commandIsToggled?this.setAttribute("disabeld","disabled"):this.removeAttribute("disabeld"))}))}}window.customElements.define(r.tag,r);export{r as RichTextEditorUnlink};

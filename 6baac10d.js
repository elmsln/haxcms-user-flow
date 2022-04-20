import{s as t}from"./b7eb8f90.js";import{e}from"./20f97f1d.js";import"./92722af5.js";import"./a7b92d73.js";import"./80d15c72.js";import"./aa19810e.js";import"./9b97b122.js";import"./5c68dd7f.js";import"./4bbf86c1.js";import"./a651cd9d.js";import"./dd164509.js";import"./070f28a2.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class r extends(e(t)){static get tag(){return"rich-text-editor-unlink"}render(){return super.render()}static get properties(){return{...super.properties}}constructor(){super(),this.command="unlink",this.icon="mdextra:unlink",this.label="Remove Link",this.tagsList="a",this.shortcutKeys="ctrl+k"}updated(t){super.updated&&super.updated(t),t.forEach(((t,e)=>{"range"===e&&(this.commandIsToggled?this.setAttribute("disabeld","disabled"):this.removeAttribute("disabeld"))}))}}window.customElements.define(r.tag,r);export{r as RichTextEditorUnlink};

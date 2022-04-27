import{s as t}from"./739afbe3.js";import{e}from"./ce866155.js";import"./92722af5.js";import"./15d1f956.js";import"./9551dc44.js";import"./98d72547.js";import"./21f22572.js";import"./5c68dd7f.js";import"./d3786729.js";import"./e8aaba2a.js";import"./a0b419ba.js";import"./11a75ebe.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class r extends(e(t)){static get tag(){return"rich-text-editor-unlink"}render(){return super.render()}static get properties(){return{...super.properties}}constructor(){super(),this.command="unlink",this.icon="mdextra:unlink",this.label="Remove Link",this.tagsList="a",this.shortcutKeys="ctrl+k"}updated(t){super.updated&&super.updated(t),t.forEach(((t,e)=>{"range"===e&&(this.commandIsToggled?this.setAttribute("disabeld","disabled"):this.removeAttribute("disabeld"))}))}}window.customElements.define(r.tag,r);export{r as RichTextEditorUnlink};

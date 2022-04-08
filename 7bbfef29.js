import{s as t}from"./54be1076.js";import{e}from"./1949c5cd.js";import"./92722af5.js";import"./2fbeb3f3.js";import"./4ab774bc.js";import"./121c8af0.js";import"./5c68dd7f.js";import"./6ae556c0.js";import"./5dc58b10.js";import"./4ab51a4e.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class r extends(e(t)){static get tag(){return"rich-text-editor-unlink"}render(){return super.render()}static get properties(){return{...super.properties}}constructor(){super(),this.command="unlink",this.icon="mdextra:unlink",this.label="Remove Link",this.tagsList="a",this.shortcutKeys="ctrl+k"}updated(t){super.updated&&super.updated(t),t.forEach(((t,e)=>{"range"===e&&(this.commandIsToggled?this.setAttribute("disabeld","disabled"):this.removeAttribute("disabeld"))}))}}window.customElements.define(r.tag,r);export{r as RichTextEditorUnlink};

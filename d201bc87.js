import{s as t}from"./dff398a9.js";import{e}from"./6e8d5923.js";import"./92722af5.js";import"./54970fbe.js";import"./327f6e3f.js";import"./b2e7bfc1.js";import"./5c68dd7f.js";import"./dbea3833.js";import"./d12f43d9.js";import"./ef4a020b.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class r extends(e(t)){static get tag(){return"rich-text-editor-unlink"}render(){return super.render()}static get properties(){return{...super.properties}}constructor(){super(),this.command="unlink",this.icon="mdextra:unlink",this.label="Remove Link",this.tagsList="a",this.shortcutKeys="ctrl+k"}updated(t){super.updated&&super.updated(t),t.forEach(((t,e)=>{"range"===e&&(this.commandIsToggled?this.setAttribute("disabeld","disabled"):this.removeAttribute("disabeld"))}))}}window.customElements.define(r.tag,r);export{r as RichTextEditorUnlink};

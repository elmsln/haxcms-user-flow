import{s as t}from"./ceb09807.js";import{e}from"./39d92170.js";import"./92722af5.js";import"./0ff0e0d3.js";import"./472b4708.js";import"./69df3bf0.js";import"./5c68dd7f.js";import"./b41dcc4c.js";import"./f234fbc4.js";import"./f0616ce7.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class r extends(e(t)){static get tag(){return"rich-text-editor-unlink"}render(){return super.render()}static get properties(){return{...super.properties}}constructor(){super(),this.command="unlink",this.icon="mdextra:unlink",this.label="Remove Link",this.tagsList="a",this.shortcutKeys="ctrl+k"}updated(t){super.updated&&super.updated(t),t.forEach(((t,e)=>{"range"===e&&(this.commandIsToggled?this.setAttribute("disabeld","disabled"):this.removeAttribute("disabeld"))}))}}window.customElements.define(r.tag,r);export{r as RichTextEditorUnlink};

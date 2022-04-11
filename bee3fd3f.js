import{s as t}from"./6dad8758.js";import{e}from"./20f3782d.js";import"./92722af5.js";import"./0398020a.js";import"./c4c4f7b2.js";import"./6818b4d8.js";import"./5c68dd7f.js";import"./72817b1a.js";import"./97dfc94b.js";import"./2937d3d0.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class r extends(e(t)){static get tag(){return"rich-text-editor-unlink"}render(){return super.render()}static get properties(){return{...super.properties}}constructor(){super(),this.command="unlink",this.icon="mdextra:unlink",this.label="Remove Link",this.tagsList="a",this.shortcutKeys="ctrl+k"}updated(t){super.updated&&super.updated(t),t.forEach(((t,e)=>{"range"===e&&(this.commandIsToggled?this.setAttribute("disabeld","disabled"):this.removeAttribute("disabeld"))}))}}window.customElements.define(r.tag,r);export{r as RichTextEditorUnlink};

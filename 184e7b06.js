import{s as t}from"./12f367a6.js";import{e}from"./dbd7265d.js";import"./92722af5.js";import"./1a6f339e.js";import"./a0f87f35.js";import"./d0f1efb5.js";import"./5c68dd7f.js";import"./175da61a.js";import"./85d3a768.js";import"./d55ae8ed.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class r extends(e(t)){static get tag(){return"rich-text-editor-unlink"}render(){return super.render()}static get properties(){return{...super.properties}}constructor(){super(),this.command="unlink",this.icon="mdextra:unlink",this.label="Remove Link",this.tagsList="a",this.shortcutKeys="ctrl+k"}updated(t){super.updated&&super.updated(t),t.forEach(((t,e)=>{"range"===e&&(this.commandIsToggled?this.setAttribute("disabeld","disabled"):this.removeAttribute("disabeld"))}))}}window.customElements.define(r.tag,r);export{r as RichTextEditorUnlink};

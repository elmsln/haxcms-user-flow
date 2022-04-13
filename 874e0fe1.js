import{s as t}from"./d2b414a9.js";import{e}from"./ed738863.js";import"./feae1412.js";import"./93065a51.js";import"./5c68dd7f.js";import"./7d765dc3.js";import"./48802280.js";import"./9f6e84a9.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class r extends(e(t)){static get tag(){return"rich-text-editor-unlink"}render(){return super.render()}static get properties(){return{...super.properties}}constructor(){super(),this.command="unlink",this.icon="mdextra:unlink",this.label="Remove Link",this.tagsList="a",this.shortcutKeys="ctrl+k"}updated(t){super.updated&&super.updated(t),t.forEach(((t,e)=>{"range"===e&&(this.commandIsToggled?this.setAttribute("disabeld","disabled"):this.removeAttribute("disabeld"))}))}}window.customElements.define(r.tag,r);export{r as RichTextEditorUnlink};

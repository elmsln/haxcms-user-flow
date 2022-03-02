import"./28c901c4.js";import{e as t,s as e}from"./d485e296.js";import"./2a5edd7f.js";import"./4ab0e241.js";import"./b78a3bce.js";import"./43548685.js";import"./29b617f1.js";import"./b9bb5cf7.js";import"./f12c4254.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class r extends(t(e)){static get tag(){return"rich-text-editor-unlink"}render(){return super.render()}static get properties(){return{...super.properties}}constructor(){super(),this.command="unlink",this.icon="mdextra:unlink",this.label="Remove Link",this.tagsList="a",this.shortcutKeys="ctrl+k"}updated(t){super.updated&&super.updated(t),t.forEach(((t,e)=>{"range"===e&&(this.commandIsToggled?this.setAttribute("disabeld","disabled"):this.removeAttribute("disabeld"))}))}}window.customElements.define(r.tag,r);export{r as RichTextEditorUnlink};

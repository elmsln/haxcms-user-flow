import{s as t}from"./57000551.js";import{e}from"./15d171f7.js";import"./92722af5.js";import"./3c2c4f33.js";import"./f0dcbdf7.js";import"./451a7207.js";import"./5c68dd7f.js";import"./e747dd06.js";import"./ddab6b4c.js";import"./1ac97592.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class r extends(e(t)){static get tag(){return"rich-text-editor-unlink"}render(){return super.render()}static get properties(){return{...super.properties}}constructor(){super(),this.command="unlink",this.icon="mdextra:unlink",this.label="Remove Link",this.tagsList="a",this.shortcutKeys="ctrl+k"}updated(t){super.updated&&super.updated(t),t.forEach(((t,e)=>{"range"===e&&(this.commandIsToggled?this.setAttribute("disabeld","disabled"):this.removeAttribute("disabeld"))}))}}window.customElements.define(r.tag,r);export{r as RichTextEditorUnlink};

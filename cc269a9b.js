import{s as t}from"./403c4778.js";import{e}from"./130583c6.js";import"./92722af5.js";import"./fe105a49.js";import"./8e4af478.js";import"./dffa516c.js";import"./98373759.js";import"./5c68dd7f.js";import"./b2a9b2c6.js";import"./e8d30534.js";import"./525701fd.js";import"./93c6536e.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class r extends(e(t)){static get tag(){return"rich-text-editor-unlink"}render(){return super.render()}static get properties(){return{...super.properties}}constructor(){super(),this.command="unlink",this.icon="mdextra:unlink",this.label="Remove Link",this.tagsList="a",this.shortcutKeys="ctrl+k"}updated(t){super.updated&&super.updated(t),t.forEach(((t,e)=>{"range"===e&&(this.commandIsToggled?this.setAttribute("disabeld","disabled"):this.removeAttribute("disabeld"))}))}}window.customElements.define(r.tag,r);export{r as RichTextEditorUnlink};

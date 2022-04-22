import{s as t}from"./6c6d98d8.js";import{e}from"./55353ae1.js";import"./92722af5.js";import"./83e5d83a.js";import"./8718414d.js";import"./ed6953ab.js";import"./50d28e65.js";import"./5c68dd7f.js";import"./a7cf7e5c.js";import"./ba5ef206.js";import"./bbb94955.js";import"./e0c318cc.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class r extends(e(t)){static get tag(){return"rich-text-editor-unlink"}render(){return super.render()}static get properties(){return{...super.properties}}constructor(){super(),this.command="unlink",this.icon="mdextra:unlink",this.label="Remove Link",this.tagsList="a",this.shortcutKeys="ctrl+k"}updated(t){super.updated&&super.updated(t),t.forEach(((t,e)=>{"range"===e&&(this.commandIsToggled?this.setAttribute("disabeld","disabled"):this.removeAttribute("disabeld"))}))}}window.customElements.define(r.tag,r);export{r as RichTextEditorUnlink};

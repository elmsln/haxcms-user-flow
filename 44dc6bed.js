import{s as t}from"./89209613.js";import{e}from"./9b87091c.js";import"./92722af5.js";import"./10804abc.js";import"./8f8f5c5e.js";import"./7ecfb2c5.js";import"./412f2a83.js";import"./21c38878.js";import"./5c68dd7f.js";import"./108774c3.js";import"./d1134c0d.js";import"./529019c7.js";import"./87b71630.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class r extends(e(t)){static get tag(){return"rich-text-editor-unlink"}render(){return super.render()}static get properties(){return{...super.properties}}constructor(){super(),this.command="unlink",this.icon="mdextra:unlink",this.label="Remove Link",this.tagsList="a",this.shortcutKeys="ctrl+k"}updated(t){super.updated&&super.updated(t),t.forEach(((t,e)=>{"range"===e&&(this.commandIsToggled?this.setAttribute("disabeld","disabled"):this.removeAttribute("disabeld"))}))}}window.customElements.define(r.tag,r);export{r as RichTextEditorUnlink};

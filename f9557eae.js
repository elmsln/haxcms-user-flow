import{s as t}from"./2292793e.js";import{e}from"./e29a00e3.js";import"./92722af5.js";import"./4a379ff4.js";import"./5cb7c75c.js";import"./bd5e2d06.js";import"./5c68dd7f.js";import"./a30a704e.js";import"./bb98ceb3.js";import"./6cdf4af6.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class r extends(e(t)){static get tag(){return"rich-text-editor-unlink"}render(){return super.render()}static get properties(){return{...super.properties}}constructor(){super(),this.command="unlink",this.icon="mdextra:unlink",this.label="Remove Link",this.tagsList="a",this.shortcutKeys="ctrl+k"}updated(t){super.updated&&super.updated(t),t.forEach(((t,e)=>{"range"===e&&(this.commandIsToggled?this.setAttribute("disabeld","disabled"):this.removeAttribute("disabeld"))}))}}window.customElements.define(r.tag,r);export{r as RichTextEditorUnlink};

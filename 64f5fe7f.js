import{s as t}from"./61d850e7.js";import{e}from"./554f9080.js";import"./92722af5.js";import"./2688cf9a.js";import"./5d5d2dbe.js";import"./6de32ebf.js";import"./a530485c.js";import"./5c68dd7f.js";import"./53abb8e2.js";import"./75b91578.js";import"./50f75aed.js";import"./be4b1047.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class r extends(e(t)){static get tag(){return"rich-text-editor-unlink"}render(){return super.render()}static get properties(){return{...super.properties}}constructor(){super(),this.command="unlink",this.icon="mdextra:unlink",this.label="Remove Link",this.tagsList="a",this.shortcutKeys="ctrl+k"}updated(t){super.updated&&super.updated(t),t.forEach(((t,e)=>{"range"===e&&(this.commandIsToggled?this.setAttribute("disabeld","disabled"):this.removeAttribute("disabeld"))}))}}window.customElements.define(r.tag,r);export{r as RichTextEditorUnlink};

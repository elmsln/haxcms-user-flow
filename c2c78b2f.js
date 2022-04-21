import{s as t}from"./0a062c00.js";import{e}from"./5311a4fa.js";import"./92722af5.js";import"./0cf7f89a.js";import"./ef978de0.js";import"./0c56293d.js";import"./2356fb46.js";import"./5c68dd7f.js";import"./374359d8.js";import"./07c21484.js";import"./0a718b49.js";import"./94ddfe3a.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class r extends(e(t)){static get tag(){return"rich-text-editor-unlink"}render(){return super.render()}static get properties(){return{...super.properties}}constructor(){super(),this.command="unlink",this.icon="mdextra:unlink",this.label="Remove Link",this.tagsList="a",this.shortcutKeys="ctrl+k"}updated(t){super.updated&&super.updated(t),t.forEach(((t,e)=>{"range"===e&&(this.commandIsToggled?this.setAttribute("disabeld","disabled"):this.removeAttribute("disabeld"))}))}}window.customElements.define(r.tag,r);export{r as RichTextEditorUnlink};

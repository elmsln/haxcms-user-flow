import{s as t}from"./9e6d0aef.js";import{e}from"./11566341.js";import"./92722af5.js";import"./c1632780.js";import"./08d5ef22.js";import"./248d2478.js";import"./7c951fdc.js";import"./5c68dd7f.js";import"./76ccf376.js";import"./f089a98c.js";import"./143636b1.js";import"./8b4c1d81.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class r extends(e(t)){static get tag(){return"rich-text-editor-unlink"}render(){return super.render()}static get properties(){return{...super.properties}}constructor(){super(),this.command="unlink",this.icon="mdextra:unlink",this.label="Remove Link",this.tagsList="a",this.shortcutKeys="ctrl+k"}updated(t){super.updated&&super.updated(t),t.forEach(((t,e)=>{"range"===e&&(this.commandIsToggled?this.setAttribute("disabeld","disabled"):this.removeAttribute("disabeld"))}))}}window.customElements.define(r.tag,r);export{r as RichTextEditorUnlink};

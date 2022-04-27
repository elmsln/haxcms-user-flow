import{s as t}from"./df7de666.js";import{e}from"./ad994c63.js";import"./92722af5.js";import"./8550c7ad.js";import"./47e1023f.js";import"./043efcf2.js";import"./f573cc4a.js";import"./5c68dd7f.js";import"./0a11c45b.js";import"./f4ede2b0.js";import"./ad6dde53.js";import"./a8c9c136.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class r extends(e(t)){static get tag(){return"rich-text-editor-unlink"}render(){return super.render()}static get properties(){return{...super.properties}}constructor(){super(),this.command="unlink",this.icon="mdextra:unlink",this.label="Remove Link",this.tagsList="a",this.shortcutKeys="ctrl+k"}updated(t){super.updated&&super.updated(t),t.forEach(((t,e)=>{"range"===e&&(this.commandIsToggled?this.setAttribute("disabeld","disabled"):this.removeAttribute("disabeld"))}))}}window.customElements.define(r.tag,r);export{r as RichTextEditorUnlink};

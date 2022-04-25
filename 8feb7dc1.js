import{s as t}from"./5cf9862e.js";import{e}from"./f1ba93eb.js";import"./92722af5.js";import"./b33d865a.js";import"./6d8d5c07.js";import"./765646de.js";import"./aa803003.js";import"./5c68dd7f.js";import"./ed3cae70.js";import"./185a8c34.js";import"./cb9a62d4.js";import"./8f4cf15b.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class r extends(e(t)){static get tag(){return"rich-text-editor-unlink"}render(){return super.render()}static get properties(){return{...super.properties}}constructor(){super(),this.command="unlink",this.icon="mdextra:unlink",this.label="Remove Link",this.tagsList="a",this.shortcutKeys="ctrl+k"}updated(t){super.updated&&super.updated(t),t.forEach(((t,e)=>{"range"===e&&(this.commandIsToggled?this.setAttribute("disabeld","disabled"):this.removeAttribute("disabeld"))}))}}window.customElements.define(r.tag,r);export{r as RichTextEditorUnlink};

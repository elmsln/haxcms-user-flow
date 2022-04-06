import{s as e}from"./fe3e588d.js";import{e as t}from"./bfbe4417.js";import"./b531b556.js";import"./f45b852c.js";import"./d7e1120d.js";import"./5c68dd7f.js";import"./a0eee36d.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class r extends(t(e)){static get tag(){return"rich-text-editor-unlink"}render(){return super.render()}static get properties(){return{...super.properties}}constructor(){super(),this.command="unlink",this.icon="mdextra:unlink",this.label="Remove Link",this.tagsList="a",this.shortcutKeys="ctrl+k"}updated(e){super.updated&&super.updated(e),e.forEach(((e,t)=>{"range"===t&&(this.commandIsToggled?this.setAttribute("disabeld","disabled"):this.removeAttribute("disabeld"))}))}}window.customElements.define(r.tag,r);export{r as RichTextEditorUnlink};

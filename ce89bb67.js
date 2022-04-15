import{s as e}from"./56e5effe.js";import{e as t}from"./b753ccbc.js";import"./92722af5.js";import"./cff69e9d.js";import"./fd76e47e.js";import"./9ee88078.js";import"./5c68dd7f.js";import"./be09dbd8.js";import"./1e44a7b7.js";import"./31d0307c.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class r extends(t(e)){static get tag(){return"rich-text-editor-unlink"}render(){return super.render()}static get properties(){return{...super.properties}}constructor(){super(),this.command="unlink",this.icon="mdextra:unlink",this.label="Remove Link",this.tagsList="a",this.shortcutKeys="ctrl+k"}updated(e){super.updated&&super.updated(e),e.forEach(((e,t)=>{"range"===t&&(this.commandIsToggled?this.setAttribute("disabeld","disabled"):this.removeAttribute("disabeld"))}))}}window.customElements.define(r.tag,r);export{r as RichTextEditorUnlink};

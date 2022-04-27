import{s as t}from"./2c0090c2.js";import{e}from"./19cae84f.js";import"./92722af5.js";import"./5ede6a9e.js";import"./002dd6c2.js";import"./c64cb065.js";import"./eff52c85.js";import"./5c68dd7f.js";import"./9c003415.js";import"./f5cc3e78.js";import"./3eea0086.js";import"./cfe718b1.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class r extends(e(t)){static get tag(){return"rich-text-editor-unlink"}render(){return super.render()}static get properties(){return{...super.properties}}constructor(){super(),this.command="unlink",this.icon="mdextra:unlink",this.label="Remove Link",this.tagsList="a",this.shortcutKeys="ctrl+k"}updated(t){super.updated&&super.updated(t),t.forEach(((t,e)=>{"range"===e&&(this.commandIsToggled?this.setAttribute("disabeld","disabled"):this.removeAttribute("disabeld"))}))}}window.customElements.define(r.tag,r);export{r as RichTextEditorUnlink};

import{s as t}from"./8f858270.js";import{e}from"./5aadf752.js";import"./92722af5.js";import"./0efaea1c.js";import"./75e6acbd.js";import"./44e0b442.js";import"./321e8c84.js";import"./5c68dd7f.js";import"./a5d6980a.js";import"./fb876da6.js";import"./b05c4256.js";import"./489d4e59.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class r extends(e(t)){static get tag(){return"rich-text-editor-unlink"}render(){return super.render()}static get properties(){return{...super.properties}}constructor(){super(),this.command="unlink",this.icon="mdextra:unlink",this.label="Remove Link",this.tagsList="a",this.shortcutKeys="ctrl+k"}updated(t){super.updated&&super.updated(t),t.forEach(((t,e)=>{"range"===e&&(this.commandIsToggled?this.setAttribute("disabeld","disabled"):this.removeAttribute("disabeld"))}))}}window.customElements.define(r.tag,r);export{r as RichTextEditorUnlink};

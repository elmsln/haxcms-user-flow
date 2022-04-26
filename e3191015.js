import{s as t}from"./53b77eed.js";import{e}from"./541dbf0a.js";import"./92722af5.js";import"./be666266.js";import"./5d02a17f.js";import"./4f864869.js";import"./f48f996b.js";import"./5c68dd7f.js";import"./fcb657a5.js";import"./b572ece5.js";import"./de25ade0.js";import"./5121fa8d.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class r extends(e(t)){static get tag(){return"rich-text-editor-unlink"}render(){return super.render()}static get properties(){return{...super.properties}}constructor(){super(),this.command="unlink",this.icon="mdextra:unlink",this.label="Remove Link",this.tagsList="a",this.shortcutKeys="ctrl+k"}updated(t){super.updated&&super.updated(t),t.forEach(((t,e)=>{"range"===e&&(this.commandIsToggled?this.setAttribute("disabeld","disabled"):this.removeAttribute("disabeld"))}))}}window.customElements.define(r.tag,r);export{r as RichTextEditorUnlink};

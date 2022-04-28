import{s as t}from"./d378c638.js";import{e}from"./521632df.js";import"./92722af5.js";import"./71b098ec.js";import"./f06f17a4.js";import"./6d58be37.js";import"./ebdaaa08.js";import"./5c68dd7f.js";import"./38895154.js";import"./19dac894.js";import"./43221e55.js";import"./94027653.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class r extends(e(t)){static get tag(){return"rich-text-editor-unlink"}render(){return super.render()}static get properties(){return{...super.properties}}constructor(){super(),this.command="unlink",this.icon="mdextra:unlink",this.label="Remove Link",this.tagsList="a",this.shortcutKeys="ctrl+k"}updated(t){super.updated&&super.updated(t),t.forEach(((t,e)=>{"range"===e&&(this.commandIsToggled?this.setAttribute("disabeld","disabled"):this.removeAttribute("disabeld"))}))}}window.customElements.define(r.tag,r);export{r as RichTextEditorUnlink};

import{s as t}from"./d2b414a9.js";import{e}from"./ed738863.js";import"./feae1412.js";import"./93065a51.js";import"./5c68dd7f.js";import"./7d765dc3.js";import"./48802280.js";import"./9f6e84a9.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class o extends(e(t)){static get tag(){return"rich-text-editor-source-code"}render(){return super.render()}constructor(){super(),this.icon="code",this.toggled=!1,this.label="Source Code",this.labelToggled="Rich Text",this.command="viewSource",this.toggledCommand="viewSource",this.commandVal=!0,this.toggledCommandVal=!1,this.shortcutKeys="cmd+<",this.initViewSource()}static get properties(){return{...super.properties,toggled:{attribute:"toggled",type:Boolean,reflect:!0}}}get isToggled(){return this.toggled}commandCallback(t,e,o){this.toggled||this.__highlight.unwrap(this.range),this.toggled=this.__toolbar&&this.__source&&this.__source.__toolbar==this.__toolbar}}window.customElements.define(o.tag,o);export{o as RichTextEditorSourceCode};
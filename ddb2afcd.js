import{s as t}from"./81305585.js";import{e}from"./f4d2ff0e.js";import"./92722af5.js";import"./dc84e484.js";import"./66e872f7.js";import"./4853bef6.js";import"./5c68dd7f.js";import"./c9026935.js";import"./033e3c8d.js";import"./f800d9d7.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class o extends(e(t)){static get tag(){return"rich-text-editor-source-code"}render(){return super.render()}constructor(){super(),this.icon="code",this.toggled=!1,this.label="Source Code",this.labelToggled="Rich Text",this.command="viewSource",this.toggledCommand="viewSource",this.commandVal=!0,this.toggledCommandVal=!1,this.shortcutKeys="cmd+<",this.initViewSource()}static get properties(){return{...super.properties,toggled:{attribute:"toggled",type:Boolean,reflect:!0}}}get isToggled(){return this.toggled}commandCallback(t,e,o){this.toggled||this.__highlight.unwrap(this.range),this.toggled=this.__toolbar&&this.__source&&this.__source.__toolbar==this.__toolbar}}window.customElements.define(o.tag,o);export{o as RichTextEditorSourceCode};
import{s as t}from"./739afbe3.js";import{e}from"./ce866155.js";import"./92722af5.js";import"./15d1f956.js";import"./9551dc44.js";import"./98d72547.js";import"./21f22572.js";import"./5c68dd7f.js";import"./d3786729.js";import"./e8aaba2a.js";import"./a0b419ba.js";import"./11a75ebe.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class o extends(e(t)){static get tag(){return"rich-text-editor-source-code"}render(){return super.render()}constructor(){super(),this.icon="code",this.toggled=!1,this.label="Source Code",this.labelToggled="Rich Text",this.command="viewSource",this.toggledCommand="viewSource",this.commandVal=!0,this.toggledCommandVal=!1,this.shortcutKeys="cmd+<",this.initViewSource()}static get properties(){return{...super.properties,toggled:{attribute:"toggled",type:Boolean,reflect:!0}}}get isToggled(){return this.toggled}commandCallback(t,e,o){this.toggled||this.__highlight.unwrap(this.range),this.toggled=this.__toolbar&&this.__source&&this.__source.__toolbar==this.__toolbar}}window.customElements.define(o.tag,o);export{o as RichTextEditorSourceCode};

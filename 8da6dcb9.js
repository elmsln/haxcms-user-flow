import{s as t}from"./306afc6c.js";import{e}from"./787809b0.js";import"./92722af5.js";import"./cc1ef5ab.js";import"./a7a26c31.js";import"./93f97a28.js";import"./5c68dd7f.js";import"./a5db156b.js";import"./543961e6.js";import"./5355e3c3.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class o extends(e(t)){static get tag(){return"rich-text-editor-source-code"}render(){return super.render()}constructor(){super(),this.icon="code",this.toggled=!1,this.label="Source Code",this.labelToggled="Rich Text",this.command="viewSource",this.toggledCommand="viewSource",this.commandVal=!0,this.toggledCommandVal=!1,this.shortcutKeys="cmd+<",this.initViewSource()}static get properties(){return{...super.properties,toggled:{attribute:"toggled",type:Boolean,reflect:!0}}}get isToggled(){return this.toggled}commandCallback(t,e,o){this.toggled||this.__highlight.unwrap(this.range),this.toggled=this.__toolbar&&this.__source&&this.__source.__toolbar==this.__toolbar}}window.customElements.define(o.tag,o);export{o as RichTextEditorSourceCode};
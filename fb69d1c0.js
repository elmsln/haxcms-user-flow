import{s as t}from"./515cd7a2.js";import{f as e}from"./118942cd.js";import"./671c9912.js";import"./1c8eb46b.js";import"./5c68dd7f.js";import"./262c3545.js";import"./cc96aa96.js";import"./f099135d.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class r extends(e(t)){static get tag(){return"rich-text-editor-link"}render(){return super.render()}static get properties(){return{...super.properties,allowTarget:{type:Boolean}}}constructor(){super(),this.fields=[...super.fields,{property:"href",title:"Link",inputMethod:"url",autoValidate:!0}],this.command="createLink",this.icon="link",this.label="Link",this.toggledCommand="unlink",this.toggledLabel="Edit link",this.toggles="true",this.tagsList="a",this.value={...super.value,href:null},this.shortcutKeys="ctrl+k"}get defaultFields(){return[...super.fields,{property:"href",title:"Link",inputMethod:"url",autoValidate:!0}]}updated(t){super.updated&&super.updated(t),t.forEach(((t,e)=>{"allowTarget"===e&&(this.fields=this.allowTarget?[...this.defaultFields,{property:"target",title:"Target",inputMethod:"textfield"}]:[...this.defaultFields])}))}get promptCommandVal(){return this.getPropValue("href")||void 0}get isToggled(){return this.toggled}getValue(){return{...super.getValue(),target:this.allowTarget&&this.targetedNode&&this.targetedNode.getAttribute?this.targetedNode.getAttribute("target"):void 0,href:this.targetedNode&&this.targetedNode.getAttribute?this.targetedNode.getAttribute("href"):void 0}}setToggled(){this.toggled=!!this.getPropValue("href")}updateSelection(){let t=this.range,e=this.value&&this.value.target&&this.value.href?this.value.target:void 0;super.updateSelection(),e&&t.commonAncestorContainer.children[0].setAttribute("target",e)}}window.customElements.define(r.tag,r);export{r as RichTextEditorLink};

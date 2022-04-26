import{r as t,$ as o,s as e}from"./53b77eed.js";import"./5d02a17f.js";
/**
 * Copyright 2020 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */const i=function(e){return class extends e{constructor(){super(),this.ariaLabelledby="",this.controls="",this.disabled=!1,this.form="",this.label="",this.fieldName="",this.type="",this.value="",this.icon=""}static get styles(){return[super.styles||[],t`:host([hidden]){display:none}:host([icon=""]) simple-icon-lite{display:none}:host{display:inline-flex;align-items:center;justify-content:center;position:relative;vertical-align:middle;border-radius:var(--simple-icon-button-border-radius,50%);background-color:var(--simple-icon-button-background-color,transparent);padding:0;margin:0;color:inherit}button{color:inherit;cursor:pointer;opacity:var(--simple-icon-button-opacity,1);border:var(--simple-icon-button-border,0);border-radius:var(--simple-icon-button-border-radius,50%);background-color:var(--simple-icon-button-background-color,transparent);padding:var(--simple-icon-button-padding,0);margin:0;width:100%;height:100%}button[aria-pressed]{opacity:var(--simple-icon-button-toggled-opacity,1);--simple-icon-button-border:var(
              --simple-icon-toggled-button-border
            );--simple-icon-color:var(--simple-icon-button-toggled-color);--simple-icon-button-background-color:var(
              --simple-icon-button-toggled-background-color
            )}button:focus,button:hover{opacity:var(--simple-icon-button-focus-opacity,.8);--simple-icon-button-border:var(--simple-icon-button-focus-border);--simple-icon-color:var(--simple-icon-button-focus-color);--simple-icon-button-background-color:var(
              --simple-icon-button-focus-background-color
            )}button:disabled,button[disabled]{opacity:var(--simple-icon-button-disabled-opacity,.5);--simple-icon-button-border:var(
              --simple-icon-button-disabled-border
            );--simple-icon-color:var(--simple-icon-button-disabled-color);--simple-icon-button-background-color:var(
              --simple-icon-button-disabled-background-color
            );cursor:not-allowed}simple-icon-lite{color:inherit;height:calc(var(--simple-icon-height,24px) - 2 * var(--simple-icon-button-padding,0px));width:calc(var(--simple-icon-width,24px) - 2 * var(--simple-icon-button-padding,0px))}`]}render(){return o` <button ?autofocus="${this.autofocus}" aria-labelledby="${this.ariaLabelledby}" .aria-pressed="${this.toggles||this.toggled?"true":this.toggles?"false":void 0}" controls="${this.controls}" part="button" ?disabled="${this.disabled}" form="${this.form}" label="${this.label}" aria-label="${this.label}" name="${this.fieldName}" .type="${this.type}" value="${this.value}"> <simple-icon-lite icon="${this.icon}" part="icon"></simple-icon-lite> <slot></slot> </button> `}static get properties(){return{...super.properties,autofocus:{attribute:"autofocus",type:Boolean},ariaLabelledby:{attribute:"aria-labelledby",type:String},controls:{attribute:"controls",type:String},disabled:{attribute:"disabled",type:Boolean},fieldName:{attribute:"field-name",type:String},form:{attribute:"form",type:String},icon:{type:String,reflect:!0},label:{attribute:"label",type:String},type:{attribute:"type",type:String},value:{attribute:"value",type:String,reflect:!0},toggles:{attribute:"toggles",type:Boolean,reflect:!0},toggled:{attribute:"toggled",type:Boolean,reflect:!0}}}}};class r extends(i(e)){static get tag(){return"simple-icon-button-lite"}constructor(){super(),this.type="button"}}customElements.define(r.tag,r);export{i as S};

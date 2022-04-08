import{s as e,r as t,$ as i}from"./dc62e056.js";
/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */class l extends e{static get styles(){return t`:host{display:flex;align-items:center;justify-content:space-between;color:var(--simple-picker-color)}:host([hidden]){display:none}div{margin:unset;padding:unset}#label{padding:var(--simple-picker-option-label-padding,var(--simple-picker-option-padding,2px 10px));line-height:100%;width:max-content}:host([hide-option-labels]) #label{position:absolute;left:-999999px;width:0;height:0;overflow:hidden}simple-icon-lite{--simple-icon-width:var(--simple-picker-option-size, 24px);--simple-icon-height:var(--simple-picker-option-size, 24px);width:var(--simple-picker-option-size,24px);min-height:var(--simple-picker-option-size,24px);min-width:var(--simple-picker-option-size,24px);line-height:var(--simple-picker-option-size,24px)}`}render(){return i` <simple-icon-lite ?hidden="${!this.icon}" .icon="${this.icon}" aria-hidden="true"></simple-icon-lite> <div id="label"> <slot ?hidden="${!this.titleAsHtml}"></slot> ${this.titleAsHtml?"":this.label} </div> `}constructor(){super(),this.active=null,this.data=null,this.hidden=!1,this.hideOptionLabels=!1,this.icon=null,this.id=null,this.label=null,this.selected=!1,this.titleAsHtml=!1,this.value=null,setTimeout((()=>{this.addEventListener("focus",this._handleFocus.bind(this)),this.addEventListener("mouseover",this._handleHover.bind(this))}),0)}static get properties(){return{active:{type:Boolean,reflect:!0},data:{type:Object},hidden:{type:Boolean,reflect:!0},hideOptionLabels:{type:Boolean,reflect:!0,attribute:"hide-option-labels"},icon:{type:String},id:{type:String,reflect:!0},label:{type:String,reflect:!0},selected:{type:Boolean,reflect:!0},styles:{type:Object},titleAsHtml:{type:Boolean,reflect:!0,attribute:"title-as-html"},value:{type:String,reflect:!0}}}updated(e){super.updated(e),e.forEach(((e,t)=>{"label"===t&&(this.innerHTML=this.label)}))}static get tag(){return"simple-picker-option"}_handleFocus(){this.dispatchEvent(new CustomEvent("option-focus",{detail:this}))}_handleHover(){this.dispatchEvent(new CustomEvent("option-focus",{detail:this}))}_getColor(){return t`red`}}window.customElements.define(l.tag,l);export{l as SimplePickerOption};

import{s as t,r as s,$ as e,B as a}from"./432ac660.js";
/**
 * Copyright 2022 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */class i extends t{static get tag(){return"promise-progress-lite"}constructor(){super(),this.list=[],this.value=0,this.max=100,this.showCount=!1,this.canLoad=!1}static get styles(){let t=[];return super.styles&&(t=super.styles),[...t,s`:host{display:block;position:relative}`]}static get properties(){return{...super.properties,max:{type:Number},value:{type:Number,reflect:!0},list:{type:Array},showCount:{type:Boolean,attribute:"show-count"},canLoad:{type:Boolean}}}render(){return e` <progress part="progress" max="${this.max}" value="${this.value}"></progress> ${this.list&&this.showCount?e`${this.value} / ${this.max}`:""} <slot></slot> `}firstUpdated(t){super.firstUpdated&&super.firstUpdated(t),this.loadingBar=this.shadowRoot.querySelector("progress")}updated(t){super.updated&&super.updated(t),t.forEach(((t,s)=>{["value","max"].includes(s)&&this.shadowRoot&&this.dispatchEvent(new CustomEvent(`${s}-changed`,{detail:{value:this[s]}})),"list"==s&&this[s]&&this[s].length>0&&this.max!==this.value&&(this.canLoad=!0)}))}async process(){const t=this.list;if(this.canLoad){var s=0;const e=await t.map((async t=>await t().then((t=>{s+=1,this.value=Math.round(s/this.list.length*100),this.loadingBar.textContent=`Loading ${this.value} of ${this.max}`,resolve(t)})).catch((t=>{reject(t)}))));await Promise.allSettled(e).then((()=>{this.loadingBar.textContent="Loading Finished",this.value=this.max,setTimeout((()=>{this.dispatchEvent(new CustomEvent("promise-progress-finished",{detail:{value:!0}}))}),100)}))}}}customElements.define(i.tag,i);
/**
 * Copyright 2022 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
class r extends(a(i)){constructor(){super()}static get tag(){return"promise-progress"}render(){return e` <progress part="progress" max="${this.max}" value="${this.value}"></progress> ${this.list&&this.showCount?e`${this.value} / ${this.max}`:""} <slot></slot> `}}customElements.define(r.tag,r);export{r as PromiseProgress};

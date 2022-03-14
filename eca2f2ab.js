import{a as e,x as i,b as t,e as o,i as s,v as l,g as r,w as n,h as a,u as p,p as d,r as c,$ as h}from"./f9a63054.js";import{e as u,s as b}from"./201b7bb0.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var m,v;class g extends e{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,i;const t=super.createRenderRoot();return null!==(e=(i=this.renderOptions).renderBefore)&&void 0!==e||(i.renderBefore=t.firstChild),t}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=i(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!1)}render(){return t}}g.finalized=!0,g._$litElement$=!0,null===(m=globalThis.litElementHydrateSupport)||void 0===m||m.call(globalThis,{LitElement:g});const k=globalThis.litElementPolyfillSupport;null==k||k({LitElement:g}),(null!==(v=globalThis.litElementVersions)&&void 0!==v?v:globalThis.litElementVersions=[]).push("3.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const _=o(class extends s{constructor(e){super(e),this.tt=new WeakMap}render(e){return[e]}update(e,[t]){if(l(this.it)&&(!l(t)||this.it.strings!==t.strings)){const t=r(e).pop();let o=this.tt.get(this.it.strings);if(void 0===o){const e=document.createDocumentFragment();o=i(n,e),o.setConnected(!1),this.tt.set(this.it.strings,o)}a(o,[t]),p(o,void 0,t)}if(l(t)){if(!l(this.it)||this.it.strings!==t.strings){const i=this.tt.get(t.strings);if(void 0!==i){const t=r(i).pop();d(e),p(e,void 0,t),a(e,[t])}}this.it=t}else this.it=void 0;return this.render(t)}}),f=function(e){return class extends e{static get styles(){return[c`:host{display:var(--simple-picker-display,inline-flex);align-items:center;color:var(--simple-picker-color,currentColor);font-family:var(--simple-picker-font-family,inherit);font-size:var(--simple-picker-font-size,inherit);--simple-picker-height:calc(
              var(--simple-picker-option-size, 24px) +
                var(--simple-picker-sample-padding, 2px) * 2 +
                var(--simple-picker-border-width, 1px) * 2
            );min-height:var(--simple-picker-height);max-height:var(--simple-picker-height)}:host([block-label]){display:block;margin:0 0 15px;max-height:unset}:host([disabled]){--simple-picker-color:var(--simple-picker-color-disabled, #888);--simple-picker-background-color:var(
              --simple-picker-background-color-disabled,
              #e8e8e8
            );cursor:not-allowed;pointer-events:none}[disabled]{cursor:not-allowed;pointer-events:none!important}:host([hidden]){display:none}div{margin:unset;padding:unset}label:not([hidden]){display:flex;align-items:center;padding-right:5px;font-family:var(--simple-picker-font-family,inherit);color:var(--simple-picker-label-color,var(--simple-picker-color,currentColor))}:host([block-label]) label:not([hidden]){display:block;padding-right:0;color:var(--simple-picker-float-label-color,var(--simple-picker-color-disabled,#888));transition:all .5s;max-height:unset}:host([block-label]:focus-within) label,:host([block-label]:hover) label{color:var(--simple-picker-float-label-active-color,var(--simple-picker-color,currentColor));transition:all .5s}#sample,.rows{margin:0;padding:0}#listbox{cursor:pointer;position:relative;flex:1 0 auto;min-height:var(--simple-picker-height);max-height:var(--simple-picker-height)}#sample{display:flex;flex:1 0 auto;justify-content:space-between;align-items:center;min-height:calc(var(--simple-picker-height - 2 * var(--simple-picker-sample-padding,2px)) - 2 * var(--simple-picker-border-width,1px));max-height:calc(var(--simple-picker-height - 2 * var(--simple-picker-sample-padding,2px)) - 2 * var(--simple-picker-border-width,1px));padding:var(--simple-picker-sample-padding,2px);border-radius:var(--simple-picker-border-radius,2px);color:var(--simple-picker-sample-color,currentColor);background-color:var(--simple-picker-background-color,#f0f0f0);border-width:var(--simple-picker-border-width,1px);border-style:var(--simple-picker-border-style,solid);border-color:var(--simple-picker-border-color,var(--simple-picker-color-disabled,#888))}:host([hide-sample]) #sample{width:var(--simple-picker-option-size);overflow:visible}:host(:not([disabled]):focus-within) #sample{border-width:var(--simple-picker-focus-border-width,var(--simple-picker-border-width,1px));border-style:var(--simple-picker-focus-border-style,var(--simple-picker-border-style,solid));border-color:var(--simple-picker-focus-border-color,var(--simple-picker-border-color,var(--simple-picker-color-disabled,#888)));transition:all .5s}:host(:not([disabled]):focus-within) #listbox{border-width:var(--simple-picker-listbox-border-width,var(--simple-picker-border-width,1px));border-style:var(--simple-picker-listbox-border-width,var(--simple-picker-border-style,solid));border-color:var(--simple-picker-listbox-border-width,var(--simple-picker-border-color,var(--simple-picker-color-disabled,#888)))}:host(:not([disabled])) #listbox:focus-within,:host(:not([disabled]):focus-within) #listbox{outline:var(--simple-picker-listbox-outline,unset)}#icon{width:var(--simple-picker-icon-size,16px);height:var(--simple-picker-icon-size,16px);--simple-icon-width:var(--simple-picker-icon-size, 16px);--simple-icon-height:var(--simple-picker-icon-size, 16px);transform:var(--simple-picker-icon-transform,rotate(0));transition:transform .25s}:host([hide-option-labels]) #icon{margin-left:calc(-.125 * var(--simple-picker-icon-size,16px))}:host([expanded]) #icon{transform:var(--simple-picker-expanded-icon-transform,rotate(0));transition:transform .25s}#collapse{display:none;width:100%;position:absolute;top:var(--simple-picker-options-top);z-index:2;transition:z-index 0s}:host([expanded]:not([disabled])) #collapse{display:block;position:unset;background-color:var(--simple-picker-options-background-color,#fff)}.rows{display:block;position:absolute;z-index:1000;top:calc(var(--simple-picker-option-size,24px) + 2 * var(--simple-picker-options-border-width));border-width:var(--simple-picker-options-border-width,var(--simple-picker-border-width,1px));border-style:var(--simple-picker-options-border-style,var(--simple-picker-border-style,solid));border-color:var(--simple-picker-options-border-color,var(--simple-picker-border-color,var(--simple-picker-color-disabled,#888)));background-color:var(--simple-picker-options-background-color,#fff);max-height:var(--simple-picker-options-max-height,250px);overflow-y:auto;border:var(--simple-picker-options-border);transition:z-index 0s}.rows:focus-within{border:var(--simple-picker-options-focus-border,var(--simple-picker-options-border))}:host([align-right]) #collapse .rows{left:unset;right:calc(var(--simple-picker-options-border-width,var(--simple-picker-border-width,1px)) * 2)}:host([justify]) #collapse .rows{left:0;right:0}.row{display:flex;align-items:stretch;justify-content:space-between}simple-picker-option{z-index:1;flex:1 1 auto;justify-content:flex-start;max-height:unset;min-height:var(--simple-picker-option-size,24px);min-width:var(--simple-picker-option-size,24px);line-height:var(--simple-picker-option-size,24px);color:var(--simple-picker-color,currentColor);background-color:var(--simple-picker-options-background-color,#fff);transition:max-height 2s;transition:z-index 0s}simple-picker-option[selected]{z-index:50;color:var(--simple-picker-color,currentColor);background-color:var(--simple-picker-option-selected-background-color,var(--simple-picker-options-background-color,#fff))}simple-picker-option[active]{z-index:100;cursor:pointer;color:var(--simple-picker-color,currentColor);background-color:var(--simple-picker-option-active-background-color,#adf)}#sample simple-picker-option{color:var(--simple-picker-color,currentColor);background-color:var(--simple-picker-sample-background-color,transparent);--simple-picker-option-padding:var(
                --simple-picker-sample-padding,
                2px
              ) 0;border:none}:host([hide-sample]) #sample simple-picker-option{position:absolute;left:-9999px;overflow:hidden;width:0;height:0}:host(:focus-within) #sample simple-picker-option,:host(:hover) #sample simple-picker-option{--simple-picker-color:var(
              --simple-picker-color-active,
              var(--simple-picker-color, currentColor)
            )}:host(:not([expanded])) #collapse simple-picker-option{max-height:0;transition:max-height 1.5s}@media screen and (max-width:600px){:host{position:static}#collapse{top:0;margin-top:0;position:relative}.rows{position:absolute}}`]}render(){return h` <label id="listLabel" for="listbox" .hidden="${!this.label||""===this.label.trim()}" part="label"> ${this.label&&""!==this.label.trim()?this.label.trim():""} </label> <div id="listbox" .aria-activedescendant="${this.__activeDesc}" .aria-labelledby="${this.ariaLabelledby}" .disabled="${this.disabled||!this.__options}" part="input" role="option-input" tabindex="0" @click="${this._handleListboxClick}" @mousedown="${this._handleListboxMousedown}" @keydown="${this._handleListboxKeydown}"> <div id="sample" part="sample"> <simple-picker-option ?hide-option-labels="${this.hideOptionLabels}" ?title-as-html="${this.titleAsHtml}" .icon="${!!this.__selectedOption&&this.__selectedOption.icon}" .label="${!!this.__selectedOption&&this.__selectedOption.alt}" part="sample-option" .style="${!!this.__selectedOption&&this.__selectedOption.style}" aria-hidden="true"> </simple-picker-option> <simple-icon-lite id="icon" aria-hidden="true" icon="arrow-drop-down"></simple-icon-lite> </div> <div id="collapse" part="listbox"> <div class="rows" part="listbox-rows"> ${_(this.expanded&&this.__options?this._renderOptions(this.__options):n)} </div> </div> </div>`}static get properties(){return{...super.properties,allowNull:{type:Boolean,reflect:!0,attribute:"allow-null"},alignRight:{type:Boolean,reflect:!0,attribute:"align-right"},ariaLabelledby:{type:String,attribute:"aria-labelledby"},blockLabel:{type:Boolean,reflect:!0,attribute:"block-label"},disabled:{type:Boolean,reflect:!0,attribute:"disabled"},expanded:{type:Boolean,reflect:!0,attribute:"expanded"},hideOptionLabels:{type:Boolean,reflect:!0,attribute:"hide-option-labels"},hideNullOption:{type:Boolean,reflect:!0,attribute:"hide-null-option"},hideSample:{type:Boolean,reflect:!0,attribute:"hide-sample"},justify:{type:Boolean,reflect:!0,attribute:"justify"},label:{type:String},options:{type:Array},titleAsHtml:{type:Boolean,attribute:"title-as-html"},value:{type:String,reflect:!0},__activeDesc:{type:String},__options:{type:Array},__selectedOption:{type:Object},__ready:{type:Boolean}}}static get tag(){return"simple-picker"}constructor(){super(),import("./1ea791a9.js"),this.tag=x.tag,this.allowNull=!1,this.alignRight=!1,this.ariaLabelledby=null,this.blockLabel=!1,this.disabled=!1,this.expanded=!1,this.hideOptionLabels=!1,this.hideSample=!1,this.label=null,this.__ready=!1,this.options=[],this.titleAsHtml=!1,this.value=null,this.__activeDesc="option-0-0",this.__hasLabel=!0,this.__selectedOption={},this.addEventListener("blur",(function(e){this.expanded=!1}));let e=x.properties;for(let i in e)e.hasOwnProperty(i)&&(this.hasAttribute(i)?this[i]=this.getAttribute(i):(i.reflect&&this.setAttribute(i,e[i].value),this[i]=e[i].value))}get hideNull(){return!this.allowNull||this.hideNullOption}_renderOptions(e){return h`${(e||[]).map(((e,i)=>h` <div class="row" ?hidden="${!this._isRowHidden(e)}"> ${Array.isArray(e)?this._renderRow(e,i):n} </div> `))}`}_isRowHidden(e){return!Array.isArray(e)||e.filter((e=>!!e.value||!this.hideNull)).length<1}_renderRow(e,i){return h`${(e||[]).map(((e,t)=>h` <simple-picker-option @option-focus="${this._handleOptionFocus}" @set-selected-option="${this._handleSetSelectedOption}" ?active="${`${this.__activeDesc}`==`option-${i}-${t}`}" ?hide-option-labels="${this.hideOptionLabels}" ?hidden="${this.hideNull&&!e.value}" ?selected="${this.value===e.value}" ?title-as-html="${this.titleAsHtml}" .data="${this.data}" .icon="${e.icon}" .id="option-${i}-${t}" .label="${e.alt}" .style="${e.style}" aria-selected="${this.value===e.value?"true":"false"}" role="option" tabindex="-1" value="${e.value}"> </simple-picker-option> `))}`}updated(e){e.forEach(((e,i)=>{"value"===i&&this._valueChanged(e),"options"===i&&this._optionsChanged(e)})),this.dispatchEvent(new CustomEvent("changed",{detail:this}))}_getOption(e,i){if(void 0!==e&&null!=i){let t=i.split("-");return e[t[1]][t[2]]}return null}_goToOption(e,i){let t=h` option-${e}-${i} `,o=this.shadowRoot.querySelector("#"+t),s=this.shadowRoot.querySelector("#"+this.__activeDesc);null!==o&&(o.tabindex=0,o.focus(),s.tabindex=-1)}_handleListboxClick(e){this.disabled||(this.dispatchEvent(new CustomEvent("click",{detail:this})),this._toggleListbox())}_handleListboxMousedown(e){this.disabled||this.dispatchEvent(new CustomEvent("mousedown",{detail:this}))}_handleListboxKeydown(e){if(this.disabled)return;this.dispatchEvent(new CustomEvent("keydown",{detail:this}));let i=this.__activeDesc.split("-"),t=parseInt(i[1]),o=parseInt(i[2]);if(32===e.keyCode)e.preventDefault(),this._toggleListbox();else if(this.expanded&&[9,35,36,38,40].includes(e.keyCode))if(e.preventDefault(),35===e.keyCode){let e=(this.options||[]).length-1,i=this.options[e].length-1;this._goToOption(e,i)}else 36===e.keyCode?this._goToOption(0,0):38===e.keyCode?o>0?this._goToOption(t,o-1):t>0&&this._goToOption(t-1,this.options[t-1].length-1):40===e.keyCode&&(o<this.options[t].length-1?this._goToOption(t,o+1):t<(this.options||[]).length-1&&this._goToOption(t+1,[0]))}_handleOptionFocus(e){this._setActiveOption(e.detail.id)}_setActiveOption(e){this.__activeDesc=e,this.dispatchEvent(new CustomEvent("option-focus",{detail:this}))}_valueChanged(e){this._setSelectedOption(),this.dispatchEvent(new CustomEvent("value-changed",{detail:this}))}_optionsChanged(e){this.__ready=(this.options||[]).length>0,this.__ready&&this._setSelectedOption()}_setSelectedOption(){if(this.__selectedOption&&this.__selectedOption.value===this.value)return;let e=!this.allowNull&&(this.options||[]).length>0&&this.options[0].length>0?this.options[0][0].value:null;if(this.options&&this.options.length>0){this.__options="string"==typeof this.options?JSON.parse(this.options):this.options,this.__activeDesc=this.allowNull?"option-0-0":null;for(var i=0;i<this.__options.length;i++){let o=!1;for(var t=0;t<this.__options[i].length;t++)null!==this.value&&null===this.__activeDesc&&(this.__activeDesc=`option-${i}-${t}`),`${this.__options[i][t].value}`==`${this.value}`&&(this.__activeDesc=`option-${i}-${t}`,e=this.__options[i][t],t=this.__options[i].length,o=!0);o&&(i=(this.__options||[]).length)}null===e&&(this.value=null),this.__selectedOption=e}this.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:this}))}_toggleListbox(e=!this.expanded){if(this.disabled)return;let i=this.shadowRoot.querySelector("#"+this.__activeDesc);this.expanded=e,e?(null!==i&&i.focus(),this.dispatchEvent(new CustomEvent("expand",{detail:this}))):(null!==i&&(this.value=i.value),this.dispatchEvent(new CustomEvent("collapse",{detail:this})))}setOptions(e){this.set("options",[[]]),this.set("options",e)}disconnectedCallback(){this.removeEventListener("blur",(function(e){this.expanded=!1})),super.disconnectedCallback()}}};
/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */class x extends(f(g)){}window.customElements.define(x.tag,x);
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */
const w=function(e){return class extends(u(e)){static get tag(){return"rich-text-editor-picker"}static get styles(){return[...super.styles,c`:host{align-items:center;--simple-picker-background-color:var(--simple-toolbar-button-bg);--simple-picker-color-active:var(
              --simple-toolbar-button-hover-color
            );--simple-picker-background-color-active:var(
              --simple-toolbar-button-hover-bg
            );--simple-picker-color-disabled:var(
              --simple-toolbar-button-disabled-color
            );--simple-picker-background-color-disabled:var(
              --simple-toolbar-button-disabled-bg
            );--simple-picker-border-radius:0px;--simple-picker-border-width:0px;--simple-picker-option-size:calc(
              24px - 2 * var(--simple-picker-sample-padding, 2px)
            );--simple-picker-icon-size:16px;--simple-picker-options-border-width:1px;--simple-picker-options-border:var(
                --simple-picker-options-border-width,
                1px
              ) solid var(
                --simple-toolbar-border-color,
                var(--rich-text-editor-border-color, #ddd)
              )}#button{margin-top:0;margin-bottom:0}#button.hide-label::part(label){position:absolute;left:-999999px;top:0;width:0;height:0;overflow:hidden}`]}render(){return h` <simple-picker id="button" ?allow-null="${this.allowNull}" class="rtebutton ${this.labelVisibleClass}-label ${this.toggled?"toggled":""}" ?disabled="${this.disabled}" ?hide-null-option="${this.hideNullOption}" .controls="${super.controls}" .options="${this.options}" @mouseover="${this._pickerFocus}" @keydown="${this._pickerFocus}" .label="${this.currentLabel}" @value-changed="${this._pickerChange}" tabindex="0" ?title-as-html="${this.titleAsHtml}" .value="${this.value}"> </simple-picker> ${super.tooltipTemplate} `}static get properties(){return{...super.properties,allowNull:{type:Boolean},disabled:{type:Boolean,reflect:!0,attribute:"disabled"},command:{type:String},hideNullOption:{type:Boolean},icon:{type:String,reflect:!0},titleAsHtml:{type:Boolean},value:{type:Object}}}constructor(){super(),this.allowNull=!1,this.command="insertHTML",this.label="Insert link",this.titleAsHtml=!1,this.value=null}firstUpdated(e){super.firstUpdated(e),this._setOptions()}get isToggled(){return!1}get labelVisibleClass(){return this.icon?"hide":"show"}get picker(){return this.shadowRoot&&this.shadowRoot.querySelector("#button")?this.shadowRoot.querySelector("#button"):void 0}get expanded(){return this.picker&&this.picker.expanded}_pickerFocus(e){e.preventDefault()}_rangeChanged(){this._setRangeValue(),super._rangeChanged()}_setRangeValue(){let e=this._getSelection();this.shadowRoot&&(this.tagsArray.includes(e)?this.shadowRoot.querySelector("#button").value=e:this.range&&!this.range.collapsed||(this.shadowRoot.querySelector("#button").value=void 0))}_setOptions(){return this.options=this._setPickerOptions()}_setPickerOptions(e=this.options||[]){let i=[],t=Math.sqrt(e.length)<11?Math.ceil(Math.sqrt(e.length)):10;return e.forEach(((e,o)=>{let s=Math.floor(o/t),l=o-s*t;i[s]||(i[s]=[]),i[s][l]=e})),i}_pickerChange(e){let i=this._getSelectionType()||"";this.__highlight.parentNode,this.commandVal=e.detail.value||"",this.range&&i!==this.commandVal&&this.sendCommand()}}};class y extends(w(b)){}window.customElements.define(y.tag,y);export{w as R,f as S,g as s};

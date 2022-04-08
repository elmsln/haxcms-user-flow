import{S as e,r as t,$ as i,y as s}from"./38e3f26b.js";
/**
 * Copyright 2022 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */class r extends e{static get tag(){return"rpg-character"}constructor(){super(),this.accessories=0,this.base=0,this.face=0,this.faceItem=0,this.hair=0,this.pants=0,this.shirt=0,this.skin=0,this.accentColor="orange",this.seed=null,this.walking=!1,this.leg="",this.speed=500,this.__walkingTimeout=null,this.circle=!1,this.hat="none",this.hatColor=0,this.demo=!1,this.fire=!1,this.reduceMotion=window.matchMedia("(prefers-reduced-motion: reduce)").matches}randomColor(e=null){return null===e&&(e=""+Math.floor(Math.random()*Object.keys(this.colors).length)),Object.keys(this.colors)[e]}static get properties(){return{...super.properties,accessories:{type:Number},base:{type:Number},face:{type:Number},faceItem:{type:Number},hair:{type:Number},pants:{type:Number},shirt:{type:Number},skin:{type:Number},hatColor:{type:Number},hat:{type:String},walking:{type:Boolean,reflect:!0},leg:{type:String},seed:{type:String,reflect:!0},speed:{type:Number},circle:{type:Boolean,reflect:!0},fire:{type:Boolean,reflect:!0},demo:{type:Boolean},reduceMotion:{type:Boolean}}}static get styles(){let e=[];return super.styles&&(e=super.styles),[...e,t`:host{display:inline-block;margin:0;padding:0;text-align:initial;position:relative}img,svg{position:absolute;margin:0;padding:0;text-align:initial}div{width:113px;transition:.3s ease-in-out background-color;margin:0;padding:0;text-align:initial}.wrapper{height:142px}#demo{height:30px;padding-top:10px;text-align:center;background-color:#000;color:#fff;font-weight:700}`]}firstUpdated(e){super.firstUpdated&&super.firstUpdated(e),null===this.seed&&(this.seed=Math.random().toString(36).substring(2,12))}render(){const e=new URL(`./lib/accessories/${this.accessories}.svg`,import.meta.url).href,t=new URL(`./lib/base/${this.base}${this.leg}.svg`,import.meta.url).href,r=new URL(`./lib/base/${this.leg}.svg`,import.meta.url).href,a=new URL(`./lib/face/${this.face}.svg`,import.meta.url).href,l=new URL(`./lib/faceItem/${this.faceItem}.svg`,import.meta.url).href,o=new URL(`./lib/hair/${this.hair}.svg`,import.meta.url).href,n=new URL(`./lib/pants/${this.pants}.svg`,import.meta.url).href,h=new URL(`./lib/shirt/${this.shirt}.svg`,import.meta.url).href,c=new URL(`./lib/skin/${this.skin}.svg`,import.meta.url).href,d=new URL(`./lib/hat/${this.hat}.svg`,import.meta.url).href,g=new URL(`./lib/hatColor/${this.hatColor}.svg`,import.meta.url).href,p=new URL("./lib/base/fire.svg",import.meta.url).href;return i` <div class="wrapper"> <img src="${c}" alt="" loading="lazy" decoding="async"> ${1===this.base?i`<img src="${o}" alt="" loading="lazy" decoding="async">`:""} <img src="${a}" alt="" loading="lazy" decoding="async"> <img src="${l}" alt="" loading="lazy" decoding="async"> <img src="${h}" alt="" loading="lazy" decoding="async"> <img src="${n}" alt="" loading="lazy" decoding="async"> <img src="${e}" alt="" loading="lazy" decoding="async"> <img src="${t}" alt="" loading="lazy" decoding="async">${""!==this.leg?i`<img src="${r}" alt="" loading="lazy" decoding="async">`:""} <img src="${g}" alt="" loading="lazy" decoding="async"> ${"none"!==this.hat?i`<img src="${d}" alt="" loading="lazy" decoding="async">`:""} ${this.fire?i`<img src="${p}" alt="" loading="lazy" decoding="async">`:""} ${this.circle?s`
<svg width="113" height="142" viewBox="0 0 113 142" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_143_641)">
    <path id="cardcircle" fill-rule="evenodd" clip-rule="evenodd" d="M122 -1H-10V142H122V-1ZM8 32V17H13V12H18V7H33V2H77.9835L78 7H93V12H98V17H103V32H108V77H103V92H98V97H93V102H78V107.5L33 107V102H18V97H13V92H8V77H3V32H8Z" fill="transparent"/>
    <path d="M7.5 31.5V16.5H12.5V11.5H17.5V6.5H32.5V1.5H78.5V6.5H93.5V11.5H98.5V16.5H103.5V31.5H108.5V77.5H103.5V92.5H98.5V97.5H93.5V102.5H78.5V107.5H32.5V102.5H17.5V97.5H12.5V92.5H7.5V77.5H2.5V31.5H7.5Z" stroke="black"/>
  </g>
  <defs>
    <clipPath id="clip0_143_641">
    <rect width="113" height="142" fill="white"/>
    </clipPath>
  </defs>
</svg>`:""} </div> ${this.demo?i`<div id="demo">${this.seed}</div>`:""} <style>#cardcircle{fill:var(--simple-colors-default-theme-${this.accentColor}-8,var(--simple-colors-default-theme-accent-8,#ff0))}</style> `}updated(e){super.updated&&super.updated(e),e.forEach(((e,t)=>{if("fire"===t&&(this.speed=this[t]?100:500),"demo"===t&&(this[t]?this.shadowRoot.querySelector(".wrapper").addEventListener("click",(e=>{this.seed=Math.random().toString(36).substring(2,12)})):this.shadowRoot.querySelector(".wrapper").removeEventListener("click",(e=>{e.target.seed=Math.random().toString(36).substring(2,12)}))),"leg"!==t&&"walking"!==t||!this.walking||this.reduceMotion||(clearTimeout(this.__walkingTimeout),this.__walkingTimeout=setTimeout((()=>{switch(this.leg){case"":this.leg="R";break;case"R":this.leg="L";break;case"L":this.leg=""}}),this.speed)),"seed"===t&&this[t]){let e=54;for(let t=0;t<this.seed.length;t++)t<64&&(e*=this.seed.charCodeAt(t));const i={zpg:"7501517984378880262144",edtechjoker:"712215550",btopro:"7122155501"};e=BigInt(e).toString(),Object.keys(i).includes(this[t])&&(e=i[this[t]]);const s={accessories:9,base:1,leg:["","R","L"],face:5,faceItem:9,hair:9,pants:9,shirt:9,skin:9,hatColor:9};Object.keys(s).forEach(((t,i)=>{void 0!==e[i]?this[t]="leg"===t?s[t][Math.floor(Math.random()*Object.keys(s[t]).length)]:"base"===t?e[i]>=5?1:0:"face"===t&&e[i]>5?1:e[i]:this[t]=0}))}}))}static get haxProperties(){return new URL(`./lib/${this.tag}.haxProperties.json`,import.meta.url).href}}customElements.define(r.tag,r);export{r as RpgCharacter};
